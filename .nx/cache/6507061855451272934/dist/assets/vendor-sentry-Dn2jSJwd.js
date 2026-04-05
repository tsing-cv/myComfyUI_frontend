import { r as __name } from "./rolldown-runtime-DBfy44LZ.js";
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD$3 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/worldwide.js
/** Internal global with common properties and Sentry extensions  */
/** Get's the global object for the current JavaScript runtime */
var GLOBAL_OBJ = globalThis;
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/version.js
var SDK_VERSION = "10.32.1";
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/carrier.js
/**
* An object that contains globally accessible properties and maintains a scope stack.
* @hidden
*/
/**
* Returns the global shim registry.
*
* FIXME: This function is problematic, because despite always returning a valid Carrier,
* it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
* at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
**/
function getMainCarrier() {
	getSentryCarrier(GLOBAL_OBJ);
	return GLOBAL_OBJ;
}
/** Will either get the existing sentry carrier, or create a new one. */
function getSentryCarrier(carrier) {
	const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
	__SENTRY__.version = __SENTRY__.version || "10.32.1";
	return __SENTRY__[SDK_VERSION] = __SENTRY__["10.32.1"] || {};
}
/**
* Returns a global singleton contained in the global `__SENTRY__[]` object.
*
* If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
* function and added to the `__SENTRY__` object.
*
* @param name name of the global singleton on __SENTRY__
* @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
* @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
* @returns the singleton
*/
function getGlobalSingleton(name, creator, obj = GLOBAL_OBJ) {
	const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
	const carrier = __SENTRY__[SDK_VERSION] = __SENTRY__["10.32.1"] || {};
	return carrier[name] || (carrier[name] = creator());
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/debug-logger.js
var CONSOLE_LEVELS = [
	"debug",
	"info",
	"warn",
	"error",
	"log",
	"assert",
	"trace"
];
/** Prefix for logging strings */
var PREFIX = "Sentry Logger ";
/** This may be mutated by the console instrumentation. */
var originalConsoleMethods = {};
/**
* Temporarily disable sentry console instrumentations.
*
* @param callback The function to run against the original `console` messages
* @returns The results of the callback
*/
function consoleSandbox(callback) {
	if (!("console" in GLOBAL_OBJ)) return callback();
	const console = GLOBAL_OBJ.console;
	const wrappedFuncs = {};
	const wrappedLevels = Object.keys(originalConsoleMethods);
	wrappedLevels.forEach((level) => {
		const originalConsoleMethod = originalConsoleMethods[level];
		wrappedFuncs[level] = console[level];
		console[level] = originalConsoleMethod;
	});
	try {
		return callback();
	} finally {
		wrappedLevels.forEach((level) => {
			console[level] = wrappedFuncs[level];
		});
	}
}
function enable() {
	_getLoggerSettings().enabled = true;
}
function disable() {
	_getLoggerSettings().enabled = false;
}
function isEnabled() {
	return _getLoggerSettings().enabled;
}
function log(...args) {
	_maybeLog("log", ...args);
}
function warn(...args) {
	_maybeLog("warn", ...args);
}
function error(...args) {
	_maybeLog("error", ...args);
}
function _maybeLog(level, ...args) {
	if (!DEBUG_BUILD$3) return;
	if (isEnabled()) consoleSandbox(() => {
		GLOBAL_OBJ.console[level](`${PREFIX}[${level}]:`, ...args);
	});
}
function _getLoggerSettings() {
	if (!DEBUG_BUILD$3) return { enabled: false };
	return getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
}
/**
* This is a logger singleton which either logs things or no-ops if logging is not enabled.
*/
var debug = {
	enable,
	disable,
	isEnabled,
	log,
	warn,
	error
};
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/stacktrace.js
var STACKTRACE_FRAME_LIMIT = 50;
var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
/**
* Creates a stack parser with the supplied line parsers
*
* StackFrames are returned in the correct order for Sentry Exception
* frames and with Sentry SDK internal frames removed from the top and bottom
*
*/
function createStackParser(...parsers) {
	const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
	return (stack, skipFirstLines = 0, framesToPop = 0) => {
		const frames = [];
		const lines = stack.split("\n");
		for (let i = skipFirstLines; i < lines.length; i++) {
			let line = lines[i];
			if (line.length > 1024) line = line.slice(0, 1024);
			const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
			if (cleanedLine.match(/\S*Error: /)) continue;
			for (const parser of sortedParsers) {
				const frame = parser(cleanedLine);
				if (frame) {
					frames.push(frame);
					break;
				}
			}
			if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) break;
		}
		return stripSentryFramesAndReverse(frames.slice(framesToPop));
	};
}
/**
* Gets a stack parser implementation from Options.stackParser
* @see Options
*
* If options contains an array of line parsers, it is converted into a parser
*/
function stackParserFromStackParserOptions(stackParser) {
	if (Array.isArray(stackParser)) return createStackParser(...stackParser);
	return stackParser;
}
/**
* Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
* Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
* function that caused the crash is the last frame in the array.
* @hidden
*/
function stripSentryFramesAndReverse(stack) {
	if (!stack.length) return [];
	const localStack = Array.from(stack);
	if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) localStack.pop();
	localStack.reverse();
	if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
		localStack.pop();
		if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) localStack.pop();
	}
	return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
		...frame,
		filename: frame.filename || getLastStackFrame(localStack).filename,
		function: frame.function || "?"
	}));
}
function getLastStackFrame(arr) {
	return arr[arr.length - 1] || {};
}
var defaultFunctionName = "<anonymous>";
/**
* Safely extract function name from itself
*/
function getFunctionName(fn) {
	try {
		if (!fn || typeof fn !== "function") return defaultFunctionName;
		return fn.name || defaultFunctionName;
	} catch {
		return defaultFunctionName;
	}
}
/**
* Get's stack frames from an event without needing to check for undefined properties.
*/
function getFramesFromEvent(event) {
	const exception = event.exception;
	if (exception) {
		const frames = [];
		try {
			exception.values.forEach((value) => {
				if (value.stacktrace.frames) frames.push(...value.stacktrace.frames);
			});
			return frames;
		} catch {
			return;
		}
	}
}
/**
* Get the internal name of an internal Vue value, to represent it in a stacktrace.
*
* @param value The value to get the internal name of.
*/
function getVueInternalName(value) {
	return "__v_isVNode" in value && value.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/instrument/handlers.js
var handlers = {};
var instrumented = {};
/** Add a handler function. */
function addHandler(type, handler) {
	handlers[type] = handlers[type] || [];
	handlers[type].push(handler);
}
/** Maybe run an instrumentation function, unless it was already called. */
function maybeInstrument(type, instrumentFn) {
	if (!instrumented[type]) {
		instrumented[type] = true;
		try {
			instrumentFn();
		} catch (e) {
			DEBUG_BUILD$3 && debug.error(`Error while instrumenting ${type}`, e);
		}
	}
}
/** Trigger handlers for a given instrumentation type. */
function triggerHandlers(type, data) {
	const typeHandlers = type && handlers[type];
	if (!typeHandlers) return;
	for (const handler of typeHandlers) try {
		handler(data);
	} catch (e) {
		DEBUG_BUILD$3 && debug.error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${getFunctionName(handler)}\nError:`, e);
	}
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/instrument/globalError.js
var _oldOnErrorHandler = null;
/**
* Add an instrumentation handler for when an error is captured by the global error handler.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addGlobalErrorInstrumentationHandler(handler) {
	const type = "error";
	addHandler(type, handler);
	maybeInstrument(type, instrumentError);
}
function instrumentError() {
	_oldOnErrorHandler = GLOBAL_OBJ.onerror;
	GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
		triggerHandlers("error", {
			column,
			error,
			line,
			msg,
			url
		});
		if (_oldOnErrorHandler) return _oldOnErrorHandler.apply(this, arguments);
		return false;
	};
	GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/instrument/globalUnhandledRejection.js
var _oldOnUnhandledRejectionHandler = null;
/**
* Add an instrumentation handler for when an unhandled promise rejection is captured.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
	const type = "unhandledrejection";
	addHandler(type, handler);
	maybeInstrument(type, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
	_oldOnUnhandledRejectionHandler = GLOBAL_OBJ.onunhandledrejection;
	GLOBAL_OBJ.onunhandledrejection = function(e) {
		triggerHandlers("unhandledrejection", e);
		if (_oldOnUnhandledRejectionHandler) return _oldOnUnhandledRejectionHandler.apply(this, arguments);
		return true;
	};
	GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/is.js
var objectToString = Object.prototype.toString;
/**
* Checks whether given value's type is one of a few Error or Error-like
* {@link isError}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isError(wat) {
	switch (objectToString.call(wat)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
		case "[object WebAssembly.Exception]": return true;
		default: return isInstanceOf(wat, Error);
	}
}
/**
* Checks whether given value is an instance of the given built-in class.
*
* @param wat The value to be checked
* @param className
* @returns A boolean representing the result.
*/
function isBuiltin(wat, className) {
	return objectToString.call(wat) === `[object ${className}]`;
}
/**
* Checks whether given value's type is ErrorEvent
* {@link isErrorEvent}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isErrorEvent$1(wat) {
	return isBuiltin(wat, "ErrorEvent");
}
__name(isErrorEvent$1, "isErrorEvent");
/**
* Checks whether given value's type is DOMError
* {@link isDOMError}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isDOMError(wat) {
	return isBuiltin(wat, "DOMError");
}
/**
* Checks whether given value's type is DOMException
* {@link isDOMException}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isDOMException(wat) {
	return isBuiltin(wat, "DOMException");
}
/**
* Checks whether given value's type is a string
* {@link isString}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isString(wat) {
	return isBuiltin(wat, "String");
}
/**
* Checks whether given string is parameterized
* {@link isParameterizedString}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isParameterizedString(wat) {
	return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
/**
* Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
* {@link isPrimitive}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isPrimitive(wat) {
	return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
/**
* Checks whether given value's type is an object literal, or a class instance.
* {@link isPlainObject}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isPlainObject(wat) {
	return isBuiltin(wat, "Object");
}
/**
* Checks whether given value's type is an Event instance
* {@link isEvent}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isEvent(wat) {
	return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
/**
* Checks whether given value's type is an Element instance
* {@link isElement}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isElement(wat) {
	return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
/**
* Checks whether given value's type is an regexp
* {@link isRegExp}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isRegExp(wat) {
	return isBuiltin(wat, "RegExp");
}
/**
* Checks whether given value has a then function.
* @param wat A value to be checked.
*/
function isThenable(wat) {
	return Boolean(wat?.then && typeof wat.then === "function");
}
/**
* Checks whether given value's type is a SyntheticEvent
* {@link isSyntheticEvent}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isSyntheticEvent(wat) {
	return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
/**
* Checks whether given value's type is an instance of provided constructor.
* {@link isInstanceOf}.
*
* @param wat A value to be checked.
* @param base A constructor to be used in a check.
* @returns A boolean representing the result.
*/
function isInstanceOf(wat, base) {
	try {
		return wat instanceof base;
	} catch {
		return false;
	}
}
/**
* Checks whether given value's type is a Vue ViewModel or a VNode.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isVueViewModel(wat) {
	return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue || wat.__v_isVNode));
}
/**
* Checks whether the given parameter is a Standard Web API Request instance.
*
* Returns false if Request is not available in the current runtime.
*/
function isRequest(request) {
	return typeof Request !== "undefined" && isInstanceOf(request, Request);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/browser.js
var WINDOW$3 = GLOBAL_OBJ;
var DEFAULT_MAX_STRING_LENGTH = 80;
/**
* Given a child DOM element, returns a query-selector statement describing that
* and its ancestors
* e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
* @returns generated DOM path
*/
function htmlTreeAsString(elem, options = {}) {
	if (!elem) return "<unknown>";
	try {
		let currentElem = elem;
		const MAX_TRAVERSE_HEIGHT = 5;
		const out = [];
		let height = 0;
		let len = 0;
		const separator = " > ";
		const sepLength = 3;
		let nextStr;
		const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
		const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
		while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
			nextStr = _htmlElementAsString(currentElem, keyAttrs);
			if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) break;
			out.push(nextStr);
			len += nextStr.length;
			currentElem = currentElem.parentNode;
		}
		return out.reverse().join(separator);
	} catch {
		return "<unknown>";
	}
}
/**
* Returns a simple, query-selector representation of a DOM element
* e.g. [HTMLElement] => input#foo.btn[name=baz]
* @returns generated DOM path
*/
function _htmlElementAsString(el, keyAttrs) {
	const elem = el;
	const out = [];
	if (!elem?.tagName) return "";
	if (WINDOW$3.HTMLElement) {
		if (elem instanceof HTMLElement && elem.dataset) {
			if (elem.dataset["sentryComponent"]) return elem.dataset["sentryComponent"];
			if (elem.dataset["sentryElement"]) return elem.dataset["sentryElement"];
		}
	}
	out.push(elem.tagName.toLowerCase());
	const keyAttrPairs = keyAttrs?.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
	if (keyAttrPairs?.length) keyAttrPairs.forEach((keyAttrPair) => {
		out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
	});
	else {
		if (elem.id) out.push(`#${elem.id}`);
		const className = elem.className;
		if (className && isString(className)) {
			const classes = className.split(/\s+/);
			for (const c of classes) out.push(`.${c}`);
		}
	}
	for (const k of [
		"aria-label",
		"type",
		"name",
		"title",
		"alt"
	]) {
		const attr = elem.getAttribute(k);
		if (attr) out.push(`[${k}="${attr}"]`);
	}
	return out.join("");
}
/**
* A safe form of location.href
*/
function getLocationHref() {
	try {
		return WINDOW$3.document.location.href;
	} catch {
		return "";
	}
}
/**
* Given a DOM element, traverses up the tree until it finds the first ancestor node
* that has the `data-sentry-component` or `data-sentry-element` attribute with `data-sentry-component` taking
* precedence. This attribute is added at build-time by projects that have the component name annotation plugin installed.
*
* @returns a string representation of the component for the provided DOM element, or `null` if not found
*/
function getComponentName(elem) {
	if (!WINDOW$3.HTMLElement) return null;
	let currentElem = elem;
	const MAX_TRAVERSE_HEIGHT = 5;
	for (let i = 0; i < MAX_TRAVERSE_HEIGHT; i++) {
		if (!currentElem) return null;
		if (currentElem instanceof HTMLElement) {
			if (currentElem.dataset["sentryComponent"]) return currentElem.dataset["sentryComponent"];
			if (currentElem.dataset["sentryElement"]) return currentElem.dataset["sentryElement"];
		}
		currentElem = currentElem.parentNode;
	}
	return null;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/object.js
/**
* Replace a method in an object with a wrapped version of itself.
*
* If the method on the passed object is not a function, the wrapper will not be applied.
*
* @param source An object that contains a method to be wrapped.
* @param name The name of the method to be wrapped.
* @param replacementFactory A higher-order function that takes the original version of the given method and returns a
* wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
* preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
* args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
* @returns void
*/
function fill(source, name, replacementFactory) {
	if (!(name in source)) return;
	const original = source[name];
	if (typeof original !== "function") return;
	const wrapped = replacementFactory(original);
	if (typeof wrapped === "function") markFunctionWrapped(wrapped, original);
	try {
		source[name] = wrapped;
	} catch {
		DEBUG_BUILD$3 && debug.log(`Failed to replace method "${name}" in object`, source);
	}
}
/**
* Defines a non-enumerable property on the given object.
*
* @param obj The object on which to set the property
* @param name The name of the property to be set
* @param value The value to which to set the property
*/
function addNonEnumerableProperty(obj, name, value) {
	try {
		Object.defineProperty(obj, name, {
			value,
			writable: true,
			configurable: true
		});
	} catch {
		DEBUG_BUILD$3 && debug.log(`Failed to add non-enumerable property "${name}" to object`, obj);
	}
}
/**
* Remembers the original function on the wrapped function and
* patches up the prototype.
*
* @param wrapped the wrapper function
* @param original the original function that gets wrapped
*/
function markFunctionWrapped(wrapped, original) {
	try {
		wrapped.prototype = original.prototype = original.prototype || {};
		addNonEnumerableProperty(wrapped, "__sentry_original__", original);
	} catch {}
}
/**
* This extracts the original function if available.  See
* `markFunctionWrapped` for more information.
*
* @param func the function to unwrap
* @returns the unwrapped version of the function if available.
*/
function getOriginalFunction(func) {
	return func.__sentry_original__;
}
/**
* Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
* non-enumerable properties attached.
*
* @param value Initial source that we have to transform in order for it to be usable by the serializer
* @returns An Event or Error turned into an object - or the value argument itself, when value is neither an Event nor
*  an Error.
*/
function convertToPlainObject(value) {
	if (isError(value)) return {
		message: value.message,
		name: value.name,
		stack: value.stack,
		...getOwnProperties(value)
	};
	else if (isEvent(value)) {
		const newObj = {
			type: value.type,
			target: serializeEventTarget(value.target),
			currentTarget: serializeEventTarget(value.currentTarget),
			...getOwnProperties(value)
		};
		if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) newObj.detail = value.detail;
		return newObj;
	} else return value;
}
/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
	try {
		return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
	} catch {
		return "<unknown>";
	}
}
/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
	if (typeof obj === "object" && obj !== null) {
		const extractedProps = {};
		for (const property in obj) if (Object.prototype.hasOwnProperty.call(obj, property)) extractedProps[property] = obj[property];
		return extractedProps;
	} else return {};
}
/**
* Given any captured exception, extract its keys and create a sorted
* and truncated list that will be used inside the event message.
* eg. `Non-error exception captured with keys: foo, bar, baz`
*/
function extractExceptionKeysForMessage(exception) {
	const keys = Object.keys(convertToPlainObject(exception));
	keys.sort();
	return !keys[0] ? "[object has no keys]" : keys.join(", ");
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/string.js
/**
* Truncates given string to the maximum characters count
*
* @param str An object that contains serializable values
* @param max Maximum number of characters in truncated string (0 = unlimited)
* @returns string Encoded
*/
function truncate(str, max = 0) {
	if (typeof str !== "string" || max === 0) return str;
	return str.length <= max ? str : `${str.slice(0, max)}...`;
}
/**
* Join values in array
* @param input array of values to be joined together
* @param delimiter string to be placed in-between values
* @returns Joined values
*/
function safeJoin(input, delimiter) {
	if (!Array.isArray(input)) return "";
	const output = [];
	for (let i = 0; i < input.length; i++) {
		const value = input[i];
		try {
			if (isVueViewModel(value)) output.push(getVueInternalName(value));
			else output.push(String(value));
		} catch {
			output.push("[value cannot be serialized]");
		}
	}
	return output.join(delimiter);
}
/**
* Checks if the given value matches a regex or string
*
* @param value The string to test
* @param pattern Either a regex or a string against which `value` will be matched
* @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
* `pattern` if it contains `pattern`. Only applies to string-type patterns.
*/
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
	if (!isString(value)) return false;
	if (isRegExp(pattern)) return pattern.test(value);
	if (isString(pattern)) return requireExactStringMatch ? value === pattern : value.includes(pattern);
	return false;
}
/**
* Test the given string against an array of strings and regexes. By default, string matching is done on a
* substring-inclusion basis rather than a strict equality basis
*
* @param testString The string to test
* @param patterns The patterns against which to test the string
* @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
* count. If false, `testString` will match a string pattern if it contains that pattern.
* @returns
*/
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
	return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/misc.js
function getCrypto() {
	const gbl = GLOBAL_OBJ;
	return gbl.crypto || gbl.msCrypto;
}
var emptyUuid;
function getRandomByte() {
	return Math.random() * 16;
}
/**
* UUID4 generator
* @param crypto Object that provides the crypto API.
* @returns string Generated UUID4.
*/
function uuid4(crypto = getCrypto()) {
	try {
		if (crypto?.randomUUID) return crypto.randomUUID().replace(/-/g, "");
	} catch {}
	if (!emptyUuid) emptyUuid = "10000000100040008000100000000000";
	return emptyUuid.replace(/[018]/g, (c) => (c ^ (getRandomByte() & 15) >> c / 4).toString(16));
}
function getFirstException(event) {
	return event.exception?.values?.[0];
}
/**
* Extracts either message or type+value from an event that can be used for user-facing logs
* @returns event's description
*/
function getEventDescription(event) {
	const { message, event_id: eventId } = event;
	if (message) return message;
	const firstException = getFirstException(event);
	if (firstException) {
		if (firstException.type && firstException.value) return `${firstException.type}: ${firstException.value}`;
		return firstException.type || firstException.value || eventId || "<unknown>";
	}
	return eventId || "<unknown>";
}
/**
* Adds exception values, type and value to an synthetic Exception.
* @param event The event to modify.
* @param value Value of the exception.
* @param type Type of the exception.
* @hidden
*/
function addExceptionTypeValue(event, value, type) {
	const exception = event.exception = event.exception || {};
	const values = exception.values = exception.values || [];
	const firstException = values[0] = values[0] || {};
	if (!firstException.value) firstException.value = value || "";
	if (!firstException.type) firstException.type = type || "Error";
}
/**
* Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
*
* @param event The event to modify.
* @param newMechanism Mechanism data to add to the event.
* @hidden
*/
function addExceptionMechanism(event, newMechanism) {
	const firstException = getFirstException(event);
	if (!firstException) return;
	const defaultMechanism = {
		type: "generic",
		handled: true
	};
	const currentMechanism = firstException.mechanism;
	firstException.mechanism = {
		...defaultMechanism,
		...currentMechanism,
		...newMechanism
	};
	if (newMechanism && "data" in newMechanism) {
		const mergedData = {
			...currentMechanism?.data,
			...newMechanism.data
		};
		firstException.mechanism.data = mergedData;
	}
}
/**
* Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
* in question), and marks it captured if not.
*
* This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
* record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
* that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
* the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
* caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
* function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
* see it.
*
* Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
* them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
* object wrapper forms so that this check will always work. However, because we need to flag the exact object which
* will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
* must be done before the exception captured.
*
* @param A thrown exception to check or flag as having been seen
* @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
*/
function checkOrSetAlreadyCaught(exception) {
	if (isAlreadyCaptured(exception)) return true;
	try {
		addNonEnumerableProperty(exception, "__sentry_captured__", true);
	} catch {}
	return false;
}
function isAlreadyCaptured(exception) {
	try {
		return exception.__sentry_captured__;
	} catch {}
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/time.js
var ONE_SECOND_IN_MS = 1e3;
/**
* A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
* for accessing a high-resolution monotonic clock.
*/
/**
* Returns a timestamp in seconds since the UNIX epoch using the Date API.
*/
function dateTimestampInSeconds() {
	return Date.now() / ONE_SECOND_IN_MS;
}
/**
* Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
* support the API.
*
* Wrapping the native API works around differences in behavior from different browsers.
*/
function createUnixTimestampInSecondsFunc() {
	const { performance } = GLOBAL_OBJ;
	if (!performance?.now || !performance.timeOrigin) return dateTimestampInSeconds;
	const timeOrigin = performance.timeOrigin;
	return () => {
		return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
	};
}
var _cachedTimestampInSeconds;
/**
* Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
* availability of the Performance API.
*
* BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
* asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
* skew can grow to arbitrary amounts like days, weeks or months.
* See https://github.com/getsentry/sentry-javascript/issues/2590.
*/
function timestampInSeconds() {
	return (_cachedTimestampInSeconds ?? (_cachedTimestampInSeconds = createUnixTimestampInSecondsFunc()))();
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/session.js
/**
* Creates a new `Session` object by setting certain default parameters. If optional @param context
* is passed, the passed properties are applied to the session object.
*
* @param context (optional) additional properties to be applied to the returned session object
*
* @returns a new `Session` object
*/
function makeSession(context) {
	const startingTime = timestampInSeconds();
	const session = {
		sid: uuid4(),
		init: true,
		timestamp: startingTime,
		started: startingTime,
		duration: 0,
		status: "ok",
		errors: 0,
		ignoreDuration: false,
		toJSON: () => sessionToJSON(session)
	};
	if (context) updateSession(session, context);
	return session;
}
/**
* Updates a session object with the properties passed in the context.
*
* Note that this function mutates the passed object and returns void.
* (Had to do this instead of returning a new and updated session because closing and sending a session
* makes an update to the session after it was passed to the sending logic.
* @see Client.captureSession )
*
* @param session the `Session` to update
* @param context the `SessionContext` holding the properties that should be updated in @param session
*/
function updateSession(session, context = {}) {
	if (context.user) {
		if (!session.ipAddress && context.user.ip_address) session.ipAddress = context.user.ip_address;
		if (!session.did && !context.did) session.did = context.user.id || context.user.email || context.user.username;
	}
	session.timestamp = context.timestamp || timestampInSeconds();
	if (context.abnormal_mechanism) session.abnormal_mechanism = context.abnormal_mechanism;
	if (context.ignoreDuration) session.ignoreDuration = context.ignoreDuration;
	if (context.sid) session.sid = context.sid.length === 32 ? context.sid : uuid4();
	if (context.init !== void 0) session.init = context.init;
	if (!session.did && context.did) session.did = `${context.did}`;
	if (typeof context.started === "number") session.started = context.started;
	if (session.ignoreDuration) session.duration = void 0;
	else if (typeof context.duration === "number") session.duration = context.duration;
	else {
		const duration = session.timestamp - session.started;
		session.duration = duration >= 0 ? duration : 0;
	}
	if (context.release) session.release = context.release;
	if (context.environment) session.environment = context.environment;
	if (!session.ipAddress && context.ipAddress) session.ipAddress = context.ipAddress;
	if (!session.userAgent && context.userAgent) session.userAgent = context.userAgent;
	if (typeof context.errors === "number") session.errors = context.errors;
	if (context.status) session.status = context.status;
}
/**
* Closes a session by setting its status and updating the session object with it.
* Internally calls `updateSession` to update the passed session object.
*
* Note that this function mutates the passed session (@see updateSession for explanation).
*
* @param session the `Session` object to be closed
* @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
*               this function will keep the previously set status, unless it was `'ok'` in which case
*               it is changed to `'exited'`.
*/
function closeSession(session, status) {
	let context = {};
	if (status) context = { status };
	else if (session.status === "ok") context = { status: "exited" };
	updateSession(session, context);
}
/**
* Serializes a passed session object to a JSON object with a slightly different structure.
* This is necessary because the Sentry backend requires a slightly different schema of a session
* than the one the JS SDKs use internally.
*
* @param session the session to be converted
*
* @returns a JSON object of the passed session
*/
function sessionToJSON(session) {
	return {
		sid: `${session.sid}`,
		init: session.init,
		started: (/* @__PURE__ */ new Date(session.started * 1e3)).toISOString(),
		timestamp: (/* @__PURE__ */ new Date(session.timestamp * 1e3)).toISOString(),
		status: session.status,
		errors: session.errors,
		did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
		duration: session.duration,
		abnormal_mechanism: session.abnormal_mechanism,
		attrs: {
			release: session.release,
			environment: session.environment,
			ip_address: session.ipAddress,
			user_agent: session.userAgent
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/merge.js
/**
* Shallow merge two objects.
* Does not mutate the passed in objects.
* Undefined/empty values in the merge object will overwrite existing values.
*
* By default, this merges 2 levels deep.
*/
function merge(initialObj, mergeObj, levels = 2) {
	if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) return mergeObj;
	if (initialObj && Object.keys(mergeObj).length === 0) return initialObj;
	const output = { ...initialObj };
	for (const key in mergeObj) if (Object.prototype.hasOwnProperty.call(mergeObj, key)) output[key] = merge(output[key], mergeObj[key], levels - 1);
	return output;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/propagationContext.js
/**
* Generate a random, valid trace ID.
*/
function generateTraceId() {
	return uuid4();
}
/**
* Generate a random, valid span ID.
*/
function generateSpanId() {
	return uuid4().substring(16);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var SCOPE_SPAN_FIELD = "_sentrySpan";
/**
* Set the active span for a given scope.
* NOTE: This should NOT be used directly, but is only used internally by the trace methods.
*/
function _setSpanForScope(scope, span) {
	if (span) addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, span);
	else delete scope[SCOPE_SPAN_FIELD];
}
/**
* Get the active span for a given scope.
* NOTE: This should NOT be used directly, but is only used internally by the trace methods.
*/
function _getSpanForScope(scope) {
	return scope[SCOPE_SPAN_FIELD];
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/scope.js
/**
* Default value for maximum number of breadcrumbs added to an event.
*/
var DEFAULT_MAX_BREADCRUMBS = 100;
/**
* A context to be used for capturing an event.
* This can either be a Scope, or a partial ScopeContext,
* or a callback that receives the current scope and returns a new scope to use.
*/
/**
* Holds additional event information.
*/
var Scope = class Scope {
	/** Flag if notifying is happening. */
	/** Callback for client to receive scope changes. */
	/** Callback list that will be called during event processing. */
	/** Array of breadcrumbs. */
	/** User */
	/** Tags */
	/** Attributes */
	/** Extra */
	/** Contexts */
	/** Attachments */
	/** Propagation Context for distributed tracing */
	/**
	* A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
	* sent to Sentry
	*/
	/** Fingerprint */
	/** Severity */
	/**
	* Transaction Name
	*
	* IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
	* It's purpose is to assign a transaction to the scope that's added to non-transaction events.
	*/
	/** Session */
	/** The client on this scope */
	/** Contains the last event id of a captured event.  */
	constructor() {
		this._notifyingListeners = false;
		this._scopeListeners = [];
		this._eventProcessors = [];
		this._breadcrumbs = [];
		this._attachments = [];
		this._user = {};
		this._tags = {};
		this._attributes = {};
		this._extra = {};
		this._contexts = {};
		this._sdkProcessingMetadata = {};
		this._propagationContext = {
			traceId: generateTraceId(),
			sampleRand: Math.random()
		};
	}
	/**
	* Clone all data from this scope into a new scope.
	*/
	clone() {
		const newScope = new Scope();
		newScope._breadcrumbs = [...this._breadcrumbs];
		newScope._tags = { ...this._tags };
		newScope._attributes = { ...this._attributes };
		newScope._extra = { ...this._extra };
		newScope._contexts = { ...this._contexts };
		if (this._contexts.flags) newScope._contexts.flags = { values: [...this._contexts.flags.values] };
		newScope._user = this._user;
		newScope._level = this._level;
		newScope._session = this._session;
		newScope._transactionName = this._transactionName;
		newScope._fingerprint = this._fingerprint;
		newScope._eventProcessors = [...this._eventProcessors];
		newScope._attachments = [...this._attachments];
		newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
		newScope._propagationContext = { ...this._propagationContext };
		newScope._client = this._client;
		newScope._lastEventId = this._lastEventId;
		_setSpanForScope(newScope, _getSpanForScope(this));
		return newScope;
	}
	/**
	* Update the client assigned to this scope.
	* Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
	* as well as manually created scopes.
	*/
	setClient(client) {
		this._client = client;
	}
	/**
	* Set the ID of the last captured error event.
	* This is generally only captured on the isolation scope.
	*/
	setLastEventId(lastEventId) {
		this._lastEventId = lastEventId;
	}
	/**
	* Get the client assigned to this scope.
	*/
	getClient() {
		return this._client;
	}
	/**
	* Get the ID of the last captured error event.
	* This is generally only available on the isolation scope.
	*/
	lastEventId() {
		return this._lastEventId;
	}
	/**
	* @inheritDoc
	*/
	addScopeListener(callback) {
		this._scopeListeners.push(callback);
	}
	/**
	* Add an event processor that will be called before an event is sent.
	*/
	addEventProcessor(callback) {
		this._eventProcessors.push(callback);
		return this;
	}
	/**
	* Set the user for this scope.
	* Set to `null` to unset the user.
	*/
	setUser(user) {
		this._user = user || {
			email: void 0,
			id: void 0,
			ip_address: void 0,
			username: void 0
		};
		if (this._session) updateSession(this._session, { user });
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Get the user from this scope.
	*/
	getUser() {
		return this._user;
	}
	/**
	* Set an object that will be merged into existing tags on the scope,
	* and will be sent as tags data with the event.
	*/
	setTags(tags) {
		this._tags = {
			...this._tags,
			...tags
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Set a single tag that will be sent as tags data with the event.
	*/
	setTag(key, value) {
		return this.setTags({ [key]: value });
	}
	/**
	* Sets attributes onto the scope.
	*
	* These attributes are currently only applied to logs.
	* In the future, they will also be applied to metrics and spans.
	*
	* Important: For now, only strings, numbers and boolean attributes are supported, despite types allowing for
	* more complex attribute types. We'll add this support in the future but already specify the wider type to
	* avoid a breaking change in the future.
	*
	* @param newAttributes - The attributes to set on the scope. You can either pass in key-value pairs, or
	* an object with a `value` and an optional `unit` (if applicable to your attribute).
	*
	* @example
	* ```typescript
	* scope.setAttributes({
	*   is_admin: true,
	*   payment_selection: 'credit_card',
	*   render_duration: { value: 'render_duration', unit: 'ms' },
	* });
	* ```
	*/
	setAttributes(newAttributes) {
		this._attributes = {
			...this._attributes,
			...newAttributes
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets an attribute onto the scope.
	*
	* These attributes are currently only applied to logs.
	* In the future, they will also be applied to metrics and spans.
	*
	* Important: For now, only strings, numbers and boolean attributes are supported, despite types allowing for
	* more complex attribute types. We'll add this support in the future but already specify the wider type to
	* avoid a breaking change in the future.
	*
	* @param key - The attribute key.
	* @param value - the attribute value. You can either pass in a raw value, or an attribute
	* object with a `value` and an optional `unit` (if applicable to your attribute).
	*
	* @example
	* ```typescript
	* scope.setAttribute('is_admin', true);
	* scope.setAttribute('render_duration', { value: 'render_duration', unit: 'ms' });
	* ```
	*/
	setAttribute(key, value) {
		return this.setAttributes({ [key]: value });
	}
	/**
	* Removes the attribute with the given key from the scope.
	*
	* @param key - The attribute key.
	*
	* @example
	* ```typescript
	* scope.removeAttribute('is_admin');
	* ```
	*/
	removeAttribute(key) {
		if (key in this._attributes) {
			delete this._attributes[key];
			this._notifyScopeListeners();
		}
		return this;
	}
	/**
	* Set an object that will be merged into existing extra on the scope,
	* and will be sent as extra data with the event.
	*/
	setExtras(extras) {
		this._extra = {
			...this._extra,
			...extras
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Set a single key:value extra entry that will be sent as extra data with the event.
	*/
	setExtra(key, extra) {
		this._extra = {
			...this._extra,
			[key]: extra
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets the fingerprint on the scope to send with the events.
	* @param {string[]} fingerprint Fingerprint to group events in Sentry.
	*/
	setFingerprint(fingerprint) {
		this._fingerprint = fingerprint;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets the level on the scope for future events.
	*/
	setLevel(level) {
		this._level = level;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets the transaction name on the scope so that the name of e.g. taken server route or
	* the page location is attached to future events.
	*
	* IMPORTANT: Calling this function does NOT change the name of the currently active
	* root span. If you want to change the name of the active root span, use
	* `Sentry.updateSpanName(rootSpan, 'new name')` instead.
	*
	* By default, the SDK updates the scope's transaction name automatically on sensible
	* occasions, such as a page navigation or when handling a new request on the server.
	*/
	setTransactionName(name) {
		this._transactionName = name;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets context data with the given name.
	* Data passed as context will be normalized. You can also pass `null` to unset the context.
	* Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
	*/
	setContext(key, context) {
		if (context === null) delete this._contexts[key];
		else this._contexts[key] = context;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Set the session for the scope.
	*/
	setSession(session) {
		if (!session) delete this._session;
		else this._session = session;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Get the session from the scope.
	*/
	getSession() {
		return this._session;
	}
	/**
	* Updates the scope with provided data. Can work in three variations:
	* - plain object containing updatable attributes
	* - Scope instance that'll extract the attributes from
	* - callback function that'll receive the current scope as an argument and allow for modifications
	*/
	update(captureContext) {
		if (!captureContext) return this;
		const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
		const { tags, attributes, extra, user, contexts, level, fingerprint = [], propagationContext } = (scopeToMerge instanceof Scope ? scopeToMerge.getScopeData() : isPlainObject(scopeToMerge) ? captureContext : void 0) || {};
		this._tags = {
			...this._tags,
			...tags
		};
		this._attributes = {
			...this._attributes,
			...attributes
		};
		this._extra = {
			...this._extra,
			...extra
		};
		this._contexts = {
			...this._contexts,
			...contexts
		};
		if (user && Object.keys(user).length) this._user = user;
		if (level) this._level = level;
		if (fingerprint.length) this._fingerprint = fingerprint;
		if (propagationContext) this._propagationContext = propagationContext;
		return this;
	}
	/**
	* Clears the current scope and resets its properties.
	* Note: The client will not be cleared.
	*/
	clear() {
		this._breadcrumbs = [];
		this._tags = {};
		this._attributes = {};
		this._extra = {};
		this._user = {};
		this._contexts = {};
		this._level = void 0;
		this._transactionName = void 0;
		this._fingerprint = void 0;
		this._session = void 0;
		_setSpanForScope(this, void 0);
		this._attachments = [];
		this.setPropagationContext({
			traceId: generateTraceId(),
			sampleRand: Math.random()
		});
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Adds a breadcrumb to the scope.
	* By default, the last 100 breadcrumbs are kept.
	*/
	addBreadcrumb(breadcrumb, maxBreadcrumbs) {
		const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
		if (maxCrumbs <= 0) return this;
		const mergedBreadcrumb = {
			timestamp: dateTimestampInSeconds(),
			...breadcrumb,
			message: breadcrumb.message ? truncate(breadcrumb.message, 2048) : breadcrumb.message
		};
		this._breadcrumbs.push(mergedBreadcrumb);
		if (this._breadcrumbs.length > maxCrumbs) {
			this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
			this._client?.recordDroppedEvent("buffer_overflow", "log_item");
		}
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Get the last breadcrumb of the scope.
	*/
	getLastBreadcrumb() {
		return this._breadcrumbs[this._breadcrumbs.length - 1];
	}
	/**
	* Clear all breadcrumbs from the scope.
	*/
	clearBreadcrumbs() {
		this._breadcrumbs = [];
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Add an attachment to the scope.
	*/
	addAttachment(attachment) {
		this._attachments.push(attachment);
		return this;
	}
	/**
	* Clear all attachments from the scope.
	*/
	clearAttachments() {
		this._attachments = [];
		return this;
	}
	/**
	* Get the data of this scope, which should be applied to an event during processing.
	*/
	getScopeData() {
		return {
			breadcrumbs: this._breadcrumbs,
			attachments: this._attachments,
			contexts: this._contexts,
			tags: this._tags,
			attributes: this._attributes,
			extra: this._extra,
			user: this._user,
			level: this._level,
			fingerprint: this._fingerprint || [],
			eventProcessors: this._eventProcessors,
			propagationContext: this._propagationContext,
			sdkProcessingMetadata: this._sdkProcessingMetadata,
			transactionName: this._transactionName,
			span: _getSpanForScope(this)
		};
	}
	/**
	* Add data which will be accessible during event processing but won't get sent to Sentry.
	*/
	setSDKProcessingMetadata(newData) {
		this._sdkProcessingMetadata = merge(this._sdkProcessingMetadata, newData, 2);
		return this;
	}
	/**
	* Add propagation context to the scope, used for distributed tracing
	*/
	setPropagationContext(context) {
		this._propagationContext = context;
		return this;
	}
	/**
	* Get propagation context from the scope, used for distributed tracing
	*/
	getPropagationContext() {
		return this._propagationContext;
	}
	/**
	* Capture an exception for this scope.
	*
	* @returns {string} The id of the captured Sentry event.
	*/
	captureException(exception, hint) {
		const eventId = hint?.event_id || uuid4();
		if (!this._client) {
			DEBUG_BUILD$3 && debug.warn("No client configured on scope - will not capture exception!");
			return eventId;
		}
		const syntheticException = /* @__PURE__ */ new Error("Sentry syntheticException");
		this._client.captureException(exception, {
			originalException: exception,
			syntheticException,
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* Capture a message for this scope.
	*
	* @returns {string} The id of the captured message.
	*/
	captureMessage(message, level, hint) {
		const eventId = hint?.event_id || uuid4();
		if (!this._client) {
			DEBUG_BUILD$3 && debug.warn("No client configured on scope - will not capture message!");
			return eventId;
		}
		const syntheticException = hint?.syntheticException ?? new Error(message);
		this._client.captureMessage(message, level, {
			originalException: message,
			syntheticException,
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* Capture a Sentry event for this scope.
	*
	* @returns {string} The id of the captured event.
	*/
	captureEvent(event, hint) {
		const eventId = hint?.event_id || uuid4();
		if (!this._client) {
			DEBUG_BUILD$3 && debug.warn("No client configured on scope - will not capture event!");
			return eventId;
		}
		this._client.captureEvent(event, {
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* This will be called on every set call.
	*/
	_notifyScopeListeners() {
		if (!this._notifyingListeners) {
			this._notifyingListeners = true;
			this._scopeListeners.forEach((callback) => {
				callback(this);
			});
			this._notifyingListeners = false;
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/defaultScopes.js
/** Get the default current scope. */
function getDefaultCurrentScope() {
	return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
/** Get the default isolation scope. */
function getDefaultIsolationScope() {
	return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
/**
* This is an object that holds a stack of scopes.
*/
var AsyncContextStack = class {
	constructor(scope, isolationScope) {
		let assignedScope;
		if (!scope) assignedScope = new Scope();
		else assignedScope = scope;
		let assignedIsolationScope;
		if (!isolationScope) assignedIsolationScope = new Scope();
		else assignedIsolationScope = isolationScope;
		this._stack = [{ scope: assignedScope }];
		this._isolationScope = assignedIsolationScope;
	}
	/**
	* Fork a scope for the stack.
	*/
	withScope(callback) {
		const scope = this._pushScope();
		let maybePromiseResult;
		try {
			maybePromiseResult = callback(scope);
		} catch (e) {
			this._popScope();
			throw e;
		}
		if (isThenable(maybePromiseResult)) return maybePromiseResult.then((res) => {
			this._popScope();
			return res;
		}, (e) => {
			this._popScope();
			throw e;
		});
		this._popScope();
		return maybePromiseResult;
	}
	/**
	* Get the client of the stack.
	*/
	getClient() {
		return this.getStackTop().client;
	}
	/**
	* Returns the scope of the top stack.
	*/
	getScope() {
		return this.getStackTop().scope;
	}
	/**
	* Get the isolation scope for the stack.
	*/
	getIsolationScope() {
		return this._isolationScope;
	}
	/**
	* Returns the topmost scope layer in the order domain > local > process.
	*/
	getStackTop() {
		return this._stack[this._stack.length - 1];
	}
	/**
	* Push a scope to the stack.
	*/
	_pushScope() {
		const scope = this.getScope().clone();
		this._stack.push({
			client: this.getClient(),
			scope
		});
		return scope;
	}
	/**
	* Pop a scope from the stack.
	*/
	_popScope() {
		if (this._stack.length <= 1) return false;
		return !!this._stack.pop();
	}
};
/**
* Get the global async context stack.
* This will be removed during the v8 cycle and is only here to make migration easier.
*/
function getAsyncContextStack() {
	const sentry = getSentryCarrier(getMainCarrier());
	return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
}
function withScope$1(callback) {
	return getAsyncContextStack().withScope(callback);
}
__name(withScope$1, "withScope");
function withSetScope(scope, callback) {
	const stack = getAsyncContextStack();
	return stack.withScope(() => {
		stack.getStackTop().scope = scope;
		return callback(scope);
	});
}
function withIsolationScope(callback) {
	return getAsyncContextStack().withScope(() => {
		return callback(getAsyncContextStack().getIsolationScope());
	});
}
/**
* Get the stack-based async context strategy.
*/
function getStackAsyncContextStrategy() {
	return {
		withIsolationScope,
		withScope: withScope$1,
		withSetScope,
		withSetIsolationScope: (_isolationScope, callback) => {
			return withIsolationScope(callback);
		},
		getCurrentScope: () => getAsyncContextStack().getScope(),
		getIsolationScope: () => getAsyncContextStack().getIsolationScope()
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/asyncContext/index.js
/**
* Get the current async context strategy.
* If none has been setup, the default will be used.
*/
function getAsyncContextStrategy(carrier) {
	const sentry = getSentryCarrier(carrier);
	if (sentry.acs) return sentry.acs;
	return getStackAsyncContextStrategy();
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/currentScopes.js
/**
* Get the currently active scope.
*/
function getCurrentScope() {
	return getAsyncContextStrategy(getMainCarrier()).getCurrentScope();
}
/**
* Get the currently active isolation scope.
* The isolation scope is active for the current execution context.
*/
function getIsolationScope() {
	return getAsyncContextStrategy(getMainCarrier()).getIsolationScope();
}
/**
* Get the global scope.
* This scope is applied to _all_ events.
*/
function getGlobalScope() {
	return getGlobalSingleton("globalScope", () => new Scope());
}
/**
* Creates a new scope with and executes the given operation within.
* The scope is automatically removed once the operation
* finishes or throws.
*/
/**
* Either creates a new active scope, or sets the given scope as active scope in the given callback.
*/
function withScope(...rest) {
	const acs = getAsyncContextStrategy(getMainCarrier());
	if (rest.length === 2) {
		const [scope, callback] = rest;
		if (!scope) return acs.withScope(callback);
		return acs.withSetScope(scope, callback);
	}
	return acs.withScope(rest[0]);
}
/**
* Get the currently active client.
*/
function getClient() {
	return getCurrentScope().getClient();
}
/**
* Get a trace context for the given scope.
*/
function getTraceContextFromScope(scope) {
	const { traceId, parentSpanId, propagationSpanId } = scope.getPropagationContext();
	const traceContext = {
		trace_id: traceId,
		span_id: propagationSpanId || generateSpanId()
	};
	if (parentSpanId) traceContext.parent_span_id = parentSpanId;
	return traceContext;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/semanticAttributes.js
/**
* Use this attribute to represent the source of a span.
* Should be one of: custom, url, route, view, component, task, unknown
*
*/
var SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
/**
* Attributes that holds the sample rate that was locally applied to a span.
* If this attribute is not defined, it means that the span inherited a sampling decision.
*
* NOTE: Is only defined on root spans.
*/
var SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
/**
* Use this attribute to represent the operation of a span.
*/
var SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
/**
* Use this attribute to represent the origin of a span.
*/
var SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
/** The unit of a measurement, which may be stored as a TimedEvent. */
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
/** The value of a measurement, which may be stored as a TimedEvent. */
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
/**
* A custom span name set by users guaranteed to be taken over any automatically
* inferred name. This attribute is removed before the span is sent.
*
* @internal only meant for internal SDK usage
* @hidden
*/
var SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";
/**
* The id of the profile that this span occurred in.
*/
var SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id";
var SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time";
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/utils.js
var SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
var ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
/** Wrap a scope with a WeakRef if available, falling back to a direct scope. */
function wrapScopeWithWeakRef(scope) {
	try {
		const WeakRefClass = GLOBAL_OBJ.WeakRef;
		if (typeof WeakRefClass === "function") return new WeakRefClass(scope);
	} catch {}
	return scope;
}
/** Try to unwrap a scope from a potential WeakRef wrapper. */
function unwrapScopeFromWeakRef(scopeRef) {
	if (!scopeRef) return;
	if (typeof scopeRef === "object" && "deref" in scopeRef && typeof scopeRef.deref === "function") try {
		return scopeRef.deref();
	} catch {
		return;
	}
	return scopeRef;
}
/** Store the scope & isolation scope for a span, which can the be used when it is finished. */
function setCapturedScopesOnSpan(span, scope, isolationScope) {
	if (span) {
		addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, wrapScopeWithWeakRef(isolationScope));
		addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
	}
}
/**
* Grabs the scope and isolation scope off a span that were active when the span was started.
* If WeakRef was used and scopes have been garbage collected, returns undefined for those scopes.
*/
function getCapturedScopesOnSpan(span) {
	const spanWithScopes = span;
	return {
		scope: spanWithScopes[SCOPE_ON_START_SPAN_FIELD],
		isolationScope: unwrapScopeFromWeakRef(spanWithScopes[ISOLATION_SCOPE_ON_START_SPAN_FIELD])
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/baggage.js
var SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
/**
* Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
* from it.
*
* @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
* @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
*/
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
	const baggageObject = parseBaggageHeader(baggageHeader);
	if (!baggageObject) return;
	const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
		if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
			const nonPrefixedKey = key.slice(7);
			acc[nonPrefixedKey] = value;
		}
		return acc;
	}, {});
	if (Object.keys(dynamicSamplingContext).length > 0) return dynamicSamplingContext;
	else return;
}
/**
* Take a baggage header and parse it into an object.
*/
function parseBaggageHeader(baggageHeader) {
	if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) return;
	if (Array.isArray(baggageHeader)) return baggageHeader.reduce((acc, curr) => {
		const currBaggageObject = baggageHeaderToObject(curr);
		Object.entries(currBaggageObject).forEach(([key, value]) => {
			acc[key] = value;
		});
		return acc;
	}, {});
	return baggageHeaderToObject(baggageHeader);
}
/**
* Will parse a baggage header, which is a simple key-value map, into a flat object.
*
* @param baggageHeader The baggage header to parse.
* @returns a flat object containing all the key-value pairs from `baggageHeader`.
*/
function baggageHeaderToObject(baggageHeader) {
	return baggageHeader.split(",").map((baggageEntry) => {
		const eqIdx = baggageEntry.indexOf("=");
		if (eqIdx === -1) return [];
		return [baggageEntry.slice(0, eqIdx), baggageEntry.slice(eqIdx + 1)].map((keyOrValue) => {
			try {
				return decodeURIComponent(keyOrValue.trim());
			} catch {
				return;
			}
		});
	}).reduce((acc, [key, value]) => {
		if (key && value) acc[key] = value;
		return acc;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/dsn.js
/** Regular expression used to extract org ID from a DSN host. */
var ORG_ID_REGEX = /^o(\d+)\./;
/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
	return protocol === "http" || protocol === "https";
}
/**
* Renders the string representation of this Dsn.
*
* By default, this will render the public representation without the password
* component. To get the deprecated private representation, set `withPassword`
* to true.
*
* @param withPassword When set to true, the password will be included.
*/
function dsnToString(dsn, withPassword = false) {
	const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
	return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
/**
* Parses a Dsn from a given string.
*
* @param str A Dsn as string
* @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
*/
function dsnFromString(str) {
	const match = DSN_REGEX.exec(str);
	if (!match) {
		consoleSandbox(() => {
			console.error(`Invalid Sentry Dsn: ${str}`);
		});
		return;
	}
	const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
	let path = "";
	let projectId = lastPath;
	const split = projectId.split("/");
	if (split.length > 1) {
		path = split.slice(0, -1).join("/");
		projectId = split.pop();
	}
	if (projectId) {
		const projectMatch = projectId.match(/^\d+/);
		if (projectMatch) projectId = projectMatch[0];
	}
	return dsnFromComponents({
		host,
		pass,
		path,
		projectId,
		port,
		protocol,
		publicKey
	});
}
function dsnFromComponents(components) {
	return {
		protocol: components.protocol,
		publicKey: components.publicKey || "",
		pass: components.pass || "",
		host: components.host,
		port: components.port || "",
		path: components.path || "",
		projectId: components.projectId
	};
}
function validateDsn(dsn) {
	if (!DEBUG_BUILD$3) return true;
	const { port, projectId, protocol } = dsn;
	if ([
		"protocol",
		"publicKey",
		"host",
		"projectId"
	].find((component) => {
		if (!dsn[component]) {
			debug.error(`Invalid Sentry Dsn: ${component} missing`);
			return true;
		}
		return false;
	})) return false;
	if (!projectId.match(/^\d+$/)) {
		debug.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
		return false;
	}
	if (!isValidProtocol(protocol)) {
		debug.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
		return false;
	}
	if (port && isNaN(parseInt(port, 10))) {
		debug.error(`Invalid Sentry Dsn: Invalid port ${port}`);
		return false;
	}
	return true;
}
/**
* Extract the org ID from a DSN host.
*
* @param host The host from a DSN
* @returns The org ID if found, undefined otherwise
*/
function extractOrgIdFromDsnHost(host) {
	return host.match(ORG_ID_REGEX)?.[1];
}
/**
*  Returns the organization ID of the client.
*
*  The organization ID is extracted from the DSN. If the client options include a `orgId`, this will always take precedence.
*/
function extractOrgIdFromClient(client) {
	const options = client.getOptions();
	const { host } = client.getDsn() || {};
	let org_id;
	if (options.orgId) org_id = String(options.orgId);
	else if (host) org_id = extractOrgIdFromDsnHost(host);
	return org_id;
}
/**
* Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
* @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
*/
function makeDsn(from) {
	const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
	if (!components || !validateDsn(components)) return;
	return components;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
/**
* Parse a sample rate from a given value.
* This will either return a boolean or number sample rate, if the sample rate is valid (between 0 and 1).
* If a string is passed, we try to convert it to a number.
*
* Any invalid sample rate will return `undefined`.
*/
function parseSampleRate(sampleRate) {
	if (typeof sampleRate === "boolean") return Number(sampleRate);
	const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
	if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) return;
	return rate;
}
var hasShownSpanDropWarning = false;
/**
* Convert a span to a trace context, which can be sent as the `trace` context in an event.
* By default, this will only include trace_id, span_id & parent_span_id.
* If `includeAllData` is true, it will also include data, op, status & origin.
*/
function spanToTransactionTraceContext(span) {
	const { spanId: span_id, traceId: trace_id } = span.spanContext();
	const { data, op, parent_span_id, status, origin, links } = spanToJSON(span);
	return {
		parent_span_id,
		span_id,
		trace_id,
		data,
		op,
		status,
		origin,
		links
	};
}
/**
* Convert a span to a trace context, which can be sent as the `trace` context in a non-transaction event.
*/
function spanToTraceContext(span) {
	const { spanId, traceId: trace_id, isRemote } = span.spanContext();
	const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
	const scope = getCapturedScopesOnSpan(span).scope;
	return {
		parent_span_id,
		span_id: isRemote ? scope?.getPropagationContext().propagationSpanId || generateSpanId() : spanId,
		trace_id
	};
}
/**
*  Converts the span links array to a flattened version to be sent within an envelope.
*
*  If the links array is empty, it returns `undefined` so the empty value can be dropped before it's sent.
*/
function convertSpanLinksForEnvelope(links) {
	if (links && links.length > 0) return links.map(({ context: { spanId, traceId, traceFlags, ...restContext }, attributes }) => ({
		span_id: spanId,
		trace_id: traceId,
		sampled: traceFlags === 1,
		attributes,
		...restContext
	}));
	else return;
}
/**
* Convert a span time input into a timestamp in seconds.
*/
function spanTimeInputToSeconds(input) {
	if (typeof input === "number") return ensureTimestampInSeconds(input);
	if (Array.isArray(input)) return input[0] + input[1] / 1e9;
	if (input instanceof Date) return ensureTimestampInSeconds(input.getTime());
	return timestampInSeconds();
}
/**
* Converts a timestamp to second, if it was in milliseconds, or keeps it as second.
*/
function ensureTimestampInSeconds(timestamp) {
	return timestamp > 9999999999 ? timestamp / 1e3 : timestamp;
}
/**
* Convert a span to a JSON representation.
*/
function spanToJSON(span) {
	if (spanIsSentrySpan(span)) return span.getSpanJSON();
	const { spanId: span_id, traceId: trace_id } = span.spanContext();
	if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
		const { attributes, startTime, name, endTime, status, links } = span;
		return {
			span_id,
			trace_id,
			data: attributes,
			description: name,
			parent_span_id: "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? span.parentSpanContext?.spanId : void 0,
			start_timestamp: spanTimeInputToSeconds(startTime),
			timestamp: spanTimeInputToSeconds(endTime) || void 0,
			status: getStatusMessage(status),
			op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
			origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
			links: convertSpanLinksForEnvelope(links)
		};
	}
	return {
		span_id,
		trace_id,
		start_timestamp: 0,
		data: {}
	};
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
	const castSpan = span;
	return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
/** Exported only for tests. */
/**
* Sadly, due to circular dependency checks we cannot actually import the Span class here and check for instanceof.
* :( So instead we approximate this by checking if it has the `getSpanJSON` method.
*/
function spanIsSentrySpan(span) {
	return typeof span.getSpanJSON === "function";
}
/**
* Returns true if a span is sampled.
* In most cases, you should just use `span.isRecording()` instead.
* However, this has a slightly different semantic, as it also returns false if the span is finished.
* So in the case where this distinction is important, use this method.
*/
function spanIsSampled(span) {
	const { traceFlags } = span.spanContext();
	return traceFlags === 1;
}
/** Get the status message to use for a JSON representation of a span. */
function getStatusMessage(status) {
	if (!status || status.code === 0) return;
	if (status.code === 1) return "ok";
	return status.message || "internal_error";
}
var CHILD_SPANS_FIELD = "_sentryChildSpans";
var ROOT_SPAN_FIELD = "_sentryRootSpan";
/**
* Adds an opaque child span reference to a span.
*/
function addChildSpanToSpan(span, childSpan) {
	addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, span[ROOT_SPAN_FIELD] || span);
	if (span[CHILD_SPANS_FIELD]) span[CHILD_SPANS_FIELD].add(childSpan);
	else addNonEnumerableProperty(span, CHILD_SPANS_FIELD, new Set([childSpan]));
}
/**
* Returns an array of the given span and all of its descendants.
*/
function getSpanDescendants(span) {
	const resultSet = /* @__PURE__ */ new Set();
	function addSpanChildren(span) {
		if (resultSet.has(span)) return;
		else if (spanIsSampled(span)) {
			resultSet.add(span);
			const childSpans = span[CHILD_SPANS_FIELD] ? Array.from(span[CHILD_SPANS_FIELD]) : [];
			for (const childSpan of childSpans) addSpanChildren(childSpan);
		}
	}
	addSpanChildren(span);
	return Array.from(resultSet);
}
/**
* Returns the root span of a given span.
*/
function getRootSpan(span) {
	return span[ROOT_SPAN_FIELD] || span;
}
/**
* Returns the currently active span.
*/
function getActiveSpan() {
	const acs = getAsyncContextStrategy(getMainCarrier());
	if (acs.getActiveSpan) return acs.getActiveSpan();
	return _getSpanForScope(getCurrentScope());
}
/**
* Logs a warning once if `beforeSendSpan` is used to drop spans.
*/
function showSpanDropWarning() {
	if (!hasShownSpanDropWarning) {
		consoleSandbox(() => {
			console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
		});
		hasShownSpanDropWarning = true;
	}
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
/**
* Determines if span recording is currently enabled.
*
* Spans are recorded when at least one of `tracesSampleRate` and `tracesSampler`
* is defined in the SDK config. This function does not make any assumption about
* sampling decisions, it only checks if the SDK is configured to record spans.
*
* Important: This function only determines if span recording is enabled. Trace
* continuation and propagation is separately controlled and not covered by this function.
* If this function returns `false`, traces can still be propagated (which is what
* we refer to by "Tracing without Performance")
* @see https://develop.sentry.dev/sdk/telemetry/traces/tracing-without-performance/
*
* @param maybeOptions An SDK options object to be passed to this function.
* If this option is not provided, the function will use the current client's options.
*/
function hasSpansEnabled(maybeOptions) {
	if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return false;
	const options = maybeOptions || getClient()?.getOptions();
	return !!options && (options.tracesSampleRate != null || !!options.tracesSampler);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/should-ignore-span.js
function logIgnoredSpan(droppedSpan) {
	debug.log(`Ignoring span ${droppedSpan.op} - ${droppedSpan.description} because it matches \`ignoreSpans\`.`);
}
/**
* Check if a span should be ignored based on the ignoreSpans configuration.
*/
function shouldIgnoreSpan(span, ignoreSpans) {
	if (!ignoreSpans?.length || !span.description) return false;
	for (const pattern of ignoreSpans) {
		if (isStringOrRegExp(pattern)) {
			if (isMatchingPattern(span.description, pattern)) {
				DEBUG_BUILD$3 && logIgnoredSpan(span);
				return true;
			}
			continue;
		}
		if (!pattern.name && !pattern.op) continue;
		const nameMatches = pattern.name ? isMatchingPattern(span.description, pattern.name) : true;
		const opMatches = pattern.op ? span.op && isMatchingPattern(span.op, pattern.op) : true;
		if (nameMatches && opMatches) {
			DEBUG_BUILD$3 && logIgnoredSpan(span);
			return true;
		}
	}
	return false;
}
/**
* Takes a list of spans, and a span that was dropped, and re-parents the child spans of the dropped span to the parent of the dropped span, if possible.
* This mutates the spans array in place!
*/
function reparentChildSpans(spans, dropSpan) {
	const droppedSpanParentId = dropSpan.parent_span_id;
	const droppedSpanId = dropSpan.span_id;
	if (!droppedSpanParentId) return;
	for (const span of spans) if (span.parent_span_id === droppedSpanId) span.parent_span_id = droppedSpanParentId;
}
function isStringOrRegExp(value) {
	return typeof value === "string" || value instanceof RegExp;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/constants.js
var DEFAULT_ENVIRONMENT = "production";
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
/**
* If you change this value, also update the terser plugin config to
* avoid minification of the object property!
*/
var FROZEN_DSC_FIELD = "_frozenDsc";
/**
* Freeze the given DSC on the given span.
*/
function freezeDscOnSpan(span, dsc) {
	addNonEnumerableProperty(span, FROZEN_DSC_FIELD, dsc);
}
/**
* Creates a dynamic sampling context from a client.
*
* Dispatches the `createDsc` lifecycle hook as a side effect.
*/
function getDynamicSamplingContextFromClient(trace_id, client) {
	const options = client.getOptions();
	const { publicKey: public_key } = client.getDsn() || {};
	const dsc = {
		environment: options.environment || "production",
		release: options.release,
		public_key,
		trace_id,
		org_id: extractOrgIdFromClient(client)
	};
	client.emit("createDsc", dsc);
	return dsc;
}
/**
* Get the dynamic sampling context for the currently active scopes.
*/
function getDynamicSamplingContextFromScope(client, scope) {
	const propagationContext = scope.getPropagationContext();
	return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
/**
* Creates a dynamic sampling context from a span (and client and scope)
*
* @param span the span from which a few values like the root span name and sample rate are extracted.
*
* @returns a dynamic sampling context
*/
function getDynamicSamplingContextFromSpan(span) {
	const client = getClient();
	if (!client) return {};
	const rootSpan = getRootSpan(span);
	const rootSpanJson = spanToJSON(rootSpan);
	const rootSpanAttributes = rootSpanJson.data;
	const traceState = rootSpan.spanContext().traceState;
	const rootSpanSampleRate = traceState?.get("sentry.sample_rate") ?? rootSpanAttributes["sentry.sample_rate"] ?? rootSpanAttributes["sentry.previous_trace_sample_rate"];
	function applyLocalSampleRateToDsc(dsc) {
		if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") dsc.sample_rate = `${rootSpanSampleRate}`;
		return dsc;
	}
	const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
	if (frozenDsc) return applyLocalSampleRateToDsc(frozenDsc);
	const traceStateDsc = traceState?.get("sentry.dsc");
	const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
	if (dscOnTraceState) return applyLocalSampleRateToDsc(dscOnTraceState);
	const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
	const source = rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
	const name = rootSpanJson.description;
	if (source !== "url" && name) dsc.transaction = name;
	if (hasSpansEnabled()) {
		dsc.sampled = String(spanIsSampled(rootSpan));
		dsc.sample_rand = traceState?.get("sentry.sample_rand") ?? getCapturedScopesOnSpan(rootSpan).scope?.getPropagationContext().sampleRand.toString();
	}
	applyLocalSampleRateToDsc(dsc);
	client.emit("createDsc", dsc, rootSpan);
	return dsc;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js
/**
* A Sentry Span that is non-recording, meaning it will not be sent to Sentry.
*/
var SentryNonRecordingSpan = class {
	constructor(spanContext = {}) {
		this._traceId = spanContext.traceId || generateTraceId();
		this._spanId = spanContext.spanId || generateSpanId();
	}
	/** @inheritdoc */
	spanContext() {
		return {
			spanId: this._spanId,
			traceId: this._traceId,
			traceFlags: 0
		};
	}
	/** @inheritdoc */
	end(_timestamp) {}
	/** @inheritdoc */
	setAttribute(_key, _value) {
		return this;
	}
	/** @inheritdoc */
	setAttributes(_values) {
		return this;
	}
	/** @inheritdoc */
	setStatus(_status) {
		return this;
	}
	/** @inheritdoc */
	updateName(_name) {
		return this;
	}
	/** @inheritdoc */
	isRecording() {
		return false;
	}
	/** @inheritdoc */
	addEvent(_name, _attributesOrStartTime, _startTime) {
		return this;
	}
	/** @inheritDoc */
	addLink(_link) {
		return this;
	}
	/** @inheritDoc */
	addLinks(_links) {
		return this;
	}
	/**
	* This should generally not be used,
	* but we need it for being compliant with the OTEL Span interface.
	*
	* @hidden
	* @internal
	*/
	recordException(_exception, _time) {}
};
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/normalize.js
/**
* Recursively normalizes the given object.
*
* - Creates a copy to prevent original input mutation
* - Skips non-enumerable properties
* - When stringifying, calls `toJSON` if implemented
* - Removes circular references
* - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
* - Translates known global objects/classes to a string representations
* - Takes care of `Error` object serialization
* - Optionally limits depth of final output
* - Optionally limits number of properties/elements included in any single object/array
*
* @param input The object to be normalized.
* @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
* @param maxProperties The max number of elements or properties to be included in any single array or
* object in the normalized output.
* @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
*/
function normalize(input, depth = 100, maxProperties = Infinity) {
	try {
		return visit("", input, depth, maxProperties);
	} catch (err) {
		return { ERROR: `**non-serializable** (${err})` };
	}
}
/** JSDoc */
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
	const normalized = normalize(object, depth);
	if (jsonSize(normalized) > maxSize) return normalizeToSize(object, depth - 1, maxSize);
	return normalized;
}
/**
* Visits a node to perform normalization on it
*
* @param key The key corresponding to the given node
* @param value The node to be visited
* @param depth Optional number indicating the maximum recursion depth
* @param maxProperties Optional maximum number of properties/elements included in any single object/array
* @param memo Optional Memo class handling decycling
*/
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
	const [memoize, unmemoize] = memo;
	if (value == null || ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) return value;
	const stringified = stringifyValue(key, value);
	if (!stringified.startsWith("[object ")) return stringified;
	if (value["__sentry_skip_normalization__"]) return value;
	const remainingDepth = typeof value["__sentry_override_normalization_depth__"] === "number" ? value["__sentry_override_normalization_depth__"] : depth;
	if (remainingDepth === 0) return stringified.replace("object ", "");
	if (memoize(value)) return "[Circular ~]";
	const valueWithToJSON = value;
	if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") try {
		return visit("", valueWithToJSON.toJSON(), remainingDepth - 1, maxProperties, memo);
	} catch {}
	const normalized = Array.isArray(value) ? [] : {};
	let numAdded = 0;
	const visitable = convertToPlainObject(value);
	for (const visitKey in visitable) {
		if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) continue;
		if (numAdded >= maxProperties) {
			normalized[visitKey] = "[MaxProperties ~]";
			break;
		}
		const visitValue = visitable[visitKey];
		normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
		numAdded++;
	}
	unmemoize(value);
	return normalized;
}
/**
* Stringify the given value. Handles various known special values and types.
*
* Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
* the number 1231 into "[Object Number]", nor on `null`, as it will throw.
*
* @param value The value to stringify
* @returns A stringified representation of the given value
*/
function stringifyValue(key, value) {
	try {
		if (key === "domain" && value && typeof value === "object" && value._events) return "[Domain]";
		if (key === "domainEmitter") return "[DomainEmitter]";
		if (typeof global !== "undefined" && value === global) return "[Global]";
		if (typeof window !== "undefined" && value === window) return "[Window]";
		if (typeof document !== "undefined" && value === document) return "[Document]";
		if (isVueViewModel(value)) return getVueInternalName(value);
		if (isSyntheticEvent(value)) return "[SyntheticEvent]";
		if (typeof value === "number" && !Number.isFinite(value)) return `[${value}]`;
		if (typeof value === "function") return `[Function: ${getFunctionName(value)}]`;
		if (typeof value === "symbol") return `[${String(value)}]`;
		if (typeof value === "bigint") return `[BigInt: ${String(value)}]`;
		const objName = getConstructorName(value);
		if (/^HTML(\w*)Element$/.test(objName)) return `[HTMLElement: ${objName}]`;
		return `[object ${objName}]`;
	} catch (err) {
		return `**non-serializable** (${err})`;
	}
}
function getConstructorName(value) {
	const prototype = Object.getPrototypeOf(value);
	return prototype?.constructor ? prototype.constructor.name : "null prototype";
}
/** Calculates bytes size of input string */
function utf8Length(value) {
	return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
	return utf8Length(JSON.stringify(value));
}
/**
* Helper to decycle json objects
*/
function memoBuilder() {
	const inner = /* @__PURE__ */ new WeakSet();
	function memoize(obj) {
		if (inner.has(obj)) return true;
		inner.add(obj);
		return false;
	}
	function unmemoize(obj) {
		inner.delete(obj);
	}
	return [memoize, unmemoize];
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/envelope.js
/**
* Creates an envelope.
* Make sure to always explicitly provide the generic to this function
* so that the envelope types resolve correctly.
*/
function createEnvelope(headers, items = []) {
	return [headers, items];
}
/**
* Add an item to an envelope.
* Make sure to always explicitly provide the generic to this function
* so that the envelope types resolve correctly.
*/
function addItemToEnvelope(envelope, newItem) {
	const [headers, items] = envelope;
	return [headers, [...items, newItem]];
}
/**
* Convenience function to loop through the items and item types of an envelope.
* (This function was mostly created because working with envelope types is painful at the moment)
*
* If the callback returns true, the rest of the items will be skipped.
*/
function forEachEnvelopeItem(envelope, callback) {
	const envelopeItems = envelope[1];
	for (const envelopeItem of envelopeItems) {
		const envelopeItemType = envelopeItem[0].type;
		if (callback(envelopeItem, envelopeItemType)) return true;
	}
	return false;
}
/**
* Encode a string to UTF8 array.
*/
function encodeUTF8(input) {
	const carrier = getSentryCarrier(GLOBAL_OBJ);
	return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}
/**
* Serializes an envelope.
*/
function serializeEnvelope(envelope) {
	const [envHeaders, items] = envelope;
	let parts = JSON.stringify(envHeaders);
	function append(next) {
		if (typeof parts === "string") parts = typeof next === "string" ? parts + next : [encodeUTF8(parts), next];
		else parts.push(typeof next === "string" ? encodeUTF8(next) : next);
	}
	for (const item of items) {
		const [itemHeaders, payload] = item;
		append(`\n${JSON.stringify(itemHeaders)}\n`);
		if (typeof payload === "string" || payload instanceof Uint8Array) append(payload);
		else {
			let stringifiedPayload;
			try {
				stringifiedPayload = JSON.stringify(payload);
			} catch {
				stringifiedPayload = JSON.stringify(normalize(payload));
			}
			append(stringifiedPayload);
		}
	}
	return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
	const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
	const merged = new Uint8Array(totalLength);
	let offset = 0;
	for (const buffer of buffers) {
		merged.set(buffer, offset);
		offset += buffer.length;
	}
	return merged;
}
/**
* Creates envelope item for a single span
*/
function createSpanEnvelopeItem(spanJson) {
	return [{ type: "span" }, spanJson];
}
/**
* Creates attachment envelope items
*/
function createAttachmentEnvelopeItem(attachment) {
	const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
	return [{
		type: "attachment",
		length: buffer.length,
		filename: attachment.filename,
		content_type: attachment.contentType,
		attachment_type: attachment.attachmentType
	}, buffer];
}
var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
	session: "session",
	sessions: "session",
	attachment: "attachment",
	transaction: "transaction",
	event: "error",
	client_report: "internal",
	user_report: "default",
	profile: "profile",
	profile_chunk: "profile",
	replay_event: "replay",
	replay_recording: "replay",
	check_in: "monitor",
	feedback: "feedback",
	span: "span",
	raw_security: "security",
	log: "log_item",
	metric: "metric",
	trace_metric: "metric"
};
/**
* Maps the type of an envelope item to a data category.
*/
function envelopeItemTypeToDataCategory(type) {
	return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}
/** Extracts the minimal SDK info from the metadata or an events */
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
	if (!metadataOrEvent?.sdk) return;
	const { name, version } = metadataOrEvent.sdk;
	return {
		name,
		version
	};
}
/**
* Creates event envelope headers, based on event, sdk info and tunnel
* Note: This function was extracted from the core package to make it available in Replay
*/
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
	const dynamicSamplingContext = event.sdkProcessingMetadata?.dynamicSamplingContext;
	return {
		event_id: event.event_id,
		sent_at: (/* @__PURE__ */ new Date()).toISOString(),
		...sdkInfo && { sdk: sdkInfo },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) },
		...dynamicSamplingContext && { trace: dynamicSamplingContext }
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/envelope.js
/**
* Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
* Merge with existing data if any.
*
* @internal, exported only for testing
**/
function _enhanceEventWithSdkInfo(event, newSdkInfo) {
	if (!newSdkInfo) return event;
	const eventSdkInfo = event.sdk || {};
	event.sdk = {
		...eventSdkInfo,
		name: eventSdkInfo.name || newSdkInfo.name,
		version: eventSdkInfo.version || newSdkInfo.version,
		integrations: [...event.sdk?.integrations || [], ...newSdkInfo.integrations || []],
		packages: [...event.sdk?.packages || [], ...newSdkInfo.packages || []],
		settings: event.sdk?.settings || newSdkInfo.settings ? {
			...event.sdk?.settings,
			...newSdkInfo.settings
		} : void 0
	};
	return event;
}
/** Creates an envelope from a Session */
function createSessionEnvelope(session, dsn, metadata, tunnel) {
	const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
	return createEnvelope({
		sent_at: (/* @__PURE__ */ new Date()).toISOString(),
		...sdkInfo && { sdk: sdkInfo },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) }
	}, ["aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()]]);
}
/**
* Create an Envelope from an event.
*/
function createEventEnvelope(event, dsn, metadata, tunnel) {
	const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
	const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
	_enhanceEventWithSdkInfo(event, metadata?.sdk);
	const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
	delete event.sdkProcessingMetadata;
	return createEnvelope(envelopeHeaders, [[{ type: eventType }, event]]);
}
/**
* Create envelope from Span item.
*
* Takes an optional client and runs spans through `beforeSendSpan` if available.
*/
function createSpanEnvelope(spans, client) {
	function dscHasRequiredProps(dsc) {
		return !!dsc.trace_id && !!dsc.public_key;
	}
	const dsc = getDynamicSamplingContextFromSpan(spans[0]);
	const dsn = client?.getDsn();
	const tunnel = client?.getOptions().tunnel;
	const headers = {
		sent_at: (/* @__PURE__ */ new Date()).toISOString(),
		...dscHasRequiredProps(dsc) && { trace: dsc },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) }
	};
	const { beforeSendSpan, ignoreSpans } = client?.getOptions() || {};
	const filteredSpans = ignoreSpans?.length ? spans.filter((span) => !shouldIgnoreSpan(spanToJSON(span), ignoreSpans)) : spans;
	const droppedSpans = spans.length - filteredSpans.length;
	if (droppedSpans) client?.recordDroppedEvent("before_send", "span", droppedSpans);
	const convertToSpanJSON = beforeSendSpan ? (span) => {
		const spanJson = spanToJSON(span);
		const processedSpan = beforeSendSpan(spanJson);
		if (!processedSpan) {
			showSpanDropWarning();
			return spanJson;
		}
		return processedSpan;
	} : spanToJSON;
	const items = [];
	for (const span of filteredSpans) {
		const spanJson = convertToSpanJSON(span);
		if (spanJson) items.push(createSpanEnvelopeItem(spanJson));
	}
	return createEnvelope(headers, items);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/logSpans.js
/**
* Print a log message for a started span.
*/
function logSpanStart(span) {
	if (!DEBUG_BUILD$3) return;
	const { description = "< unknown name >", op = "< unknown op >", parent_span_id: parentSpanId } = spanToJSON(span);
	const { spanId } = span.spanContext();
	const sampled = spanIsSampled(span);
	const rootSpan = getRootSpan(span);
	const isRootSpan = rootSpan === span;
	const header = `[Tracing] Starting ${sampled ? "sampled" : "unsampled"} ${isRootSpan ? "root " : ""}span`;
	const infoParts = [
		`op: ${op}`,
		`name: ${description}`,
		`ID: ${spanId}`
	];
	if (parentSpanId) infoParts.push(`parent ID: ${parentSpanId}`);
	if (!isRootSpan) {
		const { op, description } = spanToJSON(rootSpan);
		infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
		if (op) infoParts.push(`root op: ${op}`);
		if (description) infoParts.push(`root description: ${description}`);
	}
	debug.log(`${header}
  ${infoParts.join("\n  ")}`);
}
/**
* Print a log message for an ended span.
*/
function logSpanEnd(span) {
	if (!DEBUG_BUILD$3) return;
	const { description = "< unknown name >", op = "< unknown op >" } = spanToJSON(span);
	const { spanId } = span.spanContext();
	const msg = `[Tracing] Finishing "${op}" ${getRootSpan(span) === span ? "root " : ""}span "${description}" with ID ${spanId}`;
	debug.log(msg);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/measurement.js
/**
* Convert timed events to measurements.
*/
function timedEventsToMeasurements(events) {
	if (!events || events.length === 0) return;
	const measurements = {};
	events.forEach((event) => {
		const attributes = event.attributes || {};
		const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
		const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
		if (typeof unit === "string" && typeof value === "number") measurements[event.name] = {
			value,
			unit
		};
	});
	return measurements;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/sentrySpan.js
var MAX_SPAN_COUNT = 1e3;
/**
* Span contains all data about a span
*/
var SentrySpan = class {
	/** Epoch timestamp in seconds when the span started. */
	/** Epoch timestamp in seconds when the span ended. */
	/** Internal keeper of the status */
	/** The timed events added to this span. */
	/** if true, treat span as a standalone span (not part of a transaction) */
	/**
	* You should never call the constructor manually, always use `Sentry.startSpan()`
	* or other span methods.
	* @internal
	* @hideconstructor
	* @hidden
	*/
	constructor(spanContext = {}) {
		this._traceId = spanContext.traceId || generateTraceId();
		this._spanId = spanContext.spanId || generateSpanId();
		this._startTime = spanContext.startTimestamp || timestampInSeconds();
		this._links = spanContext.links;
		this._attributes = {};
		this.setAttributes({
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
			[SEMANTIC_ATTRIBUTE_SENTRY_OP]: spanContext.op,
			...spanContext.attributes
		});
		this._name = spanContext.name;
		if (spanContext.parentSpanId) this._parentSpanId = spanContext.parentSpanId;
		if ("sampled" in spanContext) this._sampled = spanContext.sampled;
		if (spanContext.endTimestamp) this._endTime = spanContext.endTimestamp;
		this._events = [];
		this._isStandaloneSpan = spanContext.isStandalone;
		if (this._endTime) this._onSpanEnded();
	}
	/** @inheritDoc */
	addLink(link) {
		if (this._links) this._links.push(link);
		else this._links = [link];
		return this;
	}
	/** @inheritDoc */
	addLinks(links) {
		if (this._links) this._links.push(...links);
		else this._links = links;
		return this;
	}
	/**
	* This should generally not be used,
	* but it is needed for being compliant with the OTEL Span interface.
	*
	* @hidden
	* @internal
	*/
	recordException(_exception, _time) {}
	/** @inheritdoc */
	spanContext() {
		const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
		return {
			spanId,
			traceId,
			traceFlags: sampled ? 1 : 0
		};
	}
	/** @inheritdoc */
	setAttribute(key, value) {
		if (value === void 0) delete this._attributes[key];
		else this._attributes[key] = value;
		return this;
	}
	/** @inheritdoc */
	setAttributes(attributes) {
		Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]));
		return this;
	}
	/**
	* This should generally not be used,
	* but we need it for browser tracing where we want to adjust the start time afterwards.
	* USE THIS WITH CAUTION!
	*
	* @hidden
	* @internal
	*/
	updateStartTime(timeInput) {
		this._startTime = spanTimeInputToSeconds(timeInput);
	}
	/**
	* @inheritDoc
	*/
	setStatus(value) {
		this._status = value;
		return this;
	}
	/**
	* @inheritDoc
	*/
	updateName(name) {
		this._name = name;
		this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
		return this;
	}
	/** @inheritdoc */
	end(endTimestamp) {
		if (this._endTime) return;
		this._endTime = spanTimeInputToSeconds(endTimestamp);
		logSpanEnd(this);
		this._onSpanEnded();
	}
	/**
	* Get JSON representation of this span.
	*
	* @hidden
	* @internal This method is purely for internal purposes and should not be used outside
	* of SDK code. If you need to get a JSON representation of a span,
	* use `spanToJSON(span)` instead.
	*/
	getSpanJSON() {
		return {
			data: this._attributes,
			description: this._name,
			op: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
			parent_span_id: this._parentSpanId,
			span_id: this._spanId,
			start_timestamp: this._startTime,
			status: getStatusMessage(this._status),
			timestamp: this._endTime,
			trace_id: this._traceId,
			origin: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
			profile_id: this._attributes[SEMANTIC_ATTRIBUTE_PROFILE_ID],
			exclusive_time: this._attributes[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
			measurements: timedEventsToMeasurements(this._events),
			is_segment: this._isStandaloneSpan && getRootSpan(this) === this || void 0,
			segment_id: this._isStandaloneSpan ? getRootSpan(this).spanContext().spanId : void 0,
			links: convertSpanLinksForEnvelope(this._links)
		};
	}
	/** @inheritdoc */
	isRecording() {
		return !this._endTime && !!this._sampled;
	}
	/**
	* @inheritdoc
	*/
	addEvent(name, attributesOrStartTime, startTime) {
		DEBUG_BUILD$3 && debug.log("[Tracing] Adding an event to span:", name);
		const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || timestampInSeconds();
		const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
		const event = {
			name,
			time: spanTimeInputToSeconds(time),
			attributes
		};
		this._events.push(event);
		return this;
	}
	/**
	* This method should generally not be used,
	* but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
	* USE THIS WITH CAUTION!
	* @internal
	* @hidden
	* @experimental
	*/
	isStandaloneSpan() {
		return !!this._isStandaloneSpan;
	}
	/** Emit `spanEnd` when the span is ended. */
	_onSpanEnded() {
		const client = getClient();
		if (client) client.emit("spanEnd", this);
		if (!(this._isStandaloneSpan || this === getRootSpan(this))) return;
		if (this._isStandaloneSpan) {
			if (this._sampled) sendSpanEnvelope(createSpanEnvelope([this], client));
			else {
				DEBUG_BUILD$3 && debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
				if (client) client.recordDroppedEvent("sample_rate", "span");
			}
			return;
		}
		const transactionEvent = this._convertSpanToTransaction();
		if (transactionEvent) (getCapturedScopesOnSpan(this).scope || getCurrentScope()).captureEvent(transactionEvent);
	}
	/**
	* Finish the transaction & prepare the event to send to Sentry.
	*/
	_convertSpanToTransaction() {
		if (!isFullFinishedSpan(spanToJSON(this))) return;
		if (!this._name) {
			DEBUG_BUILD$3 && debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
			this._name = "<unlabeled transaction>";
		}
		const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = getCapturedScopesOnSpan(this);
		const normalizedRequest = capturedSpanScope?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
		if (this._sampled !== true) return;
		const spans = getSpanDescendants(this).filter((span) => span !== this && !isStandaloneSpan(span)).map((span) => spanToJSON(span)).filter(isFullFinishedSpan);
		const source = this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
		delete this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
		spans.forEach((span) => {
			delete span.data[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
		});
		const transaction = {
			contexts: { trace: spanToTransactionTraceContext(this) },
			spans: spans.length > MAX_SPAN_COUNT ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans,
			start_timestamp: this._startTime,
			timestamp: this._endTime,
			transaction: this._name,
			type: "transaction",
			sdkProcessingMetadata: {
				capturedSpanScope,
				capturedSpanIsolationScope,
				dynamicSamplingContext: getDynamicSamplingContextFromSpan(this)
			},
			request: normalizedRequest,
			...source && { transaction_info: { source } }
		};
		const measurements = timedEventsToMeasurements(this._events);
		if (measurements && Object.keys(measurements).length) {
			DEBUG_BUILD$3 && debug.log("[Measurements] Adding measurements to transaction event", JSON.stringify(measurements, void 0, 2));
			transaction.measurements = measurements;
		}
		return transaction;
	}
};
function isSpanTimeInput(value) {
	return value && typeof value === "number" || value instanceof Date || Array.isArray(value);
}
function isFullFinishedSpan(input) {
	return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
/** `SentrySpan`s can be sent as a standalone span rather than belonging to a transaction */
function isStandaloneSpan(span) {
	return span instanceof SentrySpan && span.isStandaloneSpan();
}
/**
* Sends a `SpanEnvelope`.
*
* Note: If the envelope's spans are dropped, e.g. via `beforeSendSpan`,
* the envelope will not be sent either.
*/
function sendSpanEnvelope(envelope) {
	const client = getClient();
	if (!client) return;
	const spanItems = envelope[1];
	if (!spanItems || spanItems.length === 0) {
		client.recordDroppedEvent("before_send", "span");
		return;
	}
	client.sendEnvelope(envelope);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/sampling.js
/**
* Makes a sampling decision for the given options.
*
* Called every time a root span is created. Only root spans which emerge with a `sampled` value of `true` will be
* sent to Sentry.
*/
function sampleSpan(options, samplingContext, sampleRand) {
	if (!hasSpansEnabled(options)) return [false];
	let localSampleRateWasApplied = void 0;
	let sampleRate;
	if (typeof options.tracesSampler === "function") {
		sampleRate = options.tracesSampler({
			...samplingContext,
			inheritOrSampleWith: (fallbackSampleRate) => {
				if (typeof samplingContext.parentSampleRate === "number") return samplingContext.parentSampleRate;
				if (typeof samplingContext.parentSampled === "boolean") return Number(samplingContext.parentSampled);
				return fallbackSampleRate;
			}
		});
		localSampleRateWasApplied = true;
	} else if (samplingContext.parentSampled !== void 0) sampleRate = samplingContext.parentSampled;
	else if (typeof options.tracesSampleRate !== "undefined") {
		sampleRate = options.tracesSampleRate;
		localSampleRateWasApplied = true;
	}
	const parsedSampleRate = parseSampleRate(sampleRate);
	if (parsedSampleRate === void 0) {
		DEBUG_BUILD$3 && debug.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(sampleRate)} of type ${JSON.stringify(typeof sampleRate)}.`);
		return [false];
	}
	if (!parsedSampleRate) {
		DEBUG_BUILD$3 && debug.log(`[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`);
		return [
			false,
			parsedSampleRate,
			localSampleRateWasApplied
		];
	}
	const shouldSample = sampleRand < parsedSampleRate;
	if (!shouldSample) DEBUG_BUILD$3 && debug.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(sampleRate)})`);
	return [
		shouldSample,
		parsedSampleRate,
		localSampleRateWasApplied
	];
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/tracing/trace.js
var SUPPRESS_TRACING_KEY = "__SENTRY_SUPPRESS_TRACING__";
/**
* Creates a span. This span is not set as active, so will not get automatic instrumentation spans
* as children or be able to be accessed via `Sentry.getActiveSpan()`.
*
* If you want to create a span that is set as active, use {@link startSpan}.
*
* This function will always return a span,
* it may just be a non-recording span if the span is not sampled or if tracing is disabled.
*/
function startInactiveSpan(options) {
	const acs = getAcs();
	if (acs.startInactiveSpan) return acs.startInactiveSpan(options);
	const spanArguments = parseSentrySpanArguments(options);
	const { forceTransaction, parentSpan: customParentSpan } = options;
	return (options.scope ? (callback) => withScope(options.scope, callback) : customParentSpan !== void 0 ? (callback) => withActiveSpan(customParentSpan, callback) : (callback) => callback())(() => {
		const scope = getCurrentScope();
		const parentSpan = getParentSpan(scope, customParentSpan);
		if (options.onlyIfParent && !parentSpan) return new SentryNonRecordingSpan();
		return createChildOrRootSpan({
			parentSpan,
			spanArguments,
			forceTransaction,
			scope
		});
	});
}
/**
* Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
* passed `null` to start an entirely new span tree.
*
* @param span Spans started in the context of the provided callback will be children of this span. If `null` is passed,
* spans started within the callback will not be attached to a parent span.
* @param callback Execution context in which the provided span will be active. Is passed the newly forked scope.
* @returns the value returned from the provided callback function.
*/
function withActiveSpan(span, callback) {
	const acs = getAcs();
	if (acs.withActiveSpan) return acs.withActiveSpan(span, callback);
	return withScope((scope) => {
		_setSpanForScope(scope, span || void 0);
		return callback(scope);
	});
}
function createChildOrRootSpan({ parentSpan, spanArguments, forceTransaction, scope }) {
	if (!hasSpansEnabled()) {
		const span = new SentryNonRecordingSpan();
		if (forceTransaction || !parentSpan) freezeDscOnSpan(span, {
			sampled: "false",
			sample_rate: "0",
			transaction: spanArguments.name,
			...getDynamicSamplingContextFromSpan(span)
		});
		return span;
	}
	const isolationScope = getIsolationScope();
	let span;
	if (parentSpan && !forceTransaction) {
		span = _startChildSpan(parentSpan, scope, spanArguments);
		addChildSpanToSpan(parentSpan, span);
	} else if (parentSpan) {
		const dsc = getDynamicSamplingContextFromSpan(parentSpan);
		const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
		const parentSampled = spanIsSampled(parentSpan);
		span = _startRootSpan({
			traceId,
			parentSpanId,
			...spanArguments
		}, scope, parentSampled);
		freezeDscOnSpan(span, dsc);
	} else {
		const { traceId, dsc, parentSpanId, sampled: parentSampled } = {
			...isolationScope.getPropagationContext(),
			...scope.getPropagationContext()
		};
		span = _startRootSpan({
			traceId,
			parentSpanId,
			...spanArguments
		}, scope, parentSampled);
		if (dsc) freezeDscOnSpan(span, dsc);
	}
	logSpanStart(span);
	setCapturedScopesOnSpan(span, scope, isolationScope);
	return span;
}
/**
* This converts StartSpanOptions to SentrySpanArguments.
* For the most part (for now) we accept the same options,
* but some of them need to be transformed.
*/
function parseSentrySpanArguments(options) {
	const initialCtx = {
		isStandalone: (options.experimental || {}).standalone,
		...options
	};
	if (options.startTime) {
		const ctx = { ...initialCtx };
		ctx.startTimestamp = spanTimeInputToSeconds(options.startTime);
		delete ctx.startTime;
		return ctx;
	}
	return initialCtx;
}
function getAcs() {
	return getAsyncContextStrategy(getMainCarrier());
}
function _startRootSpan(spanArguments, scope, parentSampled) {
	const client = getClient();
	const options = client?.getOptions() || {};
	const { name = "" } = spanArguments;
	const mutableSpanSamplingData = {
		spanAttributes: { ...spanArguments.attributes },
		spanName: name,
		parentSampled
	};
	client?.emit("beforeSampling", mutableSpanSamplingData, { decision: false });
	const finalParentSampled = mutableSpanSamplingData.parentSampled ?? parentSampled;
	const finalAttributes = mutableSpanSamplingData.spanAttributes;
	const currentPropagationContext = scope.getPropagationContext();
	const [sampled, sampleRate, localSampleRateWasApplied] = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? [false] : sampleSpan(options, {
		name,
		parentSampled: finalParentSampled,
		attributes: finalAttributes,
		parentSampleRate: parseSampleRate(currentPropagationContext.dsc?.sample_rate)
	}, currentPropagationContext.sampleRand);
	const rootSpan = new SentrySpan({
		...spanArguments,
		attributes: {
			[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
			[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate !== void 0 && localSampleRateWasApplied ? sampleRate : void 0,
			...finalAttributes
		},
		sampled
	});
	if (!sampled && client) {
		DEBUG_BUILD$3 && debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
		client.recordDroppedEvent("sample_rate", "transaction");
	}
	if (client) client.emit("spanStart", rootSpan);
	return rootSpan;
}
/**
* Creates a new `Span` while setting the current `Span.id` as `parentSpanId`.
* This inherits the sampling decision from the parent span.
*/
function _startChildSpan(parentSpan, scope, spanArguments) {
	const { spanId, traceId } = parentSpan.spanContext();
	const sampled = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? false : spanIsSampled(parentSpan);
	const childSpan = sampled ? new SentrySpan({
		...spanArguments,
		parentSpanId: spanId,
		traceId,
		sampled
	}) : new SentryNonRecordingSpan({ traceId });
	addChildSpanToSpan(parentSpan, childSpan);
	const client = getClient();
	if (client) {
		client.emit("spanStart", childSpan);
		if (spanArguments.endTimestamp) client.emit("spanEnd", childSpan);
	}
	return childSpan;
}
function getParentSpan(scope, customParentSpan) {
	if (customParentSpan) return customParentSpan;
	if (customParentSpan === null) return;
	const span = _getSpanForScope(scope);
	if (!span) return;
	const client = getClient();
	if ((client ? client.getOptions() : {}).parentSpanIsAlwaysRootSpan) return getRootSpan(span);
	return span;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/syncpromise.js
/** SyncPromise internal states */
var STATE_PENDING = 0;
var STATE_RESOLVED = 1;
var STATE_REJECTED = 2;
/**
* Creates a resolved sync promise.
*
* @param value the value to resolve the promise with
* @returns the resolved sync promise
*/
function resolvedSyncPromise(value) {
	return new SyncPromise((resolve) => {
		resolve(value);
	});
}
/**
* Creates a rejected sync promise.
*
* @param value the value to reject the promise with
* @returns the rejected sync promise
*/
function rejectedSyncPromise(reason) {
	return new SyncPromise((_, reject) => {
		reject(reason);
	});
}
/**
* Thenable class that behaves like a Promise and follows it's interface
* but is not async internally
*/
var SyncPromise = class SyncPromise {
	constructor(executor) {
		this._state = STATE_PENDING;
		this._handlers = [];
		this._runExecutor(executor);
	}
	/** @inheritdoc */
	then(onfulfilled, onrejected) {
		return new SyncPromise((resolve, reject) => {
			this._handlers.push([
				false,
				(result) => {
					if (!onfulfilled) resolve(result);
					else try {
						resolve(onfulfilled(result));
					} catch (e) {
						reject(e);
					}
				},
				(reason) => {
					if (!onrejected) reject(reason);
					else try {
						resolve(onrejected(reason));
					} catch (e) {
						reject(e);
					}
				}
			]);
			this._executeHandlers();
		});
	}
	/** @inheritdoc */
	catch(onrejected) {
		return this.then((val) => val, onrejected);
	}
	/** @inheritdoc */
	finally(onfinally) {
		return new SyncPromise((resolve, reject) => {
			let val;
			let isRejected;
			return this.then((value) => {
				isRejected = false;
				val = value;
				if (onfinally) onfinally();
			}, (reason) => {
				isRejected = true;
				val = reason;
				if (onfinally) onfinally();
			}).then(() => {
				if (isRejected) {
					reject(val);
					return;
				}
				resolve(val);
			});
		});
	}
	/** Excute the resolve/reject handlers. */
	_executeHandlers() {
		if (this._state === STATE_PENDING) return;
		const cachedHandlers = this._handlers.slice();
		this._handlers = [];
		cachedHandlers.forEach((handler) => {
			if (handler[0]) return;
			if (this._state === STATE_RESOLVED) handler[1](this._value);
			if (this._state === STATE_REJECTED) handler[2](this._value);
			handler[0] = true;
		});
	}
	/** Run the executor for the SyncPromise. */
	_runExecutor(executor) {
		const setResult = (state, value) => {
			if (this._state !== STATE_PENDING) return;
			if (isThenable(value)) {
				value.then(resolve, reject);
				return;
			}
			this._state = state;
			this._value = value;
			this._executeHandlers();
		};
		const resolve = (value) => {
			setResult(STATE_RESOLVED, value);
		};
		const reject = (reason) => {
			setResult(STATE_REJECTED, reason);
		};
		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/eventProcessors.js
/**
* Process an array of event processors, returning the processed event (or `null` if the event was dropped).
*/
function notifyEventProcessors(processors, event, hint, index = 0) {
	try {
		const result = _notifyEventProcessors(event, hint, processors, index);
		return isThenable(result) ? result : resolvedSyncPromise(result);
	} catch (error) {
		return rejectedSyncPromise(error);
	}
}
function _notifyEventProcessors(event, hint, processors, index) {
	const processor = processors[index];
	if (!event || !processor) return event;
	const result = processor({ ...event }, hint);
	DEBUG_BUILD$3 && result === null && debug.log(`Event processor "${processor.id || "?"}" dropped event`);
	if (isThenable(result)) return result.then((final) => _notifyEventProcessors(final, hint, processors, index + 1));
	return _notifyEventProcessors(result, hint, processors, index + 1);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js
/**
* Applies data from the scope to the event and runs all event processors on it.
*/
function applyScopeDataToEvent(event, data) {
	const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;
	applyDataToEvent(event, data);
	if (span) applySpanToEvent(event, span);
	applyFingerprintToEvent(event, fingerprint);
	applyBreadcrumbsToEvent(event, breadcrumbs);
	applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
/** Merge data of two scopes together. */
function mergeScopeData(data, mergeData) {
	const { extra, tags, attributes, user, contexts, level, sdkProcessingMetadata, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = mergeData;
	mergeAndOverwriteScopeData(data, "extra", extra);
	mergeAndOverwriteScopeData(data, "tags", tags);
	mergeAndOverwriteScopeData(data, "attributes", attributes);
	mergeAndOverwriteScopeData(data, "user", user);
	mergeAndOverwriteScopeData(data, "contexts", contexts);
	data.sdkProcessingMetadata = merge(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
	if (level) data.level = level;
	if (transactionName) data.transactionName = transactionName;
	if (span) data.span = span;
	if (breadcrumbs.length) data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
	if (fingerprint.length) data.fingerprint = [...data.fingerprint, ...fingerprint];
	if (eventProcessors.length) data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
	if (attachments.length) data.attachments = [...data.attachments, ...attachments];
	data.propagationContext = {
		...data.propagationContext,
		...propagationContext
	};
}
/**
* Merges certain scope data. Undefined values will overwrite any existing values.
* Exported only for tests.
*/
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
	data[prop] = merge(data[prop], mergeVal, 1);
}
function applyDataToEvent(event, data) {
	const { extra, tags, user, contexts, level, transactionName } = data;
	if (Object.keys(extra).length) event.extra = {
		...extra,
		...event.extra
	};
	if (Object.keys(tags).length) event.tags = {
		...tags,
		...event.tags
	};
	if (Object.keys(user).length) event.user = {
		...user,
		...event.user
	};
	if (Object.keys(contexts).length) event.contexts = {
		...contexts,
		...event.contexts
	};
	if (level) event.level = level;
	if (transactionName && event.type !== "transaction") event.transaction = transactionName;
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
	const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
	event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
	event.sdkProcessingMetadata = {
		...event.sdkProcessingMetadata,
		...sdkProcessingMetadata
	};
}
function applySpanToEvent(event, span) {
	event.contexts = {
		trace: spanToTraceContext(span),
		...event.contexts
	};
	event.sdkProcessingMetadata = {
		dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
		...event.sdkProcessingMetadata
	};
	const transactionName = spanToJSON(getRootSpan(span)).description;
	if (transactionName && !event.transaction && event.type === "transaction") event.transaction = transactionName;
}
/**
* Applies fingerprint from the scope to the event if there's one,
* uses message if there's one instead or get rid of empty fingerprint
*/
function applyFingerprintToEvent(event, fingerprint) {
	event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
	if (fingerprint) event.fingerprint = event.fingerprint.concat(fingerprint);
	if (!event.fingerprint.length) delete event.fingerprint;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/debug-ids.js
var parsedStackResults;
var lastSentryKeysCount;
var lastNativeKeysCount;
var cachedFilenameDebugIds;
/**
* Returns a map of filenames to debug identifiers.
* Supports both proprietary _sentryDebugIds and native _debugIds (e.g., from Vercel) formats.
*/
function getFilenameToDebugIdMap(stackParser) {
	const sentryDebugIdMap = GLOBAL_OBJ._sentryDebugIds;
	const nativeDebugIdMap = GLOBAL_OBJ._debugIds;
	if (!sentryDebugIdMap && !nativeDebugIdMap) return {};
	const sentryDebugIdKeys = sentryDebugIdMap ? Object.keys(sentryDebugIdMap) : [];
	const nativeDebugIdKeys = nativeDebugIdMap ? Object.keys(nativeDebugIdMap) : [];
	if (cachedFilenameDebugIds && sentryDebugIdKeys.length === lastSentryKeysCount && nativeDebugIdKeys.length === lastNativeKeysCount) return cachedFilenameDebugIds;
	lastSentryKeysCount = sentryDebugIdKeys.length;
	lastNativeKeysCount = nativeDebugIdKeys.length;
	cachedFilenameDebugIds = {};
	if (!parsedStackResults) parsedStackResults = {};
	const processDebugIds = (debugIdKeys, debugIdMap) => {
		for (const key of debugIdKeys) {
			const debugId = debugIdMap[key];
			const result = parsedStackResults?.[key];
			if (result && cachedFilenameDebugIds && debugId) {
				cachedFilenameDebugIds[result[0]] = debugId;
				if (parsedStackResults) parsedStackResults[key] = [result[0], debugId];
			} else if (debugId) {
				const parsedStack = stackParser(key);
				for (let i = parsedStack.length - 1; i >= 0; i--) {
					const filename = parsedStack[i]?.filename;
					if (filename && cachedFilenameDebugIds && parsedStackResults) {
						cachedFilenameDebugIds[filename] = debugId;
						parsedStackResults[key] = [filename, debugId];
						break;
					}
				}
			}
		}
	};
	if (sentryDebugIdMap) processDebugIds(sentryDebugIdKeys, sentryDebugIdMap);
	if (nativeDebugIdMap) processDebugIds(nativeDebugIdKeys, nativeDebugIdMap);
	return cachedFilenameDebugIds;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/prepareEvent.js
/**
* This type makes sure that we get either a CaptureContext, OR an EventHint.
* It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
* { user: { id: '123' }, mechanism: { handled: false } }
*/
/**
* Adds common information to events.
*
* The information includes release and environment from `options`,
* breadcrumbs and context (extra, tags and user) from the scope.
*
* Information that is already present in the event is never overwritten. For
* nested objects, such as the context, keys are merged.
*
* @param event The original event.
* @param hint May contain additional information about the original exception.
* @param scope A scope containing event metadata.
* @returns A new event with more information.
* @hidden
*/
function prepareEvent(options, event, hint, scope, client, isolationScope) {
	const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
	const prepared = {
		...event,
		event_id: event.event_id || hint.event_id || uuid4(),
		timestamp: event.timestamp || dateTimestampInSeconds()
	};
	const integrations = hint.integrations || options.integrations.map((i) => i.name);
	applyClientOptions(prepared, options);
	applyIntegrationsMetadata(prepared, integrations);
	if (client) client.emit("applyFrameMetadata", event);
	if (event.type === void 0) applyDebugIds(prepared, options.stackParser);
	const finalScope = getFinalScope(scope, hint.captureContext);
	if (hint.mechanism) addExceptionMechanism(prepared, hint.mechanism);
	const clientEventProcessors = client ? client.getEventProcessors() : [];
	const data = getGlobalScope().getScopeData();
	if (isolationScope) mergeScopeData(data, isolationScope.getScopeData());
	if (finalScope) mergeScopeData(data, finalScope.getScopeData());
	const attachments = [...hint.attachments || [], ...data.attachments];
	if (attachments.length) hint.attachments = attachments;
	applyScopeDataToEvent(prepared, data);
	return notifyEventProcessors([...clientEventProcessors, ...data.eventProcessors], prepared, hint).then((evt) => {
		if (evt) applyDebugMeta(evt);
		if (typeof normalizeDepth === "number" && normalizeDepth > 0) return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
		return evt;
	});
}
/**
* Enhances event using the client configuration.
* It takes care of all "static" values like environment, release and `dist`,
* as well as truncating overly long values.
*
* Only exported for tests.
*
* @param event event instance to be enhanced
*/
function applyClientOptions(event, options) {
	const { environment, release, dist, maxValueLength } = options;
	event.environment = event.environment || environment || "production";
	if (!event.release && release) event.release = release;
	if (!event.dist && dist) event.dist = dist;
	const request = event.request;
	if (request?.url && maxValueLength) request.url = truncate(request.url, maxValueLength);
	if (maxValueLength) event.exception?.values?.forEach((exception) => {
		if (exception.value) exception.value = truncate(exception.value, maxValueLength);
	});
}
/**
* Puts debug IDs into the stack frames of an error event.
*/
function applyDebugIds(event, stackParser) {
	const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
	event.exception?.values?.forEach((exception) => {
		exception.stacktrace?.frames?.forEach((frame) => {
			if (frame.filename) frame.debug_id = filenameDebugIdMap[frame.filename];
		});
	});
}
/**
* Moves debug IDs from the stack frames of an error event into the debug_meta field.
*/
function applyDebugMeta(event) {
	const filenameDebugIdMap = {};
	event.exception?.values?.forEach((exception) => {
		exception.stacktrace?.frames?.forEach((frame) => {
			if (frame.debug_id) {
				if (frame.abs_path) filenameDebugIdMap[frame.abs_path] = frame.debug_id;
				else if (frame.filename) filenameDebugIdMap[frame.filename] = frame.debug_id;
				delete frame.debug_id;
			}
		});
	});
	if (Object.keys(filenameDebugIdMap).length === 0) return;
	event.debug_meta = event.debug_meta || {};
	event.debug_meta.images = event.debug_meta.images || [];
	const images = event.debug_meta.images;
	Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
		images.push({
			type: "sourcemap",
			code_file: filename,
			debug_id
		});
	});
}
/**
* This function adds all used integrations to the SDK info in the event.
* @param event The event that will be filled with all integrations.
*/
function applyIntegrationsMetadata(event, integrationNames) {
	if (integrationNames.length > 0) {
		event.sdk = event.sdk || {};
		event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
	}
}
/**
* Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
* Normalized keys:
* - `breadcrumbs.data`
* - `user`
* - `contexts`
* - `extra`
* @param event Event
* @returns Normalized event
*/
function normalizeEvent(event, depth, maxBreadth) {
	if (!event) return null;
	const normalized = {
		...event,
		...event.breadcrumbs && { breadcrumbs: event.breadcrumbs.map((b) => ({
			...b,
			...b.data && { data: normalize(b.data, depth, maxBreadth) }
		})) },
		...event.user && { user: normalize(event.user, depth, maxBreadth) },
		...event.contexts && { contexts: normalize(event.contexts, depth, maxBreadth) },
		...event.extra && { extra: normalize(event.extra, depth, maxBreadth) }
	};
	if (event.contexts?.trace && normalized.contexts) {
		normalized.contexts.trace = event.contexts.trace;
		if (event.contexts.trace.data) normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
	}
	if (event.spans) normalized.spans = event.spans.map((span) => {
		return {
			...span,
			...span.data && { data: normalize(span.data, depth, maxBreadth) }
		};
	});
	if (event.contexts?.flags && normalized.contexts) normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
	return normalized;
}
function getFinalScope(scope, captureContext) {
	if (!captureContext) return scope;
	const finalScope = scope ? scope.clone() : new Scope();
	finalScope.update(captureContext);
	return finalScope;
}
/**
* Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
* This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
*/
function parseEventHintOrCaptureContext(hint) {
	if (!hint) return;
	if (hintIsScopeOrFunction(hint)) return { captureContext: hint };
	if (hintIsScopeContext(hint)) return { captureContext: hint };
	return hint;
}
function hintIsScopeOrFunction(hint) {
	return hint instanceof Scope || typeof hint === "function";
}
var captureContextKeys = [
	"user",
	"level",
	"extra",
	"contexts",
	"tags",
	"fingerprint",
	"propagationContext"
];
function hintIsScopeContext(hint) {
	return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/exports.js
/**
* Captures an exception event and sends it to Sentry.
*
* @param exception The exception to capture.
* @param hint Optional additional data to attach to the Sentry event.
* @returns the id of the captured Sentry event.
*/
function captureException(exception, hint) {
	return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
/**
* Captures a manually created event and sends it to Sentry.
*
* @param event The event to send to Sentry.
* @param hint Optional additional data to attach to the Sentry event.
* @returns the id of the captured event.
*/
function captureEvent(event, hint) {
	return getCurrentScope().captureEvent(event, hint);
}
/**
* Start a session on the current isolation scope.
*
* @param context (optional) additional properties to be applied to the returned session object
*
* @returns the new active session
*/
function startSession(context) {
	const isolationScope = getIsolationScope();
	const currentScope = getCurrentScope();
	const { userAgent } = GLOBAL_OBJ.navigator || {};
	const session = makeSession({
		user: currentScope.getUser() || isolationScope.getUser(),
		...userAgent && { userAgent },
		...context
	});
	const currentSession = isolationScope.getSession();
	if (currentSession?.status === "ok") updateSession(currentSession, { status: "exited" });
	endSession();
	isolationScope.setSession(session);
	return session;
}
/**
* End the session on the current isolation scope.
*/
function endSession() {
	const isolationScope = getIsolationScope();
	const session = getCurrentScope().getSession() || isolationScope.getSession();
	if (session) closeSession(session);
	_sendSessionUpdate();
	isolationScope.setSession();
}
/**
* Sends the current Session on the scope
*/
function _sendSessionUpdate() {
	const isolationScope = getIsolationScope();
	const client = getClient();
	const session = isolationScope.getSession();
	if (session && client) client.captureSession(session);
}
/**
* Sends the current session on the scope to Sentry
*
* @param end If set the session will be marked as exited and removed from the scope.
*            Defaults to `false`.
*/
function captureSession(end = false) {
	if (end) {
		endSession();
		return;
	}
	_sendSessionUpdate();
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/api.js
var SENTRY_API_VERSION = "7";
/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
	const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
	const port = dsn.port ? `:${dsn.port}` : "";
	return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn) {
	return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn, sdkInfo) {
	const params = { sentry_version: SENTRY_API_VERSION };
	if (dsn.publicKey) params.sentry_key = dsn.publicKey;
	if (sdkInfo) params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
	return new URLSearchParams(params).toString();
}
/**
* Returns the envelope endpoint URL with auth in the query string.
*
* Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
*/
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
	return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/integration.js
var installedIntegrations = [];
/** Map of integrations assigned to a client */
/**
* Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
* preserve the order of integrations in the array.
*
* @private
*/
function filterDuplicates(integrations) {
	const integrationsByName = {};
	integrations.forEach((currentInstance) => {
		const { name } = currentInstance;
		const existingInstance = integrationsByName[name];
		if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) return;
		integrationsByName[name] = currentInstance;
	});
	return Object.values(integrationsByName);
}
/** Gets integrations to install */
function getIntegrationsToSetup(options) {
	const defaultIntegrations = options.defaultIntegrations || [];
	const userIntegrations = options.integrations;
	defaultIntegrations.forEach((integration) => {
		integration.isDefaultInstance = true;
	});
	let integrations;
	if (Array.isArray(userIntegrations)) integrations = [...defaultIntegrations, ...userIntegrations];
	else if (typeof userIntegrations === "function") {
		const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
		integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
	} else integrations = defaultIntegrations;
	return filterDuplicates(integrations);
}
/**
* Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
* integrations are added unless they were already provided before.
* @param integrations array of integration instances
* @param withDefault should enable default integrations
*/
function setupIntegrations(client, integrations) {
	const integrationIndex = {};
	integrations.forEach((integration) => {
		if (integration) setupIntegration(client, integration, integrationIndex);
	});
	return integrationIndex;
}
/**
* Execute the `afterAllSetup` hooks of the given integrations.
*/
function afterSetupIntegrations(client, integrations) {
	for (const integration of integrations) if (integration?.afterAllSetup) integration.afterAllSetup(client);
}
/** Setup a single integration.  */
function setupIntegration(client, integration, integrationIndex) {
	if (integrationIndex[integration.name]) {
		DEBUG_BUILD$3 && debug.log(`Integration skipped because it was already installed: ${integration.name}`);
		return;
	}
	integrationIndex[integration.name] = integration;
	if (!installedIntegrations.includes(integration.name) && typeof integration.setupOnce === "function") {
		integration.setupOnce();
		installedIntegrations.push(integration.name);
	}
	if (integration.setup && typeof integration.setup === "function") integration.setup(client);
	if (typeof integration.preprocessEvent === "function") {
		const callback = integration.preprocessEvent.bind(integration);
		client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
	}
	if (typeof integration.processEvent === "function") {
		const callback = integration.processEvent.bind(integration);
		const processor = Object.assign((event, hint) => callback(event, hint, client), { id: integration.name });
		client.addEventProcessor(processor);
	}
	DEBUG_BUILD$3 && debug.log(`Integration installed: ${integration.name}`);
}
/**
* Define an integration function that can be used to create an integration instance.
* Note that this by design hides the implementation details of the integration, as they are considered internal.
*/
function defineIntegration(fn) {
	return fn;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/logs/envelope.js
/**
* Creates a log container envelope item for a list of logs.
*
* @param items - The logs to include in the envelope.
* @returns The created log container envelope item.
*/
function createLogContainerEnvelopeItem(items) {
	return [{
		type: "log",
		item_count: items.length,
		content_type: "application/vnd.sentry.items.log+json"
	}, { items }];
}
/**
* Creates an envelope for a list of logs.
*
* Logs from multiple traces can be included in the same envelope.
*
* @param logs - The logs to include in the envelope.
* @param metadata - The metadata to include in the envelope.
* @param tunnel - The tunnel to include in the envelope.
* @param dsn - The DSN to include in the envelope.
* @returns The created envelope.
*/
function createLogEnvelope(logs, metadata, tunnel, dsn) {
	const headers = {};
	if (metadata?.sdk) headers.sdk = {
		name: metadata.sdk.name,
		version: metadata.sdk.version
	};
	if (!!tunnel && !!dsn) headers.dsn = dsnToString(dsn);
	return createEnvelope(headers, [createLogContainerEnvelopeItem(logs)]);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/logs/internal.js
/**
* Flushes the logs buffer to Sentry.
*
* @param client - A client.
* @param maybeLogBuffer - A log buffer. Uses the log buffer for the given client if not provided.
*
* @experimental This method will experience breaking changes. This is not yet part of
* the stable Sentry SDK API and can be changed or removed without warning.
*/
function _INTERNAL_flushLogsBuffer(client, maybeLogBuffer) {
	const logBuffer = maybeLogBuffer ?? _INTERNAL_getLogBuffer(client) ?? [];
	if (logBuffer.length === 0) return;
	const clientOptions = client.getOptions();
	const envelope = createLogEnvelope(logBuffer, clientOptions._metadata, clientOptions.tunnel, client.getDsn());
	_getBufferMap$1().set(client, []);
	client.emit("flushLogs");
	client.sendEnvelope(envelope);
}
/**
* Returns the log buffer for a given client.
*
* Exported for testing purposes.
*
* @param client - The client to get the log buffer for.
* @returns The log buffer for the given client.
*/
function _INTERNAL_getLogBuffer(client) {
	return _getBufferMap$1().get(client);
}
function _getBufferMap$1() {
	return getGlobalSingleton("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
}
__name(_getBufferMap$1, "_getBufferMap");
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/metrics/envelope.js
/**
* Creates a metric container envelope item for a list of metrics.
*
* @param items - The metrics to include in the envelope.
* @returns The created metric container envelope item.
*/
function createMetricContainerEnvelopeItem(items) {
	return [{
		type: "trace_metric",
		item_count: items.length,
		content_type: "application/vnd.sentry.items.trace-metric+json"
	}, { items }];
}
/**
* Creates an envelope for a list of metrics.
*
* Metrics from multiple traces can be included in the same envelope.
*
* @param metrics - The metrics to include in the envelope.
* @param metadata - The metadata to include in the envelope.
* @param tunnel - The tunnel to include in the envelope.
* @param dsn - The DSN to include in the envelope.
* @returns The created envelope.
*/
function createMetricEnvelope(metrics, metadata, tunnel, dsn) {
	const headers = {};
	if (metadata?.sdk) headers.sdk = {
		name: metadata.sdk.name,
		version: metadata.sdk.version
	};
	if (!!tunnel && !!dsn) headers.dsn = dsnToString(dsn);
	return createEnvelope(headers, [createMetricContainerEnvelopeItem(metrics)]);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/metrics/internal.js
/**
* Flushes the metrics buffer to Sentry.
*
* @param client - A client.
* @param maybeMetricBuffer - A metric buffer. Uses the metric buffer for the given client if not provided.
*
* @experimental This method will experience breaking changes. This is not yet part of
* the stable Sentry SDK API and can be changed or removed without warning.
*/
function _INTERNAL_flushMetricsBuffer(client, maybeMetricBuffer) {
	const metricBuffer = maybeMetricBuffer ?? _INTERNAL_getMetricBuffer(client) ?? [];
	if (metricBuffer.length === 0) return;
	const clientOptions = client.getOptions();
	const envelope = createMetricEnvelope(metricBuffer, clientOptions._metadata, clientOptions.tunnel, client.getDsn());
	_getBufferMap().set(client, []);
	client.emit("flushMetrics");
	client.sendEnvelope(envelope);
}
/**
* Returns the metric buffer for a given client.
*
* Exported for testing purposes.
*
* @param client - The client to get the metric buffer for.
* @returns The metric buffer for the given client.
*/
function _INTERNAL_getMetricBuffer(client) {
	return _getBufferMap().get(client);
}
function _getBufferMap() {
	return getGlobalSingleton("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/promisebuffer.js
var SENTRY_BUFFER_FULL_ERROR = Symbol.for("SentryBufferFullError");
/**
* Creates an new PromiseBuffer object with the specified limit
* @param limit max number of promises that can be stored in the buffer
*/
function makePromiseBuffer(limit = 100) {
	const buffer = /* @__PURE__ */ new Set();
	function isReady() {
		return buffer.size < limit;
	}
	/**
	* Remove a promise from the queue.
	*
	* @param task Can be any PromiseLike<T>
	* @returns Removed promise.
	*/
	function remove(task) {
		buffer.delete(task);
	}
	/**
	* Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
	*
	* @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
	*        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
	*        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
	*        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
	*        limit check.
	* @returns The original promise.
	*/
	function add(taskProducer) {
		if (!isReady()) return rejectedSyncPromise(SENTRY_BUFFER_FULL_ERROR);
		const task = taskProducer();
		buffer.add(task);
		task.then(() => remove(task), () => remove(task));
		return task;
	}
	/**
	* Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
	*
	* @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
	* not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
	* `true`.
	* @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
	* `false` otherwise
	*/
	function drain(timeout) {
		if (!buffer.size) return resolvedSyncPromise(true);
		const drainPromise = Promise.allSettled(Array.from(buffer)).then(() => true);
		if (!timeout) return drainPromise;
		const promises = [drainPromise, new Promise((resolve) => setTimeout(() => resolve(false), timeout))];
		return Promise.race(promises);
	}
	return {
		get $() {
			return Array.from(buffer);
		},
		add,
		drain
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/ratelimit.js
var DEFAULT_RETRY_AFTER = 60 * 1e3;
/**
* Extracts Retry-After value from the request header or returns default value
* @param header string representation of 'Retry-After' header
* @param now current unix timestamp
*
*/
function parseRetryAfterHeader(header, now = Date.now()) {
	const headerDelay = parseInt(`${header}`, 10);
	if (!isNaN(headerDelay)) return headerDelay * 1e3;
	const headerDate = Date.parse(`${header}`);
	if (!isNaN(headerDate)) return headerDate - now;
	return DEFAULT_RETRY_AFTER;
}
/**
* Gets the time that the given category is disabled until for rate limiting.
* In case no category-specific limit is set but a general rate limit across all categories is active,
* that time is returned.
*
* @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
*/
function disabledUntil(limits, dataCategory) {
	return limits[dataCategory] || limits.all || 0;
}
/**
* Checks if a category is rate limited
*/
function isRateLimited(limits, dataCategory, now = Date.now()) {
	return disabledUntil(limits, dataCategory) > now;
}
/**
* Update ratelimits from incoming headers.
*
* @return the updated RateLimits object.
*/
function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
	const updatedRateLimits = { ...limits };
	const rateLimitHeader = headers?.["x-sentry-rate-limits"];
	const retryAfterHeader = headers?.["retry-after"];
	if (rateLimitHeader)
 /**
	* rate limit headers are of the form
	*     <header>,<header>,..
	* where each <header> is of the form
	*     <retry_after>: <categories>: <scope>: <reason_code>: <namespaces>
	* where
	*     <retry_after> is a delay in seconds
	*     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
	*         <category>;<category>;...
	*     <scope> is what's being limited (org, project, or key) - ignored by SDK
	*     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
	*     <namespaces> Semicolon-separated list of metric namespace identifiers. Defines which namespace(s) will be affected.
	*         Only present if rate limit applies to the metric_bucket data category.
	*/
	for (const limit of rateLimitHeader.trim().split(",")) {
		const [retryAfter, categories, , , namespaces] = limit.split(":", 5);
		const headerDelay = parseInt(retryAfter, 10);
		const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
		if (!categories) updatedRateLimits.all = now + delay;
		else for (const category of categories.split(";")) if (category === "metric_bucket") {
			if (!namespaces || namespaces.split(";").includes("custom")) updatedRateLimits[category] = now + delay;
		} else updatedRateLimits[category] = now + delay;
	}
	else if (retryAfterHeader) updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
	else if (statusCode === 429) updatedRateLimits.all = now + 60 * 1e3;
	return updatedRateLimits;
}
/**
* Creates an instance of a Sentry `Transport`
*
* @param options
* @param makeRequest
*/
function createTransport(options, makeRequest, buffer = makePromiseBuffer(options.bufferSize || 64)) {
	let rateLimits = {};
	const flush = (timeout) => buffer.drain(timeout);
	function send(envelope) {
		const filteredEnvelopeItems = [];
		forEachEnvelopeItem(envelope, (item, type) => {
			const dataCategory = envelopeItemTypeToDataCategory(type);
			if (isRateLimited(rateLimits, dataCategory)) options.recordDroppedEvent("ratelimit_backoff", dataCategory);
			else filteredEnvelopeItems.push(item);
		});
		if (filteredEnvelopeItems.length === 0) return Promise.resolve({});
		const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
		const recordEnvelopeLoss = (reason) => {
			forEachEnvelopeItem(filteredEnvelope, (item, type) => {
				options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type));
			});
		};
		const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope) }).then((response) => {
			if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) DEBUG_BUILD$3 && debug.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
			rateLimits = updateRateLimits(rateLimits, response);
			return response;
		}, (error) => {
			recordEnvelopeLoss("network_error");
			DEBUG_BUILD$3 && debug.error("Encountered error running transport request:", error);
			throw error;
		});
		return buffer.add(requestTask).then((result) => result, (error) => {
			if (error === SENTRY_BUFFER_FULL_ERROR) {
				DEBUG_BUILD$3 && debug.error("Skipped sending event because buffer is full.");
				recordEnvelopeLoss("queue_overflow");
				return Promise.resolve({});
			} else throw error;
		});
	}
	return {
		send,
		flush
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/clientreport.js
/**
* Creates client report envelope
* @param discarded_events An array of discard events
* @param dsn A DSN that can be set on the header. Optional.
*/
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
	const clientReportItem = [{ type: "client_report" }, {
		timestamp: timestamp || dateTimestampInSeconds(),
		discarded_events
	}];
	return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/eventUtils.js
/**
* Get a list of possible event messages from a Sentry event.
*/
function getPossibleEventMessages(event) {
	const possibleMessages = [];
	if (event.message) possibleMessages.push(event.message);
	try {
		const lastException = event.exception.values[event.exception.values.length - 1];
		if (lastException?.value) {
			possibleMessages.push(lastException.value);
			if (lastException.type) possibleMessages.push(`${lastException.type}: ${lastException.value}`);
		}
	} catch {}
	return possibleMessages;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/transactionEvent.js
/**
* Converts a transaction event to a span JSON object.
*/
function convertTransactionEventToSpanJson(event) {
	const { trace_id, parent_span_id, span_id, status, origin, data, op } = event.contexts?.trace ?? {};
	return {
		data: data ?? {},
		description: event.transaction,
		op,
		parent_span_id,
		span_id: span_id ?? "",
		start_timestamp: event.start_timestamp ?? 0,
		status,
		timestamp: event.timestamp,
		trace_id: trace_id ?? "",
		origin,
		profile_id: data?.[SEMANTIC_ATTRIBUTE_PROFILE_ID],
		exclusive_time: data?.[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
		measurements: event.measurements,
		is_segment: true
	};
}
/**
* Converts a span JSON object to a transaction event.
*/
function convertSpanJsonToTransactionEvent(span) {
	return {
		type: "transaction",
		timestamp: span.timestamp,
		start_timestamp: span.start_timestamp,
		transaction: span.description,
		contexts: { trace: {
			trace_id: span.trace_id,
			span_id: span.span_id,
			parent_span_id: span.parent_span_id,
			op: span.op,
			status: span.status,
			origin: span.origin,
			data: {
				...span.data,
				...span.profile_id && { ["sentry.profile_id"]: span.profile_id },
				...span.exclusive_time && { ["sentry.exclusive_time"]: span.exclusive_time }
			}
		} },
		measurements: span.measurements
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/client.js
var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
var MISSING_RELEASE_FOR_SESSION_ERROR = "Discarded session because of missing or non-string release";
var INTERNAL_ERROR_SYMBOL = Symbol.for("SentryInternalError");
var DO_NOT_SEND_EVENT_SYMBOL = Symbol.for("SentryDoNotSendEventError");
var DEFAULT_FLUSH_INTERVAL = 5e3;
function _makeInternalError(message) {
	return {
		message,
		[INTERNAL_ERROR_SYMBOL]: true
	};
}
function _makeDoNotSendEventError(message) {
	return {
		message,
		[DO_NOT_SEND_EVENT_SYMBOL]: true
	};
}
function _isInternalError(error) {
	return !!error && typeof error === "object" && INTERNAL_ERROR_SYMBOL in error;
}
function _isDoNotSendEventError(error) {
	return !!error && typeof error === "object" && DO_NOT_SEND_EVENT_SYMBOL in error;
}
/**
* Sets up weight-based flushing for logs or metrics.
* This helper function encapsulates the common pattern of:
* 1. Tracking accumulated weight of items
* 2. Flushing when weight exceeds threshold (800KB)
* 3. Flushing after timeout period from the first item
*
* Uses closure variables to track weight and timeout state.
*/
function setupWeightBasedFlushing(client, afterCaptureHook, flushHook, estimateSizeFn, flushFn) {
	let weight = 0;
	let flushTimeout;
	let isTimerActive = false;
	client.on(flushHook, () => {
		weight = 0;
		clearTimeout(flushTimeout);
		isTimerActive = false;
	});
	client.on(afterCaptureHook, (item) => {
		weight += estimateSizeFn(item);
		if (weight >= 8e5) flushFn(client);
		else if (!isTimerActive) {
			isTimerActive = true;
			flushTimeout = setTimeout(() => {
				flushFn(client);
			}, DEFAULT_FLUSH_INTERVAL);
		}
	});
	client.on("flush", () => {
		flushFn(client);
	});
}
/**
* Base implementation for all JavaScript SDK clients.
*
* Call the constructor with the corresponding options
* specific to the client subclass. To access these options later, use
* {@link Client.getOptions}.
*
* If a Dsn is specified in the options, it will be parsed and stored. Use
* {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
* invalid, the constructor will throw a {@link SentryException}. Note that
* without a valid Dsn, the SDK will not send any events to Sentry.
*
* Before sending an event, it is passed through
* {@link Client._prepareEvent} to add SDK information and scope data
* (breadcrumbs and context). To add more custom information, override this
* method and extend the resulting prepared event.
*
* To issue automatically created events (e.g. via instrumentation), use
* {@link Client.captureEvent}. It will prepare the event and pass it through
* the callback lifecycle. To issue auto-breadcrumbs, use
* {@link Client.addBreadcrumb}.
*
* @example
* class NodeClient extends Client<NodeOptions> {
*   public constructor(options: NodeOptions) {
*     super(options);
*   }
*
*   // ...
* }
*/
var Client = class {
	/** Options passed to the SDK. */
	/** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
	/** Array of set up integrations. */
	/** Number of calls being processed */
	/** Holds flushable  */
	/**
	* Initializes this client instance.
	*
	* @param options Options for the client.
	*/
	constructor(options) {
		this._options = options;
		this._integrations = {};
		this._numProcessing = 0;
		this._outcomes = {};
		this._hooks = {};
		this._eventProcessors = [];
		this._promiseBuffer = makePromiseBuffer(options.transportOptions?.bufferSize ?? 64);
		if (options.dsn) this._dsn = makeDsn(options.dsn);
		else DEBUG_BUILD$3 && debug.warn("No DSN provided, client will not send events.");
		if (this._dsn) {
			const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options.tunnel, options._metadata ? options._metadata.sdk : void 0);
			this._transport = options.transport({
				tunnel: this._options.tunnel,
				recordDroppedEvent: this.recordDroppedEvent.bind(this),
				...options.transportOptions,
				url
			});
		}
		this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs;
		if (this._options.enableLogs) setupWeightBasedFlushing(this, "afterCaptureLog", "flushLogs", estimateLogSizeInBytes, _INTERNAL_flushLogsBuffer);
		if (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true) setupWeightBasedFlushing(this, "afterCaptureMetric", "flushMetrics", estimateMetricSizeInBytes, _INTERNAL_flushMetricsBuffer);
	}
	/**
	* Captures an exception event and sends it to Sentry.
	*
	* Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
	*/
	captureException(exception, hint, scope) {
		const eventId = uuid4();
		if (checkOrSetAlreadyCaught(exception)) {
			DEBUG_BUILD$3 && debug.log(ALREADY_SEEN_ERROR);
			return eventId;
		}
		const hintWithEventId = {
			event_id: eventId,
			...hint
		};
		this._process(() => this.eventFromException(exception, hintWithEventId).then((event) => this._captureEvent(event, hintWithEventId, scope)).then((res) => res), "error");
		return hintWithEventId.event_id;
	}
	/**
	* Captures a message event and sends it to Sentry.
	*
	* Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
	*/
	captureMessage(message, level, hint, currentScope) {
		const hintWithEventId = {
			event_id: uuid4(),
			...hint
		};
		const eventMessage = isParameterizedString(message) ? message : String(message);
		const isMessage = isPrimitive(message);
		const promisedEvent = isMessage ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
		this._process(() => promisedEvent.then((event) => this._captureEvent(event, hintWithEventId, currentScope)), isMessage ? "unknown" : "error");
		return hintWithEventId.event_id;
	}
	/**
	* Captures a manually created event and sends it to Sentry.
	*
	* Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
	*/
	captureEvent(event, hint, currentScope) {
		const eventId = uuid4();
		if (hint?.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
			DEBUG_BUILD$3 && debug.log(ALREADY_SEEN_ERROR);
			return eventId;
		}
		const hintWithEventId = {
			event_id: eventId,
			...hint
		};
		const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
		const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
		const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;
		const dataCategory = getDataCategoryByType(event.type);
		this._process(() => this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope, capturedSpanIsolationScope), dataCategory);
		return hintWithEventId.event_id;
	}
	/**
	* Captures a session.
	*/
	captureSession(session) {
		this.sendSession(session);
		updateSession(session, { init: false });
	}
	/**
	* Create a cron monitor check in and send it to Sentry. This method is not available on all clients.
	*
	* @param checkIn An object that describes a check in.
	* @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
	* to create a monitor automatically when sending a check in.
	* @param scope An optional scope containing event metadata.
	* @returns A string representing the id of the check in.
	*/
	/**
	* Get the current Dsn.
	*/
	getDsn() {
		return this._dsn;
	}
	/**
	* Get the current options.
	*/
	getOptions() {
		return this._options;
	}
	/**
	* Get the SDK metadata.
	* @see SdkMetadata
	*/
	getSdkMetadata() {
		return this._options._metadata;
	}
	/**
	* Returns the transport that is used by the client.
	* Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
	*/
	getTransport() {
		return this._transport;
	}
	/**
	* Wait for all events to be sent or the timeout to expire, whichever comes first.
	*
	* @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
	*   cause the client to wait until all events are sent before resolving the promise.
	* @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
	* still events in the queue when the timeout is reached.
	*/
	async flush(timeout) {
		const transport = this._transport;
		if (!transport) return true;
		this.emit("flush");
		const clientFinished = await this._isClientDoneProcessing(timeout);
		const transportFlushed = await transport.flush(timeout);
		return clientFinished && transportFlushed;
	}
	/**
	* Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
	*
	* @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
	*   the client to wait until all events are sent before disabling itself.
	* @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
	* it doesn't.
	*/
	async close(timeout) {
		const result = await this.flush(timeout);
		this.getOptions().enabled = false;
		this.emit("close");
		return result;
	}
	/**
	* Get all installed event processors.
	*/
	getEventProcessors() {
		return this._eventProcessors;
	}
	/**
	* Adds an event processor that applies to any event processed by this client.
	*/
	addEventProcessor(eventProcessor) {
		this._eventProcessors.push(eventProcessor);
	}
	/**
	* Initialize this client.
	* Call this after the client was set on a scope.
	*/
	init() {
		if (this._isEnabled() || this._options.integrations.some(({ name }) => name.startsWith("Spotlight"))) this._setupIntegrations();
	}
	/**
	* Gets an installed integration by its name.
	*
	* @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
	*/
	getIntegrationByName(integrationName) {
		return this._integrations[integrationName];
	}
	/**
	* Add an integration to the client.
	* This can be used to e.g. lazy load integrations.
	* In most cases, this should not be necessary,
	* and you're better off just passing the integrations via `integrations: []` at initialization time.
	* However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
	*/
	addIntegration(integration) {
		const isAlreadyInstalled = this._integrations[integration.name];
		setupIntegration(this, integration, this._integrations);
		if (!isAlreadyInstalled) afterSetupIntegrations(this, [integration]);
	}
	/**
	* Send a fully prepared event to Sentry.
	*/
	sendEvent(event, hint = {}) {
		this.emit("beforeSendEvent", event, hint);
		let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
		for (const attachment of hint.attachments || []) env = addItemToEnvelope(env, createAttachmentEnvelopeItem(attachment));
		this.sendEnvelope(env).then((sendResponse) => this.emit("afterSendEvent", event, sendResponse));
	}
	/**
	* Send a session or session aggregrates to Sentry.
	*/
	sendSession(session) {
		const { release: clientReleaseOption, environment: clientEnvironmentOption = DEFAULT_ENVIRONMENT } = this._options;
		if ("aggregates" in session) {
			const sessionAttrs = session.attrs || {};
			if (!sessionAttrs.release && !clientReleaseOption) {
				DEBUG_BUILD$3 && debug.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
				return;
			}
			sessionAttrs.release = sessionAttrs.release || clientReleaseOption;
			sessionAttrs.environment = sessionAttrs.environment || clientEnvironmentOption;
			session.attrs = sessionAttrs;
		} else {
			if (!session.release && !clientReleaseOption) {
				DEBUG_BUILD$3 && debug.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
				return;
			}
			session.release = session.release || clientReleaseOption;
			session.environment = session.environment || clientEnvironmentOption;
		}
		this.emit("beforeSendSession", session);
		const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
		this.sendEnvelope(env);
	}
	/**
	* Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
	*/
	recordDroppedEvent(reason, category, count = 1) {
		if (this._options.sendClientReports) {
			const key = `${reason}:${category}`;
			DEBUG_BUILD$3 && debug.log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ""}`);
			this._outcomes[key] = (this._outcomes[key] || 0) + count;
		}
	}
	/**
	* Register a callback for whenever a span is started.
	* Receives the span as argument.
	* @returns {() => void} A function that, when executed, removes the registered callback.
	*/
	/**
	* Register a hook on this client.
	*/
	on(hook, callback) {
		const hookCallbacks = this._hooks[hook] = this._hooks[hook] || /* @__PURE__ */ new Set();
		const uniqueCallback = (...args) => callback(...args);
		hookCallbacks.add(uniqueCallback);
		return () => {
			hookCallbacks.delete(uniqueCallback);
		};
	}
	/** Fire a hook whenever a span starts. */
	/**
	* Emit a hook that was previously registered via `on()`.
	*/
	emit(hook, ...rest) {
		const callbacks = this._hooks[hook];
		if (callbacks) callbacks.forEach((callback) => callback(...rest));
	}
	/**
	* Send an envelope to Sentry.
	*/
	async sendEnvelope(envelope) {
		this.emit("beforeEnvelope", envelope);
		if (this._isEnabled() && this._transport) try {
			return await this._transport.send(envelope);
		} catch (reason) {
			DEBUG_BUILD$3 && debug.error("Error while sending envelope:", reason);
			return {};
		}
		DEBUG_BUILD$3 && debug.error("Transport disabled");
		return {};
	}
	/** Setup integrations for this client. */
	_setupIntegrations() {
		const { integrations } = this._options;
		this._integrations = setupIntegrations(this, integrations);
		afterSetupIntegrations(this, integrations);
	}
	/** Updates existing session based on the provided event */
	_updateSessionFromEvent(session, event) {
		let crashed = event.level === "fatal";
		let errored = false;
		const exceptions = event.exception?.values;
		if (exceptions) {
			errored = true;
			crashed = false;
			for (const ex of exceptions) if (ex.mechanism?.handled === false) {
				crashed = true;
				break;
			}
		}
		const sessionNonTerminal = session.status === "ok";
		if (sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed) {
			updateSession(session, {
				...crashed && { status: "crashed" },
				errors: session.errors || Number(errored || crashed)
			});
			this.captureSession(session);
		}
	}
	/**
	* Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
	* "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
	*
	* @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
	* passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
	* `true`.
	* @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
	* `false` otherwise
	*/
	async _isClientDoneProcessing(timeout) {
		let ticked = 0;
		while (!timeout || ticked < timeout) {
			await new Promise((resolve) => setTimeout(resolve, 1));
			if (!this._numProcessing) return true;
			ticked++;
		}
		return false;
	}
	/** Determines whether this SDK is enabled and a transport is present. */
	_isEnabled() {
		return this.getOptions().enabled !== false && this._transport !== void 0;
	}
	/**
	* Adds common information to events.
	*
	* The information includes release and environment from `options`,
	* breadcrumbs and context (extra, tags and user) from the scope.
	*
	* Information that is already present in the event is never overwritten. For
	* nested objects, such as the context, keys are merged.
	*
	* @param event The original event.
	* @param hint May contain additional information about the original exception.
	* @param currentScope A scope containing event metadata.
	* @returns A new event with more information.
	*/
	_prepareEvent(event, hint, currentScope, isolationScope) {
		const options = this.getOptions();
		const integrations = Object.keys(this._integrations);
		if (!hint.integrations && integrations?.length) hint.integrations = integrations;
		this.emit("preprocessEvent", event, hint);
		if (!event.type) isolationScope.setLastEventId(event.event_id || hint.event_id);
		return prepareEvent(options, event, hint, currentScope, this, isolationScope).then((evt) => {
			if (evt === null) return evt;
			this.emit("postprocessEvent", evt, hint);
			evt.contexts = {
				trace: getTraceContextFromScope(currentScope),
				...evt.contexts
			};
			evt.sdkProcessingMetadata = {
				dynamicSamplingContext: getDynamicSamplingContextFromScope(this, currentScope),
				...evt.sdkProcessingMetadata
			};
			return evt;
		});
	}
	/**
	* Processes the event and logs an error in case of rejection
	* @param event
	* @param hint
	* @param scope
	*/
	_captureEvent(event, hint = {}, currentScope = getCurrentScope(), isolationScope = getIsolationScope()) {
		if (DEBUG_BUILD$3 && isErrorEvent(event)) debug.log(`Captured error event \`${getPossibleEventMessages(event)[0] || "<unknown>"}\``);
		return this._processEvent(event, hint, currentScope, isolationScope).then((finalEvent) => {
			return finalEvent.event_id;
		}, (reason) => {
			if (DEBUG_BUILD$3) if (_isDoNotSendEventError(reason)) debug.log(reason.message);
			else if (_isInternalError(reason)) debug.warn(reason.message);
			else debug.warn(reason);
		});
	}
	/**
	* Processes an event (either error or message) and sends it to Sentry.
	*
	* This also adds breadcrumbs and context information to the event. However,
	* platform specific meta data (such as the User's IP address) must be added
	* by the SDK implementor.
	*
	*
	* @param event The event to send to Sentry.
	* @param hint May contain additional information about the original exception.
	* @param currentScope A scope containing event metadata.
	* @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
	*/
	_processEvent(event, hint, currentScope, isolationScope) {
		const options = this.getOptions();
		const { sampleRate } = options;
		const isTransaction = isTransactionEvent(event);
		const isError = isErrorEvent(event);
		const beforeSendLabel = `before send for type \`${event.type || "error"}\``;
		const parsedSampleRate = typeof sampleRate === "undefined" ? void 0 : parseSampleRate(sampleRate);
		if (isError && typeof parsedSampleRate === "number" && Math.random() > parsedSampleRate) {
			this.recordDroppedEvent("sample_rate", "error");
			return rejectedSyncPromise(_makeDoNotSendEventError(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`));
		}
		const dataCategory = getDataCategoryByType(event.type);
		return this._prepareEvent(event, hint, currentScope, isolationScope).then((prepared) => {
			if (prepared === null) {
				this.recordDroppedEvent("event_processor", dataCategory);
				throw _makeDoNotSendEventError("An event processor returned `null`, will not send event.");
			}
			if (hint.data && hint.data.__sentry__ === true) return prepared;
			return _validateBeforeSendResult(processBeforeSend(this, options, prepared, hint), beforeSendLabel);
		}).then((processedEvent) => {
			if (processedEvent === null) {
				this.recordDroppedEvent("before_send", dataCategory);
				if (isTransaction) {
					const spanCount = 1 + (event.spans || []).length;
					this.recordDroppedEvent("before_send", "span", spanCount);
				}
				throw _makeDoNotSendEventError(`${beforeSendLabel} returned \`null\`, will not send event.`);
			}
			const session = currentScope.getSession() || isolationScope.getSession();
			if (isError && session) this._updateSessionFromEvent(session, processedEvent);
			if (isTransaction) {
				const droppedSpanCount = (processedEvent.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) - (processedEvent.spans ? processedEvent.spans.length : 0);
				if (droppedSpanCount > 0) this.recordDroppedEvent("before_send", "span", droppedSpanCount);
			}
			const transactionInfo = processedEvent.transaction_info;
			if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
				const source = "custom";
				processedEvent.transaction_info = {
					...transactionInfo,
					source
				};
			}
			this.sendEvent(processedEvent, hint);
			return processedEvent;
		}).then(null, (reason) => {
			if (_isDoNotSendEventError(reason) || _isInternalError(reason)) throw reason;
			this.captureException(reason, {
				mechanism: {
					handled: false,
					type: "internal"
				},
				data: { __sentry__: true },
				originalException: reason
			});
			throw _makeInternalError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`);
		});
	}
	/**
	* Occupies the client with processing and event
	*/
	_process(taskProducer, dataCategory) {
		this._numProcessing++;
		this._promiseBuffer.add(taskProducer).then((value) => {
			this._numProcessing--;
			return value;
		}, (reason) => {
			this._numProcessing--;
			if (reason === SENTRY_BUFFER_FULL_ERROR) this.recordDroppedEvent("queue_overflow", dataCategory);
			return reason;
		});
	}
	/**
	* Clears outcomes on this client and returns them.
	*/
	_clearOutcomes() {
		const outcomes = this._outcomes;
		this._outcomes = {};
		return Object.entries(outcomes).map(([key, quantity]) => {
			const [reason, category] = key.split(":");
			return {
				reason,
				category,
				quantity
			};
		});
	}
	/**
	* Sends client reports as an envelope.
	*/
	_flushOutcomes() {
		DEBUG_BUILD$3 && debug.log("Flushing outcomes...");
		const outcomes = this._clearOutcomes();
		if (outcomes.length === 0) {
			DEBUG_BUILD$3 && debug.log("No outcomes to send");
			return;
		}
		if (!this._dsn) {
			DEBUG_BUILD$3 && debug.log("No dsn provided, will not send outcomes");
			return;
		}
		DEBUG_BUILD$3 && debug.log("Sending outcomes:", outcomes);
		const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
		this.sendEnvelope(envelope);
	}
};
function getDataCategoryByType(type) {
	return type === "replay_event" ? "replay" : type || "error";
}
/**
* Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
*/
function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
	const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
	if (isThenable(beforeSendResult)) return beforeSendResult.then((event) => {
		if (!isPlainObject(event) && event !== null) throw _makeInternalError(invalidValueError);
		return event;
	}, (e) => {
		throw _makeInternalError(`${beforeSendLabel} rejected with ${e}`);
	});
	else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) throw _makeInternalError(invalidValueError);
	return beforeSendResult;
}
/**
* Process the matching `beforeSendXXX` callback.
*/
function processBeforeSend(client, options, event, hint) {
	const { beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options;
	let processedEvent = event;
	if (isErrorEvent(processedEvent) && beforeSend) return beforeSend(processedEvent, hint);
	if (isTransactionEvent(processedEvent)) {
		if (beforeSendSpan || ignoreSpans) {
			const rootSpanJson = convertTransactionEventToSpanJson(processedEvent);
			if (ignoreSpans?.length && shouldIgnoreSpan(rootSpanJson, ignoreSpans)) return null;
			if (beforeSendSpan) {
				const processedRootSpanJson = beforeSendSpan(rootSpanJson);
				if (!processedRootSpanJson) showSpanDropWarning();
				else processedEvent = merge(event, convertSpanJsonToTransactionEvent(processedRootSpanJson));
			}
			if (processedEvent.spans) {
				const processedSpans = [];
				const initialSpans = processedEvent.spans;
				for (const span of initialSpans) {
					if (ignoreSpans?.length && shouldIgnoreSpan(span, ignoreSpans)) {
						reparentChildSpans(initialSpans, span);
						continue;
					}
					if (beforeSendSpan) {
						const processedSpan = beforeSendSpan(span);
						if (!processedSpan) {
							showSpanDropWarning();
							processedSpans.push(span);
						} else processedSpans.push(processedSpan);
					} else processedSpans.push(span);
				}
				const droppedSpans = processedEvent.spans.length - processedSpans.length;
				if (droppedSpans) client.recordDroppedEvent("before_send", "span", droppedSpans);
				processedEvent.spans = processedSpans;
			}
		}
		if (beforeSendTransaction) {
			if (processedEvent.spans) {
				const spanCountBefore = processedEvent.spans.length;
				processedEvent.sdkProcessingMetadata = {
					...event.sdkProcessingMetadata,
					spanCountBeforeProcessing: spanCountBefore
				};
			}
			return beforeSendTransaction(processedEvent, hint);
		}
	}
	return processedEvent;
}
function isErrorEvent(event) {
	return event.type === void 0;
}
function isTransactionEvent(event) {
	return event.type === "transaction";
}
/**
* Estimate the size of a metric in bytes.
*
* @param metric - The metric to estimate the size of.
* @returns The estimated size of the metric in bytes.
*/
function estimateMetricSizeInBytes(metric) {
	let weight = 0;
	if (metric.name) weight += metric.name.length * 2;
	weight += 8;
	return weight + estimateAttributesSizeInBytes(metric.attributes);
}
/**
* Estimate the size of a log in bytes.
*
* @param log - The log to estimate the size of.
* @returns The estimated size of the log in bytes.
*/
function estimateLogSizeInBytes(log) {
	let weight = 0;
	if (log.message) weight += log.message.length * 2;
	return weight + estimateAttributesSizeInBytes(log.attributes);
}
/**
* Estimate the size of attributes in bytes.
*
* @param attributes - The attributes object to estimate the size of.
* @returns The estimated size of the attributes in bytes.
*/
function estimateAttributesSizeInBytes(attributes) {
	if (!attributes) return 0;
	let weight = 0;
	Object.values(attributes).forEach((value) => {
		if (Array.isArray(value)) weight += value.length * estimatePrimitiveSizeInBytes(value[0]);
		else if (isPrimitive(value)) weight += estimatePrimitiveSizeInBytes(value);
		else weight += 100;
	});
	return weight;
}
function estimatePrimitiveSizeInBytes(value) {
	if (typeof value === "string") return value.length * 2;
	else if (typeof value === "number") return 8;
	else if (typeof value === "boolean") return 4;
	return 0;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/sdk.js
/** A class object that can instantiate Client objects. */
/**
* Internal function to create a new SDK client instance. The client is
* installed and then bound to the current scope.
*
* @param clientClass The client class to instantiate.
* @param options Options to pass to the client.
*/
function initAndBind(clientClass, options) {
	if (options.debug === true) if (DEBUG_BUILD$3) debug.enable();
	else consoleSandbox(() => {
		console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
	});
	getCurrentScope().update(options.initialScope);
	const client = new clientClass(options);
	setCurrentClient(client);
	client.init();
	return client;
}
/**
* Make the given client the current client.
*/
function setCurrentClient(client) {
	getCurrentScope().setClient(client);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/url.js
/**
* Parses string form of URL into an object
* // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
* // intentionally using regex and not <a/> href parsing trick because React Native and other
* // environments where DOM might not be available
* @returns parsed URL object
*/
function parseUrl(url) {
	if (!url) return {};
	const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	if (!match) return {};
	const query = match[6] || "";
	const fragment = match[8] || "";
	return {
		host: match[4],
		path: match[5],
		protocol: match[2],
		search: query,
		hash: fragment,
		relative: match[5] + query + fragment
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/ipAddress.js
/**
* @internal
*/
function addAutoIpAddressToSession(session) {
	if ("aggregates" in session) {
		if (session.attrs?.["ip_address"] === void 0) session.attrs = {
			...session.attrs,
			ip_address: "{{auto}}"
		};
	} else if (session.ipAddress === void 0) session.ipAddress = "{{auto}}";
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js
/**
* A builder for the SDK metadata in the options for the SDK initialization.
*
* Note: This function is identical to `buildMetadata` in Remix and NextJS and SvelteKit.
* We don't extract it for bundle size reasons.
* @see https://github.com/getsentry/sentry-javascript/pull/7404
* @see https://github.com/getsentry/sentry-javascript/pull/4196
*
* If you make changes to this function consider updating the others as well.
*
* @param options SDK options object that gets mutated
* @param names list of package names
*/
function applySdkMetadata(options, name, names = [name], source = "npm") {
	const metadata = options._metadata || {};
	if (!metadata.sdk) metadata.sdk = {
		name: `sentry.javascript.${name}`,
		packages: names.map((name) => ({
			name: `${source}:@sentry/${name}`,
			version: SDK_VERSION
		})),
		version: SDK_VERSION
	};
	options._metadata = metadata;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/breadcrumbs.js
/**
* Default maximum number of breadcrumbs added to an event. Can be overwritten
* with {@link Options.maxBreadcrumbs}.
*/
var DEFAULT_BREADCRUMBS = 100;
/**
* Records a new breadcrumb which will be attached to future events.
*
* Breadcrumbs will be added to subsequent events to provide more context on
* user's actions prior to an error or crash.
*/
function addBreadcrumb(breadcrumb, hint) {
	const client = getClient();
	const isolationScope = getIsolationScope();
	if (!client) return;
	const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions();
	if (maxBreadcrumbs <= 0) return;
	const mergedBreadcrumb = {
		timestamp: dateTimestampInSeconds(),
		...breadcrumb
	};
	const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
	if (finalBreadcrumb === null) return;
	if (client.emit) client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
	isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/integrations/functiontostring.js
var originalFunctionToString;
var INTEGRATION_NAME$7 = "FunctionToString";
var SETUP_CLIENTS = /* @__PURE__ */ new WeakMap();
var _functionToStringIntegration = (() => {
	return {
		name: INTEGRATION_NAME$7,
		setupOnce() {
			originalFunctionToString = Function.prototype.toString;
			try {
				Function.prototype.toString = function(...args) {
					const originalFunction = getOriginalFunction(this);
					const context = SETUP_CLIENTS.has(getClient()) && originalFunction !== void 0 ? originalFunction : this;
					return originalFunctionToString.apply(context, args);
				};
			} catch {}
		},
		setup(client) {
			SETUP_CLIENTS.set(client, true);
		}
	};
});
/**
* Patch toString calls to return proper name for wrapped functions.
*
* ```js
* Sentry.init({
*   integrations: [
*     functionToStringIntegration(),
*   ],
* });
* ```
*/
var functionToStringIntegration = defineIntegration(_functionToStringIntegration);
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/integrations/eventFilters.js
var DEFAULT_IGNORE_ERRORS = [
	/^Script error\.?$/,
	/^Javascript error: Script error\.? on line 0$/,
	/^ResizeObserver loop completed with undelivered notifications.$/,
	/^Cannot redefine property: googletag$/,
	/^Can't find variable: gmo$/,
	/^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
	"can't redefine non-configurable property \"solana\"",
	"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
	"Can't find variable: _AutofillCallbackHandler",
	/^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
	/^Java exception was raised during method invocation$/
];
/** Options for the EventFilters integration */
var INTEGRATION_NAME$6 = "EventFilters";
/**
* An integration that filters out events (errors and transactions) based on:
*
* - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
* - (Errors) A list of error messages or urls/filenames passed in via
*   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
*   - The same options passed to the integration directly via @param options
* - (Transactions/Spans) A list of root span (transaction) names passed in via
*   - Top level Sentry.init option (`ignoreTransactions`)
*   - The same option passed to the integration directly via @param options
*
* Events filtered by this integration will not be sent to Sentry.
*/
var eventFiltersIntegration = defineIntegration((options = {}) => {
	let mergedOptions;
	return {
		name: INTEGRATION_NAME$6,
		setup(client) {
			mergedOptions = _mergeOptions(options, client.getOptions());
		},
		processEvent(event, _hint, client) {
			if (!mergedOptions) mergedOptions = _mergeOptions(options, client.getOptions());
			return _shouldDropEvent$1(event, mergedOptions) ? null : event;
		}
	};
});
/**
* An integration that filters out events (errors and transactions) based on:
*
* - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
* - (Errors) A list of error messages or urls/filenames passed in via
*   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
*   - The same options passed to the integration directly via @param options
* - (Transactions/Spans) A list of root span (transaction) names passed in via
*   - Top level Sentry.init option (`ignoreTransactions`)
*   - The same option passed to the integration directly via @param options
*
* Events filtered by this integration will not be sent to Sentry.
*
* @deprecated this integration was renamed and will be removed in a future major version.
* Use `eventFiltersIntegration` instead.
*/
var inboundFiltersIntegration = defineIntegration(((options = {}) => {
	return {
		...eventFiltersIntegration(options),
		name: "InboundFilters"
	};
}));
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
	return {
		allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
		denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
		ignoreErrors: [
			...internalOptions.ignoreErrors || [],
			...clientOptions.ignoreErrors || [],
			...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
		],
		ignoreTransactions: [...internalOptions.ignoreTransactions || [], ...clientOptions.ignoreTransactions || []]
	};
}
function _shouldDropEvent$1(event, options) {
	if (!event.type) {
		if (_isIgnoredError(event, options.ignoreErrors)) {
			DEBUG_BUILD$3 && debug.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${getEventDescription(event)}`);
			return true;
		}
		if (_isUselessError(event)) {
			DEBUG_BUILD$3 && debug.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${getEventDescription(event)}`);
			return true;
		}
		if (_isDeniedUrl(event, options.denyUrls)) {
			DEBUG_BUILD$3 && debug.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${getEventDescription(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
			return true;
		}
		if (!_isAllowedUrl(event, options.allowUrls)) {
			DEBUG_BUILD$3 && debug.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${getEventDescription(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
			return true;
		}
	} else if (event.type === "transaction") {
		if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
			DEBUG_BUILD$3 && debug.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${getEventDescription(event)}`);
			return true;
		}
	}
	return false;
}
__name(_shouldDropEvent$1, "_shouldDropEvent");
function _isIgnoredError(event, ignoreErrors) {
	if (!ignoreErrors?.length) return false;
	return getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
function _isIgnoredTransaction(event, ignoreTransactions) {
	if (!ignoreTransactions?.length) return false;
	const name = event.transaction;
	return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
}
function _isDeniedUrl(event, denyUrls) {
	if (!denyUrls?.length) return false;
	const url = _getEventFilterUrl(event);
	return !url ? false : stringMatchesSomePattern(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
	if (!allowUrls?.length) return true;
	const url = _getEventFilterUrl(event);
	return !url ? true : stringMatchesSomePattern(url, allowUrls);
}
function _getLastValidUrl(frames = []) {
	for (let i = frames.length - 1; i >= 0; i--) {
		const frame = frames[i];
		if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") return frame.filename || null;
	}
	return null;
}
function _getEventFilterUrl(event) {
	try {
		const frames = [...event.exception?.values ?? []].reverse().find((value) => value.mechanism?.parent_id === void 0 && value.stacktrace?.frames?.length)?.stacktrace?.frames;
		return frames ? _getLastValidUrl(frames) : null;
	} catch {
		DEBUG_BUILD$3 && debug.error(`Cannot extract url for event ${getEventDescription(event)}`);
		return null;
	}
}
function _isUselessError(event) {
	if (!event.exception?.values?.length) return false;
	return !event.message && !event.exception.values.some((value) => value.stacktrace || value.type && value.type !== "Error" || value.value);
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/aggregate-errors.js
/**
* Creates exceptions inside `event.exception.values` for errors that are nested on properties based on the `key` parameter.
*/
function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, key, limit, event, hint) {
	if (!event.exception?.values || !hint || !isInstanceOf(hint.originalException, Error)) return;
	const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
	if (originalException) event.exception.values = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, hint.originalException, key, event.exception.values, originalException, 0);
}
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
	if (prevExceptions.length >= limit + 1) return prevExceptions;
	let newExceptions = [...prevExceptions];
	if (isInstanceOf(error[key], Error)) {
		applyExceptionGroupFieldsForParentException(exception, exceptionId);
		const newException = exceptionFromErrorImplementation(parser, error[key]);
		const newExceptionId = newExceptions.length;
		applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
		newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error[key], key, [newException, ...newExceptions], newException, newExceptionId);
	}
	if (Array.isArray(error.errors)) error.errors.forEach((childError, i) => {
		if (isInstanceOf(childError, Error)) {
			applyExceptionGroupFieldsForParentException(exception, exceptionId);
			const newException = exceptionFromErrorImplementation(parser, childError);
			const newExceptionId = newExceptions.length;
			applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
			newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, childError, key, [newException, ...newExceptions], newException, newExceptionId);
		}
	});
	return newExceptions;
}
function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
	exception.mechanism = {
		handled: true,
		type: "auto.core.linked_errors",
		...exception.mechanism,
		...exception.type === "AggregateError" && { is_exception_group: true },
		exception_id: exceptionId
	};
}
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
	exception.mechanism = {
		handled: true,
		...exception.mechanism,
		type: "chained",
		source,
		exception_id: exceptionId,
		parent_id: parentId
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/instrument/console.js
/**
* Add an instrumentation handler for when a console.xxx method is called.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addConsoleInstrumentationHandler(handler) {
	const type = "console";
	addHandler(type, handler);
	maybeInstrument(type, instrumentConsole);
}
function instrumentConsole() {
	if (!("console" in GLOBAL_OBJ)) return;
	CONSOLE_LEVELS.forEach(function(level) {
		if (!(level in GLOBAL_OBJ.console)) return;
		fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
			originalConsoleMethods[level] = originalConsoleMethod;
			return function(...args) {
				triggerHandlers("console", {
					args,
					level
				});
				originalConsoleMethods[level]?.apply(GLOBAL_OBJ.console, args);
			};
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/severity.js
/**
* Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
*
* @param level String representation of desired `SeverityLevel`.
* @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
*/
function severityLevelFromString(level) {
	return level === "warn" ? "warning" : [
		"fatal",
		"error",
		"warning",
		"log",
		"info",
		"debug"
	].includes(level) ? level : "log";
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/integrations/dedupe.js
var INTEGRATION_NAME$5 = "Dedupe";
var _dedupeIntegration = (() => {
	let previousEvent;
	return {
		name: INTEGRATION_NAME$5,
		processEvent(currentEvent) {
			if (currentEvent.type) return currentEvent;
			try {
				if (_shouldDropEvent(currentEvent, previousEvent)) {
					DEBUG_BUILD$3 && debug.warn("Event dropped due to being a duplicate of previously captured event.");
					return null;
				}
			} catch {}
			return previousEvent = currentEvent;
		}
	};
});
/**
* Deduplication filter.
*/
var dedupeIntegration = defineIntegration(_dedupeIntegration);
/** only exported for tests. */
function _shouldDropEvent(currentEvent, previousEvent) {
	if (!previousEvent) return false;
	if (_isSameMessageEvent(currentEvent, previousEvent)) return true;
	if (_isSameExceptionEvent(currentEvent, previousEvent)) return true;
	return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
	const currentMessage = currentEvent.message;
	const previousMessage = previousEvent.message;
	if (!currentMessage && !previousMessage) return false;
	if (currentMessage && !previousMessage || !currentMessage && previousMessage) return false;
	if (currentMessage !== previousMessage) return false;
	if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
	if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
	return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
	const previousException = _getExceptionFromEvent(previousEvent);
	const currentException = _getExceptionFromEvent(currentEvent);
	if (!previousException || !currentException) return false;
	if (previousException.type !== currentException.type || previousException.value !== currentException.value) return false;
	if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
	if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
	return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
	let currentFrames = getFramesFromEvent(currentEvent);
	let previousFrames = getFramesFromEvent(previousEvent);
	if (!currentFrames && !previousFrames) return true;
	if (currentFrames && !previousFrames || !currentFrames && previousFrames) return false;
	currentFrames = currentFrames;
	previousFrames = previousFrames;
	if (previousFrames.length !== currentFrames.length) return false;
	for (let i = 0; i < previousFrames.length; i++) {
		const frameA = previousFrames[i];
		const frameB = currentFrames[i];
		if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) return false;
	}
	return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
	let currentFingerprint = currentEvent.fingerprint;
	let previousFingerprint = previousEvent.fingerprint;
	if (!currentFingerprint && !previousFingerprint) return true;
	if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) return false;
	currentFingerprint = currentFingerprint;
	previousFingerprint = previousFingerprint;
	try {
		return !!(currentFingerprint.join("") === previousFingerprint.join(""));
	} catch {
		return false;
	}
}
function _getExceptionFromEvent(event) {
	return event.exception?.values?.[0];
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/breadcrumb-log-level.js
/**
* Determine a breadcrumb's log level (only `warning` or `error`) based on an HTTP status code.
*/
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
	if (statusCode === void 0) return;
	else if (statusCode >= 400 && statusCode < 500) return "warning";
	else if (statusCode >= 500) return "error";
	else return;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/supports.js
var WINDOW$2 = GLOBAL_OBJ;
/**
* Tells whether current environment supports History API
* {@link supportsHistory}.
*
* @returns Answer to the given question.
*/
function supportsHistory() {
	return "history" in WINDOW$2 && !!WINDOW$2.history;
}
function _isFetchSupported() {
	if (!("fetch" in WINDOW$2)) return false;
	try {
		new Headers();
		new Request("data:,");
		new Response();
		return true;
	} catch {
		return false;
	}
}
/**
* isNative checks if the given function is a native implementation
*/
function isNativeFunction(func) {
	return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
* Tells whether current environment supports Fetch API natively
* {@link supportsNativeFetch}.
*
* @returns true if `window.fetch` is natively implemented, false otherwise
*/
function supportsNativeFetch() {
	if (typeof EdgeRuntime === "string") return true;
	if (!_isFetchSupported()) return false;
	if (isNativeFunction(WINDOW$2.fetch)) return true;
	let result = false;
	const doc = WINDOW$2.document;
	if (doc && typeof doc.createElement === "function") try {
		const sandbox = doc.createElement("iframe");
		sandbox.hidden = true;
		doc.head.appendChild(sandbox);
		if (sandbox.contentWindow?.fetch) result = isNativeFunction(sandbox.contentWindow.fetch);
		doc.head.removeChild(sandbox);
	} catch (err) {
		DEBUG_BUILD$3 && debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/instrument/fetch.js
/**
* Add an instrumentation handler for when a fetch request happens.
* The handler function is called once when the request starts and once when it ends,
* which can be identified by checking if it has an `endTimestamp`.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addFetchInstrumentationHandler(handler, skipNativeFetchCheck) {
	const type = "fetch";
	addHandler(type, handler);
	maybeInstrument(type, () => instrumentFetch(void 0, skipNativeFetchCheck));
}
function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
	if (skipNativeFetchCheck && !supportsNativeFetch()) return;
	fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
		return function(...args) {
			const virtualError = /* @__PURE__ */ new Error();
			const { method, url } = parseFetchArgs(args);
			const handlerData = {
				args,
				fetchData: {
					method,
					url
				},
				startTimestamp: timestampInSeconds() * 1e3,
				virtualError,
				headers: getHeadersFromFetchArgs(args)
			};
			if (!onFetchResolved) triggerHandlers("fetch", { ...handlerData });
			return originalFetch.apply(GLOBAL_OBJ, args).then(async (response) => {
				if (onFetchResolved) onFetchResolved(response);
				else triggerHandlers("fetch", {
					...handlerData,
					endTimestamp: timestampInSeconds() * 1e3,
					response
				});
				return response;
			}, (error) => {
				triggerHandlers("fetch", {
					...handlerData,
					endTimestamp: timestampInSeconds() * 1e3,
					error
				});
				if (isError(error) && error.stack === void 0) {
					error.stack = virtualError.stack;
					addNonEnumerableProperty(error, "framesToPop", 1);
				}
				if (error instanceof TypeError && (error.message === "Failed to fetch" || error.message === "Load failed" || error.message === "NetworkError when attempting to fetch resource.")) try {
					const url = new URL(handlerData.fetchData.url);
					error.message = `${error.message} (${url.host})`;
				} catch {}
				throw error;
			});
		};
	});
}
function hasProp(obj, prop) {
	return !!obj && typeof obj === "object" && !!obj[prop];
}
function getUrlFromResource(resource) {
	if (typeof resource === "string") return resource;
	if (!resource) return "";
	if (hasProp(resource, "url")) return resource.url;
	if (resource.toString) return resource.toString();
	return "";
}
/**
* Parses the fetch arguments to find the used Http method and the url of the request.
* Exported for tests only.
*/
function parseFetchArgs(fetchArgs) {
	if (fetchArgs.length === 0) return {
		method: "GET",
		url: ""
	};
	if (fetchArgs.length === 2) {
		const [resource, options] = fetchArgs;
		return {
			url: getUrlFromResource(resource),
			method: hasProp(options, "method") ? String(options.method).toUpperCase() : isRequest(resource) && hasProp(resource, "method") ? String(resource.method).toUpperCase() : "GET"
		};
	}
	const arg = fetchArgs[0];
	return {
		url: getUrlFromResource(arg),
		method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
	};
}
function getHeadersFromFetchArgs(fetchArgs) {
	const [requestArgument, optionsArgument] = fetchArgs;
	try {
		if (typeof optionsArgument === "object" && optionsArgument !== null && "headers" in optionsArgument && optionsArgument.headers) return new Headers(optionsArgument.headers);
		if (isRequest(requestArgument)) return new Headers(requestArgument.headers);
	} catch {}
}
//#endregion
//#region node_modules/.pnpm/@sentry+core@10.32.1/node_modules/@sentry/core/build/esm/utils/env.js
/**
* Get source of SDK.
*/
function getSDKSource() {
	return "npm";
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/helpers.js
var WINDOW$1 = GLOBAL_OBJ;
var ignoreOnError = 0;
/**
* @hidden
*/
function shouldIgnoreOnError() {
	return ignoreOnError > 0;
}
/**
* @hidden
*/
function ignoreNextOnError() {
	ignoreOnError++;
	setTimeout(() => {
		ignoreOnError--;
	});
}
/**
* Instruments the given function and sends an event to Sentry every time the
* function throws an exception.
*
* @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
* has a correct `this` context.
* @returns The wrapped function.
* @hidden
*/
function wrap(fn, options = {}) {
	function isFunction(fn) {
		return typeof fn === "function";
	}
	if (!isFunction(fn)) return fn;
	try {
		const wrapper = fn.__sentry_wrapped__;
		if (wrapper) if (typeof wrapper === "function") return wrapper;
		else return fn;
		if (getOriginalFunction(fn)) return fn;
	} catch {
		return fn;
	}
	const sentryWrapped = function(...args) {
		try {
			const wrappedArguments = args.map((arg) => wrap(arg, options));
			return fn.apply(this, wrappedArguments);
		} catch (ex) {
			ignoreNextOnError();
			withScope((scope) => {
				scope.addEventProcessor((event) => {
					if (options.mechanism) {
						addExceptionTypeValue(event, void 0, void 0);
						addExceptionMechanism(event, options.mechanism);
					}
					event.extra = {
						...event.extra,
						arguments: args
					};
					return event;
				});
				captureException(ex);
			});
			throw ex;
		}
	};
	try {
		for (const property in fn) if (Object.prototype.hasOwnProperty.call(fn, property)) sentryWrapped[property] = fn[property];
	} catch {}
	markFunctionWrapped(sentryWrapped, fn);
	addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
	try {
		if (Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable) Object.defineProperty(sentryWrapped, "name", { get() {
			return fn.name;
		} });
	} catch {}
	return sentryWrapped;
}
/**
* Get HTTP request data from the current page.
*/
function getHttpRequestData() {
	const url = getLocationHref();
	const { referrer } = WINDOW$1.document || {};
	const { userAgent } = WINDOW$1.navigator || {};
	return {
		url,
		headers: {
			...referrer && { Referer: referrer },
			...userAgent && { "User-Agent": userAgent }
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/eventbuilder.js
/**
* This function creates an exception from a JavaScript Error
*/
function exceptionFromError(stackParser, ex) {
	const frames = parseStackFrames(stackParser, ex);
	const exception = {
		type: extractType(ex),
		value: extractMessage(ex)
	};
	if (frames.length) exception.stacktrace = { frames };
	if (exception.type === void 0 && exception.value === "") exception.value = "Unrecoverable error caught";
	return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
	const normalizeDepth = getClient()?.getOptions().normalizeDepth;
	const errorFromProp = getErrorPropertyFromObject(exception);
	const extra = { __serialized__: normalizeToSize(exception, normalizeDepth) };
	if (errorFromProp) return {
		exception: { values: [exceptionFromError(stackParser, errorFromProp)] },
		extra
	};
	const event = {
		exception: { values: [{
			type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
			value: getNonErrorObjectExceptionValue(exception, { isUnhandledRejection })
		}] },
		extra
	};
	if (syntheticException) {
		const frames = parseStackFrames(stackParser, syntheticException);
		if (frames.length) event.exception.values[0].stacktrace = { frames };
	}
	return event;
}
function eventFromError(stackParser, ex) {
	return { exception: { values: [exceptionFromError(stackParser, ex)] } };
}
/** Parses stack frames from an error */
function parseStackFrames(stackParser, ex) {
	const stacktrace = ex.stacktrace || ex.stack || "";
	const skipLines = getSkipFirstStackStringLines(ex);
	const framesToPop = getPopFirstTopFrames(ex);
	try {
		return stackParser(stacktrace, skipLines, framesToPop);
	} catch {}
	return [];
}
var reactMinifiedRegexp = /Minified React error #\d+;/i;
/**
* Certain known React errors contain links that would be falsely
* parsed as frames. This function check for these errors and
* returns number of the stack string lines to skip.
*/
function getSkipFirstStackStringLines(ex) {
	if (ex && reactMinifiedRegexp.test(ex.message)) return 1;
	return 0;
}
/**
* If error has `framesToPop` property, it means that the
* creator tells us the first x frames will be useless
* and should be discarded. Typically error from wrapper function
* which don't point to the actual location in the developer's code.
*
* Example: https://github.com/zertosh/invariant/blob/master/invariant.js#L46
*/
function getPopFirstTopFrames(ex) {
	if (typeof ex.framesToPop === "number") return ex.framesToPop;
	return 0;
}
function isWebAssemblyException(exception) {
	if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") return exception instanceof WebAssembly.Exception;
	else return false;
}
/**
* Extracts from errors what we use as the exception `type` in error events.
*
* Usually, this is the `name` property on Error objects but WASM errors need to be treated differently.
*/
function extractType(ex) {
	const name = ex?.name;
	if (!name && isWebAssemblyException(ex)) return ex.message && Array.isArray(ex.message) && ex.message.length == 2 ? ex.message[0] : "WebAssembly.Exception";
	return name;
}
/**
* There are cases where stacktrace.message is an Event object
* https://github.com/getsentry/sentry-javascript/issues/1949
* In this specific case we try to extract stacktrace.message.error.message
*/
function extractMessage(ex) {
	const message = ex?.message;
	if (isWebAssemblyException(ex)) {
		if (Array.isArray(ex.message) && ex.message.length == 2) return ex.message[1];
		return "wasm exception";
	}
	if (!message) return "No error message";
	if (message.error && typeof message.error.message === "string") return message.error.message;
	return message;
}
/**
* Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
* @hidden
*/
function eventFromException(stackParser, exception, hint, attachStacktrace) {
	const event = eventFromUnknownInput(stackParser, exception, hint?.syntheticException || void 0, attachStacktrace);
	addExceptionMechanism(event);
	event.level = "error";
	if (hint?.event_id) event.event_id = hint.event_id;
	return resolvedSyncPromise(event);
}
/**
* Builds and Event from a Message
* @hidden
*/
function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
	const event = eventFromString(stackParser, message, hint?.syntheticException || void 0, attachStacktrace);
	event.level = level;
	if (hint?.event_id) event.event_id = hint.event_id;
	return resolvedSyncPromise(event);
}
/**
* @hidden
*/
function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
	let event;
	if (isErrorEvent$1(exception) && exception.error) return eventFromError(stackParser, exception.error);
	if (isDOMError(exception) || isDOMException(exception)) {
		const domException = exception;
		if ("stack" in exception) event = eventFromError(stackParser, exception);
		else {
			const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
			const message = domException.message ? `${name}: ${domException.message}` : name;
			event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
			addExceptionTypeValue(event, message);
		}
		if ("code" in domException) event.tags = {
			...event.tags,
			"DOMException.code": `${domException.code}`
		};
		return event;
	}
	if (isError(exception)) return eventFromError(stackParser, exception);
	if (isPlainObject(exception) || isEvent(exception)) {
		event = eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection);
		addExceptionMechanism(event, { synthetic: true });
		return event;
	}
	event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
	addExceptionTypeValue(event, `${exception}`, void 0);
	addExceptionMechanism(event, { synthetic: true });
	return event;
}
function eventFromString(stackParser, message, syntheticException, attachStacktrace) {
	const event = {};
	if (attachStacktrace && syntheticException) {
		const frames = parseStackFrames(stackParser, syntheticException);
		if (frames.length) event.exception = { values: [{
			value: message,
			stacktrace: { frames }
		}] };
		addExceptionMechanism(event, { synthetic: true });
	}
	if (isParameterizedString(message)) {
		const { __sentry_template_string__, __sentry_template_values__ } = message;
		event.logentry = {
			message: __sentry_template_string__,
			params: __sentry_template_values__
		};
		return event;
	}
	event.message = message;
	return event;
}
function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
	const keys = extractExceptionKeysForMessage(exception);
	const captureType = isUnhandledRejection ? "promise rejection" : "exception";
	if (isErrorEvent$1(exception)) return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
	if (isEvent(exception)) return `Event \`${getObjectClassName(exception)}\` (type=${exception.type}) captured as ${captureType}`;
	return `Object captured as ${captureType} with keys: ${keys}`;
}
function getObjectClassName(obj) {
	try {
		const prototype = Object.getPrototypeOf(obj);
		return prototype ? prototype.constructor.name : void 0;
	} catch {}
}
/** If a plain object has a property that is an `Error`, return this error. */
function getErrorPropertyFromObject(obj) {
	for (const prop in obj) if (Object.prototype.hasOwnProperty.call(obj, prop)) {
		const value = obj[prop];
		if (value instanceof Error) return value;
	}
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/client.js
/**
* A magic string that build tooling can leverage in order to inject a release value into the SDK.
*/
/**
* The Sentry Browser SDK Client.
*
* @see BrowserOptions for documentation on configuration options.
* @see SentryClient for usage documentation.
*/
var BrowserClient = class extends Client {
	/**
	* Creates a new Browser SDK instance.
	*
	* @param options Configuration options for this SDK.
	*/
	constructor(options) {
		const opts = applyDefaultOptions(options);
		applySdkMetadata(opts, "browser", ["browser"], WINDOW$1.SENTRY_SDK_SOURCE || getSDKSource());
		if (opts._metadata?.sdk) opts._metadata.sdk.settings = {
			infer_ip: opts.sendDefaultPii ? "auto" : "never",
			...opts._metadata.sdk.settings
		};
		super(opts);
		const { sendDefaultPii, sendClientReports, enableLogs, _experiments, enableMetrics: enableMetricsOption } = this._options;
		const enableMetrics = enableMetricsOption ?? _experiments?.enableMetrics ?? true;
		if (WINDOW$1.document && (sendClientReports || enableLogs || enableMetrics)) WINDOW$1.document.addEventListener("visibilitychange", () => {
			if (WINDOW$1.document.visibilityState === "hidden") {
				if (sendClientReports) this._flushOutcomes();
				if (enableLogs) _INTERNAL_flushLogsBuffer(this);
				if (enableMetrics) _INTERNAL_flushMetricsBuffer(this);
			}
		});
		if (sendDefaultPii) this.on("beforeSendSession", addAutoIpAddressToSession);
	}
	/**
	* @inheritDoc
	*/
	eventFromException(exception, hint) {
		return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
	}
	/**
	* @inheritDoc
	*/
	eventFromMessage(message, level = "info", hint) {
		return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
	}
	/**
	* @inheritDoc
	*/
	_prepareEvent(event, hint, currentScope, isolationScope) {
		event.platform = event.platform || "javascript";
		return super._prepareEvent(event, hint, currentScope, isolationScope);
	}
};
/** Exported only for tests. */
function applyDefaultOptions(optionsArg) {
	return {
		release: typeof __SENTRY_RELEASE__ === "string" ? __SENTRY_RELEASE__ : WINDOW$1.SENTRY_RELEASE?.id,
		sendClientReports: true,
		parentSpanIsAlwaysRootSpan: true,
		...optionsArg
	};
}
//#endregion
//#region node_modules/.pnpm/@sentry-internal+browser-utils@10.32.1/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD$2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/.pnpm/@sentry-internal+browser-utils@10.32.1/node_modules/@sentry-internal/browser-utils/build/esm/types.js
var WINDOW = GLOBAL_OBJ;
//#endregion
//#region node_modules/.pnpm/@sentry-internal+browser-utils@10.32.1/node_modules/@sentry-internal/browser-utils/build/esm/instrument/dom.js
var DEBOUNCE_DURATION = 1e3;
var debounceTimerID;
var lastCapturedEventType;
var lastCapturedEventTargetId;
/**
* Add an instrumentation handler for when a click or a keypress happens.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addClickKeypressInstrumentationHandler(handler) {
	const type = "dom";
	addHandler(type, handler);
	maybeInstrument(type, instrumentDOM);
}
/** Exported for tests only. */
function instrumentDOM() {
	if (!WINDOW.document) return;
	const triggerDOMHandler = triggerHandlers.bind(null, "dom");
	const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
	WINDOW.document.addEventListener("click", globalDOMEventHandler, false);
	WINDOW.document.addEventListener("keypress", globalDOMEventHandler, false);
	["EventTarget", "Node"].forEach((target) => {
		const proto = WINDOW[target]?.prototype;
		if (!proto?.hasOwnProperty?.("addEventListener")) return;
		fill(proto, "addEventListener", function(originalAddEventListener) {
			return function(type, listener, options) {
				if (type === "click" || type == "keypress") try {
					const handlers = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
					const handlerForType = handlers[type] = handlers[type] || { refCount: 0 };
					if (!handlerForType.handler) {
						const handler = makeDOMEventHandler(triggerDOMHandler);
						handlerForType.handler = handler;
						originalAddEventListener.call(this, type, handler, options);
					}
					handlerForType.refCount++;
				} catch {}
				return originalAddEventListener.call(this, type, listener, options);
			};
		});
		fill(proto, "removeEventListener", function(originalRemoveEventListener) {
			return function(type, listener, options) {
				if (type === "click" || type == "keypress") try {
					const handlers = this.__sentry_instrumentation_handlers__ || {};
					const handlerForType = handlers[type];
					if (handlerForType) {
						handlerForType.refCount--;
						if (handlerForType.refCount <= 0) {
							originalRemoveEventListener.call(this, type, handlerForType.handler, options);
							handlerForType.handler = void 0;
							delete handlers[type];
						}
						if (Object.keys(handlers).length === 0) delete this.__sentry_instrumentation_handlers__;
					}
				} catch {}
				return originalRemoveEventListener.call(this, type, listener, options);
			};
		});
	});
}
/**
* Check whether the event is similar to the last captured one. For example, two click events on the same button.
*/
function isSimilarToLastCapturedEvent(event) {
	if (event.type !== lastCapturedEventType) return false;
	try {
		if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) return false;
	} catch {}
	return true;
}
/**
* Decide whether an event should be captured.
* @param event event to be captured
*/
function shouldSkipDOMEvent(eventType, target) {
	if (eventType !== "keypress") return false;
	if (!target?.tagName) return true;
	if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return false;
	return true;
}
/**
* Wraps addEventListener to capture UI breadcrumbs
*/
function makeDOMEventHandler(handler, globalListener = false) {
	return (event) => {
		if (!event || event["_sentryCaptured"]) return;
		const target = getEventTarget(event);
		if (shouldSkipDOMEvent(event.type, target)) return;
		addNonEnumerableProperty(event, "_sentryCaptured", true);
		if (target && !target._sentryId) addNonEnumerableProperty(target, "_sentryId", uuid4());
		const name = event.type === "keypress" ? "input" : event.type;
		if (!isSimilarToLastCapturedEvent(event)) {
			handler({
				event,
				name,
				global: globalListener
			});
			lastCapturedEventType = event.type;
			lastCapturedEventTargetId = target ? target._sentryId : void 0;
		}
		clearTimeout(debounceTimerID);
		debounceTimerID = WINDOW.setTimeout(() => {
			lastCapturedEventTargetId = void 0;
			lastCapturedEventType = void 0;
		}, DEBOUNCE_DURATION);
	};
}
function getEventTarget(event) {
	try {
		return event.target;
	} catch {
		return null;
	}
}
//#endregion
//#region node_modules/.pnpm/@sentry-internal+browser-utils@10.32.1/node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js
var lastHref;
/**
* Add an instrumentation handler for when a fetch request happens.
* The handler function is called once when the request starts and once when it ends,
* which can be identified by checking if it has an `endTimestamp`.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addHistoryInstrumentationHandler(handler) {
	const type = "history";
	addHandler(type, handler);
	maybeInstrument(type, instrumentHistory);
}
/**
* Exported just for testing
*/
function instrumentHistory() {
	WINDOW.addEventListener("popstate", () => {
		const to = WINDOW.location.href;
		const from = lastHref;
		lastHref = to;
		if (from === to) return;
		triggerHandlers("history", {
			from,
			to
		});
	});
	if (!supportsHistory()) return;
	function historyReplacementFunction(originalHistoryFunction) {
		return function(...args) {
			const url = args.length > 2 ? args[2] : void 0;
			if (url) {
				const from = lastHref;
				const to = getAbsoluteUrl(String(url));
				lastHref = to;
				if (from === to) return originalHistoryFunction.apply(this, args);
				triggerHandlers("history", {
					from,
					to
				});
			}
			return originalHistoryFunction.apply(this, args);
		};
	}
	fill(WINDOW.history, "pushState", historyReplacementFunction);
	fill(WINDOW.history, "replaceState", historyReplacementFunction);
}
function getAbsoluteUrl(urlOrPath) {
	try {
		return new URL(urlOrPath, WINDOW.location.origin).toString();
	} catch {
		return urlOrPath;
	}
}
//#endregion
//#region node_modules/.pnpm/@sentry-internal+browser-utils@10.32.1/node_modules/@sentry-internal/browser-utils/build/esm/getNativeImplementation.js
/**
* We generally want to use window.fetch / window.setTimeout.
* However, in some cases this may be wrapped (e.g. by Zone.js for Angular),
* so we try to get an unpatched version of this from a sandboxed iframe.
*/
var cachedImplementations = {};
/**
* Get the native implementation of a browser function.
*
* This can be used to ensure we get an unwrapped version of a function, in cases where a wrapped function can lead to problems.
*
* The following methods can be retrieved:
* - `setTimeout`: This can be wrapped by e.g. Angular, causing change detection to be triggered.
* - `fetch`: This can be wrapped by e.g. ad-blockers, causing an infinite loop when a request is blocked.
*/
function getNativeImplementation(name) {
	const cached = cachedImplementations[name];
	if (cached) return cached;
	let impl = WINDOW[name];
	if (isNativeFunction(impl)) return cachedImplementations[name] = impl.bind(WINDOW);
	const document = WINDOW.document;
	if (document && typeof document.createElement === "function") try {
		const sandbox = document.createElement("iframe");
		sandbox.hidden = true;
		document.head.appendChild(sandbox);
		const contentWindow = sandbox.contentWindow;
		if (contentWindow?.[name]) impl = contentWindow[name];
		document.head.removeChild(sandbox);
	} catch (e) {
		DEBUG_BUILD$2 && debug.warn(`Could not create sandbox iframe for ${name} check, bailing to window.${name}: `, e);
	}
	if (!impl) return impl;
	return cachedImplementations[name] = impl.bind(WINDOW);
}
/** Clear a cached implementation. */
function clearCachedImplementation(name) {
	cachedImplementations[name] = void 0;
}
//#endregion
//#region node_modules/.pnpm/@sentry-internal+browser-utils@10.32.1/node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js
var SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
/**
* Add an instrumentation handler for when an XHR request happens.
* The handler function is called once when the request starts and once when it ends,
* which can be identified by checking if it has an `endTimestamp`.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addXhrInstrumentationHandler(handler) {
	const type = "xhr";
	addHandler(type, handler);
	maybeInstrument(type, instrumentXHR);
}
/** Exported only for tests. */
function instrumentXHR() {
	if (!WINDOW.XMLHttpRequest) return;
	const xhrproto = XMLHttpRequest.prototype;
	xhrproto.open = new Proxy(xhrproto.open, { apply(originalOpen, xhrOpenThisArg, xhrOpenArgArray) {
		const virtualError = /* @__PURE__ */ new Error();
		const startTimestamp = timestampInSeconds() * 1e3;
		const method = isString(xhrOpenArgArray[0]) ? xhrOpenArgArray[0].toUpperCase() : void 0;
		const url = parseXhrUrlArg(xhrOpenArgArray[1]);
		if (!method || !url) return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
		xhrOpenThisArg[SENTRY_XHR_DATA_KEY] = {
			method,
			url,
			request_headers: {}
		};
		if (method === "POST" && url.match(/sentry_key/)) xhrOpenThisArg.__sentry_own_request__ = true;
		const onreadystatechangeHandler = () => {
			const xhrInfo = xhrOpenThisArg[SENTRY_XHR_DATA_KEY];
			if (!xhrInfo) return;
			if (xhrOpenThisArg.readyState === 4) {
				try {
					xhrInfo.status_code = xhrOpenThisArg.status;
				} catch {}
				triggerHandlers("xhr", {
					endTimestamp: timestampInSeconds() * 1e3,
					startTimestamp,
					xhr: xhrOpenThisArg,
					virtualError
				});
			}
		};
		if ("onreadystatechange" in xhrOpenThisArg && typeof xhrOpenThisArg.onreadystatechange === "function") xhrOpenThisArg.onreadystatechange = new Proxy(xhrOpenThisArg.onreadystatechange, { apply(originalOnreadystatechange, onreadystatechangeThisArg, onreadystatechangeArgArray) {
			onreadystatechangeHandler();
			return originalOnreadystatechange.apply(onreadystatechangeThisArg, onreadystatechangeArgArray);
		} });
		else xhrOpenThisArg.addEventListener("readystatechange", onreadystatechangeHandler);
		xhrOpenThisArg.setRequestHeader = new Proxy(xhrOpenThisArg.setRequestHeader, { apply(originalSetRequestHeader, setRequestHeaderThisArg, setRequestHeaderArgArray) {
			const [header, value] = setRequestHeaderArgArray;
			const xhrInfo = setRequestHeaderThisArg[SENTRY_XHR_DATA_KEY];
			if (xhrInfo && isString(header) && isString(value)) xhrInfo.request_headers[header.toLowerCase()] = value;
			return originalSetRequestHeader.apply(setRequestHeaderThisArg, setRequestHeaderArgArray);
		} });
		return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
	} });
	xhrproto.send = new Proxy(xhrproto.send, { apply(originalSend, sendThisArg, sendArgArray) {
		const sentryXhrData = sendThisArg[SENTRY_XHR_DATA_KEY];
		if (!sentryXhrData) return originalSend.apply(sendThisArg, sendArgArray);
		if (sendArgArray[0] !== void 0) sentryXhrData.body = sendArgArray[0];
		triggerHandlers("xhr", {
			startTimestamp: timestampInSeconds() * 1e3,
			xhr: sendThisArg
		});
		return originalSend.apply(sendThisArg, sendArgArray);
	} });
}
/**
* Parses the URL argument of a XHR method to a string.
*
* See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open#url
* url: A string or any other object with a stringifier — including a URL object — that provides the URL of the resource to send the request to.
*
* @param url - The URL argument of an XHR method
* @returns The parsed URL string or undefined if the URL is invalid
*/
function parseXhrUrlArg(url) {
	if (isString(url)) return url;
	try {
		return url.toString();
	} catch {}
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/transports/fetch.js
var DEFAULT_BROWSER_TRANSPORT_BUFFER_SIZE = 40;
/**
* Creates a Transport that uses the Fetch API to send events to Sentry.
*/
function makeFetchTransport(options, nativeFetch = getNativeImplementation("fetch")) {
	let pendingBodySize = 0;
	let pendingCount = 0;
	async function makeRequest(request) {
		const requestSize = request.body.length;
		pendingBodySize += requestSize;
		pendingCount++;
		const requestOptions = {
			body: request.body,
			method: "POST",
			referrerPolicy: "strict-origin",
			headers: options.headers,
			keepalive: pendingBodySize <= 6e4 && pendingCount < 15,
			...options.fetchOptions
		};
		try {
			const response = await nativeFetch(options.url, requestOptions);
			return {
				statusCode: response.status,
				headers: {
					"x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
					"retry-after": response.headers.get("Retry-After")
				}
			};
		} catch (e) {
			clearCachedImplementation("fetch");
			throw e;
		} finally {
			pendingBodySize -= requestSize;
			pendingCount--;
		}
	}
	return createTransport(options, makeRequest, makePromiseBuffer(options.bufferSize || DEFAULT_BROWSER_TRANSPORT_BUFFER_SIZE));
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/stack-parsers.js
var CHROME_PRIORITY = 30;
var GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
	const frame = {
		filename,
		function: func === "<anonymous>" ? "?" : func,
		in_app: true
	};
	if (lineno !== void 0) frame.lineno = lineno;
	if (colno !== void 0) frame.colno = colno;
	return frame;
}
var chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chromeDataUriRegex = /at (.+?) ?\(data:(.+?),/;
var chromeStackParserFn = (line) => {
	const dataUriMatch = line.match(chromeDataUriRegex);
	if (dataUriMatch) return {
		filename: `<data:${dataUriMatch[2]}>`,
		function: dataUriMatch[1]
	};
	const noFnParts = chromeRegexNoFnName.exec(line);
	if (noFnParts) {
		const [, filename, line, col] = noFnParts;
		return createFrame(filename, "?", +line, +col);
	}
	const parts = chromeRegex.exec(line);
	if (parts) {
		if (parts[2] && parts[2].indexOf("eval") === 0) {
			const subMatch = chromeEvalRegex.exec(parts[2]);
			if (subMatch) {
				parts[2] = subMatch[1];
				parts[3] = subMatch[2];
				parts[4] = subMatch[3];
			}
		}
		const [func, filename] = extractSafariExtensionDetails(parts[1] || "?", parts[2]);
		return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
	}
};
var chromeStackLineParser = [CHROME_PRIORITY, chromeStackParserFn];
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var gecko = (line) => {
	const parts = geckoREgex.exec(line);
	if (parts) {
		if (parts[3] && parts[3].indexOf(" > eval") > -1) {
			const subMatch = geckoEvalRegex.exec(parts[3]);
			if (subMatch) {
				parts[1] = parts[1] || "eval";
				parts[3] = subMatch[1];
				parts[4] = subMatch[2];
				parts[5] = "";
			}
		}
		let filename = parts[3];
		let func = parts[1] || "?";
		[func, filename] = extractSafariExtensionDetails(func, filename);
		return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
	}
};
var defaultStackParser = createStackParser(...[chromeStackLineParser, [GECKO_PRIORITY, gecko]]);
/**
* Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
* What it means, is that instead of format like:
*
* Error: wat
*   at function@url:row:col
*   at function@url:row:col
*   at function@url:row:col
*
* it produces something like:
*
*   function@url:row:col
*   function@url:row:col
*   function@url:row:col
*
* Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
* This function is extracted so that we can use it in both places without duplicating the logic.
* Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
* and fix this case seems like an impossible, or at least way too time-consuming task.
*/
var extractSafariExtensionDetails = (func, filename) => {
	const isSafariExtension = func.indexOf("safari-extension") !== -1;
	const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
	return isSafariExtension || isSafariWebExtension ? [func.indexOf("@") !== -1 ? func.split("@")[0] : "?", isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`] : [func, filename];
};
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/integrations/breadcrumbs.js
/** maxStringLength gets capped to prevent 100 breadcrumbs exceeding 1MB event payload size */
var MAX_ALLOWED_STRING_LENGTH = 1024;
var INTEGRATION_NAME$4 = "Breadcrumbs";
var _breadcrumbsIntegration = ((options = {}) => {
	const _options = {
		console: true,
		dom: true,
		fetch: true,
		history: true,
		sentry: true,
		xhr: true,
		...options
	};
	return {
		name: INTEGRATION_NAME$4,
		setup(client) {
			if (_options.console) addConsoleInstrumentationHandler(_getConsoleBreadcrumbHandler(client));
			if (_options.dom) addClickKeypressInstrumentationHandler(_getDomBreadcrumbHandler(client, _options.dom));
			if (_options.xhr) addXhrInstrumentationHandler(_getXhrBreadcrumbHandler(client));
			if (_options.fetch) addFetchInstrumentationHandler(_getFetchBreadcrumbHandler(client));
			if (_options.history) addHistoryInstrumentationHandler(_getHistoryBreadcrumbHandler(client));
			if (_options.sentry) client.on("beforeSendEvent", _getSentryBreadcrumbHandler(client));
		}
	};
});
var breadcrumbsIntegration = defineIntegration(_breadcrumbsIntegration);
/**
* Adds a breadcrumb for Sentry events or transactions if this option is enabled.
*/
function _getSentryBreadcrumbHandler(client) {
	return function addSentryBreadcrumb(event) {
		if (getClient() !== client) return;
		addBreadcrumb({
			category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
			event_id: event.event_id,
			level: event.level,
			message: getEventDescription(event)
		}, { event });
	};
}
/**
* A HOC that creates a function that creates breadcrumbs from DOM API calls.
* This is a HOC so that we get access to dom options in the closure.
*/
function _getDomBreadcrumbHandler(client, dom) {
	return function _innerDomBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		let target;
		let componentName;
		let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
		let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
		if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
			DEBUG_BUILD$1 && debug.warn(`\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`);
			maxStringLength = MAX_ALLOWED_STRING_LENGTH;
		}
		if (typeof keyAttrs === "string") keyAttrs = [keyAttrs];
		try {
			const event = handlerData.event;
			const element = _isEvent(event) ? event.target : event;
			target = htmlTreeAsString(element, {
				keyAttrs,
				maxStringLength
			});
			componentName = getComponentName(element);
		} catch {
			target = "<unknown>";
		}
		if (target.length === 0) return;
		const breadcrumb = {
			category: `ui.${handlerData.name}`,
			message: target
		};
		if (componentName) breadcrumb.data = { "ui.component_name": componentName };
		addBreadcrumb(breadcrumb, {
			event: handlerData.event,
			name: handlerData.name,
			global: handlerData.global
		});
	};
}
/**
* Creates breadcrumbs from console API calls
*/
function _getConsoleBreadcrumbHandler(client) {
	return function _consoleBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		const breadcrumb = {
			category: "console",
			data: {
				arguments: handlerData.args,
				logger: "console"
			},
			level: severityLevelFromString(handlerData.level),
			message: safeJoin(handlerData.args, " ")
		};
		if (handlerData.level === "assert") if (handlerData.args[0] === false) {
			breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
			breadcrumb.data.arguments = handlerData.args.slice(1);
		} else return;
		addBreadcrumb(breadcrumb, {
			input: handlerData.args,
			level: handlerData.level
		});
	};
}
/**
* Creates breadcrumbs from XHR API calls
*/
function _getXhrBreadcrumbHandler(client) {
	return function _xhrBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		const { startTimestamp, endTimestamp } = handlerData;
		const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];
		if (!startTimestamp || !endTimestamp || !sentryXhrData) return;
		const { method, url, status_code, body } = sentryXhrData;
		const data = {
			method,
			url,
			status_code
		};
		const hint = {
			xhr: handlerData.xhr,
			input: body,
			startTimestamp,
			endTimestamp
		};
		const breadcrumb = {
			category: "xhr",
			data,
			type: "http",
			level: getBreadcrumbLogLevelFromHttpStatusCode(status_code)
		};
		client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
		addBreadcrumb(breadcrumb, hint);
	};
}
/**
* Creates breadcrumbs from fetch API calls
*/
function _getFetchBreadcrumbHandler(client) {
	return function _fetchBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		const { startTimestamp, endTimestamp } = handlerData;
		if (!endTimestamp) return;
		if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") return;
		handlerData.fetchData.method, handlerData.fetchData.url;
		if (handlerData.error) {
			const data = handlerData.fetchData;
			const hint = {
				data: handlerData.error,
				input: handlerData.args,
				startTimestamp,
				endTimestamp
			};
			const breadcrumb = {
				category: "fetch",
				data,
				level: "error",
				type: "http"
			};
			client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
			addBreadcrumb(breadcrumb, hint);
		} else {
			const response = handlerData.response;
			const data = {
				...handlerData.fetchData,
				status_code: response?.status
			};
			handlerData.fetchData.request_body_size;
			handlerData.fetchData.response_body_size;
			response?.status;
			const hint = {
				input: handlerData.args,
				response,
				startTimestamp,
				endTimestamp
			};
			const breadcrumb = {
				category: "fetch",
				data,
				type: "http",
				level: getBreadcrumbLogLevelFromHttpStatusCode(data.status_code)
			};
			client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
			addBreadcrumb(breadcrumb, hint);
		}
	};
}
/**
* Creates breadcrumbs from history API calls
*/
function _getHistoryBreadcrumbHandler(client) {
	return function _historyBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		let from = handlerData.from;
		let to = handlerData.to;
		const parsedLoc = parseUrl(WINDOW$1.location.href);
		let parsedFrom = from ? parseUrl(from) : void 0;
		const parsedTo = parseUrl(to);
		if (!parsedFrom?.path) parsedFrom = parsedLoc;
		if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) to = parsedTo.relative;
		if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) from = parsedFrom.relative;
		addBreadcrumb({
			category: "navigation",
			data: {
				from,
				to
			}
		});
	};
}
function _isEvent(event) {
	return !!event && !!event.target;
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/integrations/browserapierrors.js
var DEFAULT_EVENT_TARGET = [
	"EventTarget",
	"Window",
	"Node",
	"ApplicationCache",
	"AudioTrackList",
	"BroadcastChannel",
	"ChannelMergerNode",
	"CryptoOperation",
	"EventSource",
	"FileReader",
	"HTMLUnknownElement",
	"IDBDatabase",
	"IDBRequest",
	"IDBTransaction",
	"KeyOperation",
	"MediaController",
	"MessagePort",
	"ModalWindow",
	"Notification",
	"SVGElementInstance",
	"Screen",
	"SharedWorker",
	"TextTrack",
	"TextTrackCue",
	"TextTrackList",
	"WebSocket",
	"WebSocketWorker",
	"Worker",
	"XMLHttpRequest",
	"XMLHttpRequestEventTarget",
	"XMLHttpRequestUpload"
];
var INTEGRATION_NAME$3 = "BrowserApiErrors";
var _browserApiErrorsIntegration = ((options = {}) => {
	const _options = {
		XMLHttpRequest: true,
		eventTarget: true,
		requestAnimationFrame: true,
		setInterval: true,
		setTimeout: true,
		unregisterOriginalCallbacks: false,
		...options
	};
	return {
		name: INTEGRATION_NAME$3,
		setupOnce() {
			if (_options.setTimeout) fill(WINDOW$1, "setTimeout", _wrapTimeFunction);
			if (_options.setInterval) fill(WINDOW$1, "setInterval", _wrapTimeFunction);
			if (_options.requestAnimationFrame) fill(WINDOW$1, "requestAnimationFrame", _wrapRAF);
			if (_options.XMLHttpRequest && "XMLHttpRequest" in WINDOW$1) fill(XMLHttpRequest.prototype, "send", _wrapXHR);
			const eventTargetOption = _options.eventTarget;
			if (eventTargetOption) (Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET).forEach((target) => _wrapEventTarget(target, _options));
		}
	};
});
/**
* Wrap timer functions and event targets to catch errors and provide better meta data.
*/
var browserApiErrorsIntegration = defineIntegration(_browserApiErrorsIntegration);
function _wrapTimeFunction(original) {
	return function(...args) {
		const originalCallback = args[0];
		args[0] = wrap(originalCallback, { mechanism: {
			handled: false,
			type: `auto.browser.browserapierrors.${getFunctionName(original)}`
		} });
		return original.apply(this, args);
	};
}
function _wrapRAF(original) {
	return function(callback) {
		return original.apply(this, [wrap(callback, { mechanism: {
			data: { handler: getFunctionName(original) },
			handled: false,
			type: "auto.browser.browserapierrors.requestAnimationFrame"
		} })]);
	};
}
function _wrapXHR(originalSend) {
	return function(...args) {
		const xhr = this;
		[
			"onload",
			"onerror",
			"onprogress",
			"onreadystatechange"
		].forEach((prop) => {
			if (prop in xhr && typeof xhr[prop] === "function") fill(xhr, prop, function(original) {
				const wrapOptions = { mechanism: {
					data: { handler: getFunctionName(original) },
					handled: false,
					type: `auto.browser.browserapierrors.xhr.${prop}`
				} };
				const originalFunction = getOriginalFunction(original);
				if (originalFunction) wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
				return wrap(original, wrapOptions);
			});
		});
		return originalSend.apply(this, args);
	};
}
function _wrapEventTarget(target, integrationOptions) {
	const proto = WINDOW$1[target]?.prototype;
	if (!proto?.hasOwnProperty?.("addEventListener")) return;
	fill(proto, "addEventListener", function(original) {
		return function(eventName, fn, options) {
			try {
				if (isEventListenerObject(fn)) fn.handleEvent = wrap(fn.handleEvent, { mechanism: {
					data: {
						handler: getFunctionName(fn),
						target
					},
					handled: false,
					type: "auto.browser.browserapierrors.handleEvent"
				} });
			} catch {}
			if (integrationOptions.unregisterOriginalCallbacks) unregisterOriginalCallback(this, eventName, fn);
			return original.apply(this, [
				eventName,
				wrap(fn, { mechanism: {
					data: {
						handler: getFunctionName(fn),
						target
					},
					handled: false,
					type: "auto.browser.browserapierrors.addEventListener"
				} }),
				options
			]);
		};
	});
	fill(proto, "removeEventListener", function(originalRemoveEventListener) {
		return function(eventName, fn, options) {
			/**
			* There are 2 possible scenarios here:
			*
			* 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
			* method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
			* as a pass-through, and call original `removeEventListener` with it.
			*
			* 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
			* our wrapped version of `addEventListener`, which internally calls `wrap` helper.
			* This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
			* in order for us to make a distinction between wrapped/non-wrapped functions possible.
			* If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
			*
			* When someone adds a handler prior to initialization, and then do it again, but after,
			* then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
			* to get rid of the initial handler and it'd stick there forever.
			*/
			try {
				const originalEventHandler = fn.__sentry_wrapped__;
				if (originalEventHandler) originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
			} catch {}
			return originalRemoveEventListener.call(this, eventName, fn, options);
		};
	});
}
function isEventListenerObject(obj) {
	return typeof obj.handleEvent === "function";
}
function unregisterOriginalCallback(target, eventName, fn) {
	if (target && typeof target === "object" && "removeEventListener" in target && typeof target.removeEventListener === "function") target.removeEventListener(eventName, fn);
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/integrations/browsersession.js
/**
* When added, automatically creates sessions which allow you to track adoption and crashes (crash free rate) in your Releases in Sentry.
* More information: https://docs.sentry.io/product/releases/health/
*
* Note: In order for session tracking to work, you need to set up Releases: https://docs.sentry.io/product/releases/
*/
var browserSessionIntegration = defineIntegration(() => {
	return {
		name: "BrowserSession",
		setupOnce() {
			if (typeof WINDOW$1.document === "undefined") {
				DEBUG_BUILD$1 && debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
				return;
			}
			startSession({ ignoreDuration: true });
			captureSession();
			addHistoryInstrumentationHandler(({ from, to }) => {
				if (from !== void 0 && from !== to) {
					startSession({ ignoreDuration: true });
					captureSession();
				}
			});
		}
	};
});
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/integrations/globalhandlers.js
var INTEGRATION_NAME$2 = "GlobalHandlers";
var _globalHandlersIntegration = ((options = {}) => {
	const _options = {
		onerror: true,
		onunhandledrejection: true,
		...options
	};
	return {
		name: INTEGRATION_NAME$2,
		setupOnce() {
			Error.stackTraceLimit = 50;
		},
		setup(client) {
			if (_options.onerror) {
				_installGlobalOnErrorHandler(client);
				globalHandlerLog("onerror");
			}
			if (_options.onunhandledrejection) {
				_installGlobalOnUnhandledRejectionHandler(client);
				globalHandlerLog("onunhandledrejection");
			}
		}
	};
});
var globalHandlersIntegration = defineIntegration(_globalHandlersIntegration);
function _installGlobalOnErrorHandler(client) {
	addGlobalErrorInstrumentationHandler((data) => {
		const { stackParser, attachStacktrace } = getOptions();
		if (getClient() !== client || shouldIgnoreOnError()) return;
		const { msg, url, line, column, error } = data;
		const event = _enhanceEventWithInitialFrame(eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false), url, line, column);
		event.level = "error";
		captureEvent(event, {
			originalException: error,
			mechanism: {
				handled: false,
				type: "auto.browser.global_handlers.onerror"
			}
		});
	});
}
function _installGlobalOnUnhandledRejectionHandler(client) {
	addGlobalUnhandledRejectionInstrumentationHandler((e) => {
		const { stackParser, attachStacktrace } = getOptions();
		if (getClient() !== client || shouldIgnoreOnError()) return;
		const error = _getUnhandledRejectionError(e);
		const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
		event.level = "error";
		captureEvent(event, {
			originalException: error,
			mechanism: {
				handled: false,
				type: "auto.browser.global_handlers.onunhandledrejection"
			}
		});
	});
}
/**
*
*/
function _getUnhandledRejectionError(error) {
	if (isPrimitive(error)) return error;
	try {
		if ("reason" in error) return error.reason;
		if ("detail" in error && "reason" in error.detail) return error.detail.reason;
	} catch {}
	return error;
}
/**
* Create an event from a promise rejection where the `reason` is a primitive.
*
* @param reason: The `reason` property of the promise rejection
* @returns An Event object with an appropriate `exception` value
*/
function _eventFromRejectionWithPrimitive(reason) {
	return { exception: { values: [{
		type: "UnhandledRejection",
		value: `Non-Error promise rejection captured with value: ${String(reason)}`
	}] } };
}
function _enhanceEventWithInitialFrame(event, url, line, column) {
	const e = event.exception = event.exception || {};
	const ev = e.values = e.values || [];
	const ev0 = ev[0] = ev[0] || {};
	const ev0s = ev0.stacktrace = ev0.stacktrace || {};
	const ev0sf = ev0s.frames = ev0s.frames || [];
	const colno = column;
	const lineno = line;
	const filename = getFilenameFromUrl(url) ?? getLocationHref();
	if (ev0sf.length === 0) ev0sf.push({
		colno,
		filename,
		function: "?",
		in_app: true,
		lineno
	});
	return event;
}
function globalHandlerLog(type) {
	DEBUG_BUILD$1 && debug.log(`Global Handler attached: ${type}`);
}
function getOptions() {
	return getClient()?.getOptions() || {
		stackParser: () => [],
		attachStacktrace: false
	};
}
function getFilenameFromUrl(url) {
	if (!isString(url) || url.length === 0) return;
	if (url.startsWith("data:")) {
		const match = url.match(/^data:([^;]+)/);
		return `<data:${match ? match[1] : "text/javascript"}${url.includes("base64,") ? ",base64" : ""}>`;
	}
	return url;
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/integrations/httpcontext.js
/**
* Collects information about HTTP request headers and
* attaches them to the event.
*/
var httpContextIntegration = defineIntegration(() => {
	return {
		name: "HttpContext",
		preprocessEvent(event) {
			if (!WINDOW$1.navigator && !WINDOW$1.location && !WINDOW$1.document) return;
			const reqData = getHttpRequestData();
			const headers = {
				...reqData.headers,
				...event.request?.headers
			};
			event.request = {
				...reqData,
				...event.request,
				headers
			};
		}
	};
});
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/integrations/linkederrors.js
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
var INTEGRATION_NAME$1 = "LinkedErrors";
var _linkedErrorsIntegration = ((options = {}) => {
	const limit = options.limit || DEFAULT_LIMIT;
	const key = options.key || DEFAULT_KEY;
	return {
		name: INTEGRATION_NAME$1,
		preprocessEvent(event, hint, client) {
			applyAggregateErrorsToEvent(exceptionFromError, client.getOptions().stackParser, key, limit, event, hint);
		}
	};
});
/**
* Aggregrate linked errors in an event.
*/
var linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/utils/detectBrowserExtension.js
/**
* Returns true if the SDK is running in an embedded browser extension.
* Stand-alone browser extensions (which do not share the same data as the main browser page) are fine.
*/
function checkAndWarnIfIsEmbeddedBrowserExtension() {
	if (_isEmbeddedBrowserExtension()) {
		if (DEBUG_BUILD$1) consoleSandbox(() => {
			console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
		});
		return true;
	}
	return false;
}
function _isEmbeddedBrowserExtension() {
	if (typeof WINDOW$1.window === "undefined") return false;
	const _window = WINDOW$1;
	if (_window.nw) return false;
	if (!(_window["chrome"] || _window["browser"])?.runtime?.id) return false;
	const href = getLocationHref();
	return !(WINDOW$1 === WINDOW$1.top && [
		"chrome-extension",
		"moz-extension",
		"ms-browser-extension",
		"safari-web-extension"
	].some((protocol) => href.startsWith(`${protocol}://`)));
}
//#endregion
//#region node_modules/.pnpm/@sentry+browser@10.32.1/node_modules/@sentry/browser/build/npm/esm/prod/sdk.js
/** Get the default integrations for the browser SDK. */
function getDefaultIntegrations(_options) {
	/**
	* Note: Please make sure this stays in sync with Angular SDK, which re-exports
	* `getDefaultIntegrations` but with an adjusted set of integrations.
	*/
	return [
		inboundFiltersIntegration(),
		functionToStringIntegration(),
		browserApiErrorsIntegration(),
		breadcrumbsIntegration(),
		globalHandlersIntegration(),
		linkedErrorsIntegration(),
		dedupeIntegration(),
		httpContextIntegration(),
		browserSessionIntegration()
	];
}
/**
* The Sentry Browser SDK Client.
*
* To use this SDK, call the {@link init} function as early as possible when
* loading the web page. To set context information or send manual events, use
* the provided methods.
*
* @example
*
* ```
*
* import { init } from '@sentry/browser';
*
* init({
*   dsn: '__DSN__',
*   // ...
* });
* ```
*
* @example
* ```
*
* import { addBreadcrumb } from '@sentry/browser';
* addBreadcrumb({
*   message: 'My Breadcrumb',
*   // ...
* });
* ```
*
* @example
*
* ```
*
* import * as Sentry from '@sentry/browser';
* Sentry.captureMessage('Hello, world!');
* Sentry.captureException(new Error('Good bye'));
* Sentry.captureEvent({
*   message: 'Manual',
*   stacktrace: [
*     // ...
*   ],
* });
* ```
*
* @see {@link BrowserOptions} for documentation on configuration options.
*/
function init$1(options = {}) {
	const shouldDisableBecauseIsBrowserExtenstion = !options.skipBrowserExtensionCheck && checkAndWarnIfIsEmbeddedBrowserExtension();
	let defaultIntegrations = options.defaultIntegrations == null ? getDefaultIntegrations() : options.defaultIntegrations;
	return initAndBind(BrowserClient, {
		...options,
		enabled: shouldDisableBecauseIsBrowserExtenstion ? false : options.enabled,
		stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
		integrations: getIntegrationsToSetup({
			integrations: options.integrations,
			defaultIntegrations
		}),
		transport: options.transport || makeFetchTransport
	});
}
__name(init$1, "init");
//#endregion
//#region node_modules/.pnpm/@sentry+vue@10.32.1_pinia@3.0.4_typescript@5.9.3_vue@3.5.13_typescript@5.9.3___vue@3.5.13_typescript@5.9.3_/node_modules/@sentry/vue/build/esm/constants.js
var DEFAULT_HOOKS = ["activate", "mount"];
//#endregion
//#region node_modules/.pnpm/@sentry+vue@10.32.1_pinia@3.0.4_typescript@5.9.3_vue@3.5.13_typescript@5.9.3___vue@3.5.13_typescript@5.9.3_/node_modules/@sentry/vue/build/esm/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/.pnpm/@sentry+vue@10.32.1_pinia@3.0.4_typescript@5.9.3_vue@3.5.13_typescript@5.9.3___vue@3.5.13_typescript@5.9.3_/node_modules/@sentry/vue/build/esm/vendor/components.js
var classifyRE = /(?:^|[-_])(\w)/g;
var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
var ROOT_COMPONENT_NAME = "<Root>";
var ANONYMOUS_COMPONENT_NAME = "<Anonymous>";
var repeat = (str, n) => {
	return str.repeat(n);
};
var formatComponentName = (vm, includeFile) => {
	if (!vm) return ANONYMOUS_COMPONENT_NAME;
	if (vm.$root === vm) return ROOT_COMPONENT_NAME;
	if (!vm.$options) return ANONYMOUS_COMPONENT_NAME;
	const options = vm.$options;
	let name = options.name || options._componentTag || options.__name;
	const file = options.__file;
	if (!name && file) {
		const match = file.match(/([^/\\]+)\.vue$/);
		if (match) name = match[1];
	}
	return (name ? `<${classify(name)}>` : ANONYMOUS_COMPONENT_NAME) + (file && includeFile !== false ? ` at ${file}` : "");
};
var generateComponentTrace = (vm) => {
	if (vm && (vm._isVue || vm.__isVue) && vm.$parent) {
		const tree = [];
		let currentRecursiveSequence = 0;
		while (vm) {
			if (tree.length > 0) {
				const last = tree[tree.length - 1];
				if (last.constructor === vm.constructor) {
					currentRecursiveSequence++;
					vm = vm.$parent;
					continue;
				} else if (currentRecursiveSequence > 0) {
					tree[tree.length - 1] = [last, currentRecursiveSequence];
					currentRecursiveSequence = 0;
				}
			}
			tree.push(vm);
			vm = vm.$parent;
		}
		return `\n\nfound in\n\n${tree.map((vm, i) => `${(i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm))}`).join("\n")}`;
	}
	return `\n\n(found in ${formatComponentName(vm)})`;
};
//#endregion
//#region node_modules/.pnpm/@sentry+vue@10.32.1_pinia@3.0.4_typescript@5.9.3_vue@3.5.13_typescript@5.9.3___vue@3.5.13_typescript@5.9.3_/node_modules/@sentry/vue/build/esm/errorhandler.js
var attachErrorHandler = (app, options) => {
	const { errorHandler: originalErrorHandler } = app.config;
	app.config.errorHandler = (error, vm, lifecycleHook) => {
		const metadata = {
			componentName: formatComponentName(vm, false),
			lifecycleHook,
			trace: vm ? generateComponentTrace(vm) : ""
		};
		if (options?.attachProps !== false && vm) {
			if (vm.$options?.propsData) metadata.propsData = vm.$options.propsData;
			else if (vm.$props) metadata.propsData = vm.$props;
		}
		setTimeout(() => {
			captureException(error, {
				captureContext: { contexts: { vue: metadata } },
				mechanism: {
					handled: !!originalErrorHandler,
					type: "auto.function.vue.error_handler"
				}
			});
		});
		if (typeof originalErrorHandler === "function" && app.config.errorHandler) originalErrorHandler.call(app, error, vm, lifecycleHook);
		else throw error;
	};
};
//#endregion
//#region node_modules/.pnpm/@sentry+vue@10.32.1_pinia@3.0.4_typescript@5.9.3_vue@3.5.13_typescript@5.9.3___vue@3.5.13_typescript@5.9.3_/node_modules/@sentry/vue/build/esm/tracing.js
var VUE_OP = "ui.vue";
var HOOKS = {
	activate: ["activated", "deactivated"],
	create: ["beforeCreate", "created"],
	unmount: ["beforeUnmount", "unmounted"],
	destroy: ["beforeDestroy", "destroyed"],
	mount: ["beforeMount", "mounted"],
	update: ["beforeUpdate", "updated"]
};
/** End the top-level component span and activity with a debounce configured using `timeout` option */
function maybeEndRootComponentSpan(vm, timestamp, timeout) {
	if (vm.$_sentryRootComponentSpanTimer) clearTimeout(vm.$_sentryRootComponentSpanTimer);
	vm.$_sentryRootComponentSpanTimer = setTimeout(() => {
		if (vm.$root?.$_sentryRootComponentSpan) {
			vm.$root.$_sentryRootComponentSpan.end(timestamp);
			vm.$root.$_sentryRootComponentSpan = void 0;
		}
	}, timeout);
}
/** Find if the current component exists in the provided `TracingOptions.trackComponents` array option. */
function findTrackComponent(trackComponents, formattedName) {
	function extractComponentName(name) {
		return name.replace(/^<([^\s]*)>(?: at [^\s]*)?$/, "$1");
	}
	return trackComponents.some((compo) => {
		return extractComponentName(formattedName) === extractComponentName(compo);
	});
}
var createTracingMixins = (options = {}) => {
	const hooks = (options.hooks || []).concat(DEFAULT_HOOKS).filter((value, index, self) => self.indexOf(value) === index);
	const mixins = {};
	const rootComponentSpanFinalTimeout = options.timeout || 2e3;
	for (const operation of hooks) {
		const internalHooks = HOOKS[operation];
		if (!internalHooks) {
			DEBUG_BUILD && debug.warn(`Unknown hook: ${operation}`);
			continue;
		}
		for (const internalHook of internalHooks) mixins[internalHook] = function() {
			const isRootComponent = this.$root === this;
			if (isRootComponent) {
				this.$_sentryRootComponentSpan = this.$_sentryRootComponentSpan || startInactiveSpan({
					name: "Application Render",
					op: `${VUE_OP}.render`,
					attributes: { ["sentry.origin"]: "auto.ui.vue" },
					onlyIfParent: true
				});
				maybeEndRootComponentSpan(this, timestampInSeconds(), rootComponentSpanFinalTimeout);
			}
			const componentName = formatComponentName(this, false);
			if (!(isRootComponent || (Array.isArray(options.trackComponents) ? findTrackComponent(options.trackComponents, componentName) : options.trackComponents))) {
				maybeEndRootComponentSpan(this, timestampInSeconds(), rootComponentSpanFinalTimeout);
				return;
			}
			this.$_sentryComponentSpans = this.$_sentryComponentSpans || {};
			const isBeforeHook = internalHook === internalHooks[0];
			const activeSpan = this.$root?.$_sentryRootComponentSpan || getActiveSpan();
			if (isBeforeHook) {
				if (activeSpan) {
					const oldSpan = this.$_sentryComponentSpans[operation];
					if (oldSpan) oldSpan.end();
					this.$_sentryComponentSpans[operation] = startInactiveSpan({
						name: `Vue ${componentName}`,
						op: `${VUE_OP}.${operation}`,
						attributes: { [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.vue" },
						onlyIfParent: true
					});
				}
			} else {
				const span = this.$_sentryComponentSpans[operation];
				if (!span) return;
				span.end();
				maybeEndRootComponentSpan(this, timestampInSeconds(), rootComponentSpanFinalTimeout);
			}
		};
	}
	return mixins;
};
//#endregion
//#region node_modules/.pnpm/@sentry+vue@10.32.1_pinia@3.0.4_typescript@5.9.3_vue@3.5.13_typescript@5.9.3___vue@3.5.13_typescript@5.9.3_/node_modules/@sentry/vue/build/esm/integration.js
var DEFAULT_CONFIG = {
	Vue: GLOBAL_OBJ.Vue,
	attachProps: true,
	attachErrorHandler: true,
	tracingOptions: {
		hooks: DEFAULT_HOOKS,
		timeout: 2e3,
		trackComponents: false
	}
};
var INTEGRATION_NAME = "Vue";
var vueIntegration = defineIntegration((integrationOptions = {}) => {
	return {
		name: INTEGRATION_NAME,
		setup(client) {
			const options = {
				...DEFAULT_CONFIG,
				...client.getOptions(),
				...integrationOptions
			};
			if (!options.Vue && !options.app) {
				consoleSandbox(() => {
					console.warn("[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured. Update your `Sentry.init` call with an appropriate config option: `app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).");
				});
				return;
			}
			if (options.app) (Array.isArray(options.app) ? options.app : [options.app]).forEach((app) => vueInit(app, options));
			else if (options.Vue) vueInit(options.Vue, options);
		}
	};
});
var vueInit = (app, options) => {
	if (DEBUG_BUILD) {
		if (app._instance?.isMounted === true) consoleSandbox(() => {
			console.warn("[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`.");
		});
	}
	if (options.attachErrorHandler) attachErrorHandler(app, options);
	if (hasSpansEnabled(options)) app.mixin(createTracingMixins(options.tracingOptions));
};
//#endregion
//#region node_modules/.pnpm/@sentry+vue@10.32.1_pinia@3.0.4_typescript@5.9.3_vue@3.5.13_typescript@5.9.3___vue@3.5.13_typescript@5.9.3_/node_modules/@sentry/vue/build/esm/sdk.js
/**
* Inits the Vue SDK
*/
function init(options = {}) {
	const opts = {
		defaultIntegrations: [...getDefaultIntegrations(options), vueIntegration()],
		...options
	};
	applySdkMetadata(opts, "vue");
	return init$1(opts);
}
//#endregion
export { addBreadcrumb as n, captureException as r, init as t };

//# sourceMappingURL=vendor-sentry-Dn2jSJwd.js.map