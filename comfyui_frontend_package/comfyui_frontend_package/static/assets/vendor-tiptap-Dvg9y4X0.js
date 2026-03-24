var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { P as Plugin, a as PluginKey, N as NodeSelection, S as Selection, f as findWrapping, c as canJoin, T as Transform, l as liftTarget, b as createParagraphNear$1, d as TextSelection, e as deleteSelection$1, g as exitCode$1, F as Fragment, j as joinUp$1, h as joinDown$1, i as joinBackward$1, k as joinForward$1, m as joinPoint, n as joinTextblockBackward$1, o as joinTextblockForward$1, p as lift$1, q as liftEmptyBlock$1, r as liftListItem$1, s as newlineInCode$1, t as selectNodeBackward$1, u as selectNodeForward$1, v as selectParentNode$1, w as selectTextblockEnd$1, x as selectTextblockStart$1, y as setBlockType, z as sinkListItem$1, A as canSplit, B as Slice, C as wrapIn$1, D as wrapInList$1, E as Node$2, G as Schema, H as DOMParser, R as ReplaceStep, I as ReplaceAroundStep, J as EditorView, K as EditorState, L as DOMSerializer, M as keymap, O as registerCustomProtocol, Q as find, U as tokenize, V as reset, W as addColumnBefore, X as addColumnAfter, Y as deleteColumn, Z as addRowBefore, _ as addRowAfter, $ as deleteRow, a0 as deleteTable, a1 as mergeCells, a2 as splitCell, a3 as toggleHeader, a4 as toggleHeaderCell, a5 as setCellAttr, a6 as goToNextCell, a7 as fixTables, a8 as CellSelection, a9 as columnResizing, aa as tableEditing, ab as dropCursor, ac as gapCursor, ad as undo, ae as redo, af as history, ag as MarkdownIt, ah as defaultMarkdownSerializer, ai as taskListPlugin, aj as MarkdownSerializerState$1 } from "./vendor-other-Bfb5Ofrh.js";
function createChainableState(config) {
  const { state, transaction } = config;
  let { selection } = transaction;
  let { doc } = transaction;
  let { storedMarks } = transaction;
  return {
    ...state,
    apply: state.apply.bind(state),
    applyTransaction: state.applyTransaction.bind(state),
    plugins: state.plugins,
    schema: state.schema,
    reconfigure: state.reconfigure.bind(state),
    toJSON: state.toJSON.bind(state),
    get storedMarks() {
      return storedMarks;
    },
    get selection() {
      return selection;
    },
    get doc() {
      return doc;
    },
    get tr() {
      selection = transaction.selection;
      doc = transaction.doc;
      storedMarks = transaction.storedMarks;
      return transaction;
    }
  };
}
__name(createChainableState, "createChainableState");
class CommandManager {
  static {
    __name(this, "CommandManager");
  }
  constructor(props) {
    this.editor = props.editor;
    this.rawCommands = this.editor.extensionManager.commands;
    this.customState = props.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const { tr } = state;
    const props = this.buildProps(tr);
    return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      const method = /* @__PURE__ */ __name((...args) => {
        const callback = command2(...args)(props);
        if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
          view.dispatch(tr);
        }
        return callback;
      }, "method");
      return [name, method];
    }));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(startTr, shouldDispatch = true) {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const callbacks = [];
    const hasStartTransaction = !!startTr;
    const tr = startTr || state.tr;
    const run2 = /* @__PURE__ */ __name(() => {
      if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
        view.dispatch(tr);
      }
      return callbacks.every((callback) => callback === true);
    }, "run");
    const chain = {
      ...Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
        const chainedCommand = /* @__PURE__ */ __name((...args) => {
          const props = this.buildProps(tr, shouldDispatch);
          const callback = command2(...args)(props);
          callbacks.push(callback);
          return chain;
        }, "chainedCommand");
        return [name, chainedCommand];
      })),
      run: run2
    };
    return chain;
  }
  createCan(startTr) {
    const { rawCommands, state } = this;
    const dispatch = false;
    const tr = startTr || state.tr;
    const props = this.buildProps(tr, dispatch);
    const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      return [name, (...args) => command2(...args)({ ...props, dispatch: void 0 })];
    }));
    return {
      ...formattedCommands,
      chain: /* @__PURE__ */ __name(() => this.createChain(tr, dispatch), "chain")
    };
  }
  buildProps(tr, shouldDispatch = true) {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const props = {
      tr,
      editor,
      view,
      state: createChainableState({
        state,
        transaction: tr
      }),
      dispatch: shouldDispatch ? () => void 0 : void 0,
      chain: /* @__PURE__ */ __name(() => this.createChain(tr, shouldDispatch), "chain"),
      can: /* @__PURE__ */ __name(() => this.createCan(tr), "can"),
      get commands() {
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
          return [name, (...args) => command2(...args)(props)];
        }));
      }
    };
    return props;
  }
}
class EventEmitter {
  static {
    __name(this, "EventEmitter");
  }
  constructor() {
    this.callbacks = {};
  }
  on(event, fn) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      callbacks.forEach((callback) => callback.apply(this, args));
    }
    return this;
  }
  off(event, fn) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      if (fn) {
        this.callbacks[event] = callbacks.filter((callback) => callback !== fn);
      } else {
        delete this.callbacks[event];
      }
    }
    return this;
  }
  once(event, fn) {
    const onceFn = /* @__PURE__ */ __name((...args) => {
      this.off(event, onceFn);
      fn.apply(this, args);
    }, "onceFn");
    return this.on(event, onceFn);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function getExtensionField(extension, field, context) {
  if (extension.config[field] === void 0 && extension.parent) {
    return getExtensionField(extension.parent, field, context);
  }
  if (typeof extension.config[field] === "function") {
    const value = extension.config[field].bind({
      ...context,
      parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
    });
    return value;
  }
  return extension.config[field];
}
__name(getExtensionField, "getExtensionField");
function splitExtensions(extensions) {
  const baseExtensions = extensions.filter((extension) => extension.type === "extension");
  const nodeExtensions = extensions.filter((extension) => extension.type === "node");
  const markExtensions = extensions.filter((extension) => extension.type === "mark");
  return {
    baseExtensions,
    nodeExtensions,
    markExtensions
  };
}
__name(splitExtensions, "splitExtensions");
function getAttributesFromExtensions(extensions) {
  const extensionAttributes = [];
  const { nodeExtensions, markExtensions } = splitExtensions(extensions);
  const nodeAndMarkExtensions = [...nodeExtensions, ...markExtensions];
  const defaultAttribute = {
    default: null,
    rendered: true,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: true,
    isRequired: false
  };
  extensions.forEach((extension) => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      extensions: nodeAndMarkExtensions
    };
    const addGlobalAttributes = getExtensionField(extension, "addGlobalAttributes", context);
    if (!addGlobalAttributes) {
      return;
    }
    const globalAttributes = addGlobalAttributes();
    globalAttributes.forEach((globalAttribute) => {
      globalAttribute.types.forEach((type) => {
        Object.entries(globalAttribute.attributes).forEach(([name, attribute]) => {
          extensionAttributes.push({
            type,
            name,
            attribute: {
              ...defaultAttribute,
              ...attribute
            }
          });
        });
      });
    });
  });
  nodeAndMarkExtensions.forEach((extension) => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const addAttributes = getExtensionField(extension, "addAttributes", context);
    if (!addAttributes) {
      return;
    }
    const attributes = addAttributes();
    Object.entries(attributes).forEach(([name, attribute]) => {
      const mergedAttr = {
        ...defaultAttribute,
        ...attribute
      };
      if (typeof (mergedAttr === null || mergedAttr === void 0 ? void 0 : mergedAttr.default) === "function") {
        mergedAttr.default = mergedAttr.default();
      }
      if ((mergedAttr === null || mergedAttr === void 0 ? void 0 : mergedAttr.isRequired) && (mergedAttr === null || mergedAttr === void 0 ? void 0 : mergedAttr.default) === void 0) {
        delete mergedAttr.default;
      }
      extensionAttributes.push({
        type: extension.name,
        name,
        attribute: mergedAttr
      });
    });
  });
  return extensionAttributes;
}
__name(getAttributesFromExtensions, "getAttributesFromExtensions");
function getNodeType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.nodes[nameOrType]) {
      throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.nodes[nameOrType];
  }
  return nameOrType;
}
__name(getNodeType, "getNodeType");
function mergeAttributes(...objects) {
  return objects.filter((item) => !!item).reduce((items, item) => {
    const mergedAttributes = { ...items };
    Object.entries(item).forEach(([key, value]) => {
      const exists = mergedAttributes[key];
      if (!exists) {
        mergedAttributes[key] = value;
        return;
      }
      if (key === "class") {
        const valueClasses = value ? value.split(" ") : [];
        const existingClasses = mergedAttributes[key] ? mergedAttributes[key].split(" ") : [];
        const insertClasses = valueClasses.filter((valueClass) => !existingClasses.includes(valueClass));
        mergedAttributes[key] = [...existingClasses, ...insertClasses].join(" ");
      } else if (key === "style") {
        const newStyles = value ? value.split(";").map((style2) => style2.trim()).filter(Boolean) : [];
        const existingStyles = mergedAttributes[key] ? mergedAttributes[key].split(";").map((style2) => style2.trim()).filter(Boolean) : [];
        const styleMap = /* @__PURE__ */ new Map();
        existingStyles.forEach((style2) => {
          const [property, val] = style2.split(":").map((part) => part.trim());
          styleMap.set(property, val);
        });
        newStyles.forEach((style2) => {
          const [property, val] = style2.split(":").map((part) => part.trim());
          styleMap.set(property, val);
        });
        mergedAttributes[key] = Array.from(styleMap.entries()).map(([property, val]) => `${property}: ${val}`).join("; ");
      } else {
        mergedAttributes[key] = value;
      }
    });
    return mergedAttributes;
  }, {});
}
__name(mergeAttributes, "mergeAttributes");
function getRenderedAttributes(nodeOrMark, extensionAttributes) {
  return extensionAttributes.filter((attribute) => attribute.type === nodeOrMark.type.name).filter((item) => item.attribute.rendered).map((item) => {
    if (!item.attribute.renderHTML) {
      return {
        [item.name]: nodeOrMark.attrs[item.name]
      };
    }
    return item.attribute.renderHTML(nodeOrMark.attrs) || {};
  }).reduce((attributes, attribute) => mergeAttributes(attributes, attribute), {});
}
__name(getRenderedAttributes, "getRenderedAttributes");
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function callOrReturn(value, context = void 0, ...props) {
  if (isFunction(value)) {
    if (context) {
      return value.bind(context)(...props);
    }
    return value(...props);
  }
  return value;
}
__name(callOrReturn, "callOrReturn");
function isEmptyObject(value = {}) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}
__name(isEmptyObject, "isEmptyObject");
function fromString(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
    return Number(value);
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return value;
}
__name(fromString, "fromString");
function injectExtensionAttributesToParseRule(parseRule, extensionAttributes) {
  if ("style" in parseRule) {
    return parseRule;
  }
  return {
    ...parseRule,
    getAttrs: /* @__PURE__ */ __name((node) => {
      const oldAttributes = parseRule.getAttrs ? parseRule.getAttrs(node) : parseRule.attrs;
      if (oldAttributes === false) {
        return false;
      }
      const newAttributes = extensionAttributes.reduce((items, item) => {
        const value = item.attribute.parseHTML ? item.attribute.parseHTML(node) : fromString(node.getAttribute(item.name));
        if (value === null || value === void 0) {
          return items;
        }
        return {
          ...items,
          [item.name]: value
        };
      }, {});
      return { ...oldAttributes, ...newAttributes };
    }, "getAttrs")
  };
}
__name(injectExtensionAttributesToParseRule, "injectExtensionAttributesToParseRule");
function cleanUpSchemaItem(data) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(data).filter(([key, value]) => {
      if (key === "attrs" && isEmptyObject(value)) {
        return false;
      }
      return value !== null && value !== void 0;
    })
  );
}
__name(cleanUpSchemaItem, "cleanUpSchemaItem");
function getSchemaByResolvedExtensions(extensions, editor) {
  var _a;
  const allAttributes = getAttributesFromExtensions(extensions);
  const { nodeExtensions, markExtensions } = splitExtensions(extensions);
  const topNode = (_a = nodeExtensions.find((extension) => getExtensionField(extension, "topNode"))) === null || _a === void 0 ? void 0 : _a.name;
  const nodes = Object.fromEntries(nodeExtensions.map((extension) => {
    const extensionAttributes = allAttributes.filter((attribute) => attribute.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      editor
    };
    const extraNodeFields = extensions.reduce((fields, e) => {
      const extendNodeSchema = getExtensionField(e, "extendNodeSchema", context);
      return {
        ...fields,
        ...extendNodeSchema ? extendNodeSchema(extension) : {}
      };
    }, {});
    const schema = cleanUpSchemaItem({
      ...extraNodeFields,
      content: callOrReturn(getExtensionField(extension, "content", context)),
      marks: callOrReturn(getExtensionField(extension, "marks", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      inline: callOrReturn(getExtensionField(extension, "inline", context)),
      atom: callOrReturn(getExtensionField(extension, "atom", context)),
      selectable: callOrReturn(getExtensionField(extension, "selectable", context)),
      draggable: callOrReturn(getExtensionField(extension, "draggable", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      whitespace: callOrReturn(getExtensionField(extension, "whitespace", context)),
      linebreakReplacement: callOrReturn(getExtensionField(extension, "linebreakReplacement", context)),
      defining: callOrReturn(getExtensionField(extension, "defining", context)),
      isolating: callOrReturn(getExtensionField(extension, "isolating", context)),
      attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute) => {
        var _a2;
        return [extensionAttribute.name, { default: (_a2 = extensionAttribute === null || extensionAttribute === void 0 ? void 0 : extensionAttribute.attribute) === null || _a2 === void 0 ? void 0 : _a2.default }];
      }))
    });
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema.parseDOM = parseHTML.map((parseRule) => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema.toDOM = (node) => renderHTML({
        node,
        HTMLAttributes: getRenderedAttributes(node, extensionAttributes)
      });
    }
    const renderText = getExtensionField(extension, "renderText", context);
    if (renderText) {
      schema.toText = renderText;
    }
    return [extension.name, schema];
  }));
  const marks = Object.fromEntries(markExtensions.map((extension) => {
    const extensionAttributes = allAttributes.filter((attribute) => attribute.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      editor
    };
    const extraMarkFields = extensions.reduce((fields, e) => {
      const extendMarkSchema = getExtensionField(e, "extendMarkSchema", context);
      return {
        ...fields,
        ...extendMarkSchema ? extendMarkSchema(extension) : {}
      };
    }, {});
    const schema = cleanUpSchemaItem({
      ...extraMarkFields,
      inclusive: callOrReturn(getExtensionField(extension, "inclusive", context)),
      excludes: callOrReturn(getExtensionField(extension, "excludes", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      spanning: callOrReturn(getExtensionField(extension, "spanning", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute) => {
        var _a2;
        return [extensionAttribute.name, { default: (_a2 = extensionAttribute === null || extensionAttribute === void 0 ? void 0 : extensionAttribute.attribute) === null || _a2 === void 0 ? void 0 : _a2.default }];
      }))
    });
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema.parseDOM = parseHTML.map((parseRule) => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema.toDOM = (mark) => renderHTML({
        mark,
        HTMLAttributes: getRenderedAttributes(mark, extensionAttributes)
      });
    }
    return [extension.name, schema];
  }));
  return new Schema({
    topNode,
    nodes,
    marks
  });
}
__name(getSchemaByResolvedExtensions, "getSchemaByResolvedExtensions");
function getSchemaTypeByName(name, schema) {
  return schema.nodes[name] || schema.marks[name] || null;
}
__name(getSchemaTypeByName, "getSchemaTypeByName");
function isExtensionRulesEnabled(extension, enabled) {
  if (Array.isArray(enabled)) {
    return enabled.some((enabledExtension) => {
      const name = typeof enabledExtension === "string" ? enabledExtension : enabledExtension.name;
      return name === extension.name;
    });
  }
  return enabled;
}
__name(isExtensionRulesEnabled, "isExtensionRulesEnabled");
function getHTMLFromFragment(fragment, schema) {
  const documentFragment = DOMSerializer.fromSchema(schema).serializeFragment(fragment);
  const temporaryDocument = document.implementation.createHTMLDocument();
  const container = temporaryDocument.createElement("div");
  container.appendChild(documentFragment);
  return container.innerHTML;
}
__name(getHTMLFromFragment, "getHTMLFromFragment");
const getTextContentFromNodes = /* @__PURE__ */ __name(($from, maxMatch = 500) => {
  let textBefore = "";
  const sliceEndPos = $from.parentOffset;
  $from.parent.nodesBetween(Math.max(0, sliceEndPos - maxMatch), sliceEndPos, (node, pos, parent, index2) => {
    var _a, _b;
    const chunk = ((_b = (_a = node.type.spec).toText) === null || _b === void 0 ? void 0 : _b.call(_a, {
      node,
      pos,
      parent,
      index: index2
    })) || node.textContent || "%leaf%";
    textBefore += node.isAtom && !node.isText ? chunk : chunk.slice(0, Math.max(0, sliceEndPos - pos));
  });
  return textBefore;
}, "getTextContentFromNodes");
function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}
__name(isRegExp, "isRegExp");
class InputRule {
  static {
    __name(this, "InputRule");
  }
  constructor(config) {
    this.find = config.find;
    this.handler = config.handler;
  }
}
const inputRuleMatcherHandler = /* @__PURE__ */ __name((text, find2) => {
  if (isRegExp(find2)) {
    return find2.exec(text);
  }
  const inputRuleMatch = find2(text);
  if (!inputRuleMatch) {
    return null;
  }
  const result = [inputRuleMatch.text];
  result.index = inputRuleMatch.index;
  result.input = text;
  result.data = inputRuleMatch.data;
  if (inputRuleMatch.replaceWith) {
    if (!inputRuleMatch.text.includes(inputRuleMatch.replaceWith)) {
      console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
    }
    result.push(inputRuleMatch.replaceWith);
  }
  return result;
}, "inputRuleMatcherHandler");
function run$1(config) {
  var _a;
  const { editor, from, to, text, rules, plugin } = config;
  const { view } = editor;
  if (view.composing) {
    return false;
  }
  const $from = view.state.doc.resolve(from);
  if (
    // check for code node
    $from.parent.type.spec.code || !!((_a = $from.nodeBefore || $from.nodeAfter) === null || _a === void 0 ? void 0 : _a.marks.find((mark) => mark.type.spec.code))
  ) {
    return false;
  }
  let matched = false;
  const textBefore = getTextContentFromNodes($from) + text;
  rules.forEach((rule) => {
    if (matched) {
      return;
    }
    const match = inputRuleMatcherHandler(textBefore, rule.find);
    if (!match) {
      return;
    }
    const tr = view.state.tr;
    const state = createChainableState({
      state: view.state,
      transaction: tr
    });
    const range = {
      from: from - (match[0].length - text.length),
      to
    };
    const { commands: commands2, chain, can } = new CommandManager({
      editor,
      state
    });
    const handler = rule.handler({
      state,
      range,
      match,
      commands: commands2,
      chain,
      can
    });
    if (handler === null || !tr.steps.length) {
      return;
    }
    tr.setMeta(plugin, {
      transform: tr,
      from,
      to,
      text
    });
    view.dispatch(tr);
    matched = true;
  });
  return matched;
}
__name(run$1, "run$1");
function inputRulesPlugin(props) {
  const { editor, rules } = props;
  const plugin = new Plugin({
    state: {
      init() {
        return null;
      },
      apply(tr, prev, state) {
        const stored = tr.getMeta(plugin);
        if (stored) {
          return stored;
        }
        const simulatedInputMeta = tr.getMeta("applyInputRules");
        const isSimulatedInput = !!simulatedInputMeta;
        if (isSimulatedInput) {
          setTimeout(() => {
            let { text } = simulatedInputMeta;
            if (typeof text === "string") {
              text = text;
            } else {
              text = getHTMLFromFragment(Fragment.from(text), state.schema);
            }
            const { from } = simulatedInputMeta;
            const to = from + text.length;
            run$1({
              editor,
              from,
              to,
              text,
              rules,
              plugin
            });
          });
        }
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput(view, from, to, text) {
        return run$1({
          editor,
          from,
          to,
          text,
          rules,
          plugin
        });
      },
      handleDOMEvents: {
        compositionend: /* @__PURE__ */ __name((view) => {
          setTimeout(() => {
            const { $cursor } = view.state.selection;
            if ($cursor) {
              run$1({
                editor,
                from: $cursor.pos,
                to: $cursor.pos,
                text: "",
                rules,
                plugin
              });
            }
          });
          return false;
        }, "compositionend")
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(view, event) {
        if (event.key !== "Enter") {
          return false;
        }
        const { $cursor } = view.state.selection;
        if ($cursor) {
          return run$1({
            editor,
            from: $cursor.pos,
            to: $cursor.pos,
            text: "\n",
            rules,
            plugin
          });
        }
        return false;
      }
    },
    // @ts-ignore
    isInputRules: true
  });
  return plugin;
}
__name(inputRulesPlugin, "inputRulesPlugin");
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
__name(getType, "getType");
function isPlainObject(value) {
  if (getType(value) !== "Object") {
    return false;
  }
  return value.constructor === Object && Object.getPrototypeOf(value) === Object.prototype;
}
__name(isPlainObject, "isPlainObject");
function mergeDeep(target, source) {
  const output = { ...target };
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isPlainObject(source[key]) && isPlainObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
__name(mergeDeep, "mergeDeep");
class Mark {
  static {
    __name(this, "Mark");
  }
  constructor(config = {}) {
    this.type = "mark";
    this.name = "mark";
    this.parent = null;
    this.child = null;
    this.config = {
      name: this.name,
      defaultOptions: {}
    };
    this.config = {
      ...this.config,
      ...config
    };
    this.name = this.config.name;
    if (config.defaultOptions && Object.keys(config.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
    }
    this.options = this.config.defaultOptions;
    if (this.config.addOptions) {
      this.options = callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      }));
    }
    this.storage = callOrReturn(getExtensionField(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(config = {}) {
    return new Mark(config);
  }
  configure(options = {}) {
    const extension = this.extend({
      ...this.config,
      addOptions: /* @__PURE__ */ __name(() => {
        return mergeDeep(this.options, options);
      }, "addOptions")
    });
    extension.name = this.name;
    extension.parent = this.parent;
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new Mark(extendedConfig);
    extension.parent = this;
    this.child = extension;
    extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
    if (extendedConfig.defaultOptions && Object.keys(extendedConfig.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
    }
    extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
      name: extension.name
    }));
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
  static handleExit({ editor, mark }) {
    const { tr } = editor.state;
    const currentPos = editor.state.selection.$from;
    const isAtEnd = currentPos.pos === currentPos.end();
    if (isAtEnd) {
      const currentMarks = currentPos.marks();
      const isInMark = !!currentMarks.find((m) => (m === null || m === void 0 ? void 0 : m.type.name) === mark.name);
      if (!isInMark) {
        return false;
      }
      const removeMark = currentMarks.find((m) => (m === null || m === void 0 ? void 0 : m.type.name) === mark.name);
      if (removeMark) {
        tr.removeStoredMark(removeMark);
      }
      tr.insertText(" ", currentPos.pos);
      editor.view.dispatch(tr);
      return true;
    }
    return false;
  }
}
function isNumber(value) {
  return typeof value === "number";
}
__name(isNumber, "isNumber");
class PasteRule {
  static {
    __name(this, "PasteRule");
  }
  constructor(config) {
    this.find = config.find;
    this.handler = config.handler;
  }
}
const pasteRuleMatcherHandler = /* @__PURE__ */ __name((text, find2, event) => {
  if (isRegExp(find2)) {
    return [...text.matchAll(find2)];
  }
  const matches = find2(text, event);
  if (!matches) {
    return [];
  }
  return matches.map((pasteRuleMatch) => {
    const result = [pasteRuleMatch.text];
    result.index = pasteRuleMatch.index;
    result.input = text;
    result.data = pasteRuleMatch.data;
    if (pasteRuleMatch.replaceWith) {
      if (!pasteRuleMatch.text.includes(pasteRuleMatch.replaceWith)) {
        console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
      }
      result.push(pasteRuleMatch.replaceWith);
    }
    return result;
  });
}, "pasteRuleMatcherHandler");
function run(config) {
  const { editor, state, from, to, rule, pasteEvent, dropEvent } = config;
  const { commands: commands2, chain, can } = new CommandManager({
    editor,
    state
  });
  const handlers = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isTextblock || node.type.spec.code) {
      return;
    }
    const resolvedFrom = Math.max(from, pos);
    const resolvedTo = Math.min(to, pos + node.content.size);
    const textToMatch = node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "￼");
    const matches = pasteRuleMatcherHandler(textToMatch, rule.find, pasteEvent);
    matches.forEach((match) => {
      if (match.index === void 0) {
        return;
      }
      const start = resolvedFrom + match.index + 1;
      const end = start + match[0].length;
      const range = {
        from: state.tr.mapping.map(start),
        to: state.tr.mapping.map(end)
      };
      const handler = rule.handler({
        state,
        range,
        match,
        commands: commands2,
        chain,
        can,
        pasteEvent,
        dropEvent
      });
      handlers.push(handler);
    });
  });
  const success = handlers.every((handler) => handler !== null);
  return success;
}
__name(run, "run");
const createClipboardPasteEvent = /* @__PURE__ */ __name((text) => {
  var _a;
  const event = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.setData("text/html", text);
  return event;
}, "createClipboardPasteEvent");
function pasteRulesPlugin(props) {
  const { editor, rules } = props;
  let dragSourceElement = null;
  let isPastedFromProseMirror = false;
  let isDroppedFromProseMirror = false;
  let pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
  let dropEvent;
  try {
    dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
  } catch (e) {
    dropEvent = null;
  }
  const processEvent = /* @__PURE__ */ __name(({ state, from, to, rule, pasteEvt }) => {
    const tr = state.tr;
    const chainableState = createChainableState({
      state,
      transaction: tr
    });
    const handler = run({
      editor,
      state: chainableState,
      from: Math.max(from - 1, 0),
      to: to.b - 1,
      rule,
      pasteEvent: pasteEvt,
      dropEvent
    });
    if (!handler || !tr.steps.length) {
      return;
    }
    try {
      dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
    } catch (e) {
      dropEvent = null;
    }
    pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
    return tr;
  }, "processEvent");
  const plugins = rules.map((rule) => {
    return new Plugin({
      // we register a global drag handler to track the current drag source element
      view(view) {
        const handleDragstart = /* @__PURE__ */ __name((event) => {
          var _a;
          dragSourceElement = ((_a = view.dom.parentElement) === null || _a === void 0 ? void 0 : _a.contains(event.target)) ? view.dom.parentElement : null;
        }, "handleDragstart");
        window.addEventListener("dragstart", handleDragstart);
        return {
          destroy() {
            window.removeEventListener("dragstart", handleDragstart);
          }
        };
      },
      props: {
        handleDOMEvents: {
          drop: /* @__PURE__ */ __name((view, event) => {
            isDroppedFromProseMirror = dragSourceElement === view.dom.parentElement;
            dropEvent = event;
            return false;
          }, "drop"),
          paste: /* @__PURE__ */ __name((_view, event) => {
            var _a;
            const html = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData("text/html");
            pasteEvent = event;
            isPastedFromProseMirror = !!(html === null || html === void 0 ? void 0 : html.includes("data-pm-slice"));
            return false;
          }, "paste")
        }
      },
      appendTransaction: /* @__PURE__ */ __name((transactions, oldState, state) => {
        const transaction = transactions[0];
        const isPaste = transaction.getMeta("uiEvent") === "paste" && !isPastedFromProseMirror;
        const isDrop = transaction.getMeta("uiEvent") === "drop" && !isDroppedFromProseMirror;
        const simulatedPasteMeta = transaction.getMeta("applyPasteRules");
        const isSimulatedPaste = !!simulatedPasteMeta;
        if (!isPaste && !isDrop && !isSimulatedPaste) {
          return;
        }
        if (isSimulatedPaste) {
          let { text } = simulatedPasteMeta;
          if (typeof text === "string") {
            text = text;
          } else {
            text = getHTMLFromFragment(Fragment.from(text), state.schema);
          }
          const { from: from2 } = simulatedPasteMeta;
          const to2 = from2 + text.length;
          const pasteEvt = createClipboardPasteEvent(text);
          return processEvent({
            rule,
            state,
            from: from2,
            to: { b: to2 },
            pasteEvt
          });
        }
        const from = oldState.doc.content.findDiffStart(state.doc.content);
        const to = oldState.doc.content.findDiffEnd(state.doc.content);
        if (!isNumber(from) || !to || from === to.b) {
          return;
        }
        return processEvent({
          rule,
          state,
          from,
          to,
          pasteEvt: pasteEvent
        });
      }, "appendTransaction")
    });
  });
  return plugins;
}
__name(pasteRulesPlugin, "pasteRulesPlugin");
function findDuplicates(items) {
  const filtered = items.filter((el, index2) => items.indexOf(el) !== index2);
  return Array.from(new Set(filtered));
}
__name(findDuplicates, "findDuplicates");
class ExtensionManager {
  static {
    __name(this, "ExtensionManager");
  }
  constructor(extensions, editor) {
    this.splittableMarks = [];
    this.editor = editor;
    this.extensions = ExtensionManager.resolve(extensions);
    this.schema = getSchemaByResolvedExtensions(this.extensions, editor);
    this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(extensions) {
    const resolvedExtensions = ExtensionManager.sort(ExtensionManager.flatten(extensions));
    const duplicatedNames = findDuplicates(resolvedExtensions.map((extension) => extension.name));
    if (duplicatedNames.length) {
      console.warn(`[tiptap warn]: Duplicate extension names found: [${duplicatedNames.map((item) => `'${item}'`).join(", ")}]. This can lead to issues.`);
    }
    return resolvedExtensions;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(extensions) {
    return extensions.map((extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
      };
      const addExtensions = getExtensionField(extension, "addExtensions", context);
      if (addExtensions) {
        return [extension, ...this.flatten(addExtensions())];
      }
      return extension;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(extensions) {
    const defaultPriority = 100;
    return extensions.sort((a, b) => {
      const priorityA = getExtensionField(a, "priority") || defaultPriority;
      const priorityB = getExtensionField(b, "priority") || defaultPriority;
      if (priorityA > priorityB) {
        return -1;
      }
      if (priorityA < priorityB) {
        return 1;
      }
      return 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((commands2, extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const addCommands = getExtensionField(extension, "addCommands", context);
      if (!addCommands) {
        return commands2;
      }
      return {
        ...commands2,
        ...addCommands()
      };
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor } = this;
    const extensions = ExtensionManager.sort([...this.extensions].reverse());
    const inputRules = [];
    const pasteRules = [];
    const allPlugins = extensions.map((extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const plugins = [];
      const addKeyboardShortcuts = getExtensionField(extension, "addKeyboardShortcuts", context);
      let defaultBindings = {};
      if (extension.type === "mark" && getExtensionField(extension, "exitable", context)) {
        defaultBindings.ArrowRight = () => Mark.handleExit({ editor, mark: extension });
      }
      if (addKeyboardShortcuts) {
        const bindings = Object.fromEntries(Object.entries(addKeyboardShortcuts()).map(([shortcut, method]) => {
          return [shortcut, () => method({ editor })];
        }));
        defaultBindings = { ...defaultBindings, ...bindings };
      }
      const keyMapPlugin = keymap(defaultBindings);
      plugins.push(keyMapPlugin);
      const addInputRules = getExtensionField(extension, "addInputRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enableInputRules) && addInputRules) {
        inputRules.push(...addInputRules());
      }
      const addPasteRules = getExtensionField(extension, "addPasteRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
        pasteRules.push(...addPasteRules());
      }
      const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
      if (addProseMirrorPlugins) {
        const proseMirrorPlugins = addProseMirrorPlugins();
        plugins.push(...proseMirrorPlugins);
      }
      return plugins;
    }).flat();
    return [
      inputRulesPlugin({
        editor,
        rules: inputRules
      }),
      ...pasteRulesPlugin({
        editor,
        rules: pasteRules
      }),
      ...allPlugins
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return getAttributesFromExtensions(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor } = this;
    const { nodeExtensions } = splitExtensions(this.extensions);
    return Object.fromEntries(nodeExtensions.filter((extension) => !!getExtensionField(extension, "addNodeView")).map((extension) => {
      const extensionAttributes = this.attributes.filter((attribute) => attribute.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor,
        type: getNodeType(extension.name, this.schema)
      };
      const addNodeView = getExtensionField(extension, "addNodeView", context);
      if (!addNodeView) {
        return [];
      }
      const nodeview = /* @__PURE__ */ __name((node, view, getPos, decorations, innerDecorations) => {
        const HTMLAttributes = getRenderedAttributes(node, extensionAttributes);
        return addNodeView()({
          // pass-through
          node,
          view,
          getPos,
          decorations,
          innerDecorations,
          // tiptap-specific
          editor,
          extension,
          HTMLAttributes
        });
      }, "nodeview");
      return [extension.name, nodeview];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((extension) => {
      var _a;
      this.editor.extensionStorage[extension.name] = extension.storage;
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      if (extension.type === "mark") {
        const keepOnSplit = (_a = callOrReturn(getExtensionField(extension, "keepOnSplit", context))) !== null && _a !== void 0 ? _a : true;
        if (keepOnSplit) {
          this.splittableMarks.push(extension.name);
        }
      }
      const onBeforeCreate = getExtensionField(extension, "onBeforeCreate", context);
      const onCreate = getExtensionField(extension, "onCreate", context);
      const onUpdate = getExtensionField(extension, "onUpdate", context);
      const onSelectionUpdate = getExtensionField(extension, "onSelectionUpdate", context);
      const onTransaction = getExtensionField(extension, "onTransaction", context);
      const onFocus = getExtensionField(extension, "onFocus", context);
      const onBlur = getExtensionField(extension, "onBlur", context);
      const onDestroy = getExtensionField(extension, "onDestroy", context);
      if (onBeforeCreate) {
        this.editor.on("beforeCreate", onBeforeCreate);
      }
      if (onCreate) {
        this.editor.on("create", onCreate);
      }
      if (onUpdate) {
        this.editor.on("update", onUpdate);
      }
      if (onSelectionUpdate) {
        this.editor.on("selectionUpdate", onSelectionUpdate);
      }
      if (onTransaction) {
        this.editor.on("transaction", onTransaction);
      }
      if (onFocus) {
        this.editor.on("focus", onFocus);
      }
      if (onBlur) {
        this.editor.on("blur", onBlur);
      }
      if (onDestroy) {
        this.editor.on("destroy", onDestroy);
      }
    });
  }
}
class Extension {
  static {
    __name(this, "Extension");
  }
  constructor(config = {}) {
    this.type = "extension";
    this.name = "extension";
    this.parent = null;
    this.child = null;
    this.config = {
      name: this.name,
      defaultOptions: {}
    };
    this.config = {
      ...this.config,
      ...config
    };
    this.name = this.config.name;
    if (config.defaultOptions && Object.keys(config.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
    }
    this.options = this.config.defaultOptions;
    if (this.config.addOptions) {
      this.options = callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      }));
    }
    this.storage = callOrReturn(getExtensionField(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(config = {}) {
    return new Extension(config);
  }
  configure(options = {}) {
    const extension = this.extend({
      ...this.config,
      addOptions: /* @__PURE__ */ __name(() => {
        return mergeDeep(this.options, options);
      }, "addOptions")
    });
    extension.name = this.name;
    extension.parent = this.parent;
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new Extension({ ...this.config, ...extendedConfig });
    extension.parent = this;
    this.child = extension;
    extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
    if (extendedConfig.defaultOptions && Object.keys(extendedConfig.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
    }
    extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
      name: extension.name
    }));
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
}
function getTextBetween(startNode, range, options) {
  const { from, to } = range;
  const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
  let text = "";
  startNode.nodesBetween(from, to, (node, pos, parent, index2) => {
    var _a;
    if (node.isBlock && pos > from) {
      text += blockSeparator;
    }
    const textSerializer = textSerializers === null || textSerializers === void 0 ? void 0 : textSerializers[node.type.name];
    if (textSerializer) {
      if (parent) {
        text += textSerializer({
          node,
          pos,
          parent,
          index: index2,
          range
        });
      }
      return false;
    }
    if (node.isText) {
      text += (_a = node === null || node === void 0 ? void 0 : node.text) === null || _a === void 0 ? void 0 : _a.slice(Math.max(from, pos) - pos, to - pos);
    }
  });
  return text;
}
__name(getTextBetween, "getTextBetween");
function getTextSerializersFromSchema(schema) {
  return Object.fromEntries(Object.entries(schema.nodes).filter(([, node]) => node.spec.toText).map(([name, node]) => [name, node.spec.toText]));
}
__name(getTextSerializersFromSchema, "getTextSerializersFromSchema");
const ClipboardTextSerializer = Extension.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: /* @__PURE__ */ __name(() => {
            const { editor } = this;
            const { state, schema } = editor;
            const { doc, selection } = state;
            const { ranges } = selection;
            const from = Math.min(...ranges.map((range2) => range2.$from.pos));
            const to = Math.max(...ranges.map((range2) => range2.$to.pos));
            const textSerializers = getTextSerializersFromSchema(schema);
            const range = { from, to };
            return getTextBetween(doc, range, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers
            });
          }, "clipboardTextSerializer")
        }
      })
    ];
  }
});
const blur = /* @__PURE__ */ __name(() => ({ editor, view }) => {
  requestAnimationFrame(() => {
    var _a;
    if (!editor.isDestroyed) {
      view.dom.blur();
      (_a = window === null || window === void 0 ? void 0 : window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
    }
  });
  return true;
}, "blur");
const clearContent = /* @__PURE__ */ __name((emitUpdate = false) => ({ commands: commands2 }) => {
  return commands2.setContent("", emitUpdate);
}, "clearContent");
const clearNodes = /* @__PURE__ */ __name(() => ({ state, tr, dispatch }) => {
  const { selection } = tr;
  const { ranges } = selection;
  if (!dispatch) {
    return true;
  }
  ranges.forEach(({ $from, $to }) => {
    state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (node.type.isText) {
        return;
      }
      const { doc, mapping } = tr;
      const $mappedFrom = doc.resolve(mapping.map(pos));
      const $mappedTo = doc.resolve(mapping.map(pos + node.nodeSize));
      const nodeRange = $mappedFrom.blockRange($mappedTo);
      if (!nodeRange) {
        return;
      }
      const targetLiftDepth = liftTarget(nodeRange);
      if (node.type.isTextblock) {
        const { defaultType } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
        tr.setNodeMarkup(nodeRange.start, defaultType);
      }
      if (targetLiftDepth || targetLiftDepth === 0) {
        tr.lift(nodeRange, targetLiftDepth);
      }
    });
  });
  return true;
}, "clearNodes");
const command = /* @__PURE__ */ __name((fn) => (props) => {
  return fn(props);
}, "command");
const createParagraphNear = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return createParagraphNear$1(state, dispatch);
}, "createParagraphNear");
const cut = /* @__PURE__ */ __name((originRange, targetPos) => ({ editor, tr }) => {
  const { state } = editor;
  const contentSlice = state.doc.slice(originRange.from, originRange.to);
  tr.deleteRange(originRange.from, originRange.to);
  const newPos = tr.mapping.map(targetPos);
  tr.insert(newPos, contentSlice.content);
  tr.setSelection(new TextSelection(tr.doc.resolve(newPos - 1)));
  return true;
}, "cut");
const deleteCurrentNode = /* @__PURE__ */ __name(() => ({ tr, dispatch }) => {
  const { selection } = tr;
  const currentNode = selection.$anchor.node();
  if (currentNode.content.size > 0) {
    return false;
  }
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === currentNode.type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
}, "deleteCurrentNode");
const deleteNode = /* @__PURE__ */ __name((typeOrName) => ({ tr, state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
}, "deleteNode");
const deleteRange = /* @__PURE__ */ __name((range) => ({ tr, dispatch }) => {
  const { from, to } = range;
  if (dispatch) {
    tr.delete(from, to);
  }
  return true;
}, "deleteRange");
const deleteSelection = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return deleteSelection$1(state, dispatch);
}, "deleteSelection");
const enter = /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
  return commands2.keyboardShortcut("Enter");
}, "enter");
const exitCode = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return exitCode$1(state, dispatch);
}, "exitCode");
function objectIncludes(object1, object2, options = { strict: true }) {
  const keys = Object.keys(object2);
  if (!keys.length) {
    return true;
  }
  return keys.every((key) => {
    if (options.strict) {
      return object2[key] === object1[key];
    }
    if (isRegExp(object2[key])) {
      return object2[key].test(object1[key]);
    }
    return object2[key] === object1[key];
  });
}
__name(objectIncludes, "objectIncludes");
function findMarkInSet(marks, type, attributes = {}) {
  return marks.find((item) => {
    return item.type === type && objectIncludes(
      // Only check equality for the attributes that are provided
      Object.fromEntries(Object.keys(attributes).map((k) => [k, item.attrs[k]])),
      attributes
    );
  });
}
__name(findMarkInSet, "findMarkInSet");
function isMarkInSet(marks, type, attributes = {}) {
  return !!findMarkInSet(marks, type, attributes);
}
__name(isMarkInSet, "isMarkInSet");
function getMarkRange($pos, type, attributes) {
  var _a;
  if (!$pos || !type) {
    return;
  }
  let start = $pos.parent.childAfter($pos.parentOffset);
  if (!start.node || !start.node.marks.some((mark2) => mark2.type === type)) {
    start = $pos.parent.childBefore($pos.parentOffset);
  }
  if (!start.node || !start.node.marks.some((mark2) => mark2.type === type)) {
    return;
  }
  attributes = attributes || ((_a = start.node.marks[0]) === null || _a === void 0 ? void 0 : _a.attrs);
  const mark = findMarkInSet([...start.node.marks], type, attributes);
  if (!mark) {
    return;
  }
  let startIndex = start.index;
  let startPos = $pos.start() + start.offset;
  let endIndex = startIndex + 1;
  let endPos = startPos + start.node.nodeSize;
  while (startIndex > 0 && isMarkInSet([...$pos.parent.child(startIndex - 1).marks], type, attributes)) {
    startIndex -= 1;
    startPos -= $pos.parent.child(startIndex).nodeSize;
  }
  while (endIndex < $pos.parent.childCount && isMarkInSet([...$pos.parent.child(endIndex).marks], type, attributes)) {
    endPos += $pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }
  return {
    from: startPos,
    to: endPos
  };
}
__name(getMarkRange, "getMarkRange");
function getMarkType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.marks[nameOrType]) {
      throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.marks[nameOrType];
  }
  return nameOrType;
}
__name(getMarkType, "getMarkType");
const extendMarkRange = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
  const type = getMarkType(typeOrName, state.schema);
  const { doc, selection } = tr;
  const { $from, from, to } = selection;
  if (dispatch) {
    const range = getMarkRange($from, type, attributes);
    if (range && range.from <= from && range.to >= to) {
      const newSelection = TextSelection.create(doc, range.from, range.to);
      tr.setSelection(newSelection);
    }
  }
  return true;
}, "extendMarkRange");
const first = /* @__PURE__ */ __name((commands2) => (props) => {
  const items = typeof commands2 === "function" ? commands2(props) : commands2;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i](props)) {
      return true;
    }
  }
  return false;
}, "first");
function isTextSelection(value) {
  return value instanceof TextSelection;
}
__name(isTextSelection, "isTextSelection");
function minMax(value = 0, min = 0, max = 0) {
  return Math.min(Math.max(value, min), max);
}
__name(minMax, "minMax");
function resolveFocusPosition(doc, position = null) {
  if (!position) {
    return null;
  }
  const selectionAtStart = Selection.atStart(doc);
  const selectionAtEnd = Selection.atEnd(doc);
  if (position === "start" || position === true) {
    return selectionAtStart;
  }
  if (position === "end") {
    return selectionAtEnd;
  }
  const minPos = selectionAtStart.from;
  const maxPos = selectionAtEnd.to;
  if (position === "all") {
    return TextSelection.create(doc, minMax(0, minPos, maxPos), minMax(doc.content.size, minPos, maxPos));
  }
  return TextSelection.create(doc, minMax(position, minPos, maxPos), minMax(position, minPos, maxPos));
}
__name(resolveFocusPosition, "resolveFocusPosition");
function isiOS() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
__name(isiOS, "isiOS");
const focus = /* @__PURE__ */ __name((position = null, options = {}) => ({ editor, view, tr, dispatch }) => {
  options = {
    scrollIntoView: true,
    ...options
  };
  const delayedFocus = /* @__PURE__ */ __name(() => {
    if (isiOS()) {
      view.dom.focus();
    }
    requestAnimationFrame(() => {
      if (!editor.isDestroyed) {
        view.focus();
        if (options === null || options === void 0 ? void 0 : options.scrollIntoView) {
          editor.commands.scrollIntoView();
        }
      }
    });
  }, "delayedFocus");
  if (view.hasFocus() && position === null || position === false) {
    return true;
  }
  if (dispatch && position === null && !isTextSelection(editor.state.selection)) {
    delayedFocus();
    return true;
  }
  const selection = resolveFocusPosition(tr.doc, position) || editor.state.selection;
  const isSameSelection = editor.state.selection.eq(selection);
  if (dispatch) {
    if (!isSameSelection) {
      tr.setSelection(selection);
    }
    if (isSameSelection && tr.storedMarks) {
      tr.setStoredMarks(tr.storedMarks);
    }
    delayedFocus();
  }
  return true;
}, "focus");
const forEach = /* @__PURE__ */ __name((items, fn) => (props) => {
  return items.every((item, index2) => fn(item, { ...props, index: index2 }));
}, "forEach");
const insertContent = /* @__PURE__ */ __name((value, options) => ({ tr, commands: commands2 }) => {
  return commands2.insertContentAt({ from: tr.selection.from, to: tr.selection.to }, value, options);
}, "insertContent");
const removeWhitespaces = /* @__PURE__ */ __name((node) => {
  const children = node.childNodes;
  for (let i = children.length - 1; i >= 0; i -= 1) {
    const child = children[i];
    if (child.nodeType === 3 && child.nodeValue && /^(\n\s\s|\n)$/.test(child.nodeValue)) {
      node.removeChild(child);
    } else if (child.nodeType === 1) {
      removeWhitespaces(child);
    }
  }
  return node;
}, "removeWhitespaces");
function elementFromString$1(value) {
  const wrappedValue = `<body>${value}</body>`;
  const html = new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
  return removeWhitespaces(html);
}
__name(elementFromString$1, "elementFromString$1");
function createNodeFromContent(content, schema, options) {
  if (content instanceof Node$2 || content instanceof Fragment) {
    return content;
  }
  options = {
    slice: true,
    parseOptions: {},
    ...options
  };
  const isJSONContent = typeof content === "object" && content !== null;
  const isTextContent = typeof content === "string";
  if (isJSONContent) {
    try {
      const isArrayContent = Array.isArray(content) && content.length > 0;
      if (isArrayContent) {
        return Fragment.fromArray(content.map((item) => schema.nodeFromJSON(item)));
      }
      const node = schema.nodeFromJSON(content);
      if (options.errorOnInvalidContent) {
        node.check();
      }
      return node;
    } catch (error) {
      if (options.errorOnInvalidContent) {
        throw new Error("[tiptap error]: Invalid JSON content", { cause: error });
      }
      console.warn("[tiptap warn]: Invalid content.", "Passed value:", content, "Error:", error);
      return createNodeFromContent("", schema, options);
    }
  }
  if (isTextContent) {
    if (options.errorOnInvalidContent) {
      let hasInvalidContent = false;
      let invalidContent = "";
      const contentCheckSchema = new Schema({
        topNode: schema.spec.topNode,
        marks: schema.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: schema.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: /* @__PURE__ */ __name((e) => {
                  hasInvalidContent = true;
                  invalidContent = typeof e === "string" ? e : e.outerHTML;
                  return null;
                }, "getAttrs")
              }
            ]
          }
        })
      });
      if (options.slice) {
        DOMParser.fromSchema(contentCheckSchema).parseSlice(elementFromString$1(content), options.parseOptions);
      } else {
        DOMParser.fromSchema(contentCheckSchema).parse(elementFromString$1(content), options.parseOptions);
      }
      if (options.errorOnInvalidContent && hasInvalidContent) {
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${invalidContent}`) });
      }
    }
    const parser = DOMParser.fromSchema(schema);
    if (options.slice) {
      return parser.parseSlice(elementFromString$1(content), options.parseOptions).content;
    }
    return parser.parse(elementFromString$1(content), options.parseOptions);
  }
  return createNodeFromContent("", schema, options);
}
__name(createNodeFromContent, "createNodeFromContent");
function selectionToInsertionEnd(tr, startLen, bias) {
  const last = tr.steps.length - 1;
  if (last < startLen) {
    return;
  }
  const step = tr.steps[last];
  if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep)) {
    return;
  }
  const map = tr.mapping.maps[last];
  let end = 0;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end === 0) {
      end = newTo;
    }
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
__name(selectionToInsertionEnd, "selectionToInsertionEnd");
const isFragment = /* @__PURE__ */ __name((nodeOrFragment) => {
  return !("type" in nodeOrFragment);
}, "isFragment");
const insertContentAt = /* @__PURE__ */ __name((position, value, options) => ({ tr, dispatch, editor }) => {
  var _a;
  if (dispatch) {
    options = {
      parseOptions: editor.options.parseOptions,
      updateSelection: true,
      applyInputRules: false,
      applyPasteRules: false,
      ...options
    };
    let content;
    try {
      content = createNodeFromContent(value, editor.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...options.parseOptions
        },
        errorOnInvalidContent: (_a = options.errorOnInvalidContent) !== null && _a !== void 0 ? _a : editor.options.enableContentCheck
      });
    } catch (e) {
      editor.emit("contentError", {
        editor,
        error: e,
        disableCollaboration: /* @__PURE__ */ __name(() => {
          if (editor.storage.collaboration) {
            editor.storage.collaboration.isDisabled = true;
          }
        }, "disableCollaboration")
      });
      return false;
    }
    let { from, to } = typeof position === "number" ? { from: position, to: position } : { from: position.from, to: position.to };
    let isOnlyTextContent = true;
    let isOnlyBlockContent = true;
    const nodes = isFragment(content) ? content : [content];
    nodes.forEach((node) => {
      node.check();
      isOnlyTextContent = isOnlyTextContent ? node.isText && node.marks.length === 0 : false;
      isOnlyBlockContent = isOnlyBlockContent ? node.isBlock : false;
    });
    if (from === to && isOnlyBlockContent) {
      const { parent } = tr.doc.resolve(from);
      const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
      if (isEmptyTextBlock) {
        from -= 1;
        to += 1;
      }
    }
    let newContent;
    if (isOnlyTextContent) {
      if (Array.isArray(value)) {
        newContent = value.map((v) => v.text || "").join("");
      } else if (value instanceof Fragment) {
        let text = "";
        value.forEach((node) => {
          if (node.text) {
            text += node.text;
          }
        });
        newContent = text;
      } else if (typeof value === "object" && !!value && !!value.text) {
        newContent = value.text;
      } else {
        newContent = value;
      }
      tr.insertText(newContent, from, to);
    } else {
      newContent = content;
      tr.replaceWith(from, to, newContent);
    }
    if (options.updateSelection) {
      selectionToInsertionEnd(tr, tr.steps.length - 1, -1);
    }
    if (options.applyInputRules) {
      tr.setMeta("applyInputRules", { from, text: newContent });
    }
    if (options.applyPasteRules) {
      tr.setMeta("applyPasteRules", { from, text: newContent });
    }
  }
  return true;
}, "insertContentAt");
const joinUp = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return joinUp$1(state, dispatch);
}, "joinUp");
const joinDown = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return joinDown$1(state, dispatch);
}, "joinDown");
const joinBackward = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return joinBackward$1(state, dispatch);
}, "joinBackward");
const joinForward = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return joinForward$1(state, dispatch);
}, "joinForward");
const joinItemBackward = /* @__PURE__ */ __name(() => ({ state, dispatch, tr }) => {
  try {
    const point = joinPoint(state.doc, state.selection.$from.pos, -1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch (e) {
    return false;
  }
}, "joinItemBackward");
const joinItemForward = /* @__PURE__ */ __name(() => ({ state, dispatch, tr }) => {
  try {
    const point = joinPoint(state.doc, state.selection.$from.pos, 1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch (e) {
    return false;
  }
}, "joinItemForward");
const joinTextblockBackward = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return joinTextblockBackward$1(state, dispatch);
}, "joinTextblockBackward");
const joinTextblockForward = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return joinTextblockForward$1(state, dispatch);
}, "joinTextblockForward");
function isMacOS() {
  return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
}
__name(isMacOS, "isMacOS");
function normalizeKeyName(name) {
  const parts = name.split(/-(?!$)/);
  let result = parts[parts.length - 1];
  if (result === "Space") {
    result = " ";
  }
  let alt;
  let ctrl;
  let shift;
  let meta;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) {
      meta = true;
    } else if (/^a(lt)?$/i.test(mod)) {
      alt = true;
    } else if (/^(c|ctrl|control)$/i.test(mod)) {
      ctrl = true;
    } else if (/^s(hift)?$/i.test(mod)) {
      shift = true;
    } else if (/^mod$/i.test(mod)) {
      if (isiOS() || isMacOS()) {
        meta = true;
      } else {
        ctrl = true;
      }
    } else {
      throw new Error(`Unrecognized modifier name: ${mod}`);
    }
  }
  if (alt) {
    result = `Alt-${result}`;
  }
  if (ctrl) {
    result = `Ctrl-${result}`;
  }
  if (meta) {
    result = `Meta-${result}`;
  }
  if (shift) {
    result = `Shift-${result}`;
  }
  return result;
}
__name(normalizeKeyName, "normalizeKeyName");
const keyboardShortcut = /* @__PURE__ */ __name((name) => ({ editor, view, tr, dispatch }) => {
  const keys = normalizeKeyName(name).split(/-(?!$)/);
  const key = keys.find((item) => !["Alt", "Ctrl", "Meta", "Shift"].includes(item));
  const event = new KeyboardEvent("keydown", {
    key: key === "Space" ? " " : key,
    altKey: keys.includes("Alt"),
    ctrlKey: keys.includes("Ctrl"),
    metaKey: keys.includes("Meta"),
    shiftKey: keys.includes("Shift"),
    bubbles: true,
    cancelable: true
  });
  const capturedTransaction = editor.captureTransaction(() => {
    view.someProp("handleKeyDown", (f) => f(view, event));
  });
  capturedTransaction === null || capturedTransaction === void 0 ? void 0 : capturedTransaction.steps.forEach((step) => {
    const newStep = step.map(tr.mapping);
    if (newStep && dispatch) {
      tr.maybeStep(newStep);
    }
  });
  return true;
}, "keyboardShortcut");
function isNodeActive(state, typeOrName, attributes = {}) {
  const { from, to, empty } = state.selection;
  const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;
  const nodeRanges = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    if (node.isText) {
      return;
    }
    const relativeFrom = Math.max(from, pos);
    const relativeTo = Math.min(to, pos + node.nodeSize);
    nodeRanges.push({
      node,
      from: relativeFrom,
      to: relativeTo
    });
  });
  const selectionRange = to - from;
  const matchedNodeRanges = nodeRanges.filter((nodeRange) => {
    if (!type) {
      return true;
    }
    return type.name === nodeRange.node.type.name;
  }).filter((nodeRange) => objectIncludes(nodeRange.node.attrs, attributes, { strict: false }));
  if (empty) {
    return !!matchedNodeRanges.length;
  }
  const range = matchedNodeRanges.reduce((sum, nodeRange) => sum + nodeRange.to - nodeRange.from, 0);
  return range >= selectionRange;
}
__name(isNodeActive, "isNodeActive");
const lift = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (!isActive2) {
    return false;
  }
  return lift$1(state, dispatch);
}, "lift");
const liftEmptyBlock = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return liftEmptyBlock$1(state, dispatch);
}, "liftEmptyBlock");
const liftListItem = /* @__PURE__ */ __name((typeOrName) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return liftListItem$1(type)(state, dispatch);
}, "liftListItem");
const newlineInCode = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return newlineInCode$1(state, dispatch);
}, "newlineInCode");
function getSchemaTypeNameByName(name, schema) {
  if (schema.nodes[name]) {
    return "node";
  }
  if (schema.marks[name]) {
    return "mark";
  }
  return null;
}
__name(getSchemaTypeNameByName, "getSchemaTypeNameByName");
function deleteProps(obj, propOrProps) {
  const props = typeof propOrProps === "string" ? [propOrProps] : propOrProps;
  return Object.keys(obj).reduce((newObj, prop) => {
    if (!props.includes(prop)) {
      newObj[prop] = obj[prop];
    }
    return newObj;
  }, {});
}
__name(deleteProps, "deleteProps");
const resetAttributes = /* @__PURE__ */ __name((typeOrName, attributes) => ({ tr, state, dispatch }) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch) {
    tr.selection.ranges.forEach((range) => {
      state.doc.nodesBetween(range.$from.pos, range.$to.pos, (node, pos) => {
        if (nodeType && nodeType === node.type) {
          tr.setNodeMarkup(pos, void 0, deleteProps(node.attrs, attributes));
        }
        if (markType && node.marks.length) {
          node.marks.forEach((mark) => {
            if (markType === mark.type) {
              tr.addMark(pos, pos + node.nodeSize, markType.create(deleteProps(mark.attrs, attributes)));
            }
          });
        }
      });
    });
  }
  return true;
}, "resetAttributes");
const scrollIntoView = /* @__PURE__ */ __name(() => ({ tr, dispatch }) => {
  if (dispatch) {
    tr.scrollIntoView();
  }
  return true;
}, "scrollIntoView");
const selectAll = /* @__PURE__ */ __name(() => ({ tr, commands: commands2 }) => {
  return commands2.setTextSelection({
    from: 0,
    to: tr.doc.content.size
  });
}, "selectAll");
const selectNodeBackward = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return selectNodeBackward$1(state, dispatch);
}, "selectNodeBackward");
const selectNodeForward = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return selectNodeForward$1(state, dispatch);
}, "selectNodeForward");
const selectParentNode = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return selectParentNode$1(state, dispatch);
}, "selectParentNode");
const selectTextblockEnd = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return selectTextblockEnd$1(state, dispatch);
}, "selectTextblockEnd");
const selectTextblockStart = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  return selectTextblockStart$1(state, dispatch);
}, "selectTextblockStart");
function createDocument(content, schema, parseOptions = {}, options = {}) {
  return createNodeFromContent(content, schema, {
    slice: false,
    parseOptions,
    errorOnInvalidContent: options.errorOnInvalidContent
  });
}
__name(createDocument, "createDocument");
const setContent = /* @__PURE__ */ __name((content, emitUpdate = false, parseOptions = {}, options = {}) => ({ editor, tr, dispatch, commands: commands2 }) => {
  var _a, _b;
  const { doc } = tr;
  if (parseOptions.preserveWhitespace !== "full") {
    const document2 = createDocument(content, editor.schema, parseOptions, {
      errorOnInvalidContent: (_a = options.errorOnInvalidContent) !== null && _a !== void 0 ? _a : editor.options.enableContentCheck
    });
    if (dispatch) {
      tr.replaceWith(0, doc.content.size, document2).setMeta("preventUpdate", !emitUpdate);
    }
    return true;
  }
  if (dispatch) {
    tr.setMeta("preventUpdate", !emitUpdate);
  }
  return commands2.insertContentAt({ from: 0, to: doc.content.size }, content, {
    parseOptions,
    errorOnInvalidContent: (_b = options.errorOnInvalidContent) !== null && _b !== void 0 ? _b : editor.options.enableContentCheck
  });
}, "setContent");
function getMarkAttributes(state, typeOrName) {
  const type = getMarkType(typeOrName, state.schema);
  const { from, to, empty } = state.selection;
  const marks = [];
  if (empty) {
    if (state.storedMarks) {
      marks.push(...state.storedMarks);
    }
    marks.push(...state.selection.$head.marks());
  } else {
    state.doc.nodesBetween(from, to, (node) => {
      marks.push(...node.marks);
    });
  }
  const mark = marks.find((markItem) => markItem.type.name === type.name);
  if (!mark) {
    return {};
  }
  return { ...mark.attrs };
}
__name(getMarkAttributes, "getMarkAttributes");
function combineTransactionSteps(oldDoc, transactions) {
  const transform = new Transform(oldDoc);
  transactions.forEach((transaction) => {
    transaction.steps.forEach((step) => {
      transform.step(step);
    });
  });
  return transform;
}
__name(combineTransactionSteps, "combineTransactionSteps");
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i += 1) {
    const { type } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
__name(defaultBlockAt, "defaultBlockAt");
function findChildrenInRange(node, range, predicate) {
  const nodesWithPos = [];
  node.nodesBetween(range.from, range.to, (child, pos) => {
    if (predicate(child)) {
      nodesWithPos.push({
        node: child,
        pos
      });
    }
  });
  return nodesWithPos;
}
__name(findChildrenInRange, "findChildrenInRange");
function findParentNodeClosestToPos($pos, predicate) {
  for (let i = $pos.depth; i > 0; i -= 1) {
    const node = $pos.node(i);
    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node
      };
    }
  }
}
__name(findParentNodeClosestToPos, "findParentNodeClosestToPos");
function findParentNode(predicate) {
  return (selection) => findParentNodeClosestToPos(selection.$from, predicate);
}
__name(findParentNode, "findParentNode");
function getText(node, options) {
  const range = {
    from: 0,
    to: node.content.size
  };
  return getTextBetween(node, range, options);
}
__name(getText, "getText");
function getNodeAttributes(state, typeOrName) {
  const type = getNodeType(typeOrName, state.schema);
  const { from, to } = state.selection;
  const nodes = [];
  state.doc.nodesBetween(from, to, (node2) => {
    nodes.push(node2);
  });
  const node = nodes.reverse().find((nodeItem) => nodeItem.type.name === type.name);
  if (!node) {
    return {};
  }
  return { ...node.attrs };
}
__name(getNodeAttributes, "getNodeAttributes");
function getAttributes(state, typeOrName) {
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (schemaType === "node") {
    return getNodeAttributes(state, typeOrName);
  }
  if (schemaType === "mark") {
    return getMarkAttributes(state, typeOrName);
  }
  return {};
}
__name(getAttributes, "getAttributes");
function removeDuplicates(array, by = JSON.stringify) {
  const seen = {};
  return array.filter((item) => {
    const key = by(item);
    return Object.prototype.hasOwnProperty.call(seen, key) ? false : seen[key] = true;
  });
}
__name(removeDuplicates, "removeDuplicates");
function simplifyChangedRanges(changes) {
  const uniqueChanges = removeDuplicates(changes);
  return uniqueChanges.length === 1 ? uniqueChanges : uniqueChanges.filter((change, index2) => {
    const rest = uniqueChanges.filter((_, i) => i !== index2);
    return !rest.some((otherChange) => {
      return change.oldRange.from >= otherChange.oldRange.from && change.oldRange.to <= otherChange.oldRange.to && change.newRange.from >= otherChange.newRange.from && change.newRange.to <= otherChange.newRange.to;
    });
  });
}
__name(simplifyChangedRanges, "simplifyChangedRanges");
function getChangedRanges(transform) {
  const { mapping, steps } = transform;
  const changes = [];
  mapping.maps.forEach((stepMap, index2) => {
    const ranges = [];
    if (!stepMap.ranges.length) {
      const { from, to } = steps[index2];
      if (from === void 0 || to === void 0) {
        return;
      }
      ranges.push({ from, to });
    } else {
      stepMap.forEach((from, to) => {
        ranges.push({ from, to });
      });
    }
    ranges.forEach(({ from, to }) => {
      const newStart = mapping.slice(index2).map(from, -1);
      const newEnd = mapping.slice(index2).map(to);
      const oldStart = mapping.invert().map(newStart, -1);
      const oldEnd = mapping.invert().map(newEnd);
      changes.push({
        oldRange: {
          from: oldStart,
          to: oldEnd
        },
        newRange: {
          from: newStart,
          to: newEnd
        }
      });
    });
  });
  return simplifyChangedRanges(changes);
}
__name(getChangedRanges, "getChangedRanges");
function getMarksBetween(from, to, doc) {
  const marks = [];
  if (from === to) {
    doc.resolve(from).marks().forEach((mark) => {
      const $pos = doc.resolve(from);
      const range = getMarkRange($pos, mark.type);
      if (!range) {
        return;
      }
      marks.push({
        mark,
        ...range
      });
    });
  } else {
    doc.nodesBetween(from, to, (node, pos) => {
      if (!node || (node === null || node === void 0 ? void 0 : node.nodeSize) === void 0) {
        return;
      }
      marks.push(...node.marks.map((mark) => ({
        from: pos,
        to: pos + node.nodeSize,
        mark
      })));
    });
  }
  return marks;
}
__name(getMarksBetween, "getMarksBetween");
function getSplittedAttributes(extensionAttributes, typeName, attributes) {
  return Object.fromEntries(Object.entries(attributes).filter(([name]) => {
    const extensionAttribute = extensionAttributes.find((item) => {
      return item.type === typeName && item.name === name;
    });
    if (!extensionAttribute) {
      return false;
    }
    return extensionAttribute.attribute.keepOnSplit;
  }));
}
__name(getSplittedAttributes, "getSplittedAttributes");
function isMarkActive(state, typeOrName, attributes = {}) {
  const { empty, ranges } = state.selection;
  const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;
  if (empty) {
    return !!(state.storedMarks || state.selection.$from.marks()).filter((mark) => {
      if (!type) {
        return true;
      }
      return type.name === mark.type.name;
    }).find((mark) => objectIncludes(mark.attrs, attributes, { strict: false }));
  }
  let selectionRange = 0;
  const markRanges = [];
  ranges.forEach(({ $from, $to }) => {
    const from = $from.pos;
    const to = $to.pos;
    state.doc.nodesBetween(from, to, (node, pos) => {
      if (!node.isText && !node.marks.length) {
        return;
      }
      const relativeFrom = Math.max(from, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      const range2 = relativeTo - relativeFrom;
      selectionRange += range2;
      markRanges.push(...node.marks.map((mark) => ({
        mark,
        from: relativeFrom,
        to: relativeTo
      })));
    });
  });
  if (selectionRange === 0) {
    return false;
  }
  const matchedRange = markRanges.filter((markRange) => {
    if (!type) {
      return true;
    }
    return type.name === markRange.mark.type.name;
  }).filter((markRange) => objectIncludes(markRange.mark.attrs, attributes, { strict: false })).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const excludedRange = markRanges.filter((markRange) => {
    if (!type) {
      return true;
    }
    return markRange.mark.type !== type && markRange.mark.type.excludes(type);
  }).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const range = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
  return range >= selectionRange;
}
__name(isMarkActive, "isMarkActive");
function isActive(state, name, attributes = {}) {
  if (!name) {
    return isNodeActive(state, null, attributes) || isMarkActive(state, null, attributes);
  }
  const schemaType = getSchemaTypeNameByName(name, state.schema);
  if (schemaType === "node") {
    return isNodeActive(state, name, attributes);
  }
  if (schemaType === "mark") {
    return isMarkActive(state, name, attributes);
  }
  return false;
}
__name(isActive, "isActive");
function isList(name, extensions) {
  const { nodeExtensions } = splitExtensions(extensions);
  const extension = nodeExtensions.find((item) => item.name === name);
  if (!extension) {
    return false;
  }
  const context = {
    name: extension.name,
    options: extension.options,
    storage: extension.storage
  };
  const group = callOrReturn(getExtensionField(extension, "group", context));
  if (typeof group !== "string") {
    return false;
  }
  return group.split(" ").includes("list");
}
__name(isList, "isList");
function isNodeEmpty(node, { checkChildren = true, ignoreWhitespace = false } = {}) {
  var _a;
  if (ignoreWhitespace) {
    if (node.type.name === "hardBreak") {
      return true;
    }
    if (node.isText) {
      return /^\s*$/m.test((_a = node.text) !== null && _a !== void 0 ? _a : "");
    }
  }
  if (node.isText) {
    return !node.text;
  }
  if (node.isAtom || node.isLeaf) {
    return false;
  }
  if (node.content.childCount === 0) {
    return true;
  }
  if (checkChildren) {
    let isContentEmpty = true;
    node.content.forEach((childNode) => {
      if (isContentEmpty === false) {
        return;
      }
      if (!isNodeEmpty(childNode, { ignoreWhitespace, checkChildren })) {
        isContentEmpty = false;
      }
    });
    return isContentEmpty;
  }
  return false;
}
__name(isNodeEmpty, "isNodeEmpty");
function isNodeSelection(value) {
  return value instanceof NodeSelection;
}
__name(isNodeSelection, "isNodeSelection");
function canSetMark(state, tr, newMarkType) {
  var _a;
  const { selection } = tr;
  let cursor = null;
  if (isTextSelection(selection)) {
    cursor = selection.$cursor;
  }
  if (cursor) {
    const currentMarks = (_a = state.storedMarks) !== null && _a !== void 0 ? _a : cursor.marks();
    return !!newMarkType.isInSet(currentMarks) || !currentMarks.some((mark) => mark.type.excludes(newMarkType));
  }
  const { ranges } = selection;
  return ranges.some(({ $from, $to }) => {
    let someNodeSupportsMark = $from.depth === 0 ? state.doc.inlineContent && state.doc.type.allowsMarkType(newMarkType) : false;
    state.doc.nodesBetween($from.pos, $to.pos, (node, _pos, parent) => {
      if (someNodeSupportsMark) {
        return false;
      }
      if (node.isInline) {
        const parentAllowsMarkType = !parent || parent.type.allowsMarkType(newMarkType);
        const currentMarksAllowMarkType = !!newMarkType.isInSet(node.marks) || !node.marks.some((otherMark) => otherMark.type.excludes(newMarkType));
        someNodeSupportsMark = parentAllowsMarkType && currentMarksAllowMarkType;
      }
      return !someNodeSupportsMark;
    });
    return someNodeSupportsMark;
  });
}
__name(canSetMark, "canSetMark");
const setMark = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
  const { selection } = tr;
  const { empty, ranges } = selection;
  const type = getMarkType(typeOrName, state.schema);
  if (dispatch) {
    if (empty) {
      const oldAttributes = getMarkAttributes(state, type);
      tr.addStoredMark(type.create({
        ...oldAttributes,
        ...attributes
      }));
    } else {
      ranges.forEach((range) => {
        const from = range.$from.pos;
        const to = range.$to.pos;
        state.doc.nodesBetween(from, to, (node, pos) => {
          const trimmedFrom = Math.max(pos, from);
          const trimmedTo = Math.min(pos + node.nodeSize, to);
          const someHasMark = node.marks.find((mark) => mark.type === type);
          if (someHasMark) {
            node.marks.forEach((mark) => {
              if (type === mark.type) {
                tr.addMark(trimmedFrom, trimmedTo, type.create({
                  ...mark.attrs,
                  ...attributes
                }));
              }
            });
          } else {
            tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
          }
        });
      });
    }
  }
  return canSetMark(state, tr, type);
}, "setMark");
const setMeta = /* @__PURE__ */ __name((key, value) => ({ tr }) => {
  tr.setMeta(key, value);
  return true;
}, "setMeta");
const setNode = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ state, dispatch, chain }) => {
  const type = getNodeType(typeOrName, state.schema);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (!type.isTextblock) {
    console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
    return false;
  }
  return chain().command(({ commands: commands2 }) => {
    const canSetBlock = setBlockType(type, { ...attributesToCopy, ...attributes })(state);
    if (canSetBlock) {
      return true;
    }
    return commands2.clearNodes();
  }).command(({ state: updatedState }) => {
    return setBlockType(type, { ...attributesToCopy, ...attributes })(updatedState, dispatch);
  }).run();
}, "setNode");
const setNodeSelection = /* @__PURE__ */ __name((position) => ({ tr, dispatch }) => {
  if (dispatch) {
    const { doc } = tr;
    const from = minMax(position, 0, doc.content.size);
    const selection = NodeSelection.create(doc, from);
    tr.setSelection(selection);
  }
  return true;
}, "setNodeSelection");
const setTextSelection = /* @__PURE__ */ __name((position) => ({ tr, dispatch }) => {
  if (dispatch) {
    const { doc } = tr;
    const { from, to } = typeof position === "number" ? { from: position, to: position } : position;
    const minPos = TextSelection.atStart(doc).from;
    const maxPos = TextSelection.atEnd(doc).to;
    const resolvedFrom = minMax(from, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const selection = TextSelection.create(doc, resolvedFrom, resolvedEnd);
    tr.setSelection(selection);
  }
  return true;
}, "setTextSelection");
const sinkListItem = /* @__PURE__ */ __name((typeOrName) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return sinkListItem$1(type)(state, dispatch);
}, "sinkListItem");
function ensureMarks(state, splittableMarks) {
  const marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
  if (marks) {
    const filteredMarks = marks.filter((mark) => splittableMarks === null || splittableMarks === void 0 ? void 0 : splittableMarks.includes(mark.type.name));
    state.tr.ensureMarks(filteredMarks);
  }
}
__name(ensureMarks, "ensureMarks");
const splitBlock = /* @__PURE__ */ __name(({ keepMarks = true } = {}) => ({ tr, state, dispatch, editor }) => {
  const { selection, doc } = tr;
  const { $from, $to } = selection;
  const extensionAttributes = editor.extensionManager.attributes;
  const newAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
  if (selection instanceof NodeSelection && selection.node.isBlock) {
    if (!$from.parentOffset || !canSplit(doc, $from.pos)) {
      return false;
    }
    if (dispatch) {
      if (keepMarks) {
        ensureMarks(state, editor.extensionManager.splittableMarks);
      }
      tr.split($from.pos).scrollIntoView();
    }
    return true;
  }
  if (!$from.parent.isBlock) {
    return false;
  }
  const atEnd = $to.parentOffset === $to.parent.content.size;
  const deflt = $from.depth === 0 ? void 0 : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
  let types = atEnd && deflt ? [
    {
      type: deflt,
      attrs: newAttributes
    }
  ] : void 0;
  let can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
  if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{ type: deflt }] : void 0)) {
    can = true;
    types = deflt ? [
      {
        type: deflt,
        attrs: newAttributes
      }
    ] : void 0;
  }
  if (dispatch) {
    if (can) {
      if (selection instanceof TextSelection) {
        tr.deleteSelection();
      }
      tr.split(tr.mapping.map($from.pos), 1, types);
      if (deflt && !atEnd && !$from.parentOffset && $from.parent.type !== deflt) {
        const first2 = tr.mapping.map($from.before());
        const $first = tr.doc.resolve(first2);
        if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
        }
      }
    }
    if (keepMarks) {
      ensureMarks(state, editor.extensionManager.splittableMarks);
    }
    tr.scrollIntoView();
  }
  return can;
}, "splitBlock");
const splitListItem = /* @__PURE__ */ __name((typeOrName, overrideAttrs = {}) => ({ tr, state, dispatch, editor }) => {
  var _a;
  const type = getNodeType(typeOrName, state.schema);
  const { $from, $to } = state.selection;
  const node = state.selection.node;
  if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
    return false;
  }
  const grandParent = $from.node(-1);
  if (grandParent.type !== type) {
    return false;
  }
  const extensionAttributes = editor.extensionManager.attributes;
  if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
    if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
      return false;
    }
    if (dispatch) {
      let wrap = Fragment.empty;
      const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
      for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1) {
        wrap = Fragment.from($from.node(d).copy(wrap));
      }
      const depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
      const newNextTypeAttributes2 = {
        ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
        ...overrideAttrs
      };
      const nextType2 = ((_a = type.contentMatch.defaultType) === null || _a === void 0 ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
      wrap = wrap.append(Fragment.from(type.createAndFill(null, nextType2) || void 0));
      const start = $from.before($from.depth - (depthBefore - 1));
      tr.replace(start, $from.after(-depthAfter), new Slice(wrap, 4 - depthBefore, 0));
      let sel = -1;
      tr.doc.nodesBetween(start, tr.doc.content.size, (n, pos) => {
        if (sel > -1) {
          return false;
        }
        if (n.isTextblock && n.content.size === 0) {
          sel = pos + 1;
        }
      });
      if (sel > -1) {
        tr.setSelection(TextSelection.near(tr.doc.resolve(sel)));
      }
      tr.scrollIntoView();
    }
    return true;
  }
  const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
  const newTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, grandParent.type.name, grandParent.attrs),
    ...overrideAttrs
  };
  const newNextTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
    ...overrideAttrs
  };
  tr.delete($from.pos, $to.pos);
  const types = nextType ? [
    { type, attrs: newTypeAttributes },
    { type: nextType, attrs: newNextTypeAttributes }
  ] : [{ type, attrs: newTypeAttributes }];
  if (!canSplit(tr.doc, $from.pos, 2)) {
    return false;
  }
  if (dispatch) {
    const { selection, storedMarks } = state;
    const { splittableMarks } = editor.extensionManager;
    const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
    tr.split($from.pos, 2, types).scrollIntoView();
    if (!marks || !dispatch) {
      return true;
    }
    const filteredMarks = marks.filter((mark) => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
  }
  return true;
}, "splitListItem");
const joinListBackwards = /* @__PURE__ */ __name((tr, listType) => {
  const list = findParentNode((node) => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const before = tr.doc.resolve(Math.max(0, list.pos - 1)).before(list.depth);
  if (before === void 0) {
    return true;
  }
  const nodeBefore = tr.doc.nodeAt(before);
  const canJoinBackwards = list.node.type === (nodeBefore === null || nodeBefore === void 0 ? void 0 : nodeBefore.type) && canJoin(tr.doc, list.pos);
  if (!canJoinBackwards) {
    return true;
  }
  tr.join(list.pos);
  return true;
}, "joinListBackwards");
const joinListForwards = /* @__PURE__ */ __name((tr, listType) => {
  const list = findParentNode((node) => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const after = tr.doc.resolve(list.start).after(list.depth);
  if (after === void 0) {
    return true;
  }
  const nodeAfter = tr.doc.nodeAt(after);
  const canJoinForwards = list.node.type === (nodeAfter === null || nodeAfter === void 0 ? void 0 : nodeAfter.type) && canJoin(tr.doc, after);
  if (!canJoinForwards) {
    return true;
  }
  tr.join(after);
  return true;
}, "joinListForwards");
const toggleList = /* @__PURE__ */ __name((listTypeOrName, itemTypeOrName, keepMarks, attributes = {}) => ({ editor, tr, state, dispatch, chain, commands: commands2, can }) => {
  const { extensions, splittableMarks } = editor.extensionManager;
  const listType = getNodeType(listTypeOrName, state.schema);
  const itemType = getNodeType(itemTypeOrName, state.schema);
  const { selection, storedMarks } = state;
  const { $from, $to } = selection;
  const range = $from.blockRange($to);
  const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
  if (!range) {
    return false;
  }
  const parentList = findParentNode((node) => isList(node.type.name, extensions))(selection);
  if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
    if (parentList.node.type === listType) {
      return commands2.liftListItem(itemType);
    }
    if (isList(parentList.node.type.name, extensions) && listType.validContent(parentList.node.content) && dispatch) {
      return chain().command(() => {
        tr.setNodeMarkup(parentList.pos, listType);
        return true;
      }).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
    }
  }
  if (!keepMarks || !marks || !dispatch) {
    return chain().command(() => {
      const canWrapInList = can().wrapInList(listType, attributes);
      if (canWrapInList) {
        return true;
      }
      return commands2.clearNodes();
    }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
  }
  return chain().command(() => {
    const canWrapInList = can().wrapInList(listType, attributes);
    const filteredMarks = marks.filter((mark) => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
    if (canWrapInList) {
      return true;
    }
    return commands2.clearNodes();
  }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
}, "toggleList");
const toggleMark = /* @__PURE__ */ __name((typeOrName, attributes = {}, options = {}) => ({ state, commands: commands2 }) => {
  const { extendEmptyMarkRange = false } = options;
  const type = getMarkType(typeOrName, state.schema);
  const isActive2 = isMarkActive(state, type, attributes);
  if (isActive2) {
    return commands2.unsetMark(type, { extendEmptyMarkRange });
  }
  return commands2.setMark(type, attributes);
}, "toggleMark");
const toggleNode = /* @__PURE__ */ __name((typeOrName, toggleTypeOrName, attributes = {}) => ({ state, commands: commands2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  const toggleType = getNodeType(toggleTypeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (isActive2) {
    return commands2.setNode(toggleType, attributesToCopy);
  }
  return commands2.setNode(type, { ...attributesToCopy, ...attributes });
}, "toggleNode");
const toggleWrap = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ state, commands: commands2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (isActive2) {
    return commands2.lift(type);
  }
  return commands2.wrapIn(type, attributes);
}, "toggleWrap");
const undoInputRule = /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
  const plugins = state.plugins;
  for (let i = 0; i < plugins.length; i += 1) {
    const plugin = plugins[i];
    let undoable;
    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch) {
        const tr = state.tr;
        const toUndo = undoable.transform;
        for (let j = toUndo.steps.length - 1; j >= 0; j -= 1) {
          tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        }
        if (undoable.text) {
          const marks = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
        } else {
          tr.delete(undoable.from, undoable.to);
        }
      }
      return true;
    }
  }
  return false;
}, "undoInputRule");
const unsetAllMarks = /* @__PURE__ */ __name(() => ({ tr, dispatch }) => {
  const { selection } = tr;
  const { empty, ranges } = selection;
  if (empty) {
    return true;
  }
  if (dispatch) {
    ranges.forEach((range) => {
      tr.removeMark(range.$from.pos, range.$to.pos);
    });
  }
  return true;
}, "unsetAllMarks");
const unsetMark = /* @__PURE__ */ __name((typeOrName, options = {}) => ({ tr, state, dispatch }) => {
  var _a;
  const { extendEmptyMarkRange = false } = options;
  const { selection } = tr;
  const type = getMarkType(typeOrName, state.schema);
  const { $from, empty, ranges } = selection;
  if (!dispatch) {
    return true;
  }
  if (empty && extendEmptyMarkRange) {
    let { from, to } = selection;
    const attrs = (_a = $from.marks().find((mark) => mark.type === type)) === null || _a === void 0 ? void 0 : _a.attrs;
    const range = getMarkRange($from, type, attrs);
    if (range) {
      from = range.from;
      to = range.to;
    }
    tr.removeMark(from, to, type);
  } else {
    ranges.forEach((range) => {
      tr.removeMark(range.$from.pos, range.$to.pos, type);
    });
  }
  tr.removeStoredMark(type);
  return true;
}, "unsetMark");
const updateAttributes = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch) {
    tr.selection.ranges.forEach((range) => {
      const from = range.$from.pos;
      const to = range.$to.pos;
      let lastPos;
      let lastNode;
      let trimmedFrom;
      let trimmedTo;
      if (tr.selection.empty) {
        state.doc.nodesBetween(from, to, (node, pos) => {
          if (nodeType && nodeType === node.type) {
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
        });
      } else {
        state.doc.nodesBetween(from, to, (node, pos) => {
          if (pos < from && nodeType && nodeType === node.type) {
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
          if (pos >= from && pos <= to) {
            if (nodeType && nodeType === node.type) {
              tr.setNodeMarkup(pos, void 0, {
                ...node.attrs,
                ...attributes
              });
            }
            if (markType && node.marks.length) {
              node.marks.forEach((mark) => {
                if (markType === mark.type) {
                  const trimmedFrom2 = Math.max(pos, from);
                  const trimmedTo2 = Math.min(pos + node.nodeSize, to);
                  tr.addMark(trimmedFrom2, trimmedTo2, markType.create({
                    ...mark.attrs,
                    ...attributes
                  }));
                }
              });
            }
          }
        });
      }
      if (lastNode) {
        if (lastPos !== void 0) {
          tr.setNodeMarkup(lastPos, void 0, {
            ...lastNode.attrs,
            ...attributes
          });
        }
        if (markType && lastNode.marks.length) {
          lastNode.marks.forEach((mark) => {
            if (markType === mark.type) {
              tr.addMark(trimmedFrom, trimmedTo, markType.create({
                ...mark.attrs,
                ...attributes
              }));
            }
          });
        }
      }
    });
  }
  return true;
}, "updateAttributes");
const wrapIn = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return wrapIn$1(type, attributes)(state, dispatch);
}, "wrapIn");
const wrapInList = /* @__PURE__ */ __name((typeOrName, attributes = {}) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return wrapInList$1(type, attributes)(state, dispatch);
}, "wrapInList");
var commands = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur,
  clearContent,
  clearNodes,
  command,
  createParagraphNear,
  cut,
  deleteCurrentNode,
  deleteNode,
  deleteRange,
  deleteSelection,
  enter,
  exitCode,
  extendMarkRange,
  first,
  focus,
  forEach,
  insertContent,
  insertContentAt,
  joinBackward,
  joinDown,
  joinForward,
  joinItemBackward,
  joinItemForward,
  joinTextblockBackward,
  joinTextblockForward,
  joinUp,
  keyboardShortcut,
  lift,
  liftEmptyBlock,
  liftListItem,
  newlineInCode,
  resetAttributes,
  scrollIntoView,
  selectAll,
  selectNodeBackward,
  selectNodeForward,
  selectParentNode,
  selectTextblockEnd,
  selectTextblockStart,
  setContent,
  setMark,
  setMeta,
  setNode,
  setNodeSelection,
  setTextSelection,
  sinkListItem,
  splitBlock,
  splitListItem,
  toggleList,
  toggleMark,
  toggleNode,
  toggleWrap,
  undoInputRule,
  unsetAllMarks,
  unsetMark,
  updateAttributes,
  wrapIn,
  wrapInList
});
const Commands = Extension.create({
  name: "commands",
  addCommands() {
    return {
      ...commands
    };
  }
});
const Drop = Extension.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("tiptapDrop"),
        props: {
          handleDrop: /* @__PURE__ */ __name((_, e, slice, moved) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice,
              moved
            });
          }, "handleDrop")
        }
      })
    ];
  }
});
const Editable = Extension.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("editable"),
        props: {
          editable: /* @__PURE__ */ __name(() => this.editor.options.editable, "editable")
        }
      })
    ];
  }
});
const FocusEvents = Extension.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor } = this;
    return [
      new Plugin({
        key: new PluginKey("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: /* @__PURE__ */ __name((view, event) => {
              editor.isFocused = true;
              const transaction = editor.state.tr.setMeta("focus", { event }).setMeta("addToHistory", false);
              view.dispatch(transaction);
              return false;
            }, "focus"),
            blur: /* @__PURE__ */ __name((view, event) => {
              editor.isFocused = false;
              const transaction = editor.state.tr.setMeta("blur", { event }).setMeta("addToHistory", false);
              view.dispatch(transaction);
              return false;
            }, "blur")
          }
        }
      })
    ];
  }
});
const Keymap = Extension.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const handleBackspace = /* @__PURE__ */ __name(() => this.editor.commands.first(({ commands: commands2 }) => [
      () => commands2.undoInputRule(),
      // maybe convert first text block node to default node
      () => commands2.command(({ tr }) => {
        const { selection, doc } = tr;
        const { empty, $anchor } = selection;
        const { pos, parent } = $anchor;
        const $parentPos = $anchor.parent.isTextblock && pos > 0 ? tr.doc.resolve(pos - 1) : $anchor;
        const parentIsIsolating = $parentPos.parent.type.spec.isolating;
        const parentPos = $anchor.pos - $anchor.parentOffset;
        const isAtStart = parentIsIsolating && $parentPos.parent.childCount === 1 ? parentPos === $anchor.pos : Selection.atStart(doc).from === pos;
        if (!empty || !parent.type.isTextblock || parent.textContent.length || !isAtStart || isAtStart && $anchor.parent.type.name === "paragraph") {
          return false;
        }
        return commands2.clearNodes();
      }),
      () => commands2.deleteSelection(),
      () => commands2.joinBackward(),
      () => commands2.selectNodeBackward()
    ]), "handleBackspace");
    const handleDelete = /* @__PURE__ */ __name(() => this.editor.commands.first(({ commands: commands2 }) => [
      () => commands2.deleteSelection(),
      () => commands2.deleteCurrentNode(),
      () => commands2.joinForward(),
      () => commands2.selectNodeForward()
    ]), "handleDelete");
    const handleEnter = /* @__PURE__ */ __name(() => this.editor.commands.first(({ commands: commands2 }) => [
      () => commands2.newlineInCode(),
      () => commands2.createParagraphNear(),
      () => commands2.liftEmptyBlock(),
      () => commands2.splitBlock()
    ]), "handleEnter");
    const baseKeymap = {
      Enter: handleEnter,
      "Mod-Enter": /* @__PURE__ */ __name(() => this.editor.commands.exitCode(), "Mod-Enter"),
      Backspace: handleBackspace,
      "Mod-Backspace": handleBackspace,
      "Shift-Backspace": handleBackspace,
      Delete: handleDelete,
      "Mod-Delete": handleDelete,
      "Mod-a": /* @__PURE__ */ __name(() => this.editor.commands.selectAll(), "Mod-a")
    };
    const pcKeymap = {
      ...baseKeymap
    };
    const macKeymap = {
      ...baseKeymap,
      "Ctrl-h": handleBackspace,
      "Alt-Backspace": handleBackspace,
      "Ctrl-d": handleDelete,
      "Ctrl-Alt-Backspace": handleDelete,
      "Alt-Delete": handleDelete,
      "Alt-d": handleDelete,
      "Ctrl-a": /* @__PURE__ */ __name(() => this.editor.commands.selectTextblockStart(), "Ctrl-a"),
      "Ctrl-e": /* @__PURE__ */ __name(() => this.editor.commands.selectTextblockEnd(), "Ctrl-e")
    };
    if (isiOS() || isMacOS()) {
      return macKeymap;
    }
    return pcKeymap;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Plugin({
        key: new PluginKey("clearDocument"),
        appendTransaction: /* @__PURE__ */ __name((transactions, oldState, newState) => {
          const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
          const ignoreTr = transactions.some((transaction) => transaction.getMeta("preventClearDocument"));
          if (!docChanges || ignoreTr) {
            return;
          }
          const { empty, from, to } = oldState.selection;
          const allFrom = Selection.atStart(oldState.doc).from;
          const allEnd = Selection.atEnd(oldState.doc).to;
          const allWasSelected = from === allFrom && to === allEnd;
          if (empty || !allWasSelected) {
            return;
          }
          const isEmpty = isNodeEmpty(newState.doc);
          if (!isEmpty) {
            return;
          }
          const tr = newState.tr;
          const state = createChainableState({
            state: newState,
            transaction: tr
          });
          const { commands: commands2 } = new CommandManager({
            editor: this.editor,
            state
          });
          commands2.clearNodes();
          if (!tr.steps.length) {
            return;
          }
          return tr;
        }, "appendTransaction")
      })
    ];
  }
});
const Paste = Extension.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("tiptapPaste"),
        props: {
          handlePaste: /* @__PURE__ */ __name((_view, e, slice) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice
            });
          }, "handlePaste")
        }
      })
    ];
  }
});
const Tabindex = Extension.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("tabindex"),
        props: {
          attributes: /* @__PURE__ */ __name(() => this.editor.isEditable ? { tabindex: "0" } : {}, "attributes")
        }
      })
    ];
  }
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer,
  Commands,
  Drop,
  Editable,
  FocusEvents,
  Keymap,
  Paste,
  Tabindex
});
class NodePos {
  static {
    __name(this, "NodePos");
  }
  get name() {
    return this.node.type.name;
  }
  constructor(pos, editor, isBlock = false, node = null) {
    this.currentNode = null;
    this.actualDepth = null;
    this.isBlock = isBlock;
    this.resolvedPos = pos;
    this.editor = editor;
    this.currentNode = node;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var _a;
    return (_a = this.actualDepth) !== null && _a !== void 0 ? _a : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(content) {
    let from = this.from;
    let to = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      from = this.from + 1;
      to = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from, to }, content);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    if (this.isBlock) {
      return this.pos;
    }
    return this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    if (this.isBlock) {
      return this.pos + this.size;
    }
    return this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0) {
      return null;
    }
    const parentPos = this.resolvedPos.start(this.resolvedPos.depth - 1);
    const $pos = this.resolvedPos.doc.resolve(parentPos);
    return new NodePos($pos, this.editor);
  }
  get before() {
    let $pos = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    if ($pos.depth !== this.depth) {
      $pos = this.resolvedPos.doc.resolve(this.from - 3);
    }
    return new NodePos($pos, this.editor);
  }
  get after() {
    let $pos = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    if ($pos.depth !== this.depth) {
      $pos = this.resolvedPos.doc.resolve(this.to + 3);
    }
    return new NodePos($pos, this.editor);
  }
  get children() {
    const children = [];
    this.node.content.forEach((node, offset) => {
      const isBlock = node.isBlock && !node.isTextblock;
      const isNonTextAtom = node.isAtom && !node.isText;
      const targetPos = this.pos + offset + (isNonTextAtom ? 0 : 1);
      const $pos = this.resolvedPos.doc.resolve(targetPos);
      if (!isBlock && $pos.depth <= this.depth) {
        return;
      }
      const childNodePos = new NodePos($pos, this.editor, isBlock, isBlock ? node : null);
      if (isBlock) {
        childNodePos.actualDepth = this.depth + 1;
      }
      children.push(new NodePos($pos, this.editor, isBlock, isBlock ? node : null));
    });
    return children;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const children = this.children;
    return children[children.length - 1] || null;
  }
  closest(selector, attributes = {}) {
    let node = null;
    let currentNode = this.parent;
    while (currentNode && !node) {
      if (currentNode.node.type.name === selector) {
        if (Object.keys(attributes).length > 0) {
          const nodeAttributes = currentNode.node.attrs;
          const attrKeys = Object.keys(attributes);
          for (let index2 = 0; index2 < attrKeys.length; index2 += 1) {
            const key = attrKeys[index2];
            if (nodeAttributes[key] !== attributes[key]) {
              break;
            }
          }
        } else {
          node = currentNode;
        }
      }
      currentNode = currentNode.parent;
    }
    return node;
  }
  querySelector(selector, attributes = {}) {
    return this.querySelectorAll(selector, attributes, true)[0] || null;
  }
  querySelectorAll(selector, attributes = {}, firstItemOnly = false) {
    let nodes = [];
    if (!this.children || this.children.length === 0) {
      return nodes;
    }
    const attrKeys = Object.keys(attributes);
    this.children.forEach((childPos) => {
      if (firstItemOnly && nodes.length > 0) {
        return;
      }
      if (childPos.node.type.name === selector) {
        const doesAllAttributesMatch = attrKeys.every((key) => attributes[key] === childPos.node.attrs[key]);
        if (doesAllAttributesMatch) {
          nodes.push(childPos);
        }
      }
      if (firstItemOnly && nodes.length > 0) {
        return;
      }
      nodes = nodes.concat(childPos.querySelectorAll(selector, attributes, firstItemOnly));
    });
    return nodes;
  }
  setAttribute(attributes) {
    const { tr } = this.editor.state;
    tr.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...attributes
    });
    this.editor.view.dispatch(tr);
  }
}
const style = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function createStyleTag(style2, nonce, suffix) {
  const tiptapStyleTag = document.querySelector(`style[data-tiptap-style${""}]`);
  if (tiptapStyleTag !== null) {
    return tiptapStyleTag;
  }
  const styleNode = document.createElement("style");
  if (nonce) {
    styleNode.setAttribute("nonce", nonce);
  }
  styleNode.setAttribute(`data-tiptap-style${""}`, "");
  styleNode.innerHTML = style2;
  document.getElementsByTagName("head")[0].appendChild(styleNode);
  return styleNode;
}
__name(createStyleTag, "createStyleTag");
class Editor extends EventEmitter {
  static {
    __name(this, "Editor");
  }
  constructor(options = {}) {
    super();
    this.isFocused = false;
    this.isInitialized = false;
    this.extensionStorage = {};
    this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: true,
      injectNonce: void 0,
      extensions: [],
      autofocus: false,
      editable: true,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: true,
      enablePasteRules: true,
      enableCoreExtensions: true,
      enableContentCheck: false,
      onBeforeCreate: /* @__PURE__ */ __name(() => null, "onBeforeCreate"),
      onCreate: /* @__PURE__ */ __name(() => null, "onCreate"),
      onUpdate: /* @__PURE__ */ __name(() => null, "onUpdate"),
      onSelectionUpdate: /* @__PURE__ */ __name(() => null, "onSelectionUpdate"),
      onTransaction: /* @__PURE__ */ __name(() => null, "onTransaction"),
      onFocus: /* @__PURE__ */ __name(() => null, "onFocus"),
      onBlur: /* @__PURE__ */ __name(() => null, "onBlur"),
      onDestroy: /* @__PURE__ */ __name(() => null, "onDestroy"),
      onContentError: /* @__PURE__ */ __name(({ error }) => {
        throw error;
      }, "onContentError"),
      onPaste: /* @__PURE__ */ __name(() => null, "onPaste"),
      onDrop: /* @__PURE__ */ __name(() => null, "onDrop")
    };
    this.isCapturingTransaction = false;
    this.capturedTransaction = null;
    this.setOptions(options);
    this.createExtensionManager();
    this.createCommandManager();
    this.createSchema();
    this.on("beforeCreate", this.options.onBeforeCreate);
    this.emit("beforeCreate", { editor: this });
    this.on("contentError", this.options.onContentError);
    this.createView();
    this.injectCSS();
    this.on("create", this.options.onCreate);
    this.on("update", this.options.onUpdate);
    this.on("selectionUpdate", this.options.onSelectionUpdate);
    this.on("transaction", this.options.onTransaction);
    this.on("focus", this.options.onFocus);
    this.on("blur", this.options.onBlur);
    this.on("destroy", this.options.onDestroy);
    this.on("drop", ({ event, slice, moved }) => this.options.onDrop(event, slice, moved));
    this.on("paste", ({ event, slice }) => this.options.onPaste(event, slice));
    window.setTimeout(() => {
      if (this.isDestroyed) {
        return;
      }
      this.commands.focus(this.options.autofocus);
      this.emit("create", { editor: this });
      this.isInitialized = true;
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    if (this.options.injectCSS && document) {
      this.css = createStyleTag(style, this.options.injectNonce);
    }
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(options = {}) {
    this.options = {
      ...this.options,
      ...options
    };
    if (!this.view || !this.state || this.isDestroyed) {
      return;
    }
    if (this.options.editorProps) {
      this.view.setProps(this.options.editorProps);
    }
    this.view.updateState(this.state);
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(editable, emitUpdate = true) {
    this.setOptions({ editable });
    if (emitUpdate) {
      this.emit("update", { editor: this, transaction: this.state.tr });
    }
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(plugin, handlePlugins) {
    const plugins = isFunction(handlePlugins) ? handlePlugins(plugin, [...this.state.plugins]) : [...this.state.plugins, plugin];
    const state = this.state.reconfigure({ plugins });
    this.view.updateState(state);
    return state;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(nameOrPluginKeyToRemove) {
    if (this.isDestroyed) {
      return void 0;
    }
    const prevPlugins = this.state.plugins;
    let plugins = prevPlugins;
    [].concat(nameOrPluginKeyToRemove).forEach((nameOrPluginKey) => {
      const name = typeof nameOrPluginKey === "string" ? `${nameOrPluginKey}$` : nameOrPluginKey.key;
      plugins = prevPlugins.filter((plugin) => !plugin.key.startsWith(name));
    });
    if (prevPlugins.length === plugins.length) {
      return void 0;
    }
    const state = this.state.reconfigure({
      plugins
    });
    this.view.updateState(state);
    return state;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var _a, _b;
    const coreExtensions = this.options.enableCoreExtensions ? [
      Editable,
      ClipboardTextSerializer.configure({
        blockSeparator: (_b = (_a = this.options.coreExtensionOptions) === null || _a === void 0 ? void 0 : _a.clipboardTextSerializer) === null || _b === void 0 ? void 0 : _b.blockSeparator
      }),
      Commands,
      FocusEvents,
      Keymap,
      Tabindex,
      Drop,
      Paste
    ].filter((ext) => {
      if (typeof this.options.enableCoreExtensions === "object") {
        return this.options.enableCoreExtensions[ext.name] !== false;
      }
      return true;
    }) : [];
    const allExtensions = [...coreExtensions, ...this.options.extensions].filter((extension) => {
      return ["extension", "node", "mark"].includes(extension === null || extension === void 0 ? void 0 : extension.type);
    });
    this.extensionManager = new ExtensionManager(allExtensions, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new CommandManager({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var _a;
    let doc;
    try {
      doc = createDocument(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (e) {
      if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) {
        throw e;
      }
      this.emit("contentError", {
        editor: this,
        error: e,
        disableCollaboration: /* @__PURE__ */ __name(() => {
          if (this.storage.collaboration) {
            this.storage.collaboration.isDisabled = true;
          }
          this.options.extensions = this.options.extensions.filter((extension) => extension.name !== "collaboration");
          this.createExtensionManager();
        }, "disableCollaboration")
      });
      doc = createDocument(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: false });
    }
    const selection = resolveFocusPosition(doc, this.options.autofocus);
    this.view = new EditorView(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(_a = this.options.editorProps) === null || _a === void 0 ? void 0 : _a.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: EditorState.create({
        doc,
        selection: selection || void 0
      })
    });
    const newState = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(newState);
    this.createNodeViews();
    this.prependClass();
    const dom = this.view.dom;
    dom.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    if (this.view.isDestroyed) {
      return;
    }
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(fn) {
    this.isCapturingTransaction = true;
    fn();
    this.isCapturingTransaction = false;
    const tr = this.capturedTransaction;
    this.capturedTransaction = null;
    return tr;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(transaction) {
    if (this.view.isDestroyed) {
      return;
    }
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = transaction;
        return;
      }
      transaction.steps.forEach((step) => {
        var _a;
        return (_a = this.capturedTransaction) === null || _a === void 0 ? void 0 : _a.step(step);
      });
      return;
    }
    const state = this.state.apply(transaction);
    const selectionHasChanged = !this.state.selection.eq(state.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction,
      nextState: state
    });
    this.view.updateState(state);
    this.emit("transaction", {
      editor: this,
      transaction
    });
    if (selectionHasChanged) {
      this.emit("selectionUpdate", {
        editor: this,
        transaction
      });
    }
    const focus2 = transaction.getMeta("focus");
    const blur2 = transaction.getMeta("blur");
    if (focus2) {
      this.emit("focus", {
        editor: this,
        event: focus2.event,
        transaction
      });
    }
    if (blur2) {
      this.emit("blur", {
        editor: this,
        event: blur2.event,
        transaction
      });
    }
    if (!transaction.docChanged || transaction.getMeta("preventUpdate")) {
      return;
    }
    this.emit("update", {
      editor: this,
      transaction
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(nameOrType) {
    return getAttributes(this.state, nameOrType);
  }
  isActive(nameOrAttributes, attributesOrUndefined) {
    const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
    const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
    return isActive(this.state, name, attributes);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return getHTMLFromFragment(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(options) {
    const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
    return getText(this.state.doc, {
      blockSeparator,
      textSerializers: {
        ...getTextSerializersFromSchema(this.schema),
        ...textSerializers
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return isNodeEmpty(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.');
    return this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy");
    if (this.view) {
      const dom = this.view.dom;
      if (dom && dom.editor) {
        delete dom.editor;
      }
      this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var _a;
    return !((_a = this.view) === null || _a === void 0 ? void 0 : _a.docView);
  }
  $node(selector, attributes) {
    var _a;
    return ((_a = this.$doc) === null || _a === void 0 ? void 0 : _a.querySelector(selector, attributes)) || null;
  }
  $nodes(selector, attributes) {
    var _a;
    return ((_a = this.$doc) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector, attributes)) || null;
  }
  $pos(pos) {
    const $pos = this.state.doc.resolve(pos);
    return new NodePos($pos, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function markInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: /* @__PURE__ */ __name(({ state, range, match }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match);
      if (attributes === false || attributes === null) {
        return null;
      }
      const { tr } = state;
      const captureGroup = match[match.length - 1];
      const fullMatch = match[0];
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter((item) => {
          const excluded = item.mark.type.excluded;
          return excluded.find((type) => type === config.type && type !== item.mark.type);
        }).filter((item) => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range.to) {
          tr.delete(textEnd, range.to);
        }
        if (textStart > range.from) {
          tr.delete(range.from + startSpaces, textStart);
        }
        const markEnd = range.from + startSpaces + captureGroup.length;
        tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
        tr.removeStoredMark(config.type);
      }
    }, "handler")
  });
}
__name(markInputRule, "markInputRule");
function nodeInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: /* @__PURE__ */ __name(({ state, range, match }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      const { tr } = state;
      const start = range.from;
      let end = range.to;
      const newNode = config.type.create(attributes);
      if (match[1]) {
        const offset = match[0].lastIndexOf(match[1]);
        let matchStart = start + offset;
        if (matchStart > end) {
          matchStart = end;
        } else {
          end = matchStart + match[1].length;
        }
        const lastChar = match[0][match[0].length - 1];
        tr.insertText(lastChar, start + match[0].length - 1);
        tr.replaceWith(matchStart, end, newNode);
      } else if (match[0]) {
        const insertionStart = config.type.isInline ? start : start - 1;
        tr.insert(insertionStart, config.type.create(attributes)).delete(tr.mapping.map(start), tr.mapping.map(end));
      }
      tr.scrollIntoView();
    }, "handler")
  });
}
__name(nodeInputRule, "nodeInputRule");
function textblockTypeInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: /* @__PURE__ */ __name(({ state, range, match }) => {
      const $start = state.doc.resolve(range.from);
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), config.type)) {
        return null;
      }
      state.tr.delete(range.from, range.to).setBlockType(range.from, range.from, config.type, attributes);
    }, "handler")
  });
}
__name(textblockTypeInputRule, "textblockTypeInputRule");
function wrappingInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: /* @__PURE__ */ __name(({ state, range, match, chain }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      const tr = state.tr.delete(range.from, range.to);
      const $start = tr.doc.resolve(range.from);
      const blockRange = $start.blockRange();
      const wrapping = blockRange && findWrapping(blockRange, config.type, attributes);
      if (!wrapping) {
        return null;
      }
      tr.wrap(blockRange, wrapping);
      if (config.keepMarks && config.editor) {
        const { selection, storedMarks } = state;
        const { splittableMarks } = config.editor.extensionManager;
        const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
        if (marks) {
          const filteredMarks = marks.filter((mark) => splittableMarks.includes(mark.type.name));
          tr.ensureMarks(filteredMarks);
        }
      }
      if (config.keepAttributes) {
        const nodeType = config.type.name === "bulletList" || config.type.name === "orderedList" ? "listItem" : "taskList";
        chain().updateAttributes(nodeType, attributes).run();
      }
      const before = tr.doc.resolve(range.from - 1).nodeBefore;
      if (before && before.type === config.type && canJoin(tr.doc, range.from - 1) && (!config.joinPredicate || config.joinPredicate(match, before))) {
        tr.join(range.from - 1);
      }
    }, "handler")
  });
}
__name(wrappingInputRule, "wrappingInputRule");
let Node$1 = class Node2 {
  static {
    __name(this, "Node");
  }
  constructor(config = {}) {
    this.type = "node";
    this.name = "node";
    this.parent = null;
    this.child = null;
    this.config = {
      name: this.name,
      defaultOptions: {}
    };
    this.config = {
      ...this.config,
      ...config
    };
    this.name = this.config.name;
    if (config.defaultOptions && Object.keys(config.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
    }
    this.options = this.config.defaultOptions;
    if (this.config.addOptions) {
      this.options = callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      }));
    }
    this.storage = callOrReturn(getExtensionField(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(config = {}) {
    return new Node2(config);
  }
  configure(options = {}) {
    const extension = this.extend({
      ...this.config,
      addOptions: /* @__PURE__ */ __name(() => {
        return mergeDeep(this.options, options);
      }, "addOptions")
    });
    extension.name = this.name;
    extension.parent = this.parent;
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new Node2(extendedConfig);
    extension.parent = this;
    this.child = extension;
    extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
    if (extendedConfig.defaultOptions && Object.keys(extendedConfig.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
    }
    extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
      name: extension.name
    }));
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
};
function markPasteRule(config) {
  return new PasteRule({
    find: config.find,
    handler: /* @__PURE__ */ __name(({ state, range, match, pasteEvent }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match, pasteEvent);
      if (attributes === false || attributes === null) {
        return null;
      }
      const { tr } = state;
      const captureGroup = match[match.length - 1];
      const fullMatch = match[0];
      let markEnd = range.to;
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter((item) => {
          const excluded = item.mark.type.excluded;
          return excluded.find((type) => type === config.type && type !== item.mark.type);
        }).filter((item) => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range.to) {
          tr.delete(textEnd, range.to);
        }
        if (textStart > range.from) {
          tr.delete(range.from + startSpaces, textStart);
        }
        markEnd = range.from + startSpaces + captureGroup.length;
        tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
        tr.removeStoredMark(config.type);
      }
    }, "handler")
  });
}
__name(markPasteRule, "markPasteRule");
function isValidLinkStructure(tokens) {
  if (tokens.length === 1) {
    return tokens[0].isLink;
  }
  if (tokens.length === 3 && tokens[1].isLink) {
    return ["()", "[]"].includes(tokens[0].value + tokens[2].value);
  }
  return false;
}
__name(isValidLinkStructure, "isValidLinkStructure");
function autolink(options) {
  return new Plugin({
    key: new PluginKey("autolink"),
    appendTransaction: /* @__PURE__ */ __name((transactions, oldState, newState) => {
      const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
      const preventAutolink = transactions.some((transaction) => transaction.getMeta("preventAutolink"));
      if (!docChanges || preventAutolink) {
        return;
      }
      const { tr } = newState;
      const transform = combineTransactionSteps(oldState.doc, [...transactions]);
      const changes = getChangedRanges(transform);
      changes.forEach(({ newRange }) => {
        const nodesInChangedRanges = findChildrenInRange(newState.doc, newRange, (node) => node.isTextblock);
        let textBlock;
        let textBeforeWhitespace;
        if (nodesInChangedRanges.length > 1) {
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, textBlock.pos + textBlock.node.nodeSize, void 0, " ");
        } else if (nodesInChangedRanges.length && newState.doc.textBetween(newRange.from, newRange.to, " ", " ").endsWith(" ")) {
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, newRange.to, void 0, " ");
        }
        if (textBlock && textBeforeWhitespace) {
          const wordsBeforeWhitespace = textBeforeWhitespace.split(" ").filter((s) => s !== "");
          if (wordsBeforeWhitespace.length <= 0) {
            return false;
          }
          const lastWordBeforeSpace = wordsBeforeWhitespace[wordsBeforeWhitespace.length - 1];
          const lastWordAndBlockOffset = textBlock.pos + textBeforeWhitespace.lastIndexOf(lastWordBeforeSpace);
          if (!lastWordBeforeSpace) {
            return false;
          }
          const linksBeforeSpace = tokenize(lastWordBeforeSpace).map((t) => t.toObject(options.defaultProtocol));
          if (!isValidLinkStructure(linksBeforeSpace)) {
            return false;
          }
          linksBeforeSpace.filter((link) => link.isLink).map((link) => ({
            ...link,
            from: lastWordAndBlockOffset + link.start + 1,
            to: lastWordAndBlockOffset + link.end + 1
          })).filter((link) => {
            if (!newState.schema.marks.code) {
              return true;
            }
            return !newState.doc.rangeHasMark(link.from, link.to, newState.schema.marks.code);
          }).filter((link) => options.validate(link.value)).filter((link) => options.shouldAutoLink(link.value)).forEach((link) => {
            if (getMarksBetween(link.from, link.to, newState.doc).some((item) => item.mark.type === options.type)) {
              return;
            }
            tr.addMark(link.from, link.to, options.type.create({
              href: link.href
            }));
          });
        }
      });
      if (!tr.steps.length) {
        return;
      }
      return tr;
    }, "appendTransaction")
  });
}
__name(autolink, "autolink");
function clickHandler(options) {
  return new Plugin({
    key: new PluginKey("handleClickLink"),
    props: {
      handleClick: /* @__PURE__ */ __name((view, pos, event) => {
        var _a, _b;
        if (event.button !== 0) {
          return false;
        }
        if (!view.editable) {
          return false;
        }
        let a = event.target;
        const els = [];
        while (a.nodeName !== "DIV") {
          els.push(a);
          a = a.parentNode;
        }
        if (!els.find((value) => value.nodeName === "A")) {
          return false;
        }
        const attrs = getAttributes(view.state, options.type.name);
        const link = event.target;
        const href = (_a = link === null || link === void 0 ? void 0 : link.href) !== null && _a !== void 0 ? _a : attrs.href;
        const target = (_b = link === null || link === void 0 ? void 0 : link.target) !== null && _b !== void 0 ? _b : attrs.target;
        if (link && href) {
          window.open(href, target);
          return true;
        }
        return false;
      }, "handleClick")
    }
  });
}
__name(clickHandler, "clickHandler");
function pasteHandler(options) {
  return new Plugin({
    key: new PluginKey("handlePasteLink"),
    props: {
      handlePaste: /* @__PURE__ */ __name((view, event, slice) => {
        const { state } = view;
        const { selection } = state;
        const { empty } = selection;
        if (empty) {
          return false;
        }
        let textContent = "";
        slice.content.forEach((node) => {
          textContent += node.textContent;
        });
        const link = find(textContent, { defaultProtocol: options.defaultProtocol }).find((item) => item.isLink && item.value === textContent);
        if (!textContent || !link) {
          return false;
        }
        options.editor.commands.setMark(options.type, {
          href: link.href
        });
        return true;
      }, "handlePaste")
    }
  });
}
__name(pasteHandler, "pasteHandler");
const ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function isAllowedUri(uri, protocols) {
  const allowedProtocols = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  if (protocols) {
    protocols.forEach((protocol) => {
      const nextProtocol = typeof protocol === "string" ? protocol : protocol.scheme;
      if (nextProtocol) {
        allowedProtocols.push(nextProtocol);
      }
    });
  }
  return !uri || uri.replace(ATTR_WHITESPACE, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${allowedProtocols.join("|")}):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
__name(isAllowedUri, "isAllowedUri");
const Link$2 = Mark.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: false,
  exitable: true,
  onCreate() {
    if (this.options.validate && !this.options.shouldAutoLink) {
      this.options.shouldAutoLink = this.options.validate;
      console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.");
    }
    this.options.protocols.forEach((protocol) => {
      if (typeof protocol === "string") {
        registerCustomProtocol(protocol);
        return;
      }
      registerCustomProtocol(protocol.scheme, protocol.optionalSlashes);
    });
  },
  onDestroy() {
    reset();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: true,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: /* @__PURE__ */ __name((url, ctx) => !!isAllowedUri(url, ctx.protocols), "isAllowedUri"),
      validate: /* @__PURE__ */ __name((url) => !!url, "validate"),
      shouldAutoLink: /* @__PURE__ */ __name((url) => !!url, "shouldAutoLink")
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(element) {
          return element.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: /* @__PURE__ */ __name((dom) => {
          const href = dom.getAttribute("href");
          if (!href || !this.options.isAllowedUri(href, {
            defaultValidate: /* @__PURE__ */ __name((url) => !!isAllowedUri(url, this.options.protocols), "defaultValidate"),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          })) {
            return false;
          }
          return null;
        }, "getAttrs")
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    if (!this.options.isAllowedUri(HTMLAttributes.href, {
      defaultValidate: /* @__PURE__ */ __name((href) => !!isAllowedUri(href, this.options.protocols), "defaultValidate"),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    })) {
      return [
        "a",
        mergeAttributes(this.options.HTMLAttributes, { ...HTMLAttributes, href: "" }),
        0
      ];
    }
    return ["a", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setLink: /* @__PURE__ */ __name((attributes) => ({ chain }) => {
        const { href } = attributes;
        if (!this.options.isAllowedUri(href, {
          defaultValidate: /* @__PURE__ */ __name((url) => !!isAllowedUri(url, this.options.protocols), "defaultValidate"),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().setMark(this.name, attributes).setMeta("preventAutolink", true).run();
      }, "setLink"),
      toggleLink: /* @__PURE__ */ __name((attributes) => ({ chain }) => {
        const { href } = attributes;
        if (!this.options.isAllowedUri(href, {
          defaultValidate: /* @__PURE__ */ __name((url) => !!isAllowedUri(url, this.options.protocols), "defaultValidate"),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().toggleMark(this.name, attributes, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run();
      }, "toggleLink"),
      unsetLink: /* @__PURE__ */ __name(() => ({ chain }) => {
        return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run();
      }, "unsetLink")
    };
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: /* @__PURE__ */ __name((text) => {
          const foundLinks = [];
          if (text) {
            const { protocols, defaultProtocol } = this.options;
            const links = find(text).filter((item) => item.isLink && this.options.isAllowedUri(item.value, {
              defaultValidate: /* @__PURE__ */ __name((href) => !!isAllowedUri(href, protocols), "defaultValidate"),
              protocols,
              defaultProtocol
            }));
            if (links.length) {
              links.forEach((link) => foundLinks.push({
                text: link.value,
                data: {
                  href: link.href
                },
                index: link.start
              }));
            }
          }
          return foundLinks;
        }, "find"),
        type: this.type,
        getAttributes: /* @__PURE__ */ __name((match) => {
          var _a;
          return {
            href: (_a = match.data) === null || _a === void 0 ? void 0 : _a.href
          };
        }, "getAttributes")
      })
    ];
  },
  addProseMirrorPlugins() {
    const plugins = [];
    const { protocols, defaultProtocol } = this.options;
    if (this.options.autolink) {
      plugins.push(autolink({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: /* @__PURE__ */ __name((url) => this.options.isAllowedUri(url, {
          defaultValidate: /* @__PURE__ */ __name((href) => !!isAllowedUri(href, protocols), "defaultValidate"),
          protocols,
          defaultProtocol
        }), "validate"),
        shouldAutoLink: this.options.shouldAutoLink
      }));
    }
    if (this.options.openOnClick === true) {
      plugins.push(clickHandler({
        type: this.type
      }));
    }
    if (this.options.linkOnPaste) {
      plugins.push(pasteHandler({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      }));
    }
    return plugins;
  }
});
function getColStyleDeclaration(minWidth, width) {
  if (width) {
    return ["width", `${Math.max(width, minWidth)}px`];
  }
  return ["min-width", `${minWidth}px`];
}
__name(getColStyleDeclaration, "getColStyleDeclaration");
function updateColumns(node, colgroup, table, cellMinWidth, overrideCol, overrideValue) {
  var _a;
  let totalWidth = 0;
  let fixedWidth = true;
  let nextDOM = colgroup.firstChild;
  const row = node.firstChild;
  if (row !== null) {
    for (let i = 0, col = 0; i < row.childCount; i += 1) {
      const { colspan, colwidth } = row.child(i).attrs;
      for (let j = 0; j < colspan; j += 1, col += 1) {
        const hasWidth = overrideCol === col ? overrideValue : colwidth && colwidth[j];
        const cssWidth = hasWidth ? `${hasWidth}px` : "";
        totalWidth += hasWidth || cellMinWidth;
        if (!hasWidth) {
          fixedWidth = false;
        }
        if (!nextDOM) {
          const colElement = document.createElement("col");
          const [propertyKey, propertyValue] = getColStyleDeclaration(cellMinWidth, hasWidth);
          colElement.style.setProperty(propertyKey, propertyValue);
          colgroup.appendChild(colElement);
        } else {
          if (nextDOM.style.width !== cssWidth) {
            const [propertyKey, propertyValue] = getColStyleDeclaration(cellMinWidth, hasWidth);
            nextDOM.style.setProperty(propertyKey, propertyValue);
          }
          nextDOM = nextDOM.nextSibling;
        }
      }
    }
  }
  while (nextDOM) {
    const after = nextDOM.nextSibling;
    (_a = nextDOM.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(nextDOM);
    nextDOM = after;
  }
  if (fixedWidth) {
    table.style.width = `${totalWidth}px`;
    table.style.minWidth = "";
  } else {
    table.style.width = "";
    table.style.minWidth = `${totalWidth}px`;
  }
}
__name(updateColumns, "updateColumns");
class TableView {
  static {
    __name(this, "TableView");
  }
  constructor(node, cellMinWidth) {
    this.node = node;
    this.cellMinWidth = cellMinWidth;
    this.dom = document.createElement("div");
    this.dom.className = "tableWrapper";
    this.table = this.dom.appendChild(document.createElement("table"));
    this.colgroup = this.table.appendChild(document.createElement("colgroup"));
    updateColumns(node, this.colgroup, this.table, cellMinWidth);
    this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(node) {
    if (node.type !== this.node.type) {
      return false;
    }
    this.node = node;
    updateColumns(node, this.colgroup, this.table, this.cellMinWidth);
    return true;
  }
  ignoreMutation(mutation) {
    return mutation.type === "attributes" && (mutation.target === this.table || this.colgroup.contains(mutation.target));
  }
}
function createColGroup(node, cellMinWidth, overrideCol, overrideValue) {
  let totalWidth = 0;
  let fixedWidth = true;
  const cols = [];
  const row = node.firstChild;
  if (!row) {
    return {};
  }
  for (let i = 0, col = 0; i < row.childCount; i += 1) {
    const { colspan, colwidth } = row.child(i).attrs;
    for (let j = 0; j < colspan; j += 1, col += 1) {
      const hasWidth = overrideCol === col ? overrideValue : colwidth && colwidth[j];
      totalWidth += hasWidth || cellMinWidth;
      if (!hasWidth) {
        fixedWidth = false;
      }
      const [property, value] = getColStyleDeclaration(cellMinWidth, hasWidth);
      cols.push([
        "col",
        { style: `${property}: ${value}` }
      ]);
    }
  }
  const tableWidth = fixedWidth ? `${totalWidth}px` : "";
  const tableMinWidth = fixedWidth ? "" : `${totalWidth}px`;
  const colgroup = ["colgroup", {}, ...cols];
  return { colgroup, tableWidth, tableMinWidth };
}
__name(createColGroup, "createColGroup");
function createCell(cellType, cellContent) {
  return cellType.createAndFill();
}
__name(createCell, "createCell");
function getTableNodeTypes(schema) {
  if (schema.cached.tableNodeTypes) {
    return schema.cached.tableNodeTypes;
  }
  const roles = {};
  Object.keys(schema.nodes).forEach((type) => {
    const nodeType = schema.nodes[type];
    if (nodeType.spec.tableRole) {
      roles[nodeType.spec.tableRole] = nodeType;
    }
  });
  schema.cached.tableNodeTypes = roles;
  return roles;
}
__name(getTableNodeTypes, "getTableNodeTypes");
function createTable(schema, rowsCount, colsCount, withHeaderRow, cellContent) {
  const types = getTableNodeTypes(schema);
  const headerCells = [];
  const cells = [];
  for (let index2 = 0; index2 < colsCount; index2 += 1) {
    const cell = createCell(types.cell);
    if (cell) {
      cells.push(cell);
    }
    if (withHeaderRow) {
      const headerCell = createCell(types.header_cell);
      if (headerCell) {
        headerCells.push(headerCell);
      }
    }
  }
  const rows = [];
  for (let index2 = 0; index2 < rowsCount; index2 += 1) {
    rows.push(types.row.createChecked(null, withHeaderRow && index2 === 0 ? headerCells : cells));
  }
  return types.table.createChecked(null, rows);
}
__name(createTable, "createTable");
function isCellSelection(value) {
  return value instanceof CellSelection;
}
__name(isCellSelection, "isCellSelection");
const deleteTableWhenAllCellsSelected = /* @__PURE__ */ __name(({ editor }) => {
  const { selection } = editor.state;
  if (!isCellSelection(selection)) {
    return false;
  }
  let cellCount = 0;
  const table = findParentNodeClosestToPos(selection.ranges[0].$from, (node) => {
    return node.type.name === "table";
  });
  table === null || table === void 0 ? void 0 : table.node.descendants((node) => {
    if (node.type.name === "table") {
      return false;
    }
    if (["tableCell", "tableHeader"].includes(node.type.name)) {
      cellCount += 1;
    }
  });
  const allCellsSelected = cellCount === selection.ranges.length;
  if (!allCellsSelected) {
    return false;
  }
  editor.commands.deleteTable();
  return true;
}, "deleteTableWhenAllCellsSelected");
const Table$2 = Node$1.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: false,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: TableView,
      lastColumnResizable: true,
      allowTableNodeSelection: false
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: true,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node, HTMLAttributes }) {
    const { colgroup, tableWidth, tableMinWidth } = createColGroup(node, this.options.cellMinWidth);
    const table = [
      "table",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        style: tableWidth ? `width: ${tableWidth}` : `min-width: ${tableMinWidth}`
      }),
      colgroup,
      ["tbody", 0]
    ];
    return table;
  },
  addCommands() {
    return {
      insertTable: /* @__PURE__ */ __name(({ rows = 3, cols = 3, withHeaderRow = true } = {}) => ({ tr, dispatch, editor }) => {
        const node = createTable(editor.schema, rows, cols, withHeaderRow);
        if (dispatch) {
          const offset = tr.selection.from + 1;
          tr.replaceSelectionWith(node).scrollIntoView().setSelection(TextSelection.near(tr.doc.resolve(offset)));
        }
        return true;
      }, "insertTable"),
      addColumnBefore: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return addColumnBefore(state, dispatch);
      }, "addColumnBefore"),
      addColumnAfter: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return addColumnAfter(state, dispatch);
      }, "addColumnAfter"),
      deleteColumn: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return deleteColumn(state, dispatch);
      }, "deleteColumn"),
      addRowBefore: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return addRowBefore(state, dispatch);
      }, "addRowBefore"),
      addRowAfter: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return addRowAfter(state, dispatch);
      }, "addRowAfter"),
      deleteRow: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return deleteRow(state, dispatch);
      }, "deleteRow"),
      deleteTable: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return deleteTable(state, dispatch);
      }, "deleteTable"),
      mergeCells: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return mergeCells(state, dispatch);
      }, "mergeCells"),
      splitCell: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return splitCell(state, dispatch);
      }, "splitCell"),
      toggleHeaderColumn: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return toggleHeader("column")(state, dispatch);
      }, "toggleHeaderColumn"),
      toggleHeaderRow: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return toggleHeader("row")(state, dispatch);
      }, "toggleHeaderRow"),
      toggleHeaderCell: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return toggleHeaderCell(state, dispatch);
      }, "toggleHeaderCell"),
      mergeOrSplit: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        if (mergeCells(state, dispatch)) {
          return true;
        }
        return splitCell(state, dispatch);
      }, "mergeOrSplit"),
      setCellAttribute: /* @__PURE__ */ __name((name, value) => ({ state, dispatch }) => {
        return setCellAttr(name, value)(state, dispatch);
      }, "setCellAttribute"),
      goToNextCell: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return goToNextCell(1)(state, dispatch);
      }, "goToNextCell"),
      goToPreviousCell: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return goToNextCell(-1)(state, dispatch);
      }, "goToPreviousCell"),
      fixTables: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        if (dispatch) {
          fixTables(state);
        }
        return true;
      }, "fixTables"),
      setCellSelection: /* @__PURE__ */ __name((position) => ({ tr, dispatch }) => {
        if (dispatch) {
          const selection = CellSelection.create(tr.doc, position.anchorCell, position.headCell);
          tr.setSelection(selection);
        }
        return true;
      }, "setCellSelection")
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: /* @__PURE__ */ __name(() => {
        if (this.editor.commands.goToNextCell()) {
          return true;
        }
        if (!this.editor.can().addRowAfter()) {
          return false;
        }
        return this.editor.chain().addRowAfter().goToNextCell().run();
      }, "Tab"),
      "Shift-Tab": /* @__PURE__ */ __name(() => this.editor.commands.goToPreviousCell(), "Shift-Tab"),
      Backspace: deleteTableWhenAllCellsSelected,
      "Mod-Backspace": deleteTableWhenAllCellsSelected,
      Delete: deleteTableWhenAllCellsSelected,
      "Mod-Delete": deleteTableWhenAllCellsSelected
    };
  },
  addProseMirrorPlugins() {
    const isResizable = this.options.resizable && this.editor.isEditable;
    return [
      ...isResizable ? [
        columnResizing({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      tableEditing({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(extension) {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      tableRole: callOrReturn(getExtensionField(extension, "tableRole", context))
    };
  }
});
const TableCell = Node$1.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: /* @__PURE__ */ __name((element) => {
          const colwidth = element.getAttribute("colwidth");
          const value = colwidth ? colwidth.split(",").map((width) => parseInt(width, 10)) : null;
          return value;
        }, "parseHTML")
      }
    };
  },
  tableRole: "cell",
  isolating: true,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["td", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});
const TableHeader = Node$1.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: /* @__PURE__ */ __name((element) => {
          const colwidth = element.getAttribute("colwidth");
          const value = colwidth ? colwidth.split(",").map((width) => parseInt(width, 10)) : null;
          return value;
        }, "parseHTML")
      }
    };
  },
  tableRole: "header_cell",
  isolating: true,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["th", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});
const TableRow = Node$1.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["tr", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});
const inputRegex$4 = /^\s*>\s$/;
const Blockquote$2 = Node$1.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: true,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["blockquote", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setBlockquote: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.wrapIn(this.name);
      }, "setBlockquote"),
      toggleBlockquote: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.toggleWrap(this.name);
      }, "toggleBlockquote"),
      unsetBlockquote: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.lift(this.name);
      }, "unsetBlockquote")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": /* @__PURE__ */ __name(() => this.editor.commands.toggleBlockquote(), "Mod-Shift-b")
    };
  },
  addInputRules() {
    return [
      wrappingInputRule({
        find: inputRegex$4,
        type: this.type
      })
    ];
  }
});
const starInputRegex$1 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
const starPasteRegex$1 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
const underscoreInputRegex$1 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
const underscorePasteRegex$1 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
const Bold$2 = Mark.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: /* @__PURE__ */ __name((node) => node.style.fontWeight !== "normal" && null, "getAttrs")
      },
      {
        style: "font-weight=400",
        clearMark: /* @__PURE__ */ __name((mark) => mark.type.name === this.name, "clearMark")
      },
      {
        style: "font-weight",
        getAttrs: /* @__PURE__ */ __name((value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null, "getAttrs")
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["strong", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setBold: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.setMark(this.name);
      }, "setBold"),
      toggleBold: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.toggleMark(this.name);
      }, "toggleBold"),
      unsetBold: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.unsetMark(this.name);
      }, "unsetBold")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": /* @__PURE__ */ __name(() => this.editor.commands.toggleBold(), "Mod-b"),
      "Mod-B": /* @__PURE__ */ __name(() => this.editor.commands.toggleBold(), "Mod-B")
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: starInputRegex$1,
        type: this.type
      }),
      markInputRule({
        find: underscoreInputRegex$1,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: starPasteRegex$1,
        type: this.type
      }),
      markPasteRule({
        find: underscorePasteRegex$1,
        type: this.type
      })
    ];
  }
});
const ListItemName$1 = "listItem";
const TextStyleName$1 = "textStyle";
const inputRegex$3 = /^\s*([-+*])\s$/;
const BulletList$2 = Node$1.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleBulletList: /* @__PURE__ */ __name(() => ({ commands: commands2, chain }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName$1, this.editor.getAttributes(TextStyleName$1)).run();
        }
        return commands2.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }, "toggleBulletList")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": /* @__PURE__ */ __name(() => this.editor.commands.toggleBulletList(), "Mod-Shift-8")
    };
  },
  addInputRules() {
    let inputRule = wrappingInputRule({
      find: inputRegex$3,
      type: this.type
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = wrappingInputRule({
        find: inputRegex$3,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: /* @__PURE__ */ __name(() => {
          return this.editor.getAttributes(TextStyleName$1);
        }, "getAttributes"),
        editor: this.editor
      });
    }
    return [
      inputRule
    ];
  }
});
const inputRegex$2 = /(?<!`)`([^`]+)`(?!`)/;
const pasteRegex$1 = /(?<!`)`([^`]+)`(?!`)/g;
const Code$2 = Mark.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: true,
  exitable: true,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["code", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setCode: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.setMark(this.name);
      }, "setCode"),
      toggleCode: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.toggleMark(this.name);
      }, "toggleCode"),
      unsetCode: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.unsetMark(this.name);
      }, "unsetCode")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": /* @__PURE__ */ __name(() => this.editor.commands.toggleCode(), "Mod-e")
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: inputRegex$2,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: pasteRegex$1,
        type: this.type
      })
    ];
  }
});
const backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
const tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
const CodeBlock$2 = Node$1.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: /* @__PURE__ */ __name((element) => {
          var _a;
          const { languageClassPrefix } = this.options;
          const classNames = [...((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList) || []];
          const languages = classNames.filter((className) => className.startsWith(languageClassPrefix)).map((className) => className.replace(languageClassPrefix, ""));
          const language = languages[0];
          if (!language) {
            return null;
          }
          return language;
        }, "parseHTML"),
        rendered: false
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "pre",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      [
        "code",
        {
          class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: /* @__PURE__ */ __name((attributes) => ({ commands: commands2 }) => {
        return commands2.setNode(this.name, attributes);
      }, "setCodeBlock"),
      toggleCodeBlock: /* @__PURE__ */ __name((attributes) => ({ commands: commands2 }) => {
        return commands2.toggleNode(this.name, "paragraph", attributes);
      }, "toggleCodeBlock")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": /* @__PURE__ */ __name(() => this.editor.commands.toggleCodeBlock(), "Mod-Alt-c"),
      // remove code block when at start of document or code block is empty
      Backspace: /* @__PURE__ */ __name(() => {
        const { empty, $anchor } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;
        if (!empty || $anchor.parent.type.name !== this.name) {
          return false;
        }
        if (isAtStart || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }
        return false;
      }, "Backspace"),
      // exit node on triple enter
      Enter: /* @__PURE__ */ __name(({ editor }) => {
        if (!this.options.exitOnTripleEnter) {
          return false;
        }
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
        if (!isAtEnd || !endsWithDoubleNewline) {
          return false;
        }
        return editor.chain().command(({ tr }) => {
          tr.delete($from.pos - 2, $from.pos);
          return true;
        }).exitCode().run();
      }, "Enter"),
      // exit node on arrow down
      ArrowDown: /* @__PURE__ */ __name(({ editor }) => {
        if (!this.options.exitOnArrowDown) {
          return false;
        }
        const { state } = editor;
        const { selection, doc } = state;
        const { $from, empty } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        if (!isAtEnd) {
          return false;
        }
        const after = $from.after();
        if (after === void 0) {
          return false;
        }
        const nodeAfter = doc.nodeAt(after);
        if (nodeAfter) {
          return editor.commands.command(({ tr }) => {
            tr.setSelection(Selection.near(doc.resolve(after)));
            return true;
          });
        }
        return editor.commands.exitCode();
      }, "ArrowDown")
    };
  },
  addInputRules() {
    return [
      textblockTypeInputRule({
        find: backtickInputRegex,
        type: this.type,
        getAttributes: /* @__PURE__ */ __name((match) => ({
          language: match[1]
        }), "getAttributes")
      }),
      textblockTypeInputRule({
        find: tildeInputRegex,
        type: this.type,
        getAttributes: /* @__PURE__ */ __name((match) => ({
          language: match[1]
        }), "getAttributes")
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new Plugin({
        key: new PluginKey("codeBlockVSCodeHandler"),
        props: {
          handlePaste: /* @__PURE__ */ __name((view, event) => {
            if (!event.clipboardData) {
              return false;
            }
            if (this.editor.isActive(this.type.name)) {
              return false;
            }
            const text = event.clipboardData.getData("text/plain");
            const vscode = event.clipboardData.getData("vscode-editor-data");
            const vscodeData = vscode ? JSON.parse(vscode) : void 0;
            const language = vscodeData === null || vscodeData === void 0 ? void 0 : vscodeData.mode;
            if (!text || !language) {
              return false;
            }
            const { tr, schema } = view.state;
            const textNode = schema.text(text.replace(/\r\n?/g, "\n"));
            tr.replaceSelectionWith(this.type.create({ language }, textNode));
            if (tr.selection.$from.parent.type !== this.type) {
              tr.setSelection(TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
            }
            tr.setMeta("paste", true);
            view.dispatch(tr);
            return true;
          }, "handlePaste")
        }
      })
    ];
  }
});
const Document = Node$1.create({
  name: "doc",
  topNode: true,
  content: "block+"
});
const Dropcursor = Extension.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      dropCursor(this.options)
    ];
  }
});
const Gapcursor = Extension.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      gapCursor()
    ];
  },
  extendNodeSchema(extension) {
    var _a;
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      allowGapCursor: (_a = callOrReturn(getExtensionField(extension, "allowGapCursor", context))) !== null && _a !== void 0 ? _a : null
    };
  }
});
const HardBreak$2 = Node$1.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: true,
      HTMLAttributes: {}
    };
  },
  inline: true,
  group: "inline",
  selectable: false,
  linebreakReplacement: true,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["br", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },
  renderText() {
    return "\n";
  },
  addCommands() {
    return {
      setHardBreak: /* @__PURE__ */ __name(() => ({ commands: commands2, chain, state, editor }) => {
        return commands2.first([
          () => commands2.exitCode(),
          () => commands2.command(() => {
            const { selection, storedMarks } = state;
            if (selection.$from.parent.type.spec.isolating) {
              return false;
            }
            const { keepMarks } = this.options;
            const { splittableMarks } = editor.extensionManager;
            const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
            return chain().insertContent({ type: this.name }).command(({ tr, dispatch }) => {
              if (dispatch && marks && keepMarks) {
                const filteredMarks = marks.filter((mark) => splittableMarks.includes(mark.type.name));
                tr.ensureMarks(filteredMarks);
              }
              return true;
            }).run();
          })
        ]);
      }, "setHardBreak")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": /* @__PURE__ */ __name(() => this.editor.commands.setHardBreak(), "Mod-Enter"),
      "Shift-Enter": /* @__PURE__ */ __name(() => this.editor.commands.setHardBreak(), "Shift-Enter")
    };
  }
});
const Heading$2 = Node$1.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: true,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: false
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((level) => ({
      tag: `h${level}`,
      attrs: { level }
    }));
  },
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level = hasLevel ? node.attrs.level : this.options.levels[0];
    return [`h${level}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setHeading: /* @__PURE__ */ __name((attributes) => ({ commands: commands2 }) => {
        if (!this.options.levels.includes(attributes.level)) {
          return false;
        }
        return commands2.setNode(this.name, attributes);
      }, "setHeading"),
      toggleHeading: /* @__PURE__ */ __name((attributes) => ({ commands: commands2 }) => {
        if (!this.options.levels.includes(attributes.level)) {
          return false;
        }
        return commands2.toggleNode(this.name, "paragraph", attributes);
      }, "toggleHeading")
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((items, level) => ({
      ...items,
      ...{
        [`Mod-Alt-${level}`]: () => this.editor.commands.toggleHeading({ level })
      }
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((level) => {
      return textblockTypeInputRule({
        find: new RegExp(`^(#{1,${level}})\\s$`),
        type: this.type,
        getAttributes: {
          level
        }
      });
    });
  }
});
const History = Extension.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return undo(state, dispatch);
      }, "undo"),
      redo: /* @__PURE__ */ __name(() => ({ state, dispatch }) => {
        return redo(state, dispatch);
      }, "redo")
    };
  },
  addProseMirrorPlugins() {
    return [
      history(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": /* @__PURE__ */ __name(() => this.editor.commands.undo(), "Mod-z"),
      "Shift-Mod-z": /* @__PURE__ */ __name(() => this.editor.commands.redo(), "Shift-Mod-z"),
      "Mod-y": /* @__PURE__ */ __name(() => this.editor.commands.redo(), "Mod-y"),
      // Russian keyboard layouts
      "Mod-я": /* @__PURE__ */ __name(() => this.editor.commands.undo(), "Mod-я"),
      "Shift-Mod-я": /* @__PURE__ */ __name(() => this.editor.commands.redo(), "Shift-Mod-я")
    };
  }
});
const HorizontalRule$2 = Node$1.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["hr", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },
  addCommands() {
    return {
      setHorizontalRule: /* @__PURE__ */ __name(() => ({ chain, state }) => {
        const { selection } = state;
        const { $from: $originFrom, $to: $originTo } = selection;
        const currentChain = chain();
        if ($originFrom.parentOffset === 0) {
          currentChain.insertContentAt({
            from: Math.max($originFrom.pos - 1, 0),
            to: $originTo.pos
          }, {
            type: this.name
          });
        } else if (isNodeSelection(selection)) {
          currentChain.insertContentAt($originTo.pos, {
            type: this.name
          });
        } else {
          currentChain.insertContent({ type: this.name });
        }
        return currentChain.command(({ tr, dispatch }) => {
          var _a;
          if (dispatch) {
            const { $to } = tr.selection;
            const posAfter = $to.end();
            if ($to.nodeAfter) {
              if ($to.nodeAfter.isTextblock) {
                tr.setSelection(TextSelection.create(tr.doc, $to.pos + 1));
              } else if ($to.nodeAfter.isBlock) {
                tr.setSelection(NodeSelection.create(tr.doc, $to.pos));
              } else {
                tr.setSelection(TextSelection.create(tr.doc, $to.pos));
              }
            } else {
              const node = (_a = $to.parent.type.contentMatch.defaultType) === null || _a === void 0 ? void 0 : _a.create();
              if (node) {
                tr.insert(posAfter, node);
                tr.setSelection(TextSelection.create(tr.doc, posAfter + 1));
              }
            }
            tr.scrollIntoView();
          }
          return true;
        }).run();
      }, "setHorizontalRule")
    };
  },
  addInputRules() {
    return [
      nodeInputRule({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
});
const starInputRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
const starPasteRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
const underscoreInputRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
const underscorePasteRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
const Italic$2 = Mark.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: /* @__PURE__ */ __name((node) => node.style.fontStyle !== "normal" && null, "getAttrs")
      },
      {
        style: "font-style=normal",
        clearMark: /* @__PURE__ */ __name((mark) => mark.type.name === this.name, "clearMark")
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["em", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setItalic: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.setMark(this.name);
      }, "setItalic"),
      toggleItalic: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.toggleMark(this.name);
      }, "toggleItalic"),
      unsetItalic: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.unsetMark(this.name);
      }, "unsetItalic")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": /* @__PURE__ */ __name(() => this.editor.commands.toggleItalic(), "Mod-i"),
      "Mod-I": /* @__PURE__ */ __name(() => this.editor.commands.toggleItalic(), "Mod-I")
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: starInputRegex,
        type: this.type
      }),
      markInputRule({
        find: underscoreInputRegex,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: starPasteRegex,
        type: this.type
      }),
      markPasteRule({
        find: underscorePasteRegex,
        type: this.type
      })
    ];
  }
});
const ListItem$2 = Node$1.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: true,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["li", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: /* @__PURE__ */ __name(() => this.editor.commands.splitListItem(this.name), "Enter"),
      Tab: /* @__PURE__ */ __name(() => this.editor.commands.sinkListItem(this.name), "Tab"),
      "Shift-Tab": /* @__PURE__ */ __name(() => this.editor.commands.liftListItem(this.name), "Shift-Tab")
    };
  }
});
const ListItemName = "listItem";
const TextStyleName = "textStyle";
const inputRegex$1 = /^(\d+)\.\s$/;
const OrderedList$2 = Node$1.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: /* @__PURE__ */ __name((element) => {
          return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
        }, "parseHTML")
      },
      type: {
        default: void 0,
        parseHTML: /* @__PURE__ */ __name((element) => element.getAttribute("type"), "parseHTML")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    const { start, ...attributesWithoutStart } = HTMLAttributes;
    return start === 1 ? ["ol", mergeAttributes(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: /* @__PURE__ */ __name(() => ({ commands: commands2, chain }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName)).run();
        }
        return commands2.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }, "toggleOrderedList")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": /* @__PURE__ */ __name(() => this.editor.commands.toggleOrderedList(), "Mod-Shift-7")
    };
  },
  addInputRules() {
    let inputRule = wrappingInputRule({
      find: inputRegex$1,
      type: this.type,
      getAttributes: /* @__PURE__ */ __name((match) => ({ start: +match[1] }), "getAttributes"),
      joinPredicate: /* @__PURE__ */ __name((match, node) => node.childCount + node.attrs.start === +match[1], "joinPredicate")
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = wrappingInputRule({
        find: inputRegex$1,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: /* @__PURE__ */ __name((match) => ({ start: +match[1], ...this.editor.getAttributes(TextStyleName) }), "getAttributes"),
        joinPredicate: /* @__PURE__ */ __name((match, node) => node.childCount + node.attrs.start === +match[1], "joinPredicate"),
        editor: this.editor
      });
    }
    return [
      inputRule
    ];
  }
});
const Paragraph$2 = Node$1.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setParagraph: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.setNode(this.name);
      }, "setParagraph")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": /* @__PURE__ */ __name(() => this.editor.commands.setParagraph(), "Mod-Alt-0")
    };
  }
});
const inputRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
const pasteRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
const Strike$2 = Mark.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: false,
        getAttrs: /* @__PURE__ */ __name((style2) => style2.includes("line-through") ? {} : false, "getAttrs")
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["s", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setStrike: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.setMark(this.name);
      }, "setStrike"),
      toggleStrike: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.toggleMark(this.name);
      }, "toggleStrike"),
      unsetStrike: /* @__PURE__ */ __name(() => ({ commands: commands2 }) => {
        return commands2.unsetMark(this.name);
      }, "unsetStrike")
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": /* @__PURE__ */ __name(() => this.editor.commands.toggleStrike(), "Mod-Shift-s")
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: inputRegex,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: pasteRegex,
        type: this.type
      })
    ];
  }
});
const Text$2 = Node$1.create({
  name: "text",
  group: "inline"
});
const StarterKit = Extension.create({
  name: "starterKit",
  addExtensions() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const extensions = [];
    if (this.options.bold !== false) {
      extensions.push(Bold$2.configure((_a = this.options) === null || _a === void 0 ? void 0 : _a.bold));
    }
    if (this.options.blockquote !== false) {
      extensions.push(Blockquote$2.configure((_b = this.options) === null || _b === void 0 ? void 0 : _b.blockquote));
    }
    if (this.options.bulletList !== false) {
      extensions.push(BulletList$2.configure((_c = this.options) === null || _c === void 0 ? void 0 : _c.bulletList));
    }
    if (this.options.code !== false) {
      extensions.push(Code$2.configure((_d = this.options) === null || _d === void 0 ? void 0 : _d.code));
    }
    if (this.options.codeBlock !== false) {
      extensions.push(CodeBlock$2.configure((_e = this.options) === null || _e === void 0 ? void 0 : _e.codeBlock));
    }
    if (this.options.document !== false) {
      extensions.push(Document.configure((_f = this.options) === null || _f === void 0 ? void 0 : _f.document));
    }
    if (this.options.dropcursor !== false) {
      extensions.push(Dropcursor.configure((_g = this.options) === null || _g === void 0 ? void 0 : _g.dropcursor));
    }
    if (this.options.gapcursor !== false) {
      extensions.push(Gapcursor.configure((_h = this.options) === null || _h === void 0 ? void 0 : _h.gapcursor));
    }
    if (this.options.hardBreak !== false) {
      extensions.push(HardBreak$2.configure((_j = this.options) === null || _j === void 0 ? void 0 : _j.hardBreak));
    }
    if (this.options.heading !== false) {
      extensions.push(Heading$2.configure((_k = this.options) === null || _k === void 0 ? void 0 : _k.heading));
    }
    if (this.options.history !== false) {
      extensions.push(History.configure((_l = this.options) === null || _l === void 0 ? void 0 : _l.history));
    }
    if (this.options.horizontalRule !== false) {
      extensions.push(HorizontalRule$2.configure((_m = this.options) === null || _m === void 0 ? void 0 : _m.horizontalRule));
    }
    if (this.options.italic !== false) {
      extensions.push(Italic$2.configure((_o = this.options) === null || _o === void 0 ? void 0 : _o.italic));
    }
    if (this.options.listItem !== false) {
      extensions.push(ListItem$2.configure((_p = this.options) === null || _p === void 0 ? void 0 : _p.listItem));
    }
    if (this.options.orderedList !== false) {
      extensions.push(OrderedList$2.configure((_q = this.options) === null || _q === void 0 ? void 0 : _q.orderedList));
    }
    if (this.options.paragraph !== false) {
      extensions.push(Paragraph$2.configure((_r = this.options) === null || _r === void 0 ? void 0 : _r.paragraph));
    }
    if (this.options.strike !== false) {
      extensions.push(Strike$2.configure((_s = this.options) === null || _s === void 0 ? void 0 : _s.strike));
    }
    if (this.options.text !== false) {
      extensions.push(Text$2.configure((_t = this.options) === null || _t === void 0 ? void 0 : _t.text));
    }
    return extensions;
  }
});
var __defProp2 = Object.defineProperty;
var __defNormalProp = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value, "__defNormalProp");
var __publicField = /* @__PURE__ */ __name((obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
}, "__publicField");
const MarkdownTightLists = Extension.create({
  name: "markdownTightLists",
  addOptions: /* @__PURE__ */ __name(() => ({
    tight: true,
    tightClass: "tight",
    listTypes: ["bulletList", "orderedList"]
  }), "addOptions"),
  addGlobalAttributes() {
    return [{
      types: this.options.listTypes,
      attributes: {
        tight: {
          default: this.options.tight,
          parseHTML: /* @__PURE__ */ __name((element) => element.getAttribute("data-tight") === "true" || !element.querySelector("p"), "parseHTML"),
          renderHTML: /* @__PURE__ */ __name((attributes) => ({
            class: attributes.tight ? this.options.tightClass : null,
            "data-tight": attributes.tight ? "true" : null
          }), "renderHTML")
        }
      }
    }];
  },
  addCommands() {
    var _this = this;
    return {
      toggleTight: /* @__PURE__ */ __name(function() {
        let tight = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return (_ref) => {
          let {
            editor,
            commands: commands2
          } = _ref;
          function toggleTight(name) {
            if (!editor.isActive(name)) {
              return false;
            }
            const attrs = editor.getAttributes(name);
            return commands2.updateAttributes(name, {
              tight: tight !== null && tight !== void 0 ? tight : !(attrs !== null && attrs !== void 0 && attrs.tight)
            });
          }
          __name(toggleTight, "toggleTight");
          return _this.options.listTypes.some((name) => toggleTight(name));
        };
      }, "toggleTight")
    };
  }
});
const md = MarkdownIt();
function scanDelims(text, pos) {
  md.inline.State.prototype.scanDelims.call({
    src: text,
    posMax: text.length
  });
  const state = new md.inline.State(text, null, null, []);
  return state.scanDelims(pos, true);
}
__name(scanDelims, "scanDelims");
function shiftDelim(text, delim, start, offset) {
  let res = text.substring(0, start) + text.substring(start + delim.length);
  res = res.substring(0, start + offset) + delim + res.substring(start + offset);
  return res;
}
__name(shiftDelim, "shiftDelim");
function trimStart(text, delim, from, to) {
  let pos = from, res = text;
  while (pos < to) {
    if (scanDelims(res, pos).can_open) {
      break;
    }
    res = shiftDelim(res, delim, pos, 1);
    pos++;
  }
  return {
    text: res,
    from: pos,
    to
  };
}
__name(trimStart, "trimStart");
function trimEnd(text, delim, from, to) {
  let pos = to, res = text;
  while (pos > from) {
    if (scanDelims(res, pos).can_close) {
      break;
    }
    res = shiftDelim(res, delim, pos, -1);
    pos--;
  }
  return {
    text: res,
    from,
    to: pos
  };
}
__name(trimEnd, "trimEnd");
function trimInline(text, delim, from, to) {
  let state = {
    text,
    from,
    to
  };
  state = trimStart(state.text, delim, state.from, state.to);
  state = trimEnd(state.text, delim, state.from, state.to);
  if (state.to - state.from < delim.length + 1) {
    state.text = state.text.substring(0, state.from) + state.text.substring(state.to + delim.length);
  }
  return state.text;
}
__name(trimInline, "trimInline");
class MarkdownSerializerState extends MarkdownSerializerState$1 {
  static {
    __name(this, "MarkdownSerializerState");
  }
  constructor(nodes, marks, options) {
    super(nodes, marks, options !== null && options !== void 0 ? options : {});
    __publicField(this, "inTable", false);
    this.inlines = [];
  }
  render(node, parent, index2) {
    super.render(node, parent, index2);
    const top = this.inlines[this.inlines.length - 1];
    if (top !== null && top !== void 0 && top.start && top !== null && top !== void 0 && top.end) {
      const {
        delimiter,
        start,
        end
      } = this.normalizeInline(top);
      this.out = trimInline(this.out, delimiter, start, end);
      this.inlines.pop();
    }
  }
  markString(mark, open, parent, index2) {
    const info = this.marks[mark.type.name];
    if (info.expelEnclosingWhitespace) {
      if (open) {
        this.inlines.push({
          start: this.out.length,
          delimiter: info.open
        });
      } else {
        const top = this.inlines.pop();
        this.inlines.push({
          ...top,
          end: this.out.length
        });
      }
    }
    return super.markString(mark, open, parent, index2);
  }
  normalizeInline(inline) {
    let {
      start,
      end
    } = inline;
    while (this.out.charAt(start).match(/\s/)) {
      start++;
    }
    return {
      ...inline,
      start
    };
  }
}
const HTMLMark = Mark.create({
  name: "markdownHTMLMark",
  /**
   * @return {{markdown: MarkdownMarkSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: {
          open(state, mark) {
            var _getMarkTags$, _getMarkTags;
            if (!this.editor.storage.markdown.options.html) {
              console.warn(`Tiptap Markdown: "${mark.type.name}" mark is only available in html mode`);
              return "";
            }
            return (_getMarkTags$ = (_getMarkTags = getMarkTags(mark)) === null || _getMarkTags === void 0 ? void 0 : _getMarkTags[0]) !== null && _getMarkTags$ !== void 0 ? _getMarkTags$ : "";
          },
          close(state, mark) {
            var _getMarkTags$2, _getMarkTags2;
            if (!this.editor.storage.markdown.options.html) {
              return "";
            }
            return (_getMarkTags$2 = (_getMarkTags2 = getMarkTags(mark)) === null || _getMarkTags2 === void 0 ? void 0 : _getMarkTags2[1]) !== null && _getMarkTags$2 !== void 0 ? _getMarkTags$2 : "";
          }
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
function getMarkTags(mark) {
  const schema = mark.type.schema;
  const node = schema.text(" ", [mark]);
  const html = getHTMLFromFragment(Fragment.from(node), schema);
  const match = html.match(/^(<.*?>) (<\/.*?>)$/);
  return match ? [match[1], match[2]] : null;
}
__name(getMarkTags, "getMarkTags");
function elementFromString(value) {
  const wrappedValue = `<body>${value}</body>`;
  return new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
}
__name(elementFromString, "elementFromString");
function escapeHTML(value) {
  return value === null || value === void 0 ? void 0 : value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
__name(escapeHTML, "escapeHTML");
function extractElement(node) {
  const parent = node.parentElement;
  const prepend = parent.cloneNode();
  while (parent.firstChild && parent.firstChild !== node) {
    prepend.appendChild(parent.firstChild);
  }
  if (prepend.childNodes.length > 0) {
    parent.parentElement.insertBefore(prepend, parent);
  }
  parent.parentElement.insertBefore(node, parent);
  if (parent.childNodes.length === 0) {
    parent.remove();
  }
}
__name(extractElement, "extractElement");
function unwrapElement(node) {
  const parent = node.parentNode;
  while (node.firstChild)
    parent.insertBefore(node.firstChild, node);
  parent.removeChild(node);
}
__name(unwrapElement, "unwrapElement");
const HTMLNode = Node$1.create({
  name: "markdownHTMLNode",
  addStorage() {
    return {
      markdown: {
        serialize(state, node, parent) {
          if (this.editor.storage.markdown.options.html) {
            state.write(serializeHTML(node, parent));
          } else {
            console.warn(`Tiptap Markdown: "${node.type.name}" node is only available in html mode`);
            state.write(`[${node.type.name}]`);
          }
          if (node.isBlock) {
            state.closeBlock(node);
          }
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
function serializeHTML(node, parent) {
  const schema = node.type.schema;
  const html = getHTMLFromFragment(Fragment.from(node), schema);
  if (node.isBlock && (parent instanceof Fragment || parent.type.name === schema.topNodeType.name)) {
    return formatBlock(html);
  }
  return html;
}
__name(serializeHTML, "serializeHTML");
function formatBlock(html) {
  const dom = elementFromString(html);
  const element = dom.firstElementChild;
  element.innerHTML = element.innerHTML.trim() ? `
${element.innerHTML}
` : `
`;
  return element.outerHTML;
}
__name(formatBlock, "formatBlock");
const Blockquote = Node$1.create({
  name: "blockquote"
});
const Blockquote$1 = Blockquote.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.nodes.blockquote,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const BulletList = Node$1.create({
  name: "bulletList"
});
const BulletList$1 = BulletList.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize(state, node) {
          return state.renderList(node, "  ", () => (this.editor.storage.markdown.options.bulletListMarker || "-") + " ");
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const CodeBlock = Node$1.create({
  name: "codeBlock"
});
const CodeBlock$1 = CodeBlock.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize(state, node) {
          state.write("```" + (node.attrs.language || "") + "\n");
          state.text(node.textContent, false);
          state.ensureNewLine();
          state.write("```");
          state.closeBlock(node);
        },
        parse: {
          setup(markdownit2) {
            var _this$options$languag;
            markdownit2.set({
              langPrefix: (_this$options$languag = this.options.languageClassPrefix) !== null && _this$options$languag !== void 0 ? _this$options$languag : "language-"
            });
          },
          updateDOM(element) {
            element.innerHTML = element.innerHTML.replace(/\n<\/code><\/pre>/g, "</code></pre>");
          }
        }
      }
    };
  }
});
const HardBreak = Node$1.create({
  name: "hardBreak"
});
const HardBreak$1 = HardBreak.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize(state, node, parent, index2) {
          for (let i = index2 + 1; i < parent.childCount; i++)
            if (parent.child(i).type != node.type) {
              state.write(state.inTable ? HTMLNode.storage.markdown.serialize.call(this, state, node, parent) : "\\\n");
              return;
            }
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Heading = Node$1.create({
  name: "heading"
});
const Heading$1 = Heading.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.nodes.heading,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const HorizontalRule = Node$1.create({
  name: "horizontalRule"
});
const HorizontalRule$1 = HorizontalRule.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.nodes.horizontal_rule,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Image = Node$1.create({
  name: "image"
});
const Image$1 = Image.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.nodes.image,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const ListItem = Node$1.create({
  name: "listItem"
});
const ListItem$1 = ListItem.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.nodes.list_item,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const OrderedList = Node$1.create({
  name: "orderedList"
});
function findIndexOfAdjacentNode(node, parent, index2) {
  let i = 0;
  for (; index2 - i > 0; i++) {
    if (parent.child(index2 - i - 1).type.name !== node.type.name) {
      break;
    }
  }
  return i;
}
__name(findIndexOfAdjacentNode, "findIndexOfAdjacentNode");
const OrderedList$1 = OrderedList.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize(state, node, parent, index2) {
          const start = node.attrs.start || 1;
          const maxW = String(start + node.childCount - 1).length;
          const space = state.repeat(" ", maxW + 2);
          const adjacentIndex = findIndexOfAdjacentNode(node, parent, index2);
          const separator = adjacentIndex % 2 ? ") " : ". ";
          state.renderList(node, space, (i) => {
            const nStr = String(start + i);
            return state.repeat(" ", maxW - nStr.length) + nStr + separator;
          });
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Paragraph = Node$1.create({
  name: "paragraph"
});
const Paragraph$1 = Paragraph.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.nodes.paragraph,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
function childNodes(node) {
  var _node$content$content, _node$content;
  return (_node$content$content = node === null || node === void 0 || (_node$content = node.content) === null || _node$content === void 0 ? void 0 : _node$content.content) !== null && _node$content$content !== void 0 ? _node$content$content : [];
}
__name(childNodes, "childNodes");
const Table = Node$1.create({
  name: "table"
});
const Table$1 = Table.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize(state, node, parent) {
          if (!isMarkdownSerializable(node)) {
            HTMLNode.storage.markdown.serialize.call(this, state, node, parent);
            return;
          }
          state.inTable = true;
          node.forEach((row, p, i) => {
            state.write("| ");
            row.forEach((col, p2, j) => {
              if (j) {
                state.write(" | ");
              }
              const cellContent = col.firstChild;
              if (cellContent.textContent.trim()) {
                state.renderInline(cellContent);
              }
            });
            state.write(" |");
            state.ensureNewLine();
            if (!i) {
              const delimiterRow = Array.from({
                length: row.childCount
              }).map(() => "---").join(" | ");
              state.write(`| ${delimiterRow} |`);
              state.ensureNewLine();
            }
          });
          state.closeBlock(node);
          state.inTable = false;
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
function hasSpan(node) {
  return node.attrs.colspan > 1 || node.attrs.rowspan > 1;
}
__name(hasSpan, "hasSpan");
function isMarkdownSerializable(node) {
  const rows = childNodes(node);
  const firstRow = rows[0];
  const bodyRows = rows.slice(1);
  if (childNodes(firstRow).some((cell) => cell.type.name !== "tableHeader" || hasSpan(cell) || cell.childCount > 1)) {
    return false;
  }
  if (bodyRows.some((row) => childNodes(row).some((cell) => cell.type.name === "tableHeader" || hasSpan(cell) || cell.childCount > 1))) {
    return false;
  }
  return true;
}
__name(isMarkdownSerializable, "isMarkdownSerializable");
const TaskItem = Node$1.create({
  name: "taskItem"
});
const TaskItem$1 = TaskItem.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize(state, node) {
          const check = node.attrs.checked ? "[x]" : "[ ]";
          state.write(`${check} `);
          state.renderContent(node);
        },
        parse: {
          updateDOM(element) {
            [...element.querySelectorAll(".task-list-item")].forEach((item) => {
              const input = item.querySelector("input");
              item.setAttribute("data-type", "taskItem");
              if (input) {
                item.setAttribute("data-checked", input.checked);
                input.remove();
              }
            });
          }
        }
      }
    };
  }
});
const TaskList = Node$1.create({
  name: "taskList"
});
const TaskList$1 = TaskList.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: BulletList$1.storage.markdown.serialize,
        parse: {
          setup(markdownit2) {
            markdownit2.use(taskListPlugin);
          },
          updateDOM(element) {
            [...element.querySelectorAll(".contains-task-list")].forEach((list) => {
              list.setAttribute("data-type", "taskList");
            });
          }
        }
      }
    };
  }
});
const Text = Node$1.create({
  name: "text"
});
const Text$1 = Text.extend({
  /**
   * @return {{markdown: MarkdownNodeSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize(state, node) {
          state.text(escapeHTML(node.text));
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Bold = Mark.create({
  name: "bold"
});
const Bold$1 = Bold.extend({
  /**
   * @return {{markdown: MarkdownMarkSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.marks.strong,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Code = Mark.create({
  name: "code"
});
const Code$1 = Code.extend({
  /**
   * @return {{markdown: MarkdownMarkSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.marks.code,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Italic = Mark.create({
  name: "italic"
});
const Italic$1 = Italic.extend({
  /**
   * @return {{markdown: MarkdownMarkSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.marks.em,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Link = Mark.create({
  name: "link"
});
const Link$1 = Link.extend({
  /**
   * @return {{markdown: MarkdownMarkSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: defaultMarkdownSerializer.marks.link,
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const Strike = Mark.create({
  name: "strike"
});
const Strike$1 = Strike.extend({
  /**
   * @return {{markdown: MarkdownMarkSpec}}
   */
  addStorage() {
    return {
      markdown: {
        serialize: {
          open: "~~",
          close: "~~",
          expelEnclosingWhitespace: true
        },
        parse: {
          // handled by markdown-it
        }
      }
    };
  }
});
const markdownExtensions = [Blockquote$1, BulletList$1, CodeBlock$1, HardBreak$1, Heading$1, HorizontalRule$1, HTMLNode, Image$1, ListItem$1, OrderedList$1, Paragraph$1, Table$1, TaskItem$1, TaskList$1, Text$1, Bold$1, Code$1, HTMLMark, Italic$1, Link$1, Strike$1];
function getMarkdownSpec(extension) {
  var _extension$storage, _markdownExtensions$f;
  const markdownSpec = (_extension$storage = extension.storage) === null || _extension$storage === void 0 ? void 0 : _extension$storage.markdown;
  const defaultMarkdownSpec = (_markdownExtensions$f = markdownExtensions.find((e) => e.name === extension.name)) === null || _markdownExtensions$f === void 0 ? void 0 : _markdownExtensions$f.storage.markdown;
  if (markdownSpec || defaultMarkdownSpec) {
    return {
      ...defaultMarkdownSpec,
      ...markdownSpec
    };
  }
  return null;
}
__name(getMarkdownSpec, "getMarkdownSpec");
class MarkdownSerializer {
  static {
    __name(this, "MarkdownSerializer");
  }
  constructor(editor) {
    __publicField(this, "editor", null);
    this.editor = editor;
  }
  serialize(content) {
    const state = new MarkdownSerializerState(this.nodes, this.marks, {
      hardBreakNodeName: HardBreak$1.name
    });
    state.renderContent(content);
    return state.out;
  }
  get nodes() {
    var _this$editor$extensio;
    return {
      ...Object.fromEntries(Object.keys(this.editor.schema.nodes).map((name) => [name, this.serializeNode(HTMLNode)])),
      ...Object.fromEntries((_this$editor$extensio = this.editor.extensionManager.extensions.filter((extension) => extension.type === "node" && this.serializeNode(extension)).map((extension) => [extension.name, this.serializeNode(extension)])) !== null && _this$editor$extensio !== void 0 ? _this$editor$extensio : [])
    };
  }
  get marks() {
    var _this$editor$extensio2;
    return {
      ...Object.fromEntries(Object.keys(this.editor.schema.marks).map((name) => [name, this.serializeMark(HTMLMark)])),
      ...Object.fromEntries((_this$editor$extensio2 = this.editor.extensionManager.extensions.filter((extension) => extension.type === "mark" && this.serializeMark(extension)).map((extension) => [extension.name, this.serializeMark(extension)])) !== null && _this$editor$extensio2 !== void 0 ? _this$editor$extensio2 : [])
    };
  }
  serializeNode(node) {
    var _getMarkdownSpec;
    return (_getMarkdownSpec = getMarkdownSpec(node)) === null || _getMarkdownSpec === void 0 || (_getMarkdownSpec = _getMarkdownSpec.serialize) === null || _getMarkdownSpec === void 0 ? void 0 : _getMarkdownSpec.bind({
      editor: this.editor,
      options: node.options
    });
  }
  serializeMark(mark) {
    var _getMarkdownSpec2;
    const serialize = (_getMarkdownSpec2 = getMarkdownSpec(mark)) === null || _getMarkdownSpec2 === void 0 ? void 0 : _getMarkdownSpec2.serialize;
    return serialize ? {
      ...serialize,
      open: typeof serialize.open === "function" ? serialize.open.bind({
        editor: this.editor,
        options: mark.options
      }) : serialize.open,
      close: typeof serialize.close === "function" ? serialize.close.bind({
        editor: this.editor,
        options: mark.options
      }) : serialize.close
    } : null;
  }
}
class MarkdownParser {
  static {
    __name(this, "MarkdownParser");
  }
  constructor(editor, _ref) {
    __publicField(this, "editor", null);
    __publicField(this, "md", null);
    let {
      html,
      linkify,
      breaks
    } = _ref;
    this.editor = editor;
    this.md = this.withPatchedRenderer(MarkdownIt({
      html,
      linkify,
      breaks
    }));
  }
  parse(content) {
    let {
      inline
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof content === "string") {
      this.editor.extensionManager.extensions.forEach((extension) => {
        var _getMarkdownSpec;
        return (_getMarkdownSpec = getMarkdownSpec(extension)) === null || _getMarkdownSpec === void 0 || (_getMarkdownSpec = _getMarkdownSpec.parse) === null || _getMarkdownSpec === void 0 || (_getMarkdownSpec = _getMarkdownSpec.setup) === null || _getMarkdownSpec === void 0 ? void 0 : _getMarkdownSpec.call({
          editor: this.editor,
          options: extension.options
        }, this.md);
      });
      const renderedHTML = this.md.render(content);
      const element = elementFromString(renderedHTML);
      this.editor.extensionManager.extensions.forEach((extension) => {
        var _getMarkdownSpec2;
        return (_getMarkdownSpec2 = getMarkdownSpec(extension)) === null || _getMarkdownSpec2 === void 0 || (_getMarkdownSpec2 = _getMarkdownSpec2.parse) === null || _getMarkdownSpec2 === void 0 || (_getMarkdownSpec2 = _getMarkdownSpec2.updateDOM) === null || _getMarkdownSpec2 === void 0 ? void 0 : _getMarkdownSpec2.call({
          editor: this.editor,
          options: extension.options
        }, element);
      });
      this.normalizeDOM(element, {
        inline,
        content
      });
      return element.innerHTML;
    }
    return content;
  }
  normalizeDOM(node, _ref2) {
    let {
      inline,
      content
    } = _ref2;
    this.normalizeBlocks(node);
    node.querySelectorAll("*").forEach((el) => {
      var _el$nextSibling;
      if (((_el$nextSibling = el.nextSibling) === null || _el$nextSibling === void 0 ? void 0 : _el$nextSibling.nodeType) === Node.TEXT_NODE && !el.closest("pre")) {
        el.nextSibling.textContent = el.nextSibling.textContent.replace(/^\n/, "");
      }
    });
    if (inline) {
      this.normalizeInline(node, content);
    }
    return node;
  }
  normalizeBlocks(node) {
    const blocks = Object.values(this.editor.schema.nodes).filter((node2) => node2.isBlock);
    const selector = blocks.map((block) => {
      var _block$spec$parseDOM;
      return (_block$spec$parseDOM = block.spec.parseDOM) === null || _block$spec$parseDOM === void 0 ? void 0 : _block$spec$parseDOM.map((spec) => spec.tag);
    }).flat().filter(Boolean).join(",");
    if (!selector) {
      return;
    }
    [...node.querySelectorAll(selector)].forEach((el) => {
      if (el.parentElement.matches("p")) {
        extractElement(el);
      }
    });
  }
  normalizeInline(node, content) {
    var _node$firstElementChi;
    if ((_node$firstElementChi = node.firstElementChild) !== null && _node$firstElementChi !== void 0 && _node$firstElementChi.matches("p")) {
      var _content$match$, _content$match, _content$match$2, _content$match2;
      const firstParagraph = node.firstElementChild;
      const {
        nextElementSibling
      } = firstParagraph;
      const startSpaces = (_content$match$ = (_content$match = content.match(/^\s+/)) === null || _content$match === void 0 ? void 0 : _content$match[0]) !== null && _content$match$ !== void 0 ? _content$match$ : "";
      const endSpaces = !nextElementSibling ? (_content$match$2 = (_content$match2 = content.match(/\s+$/)) === null || _content$match2 === void 0 ? void 0 : _content$match2[0]) !== null && _content$match$2 !== void 0 ? _content$match$2 : "" : "";
      if (content.match(/^\n\n/)) {
        firstParagraph.innerHTML = `${firstParagraph.innerHTML}${endSpaces}`;
        return;
      }
      unwrapElement(firstParagraph);
      node.innerHTML = `${startSpaces}${node.innerHTML}${endSpaces}`;
    }
  }
  /**
   * @param {markdownit} md
   */
  withPatchedRenderer(md2) {
    const withoutNewLine = /* @__PURE__ */ __name((renderer) => function() {
      const rendered = renderer(...arguments);
      if (rendered === "\n") {
        return rendered;
      }
      if (rendered[rendered.length - 1] === "\n") {
        return rendered.slice(0, -1);
      }
      return rendered;
    }, "withoutNewLine");
    md2.renderer.rules.hardbreak = withoutNewLine(md2.renderer.rules.hardbreak);
    md2.renderer.rules.softbreak = withoutNewLine(md2.renderer.rules.softbreak);
    md2.renderer.rules.fence = withoutNewLine(md2.renderer.rules.fence);
    md2.renderer.rules.code_block = withoutNewLine(md2.renderer.rules.code_block);
    md2.renderer.renderToken = withoutNewLine(md2.renderer.renderToken.bind(md2.renderer));
    return md2;
  }
}
const MarkdownClipboard = Extension.create({
  name: "markdownClipboard",
  addOptions() {
    return {
      transformPastedText: false,
      transformCopiedText: false
    };
  },
  addProseMirrorPlugins() {
    return [new Plugin({
      key: new PluginKey("markdownClipboard"),
      props: {
        clipboardTextParser: /* @__PURE__ */ __name((text, context, plainText) => {
          if (plainText || !this.options.transformPastedText) {
            return null;
          }
          const parsed = this.editor.storage.markdown.parser.parse(text, {
            inline: true
          });
          return DOMParser.fromSchema(this.editor.schema).parseSlice(elementFromString(parsed), {
            preserveWhitespace: true,
            context
          });
        }, "clipboardTextParser"),
        /**
         * @param {import('prosemirror-model').Slice} slice
         */
        clipboardTextSerializer: /* @__PURE__ */ __name((slice) => {
          if (!this.options.transformCopiedText) {
            return null;
          }
          return this.editor.storage.markdown.serializer.serialize(slice.content);
        }, "clipboardTextSerializer")
      }
    })];
  }
});
const Markdown = Extension.create({
  name: "markdown",
  priority: 50,
  addOptions() {
    return {
      html: true,
      tightLists: true,
      tightListClass: "tight",
      bulletListMarker: "-",
      linkify: false,
      breaks: false,
      transformPastedText: false,
      transformCopiedText: false
    };
  },
  addCommands() {
    const commands2 = index.Commands.config.addCommands();
    return {
      setContent: /* @__PURE__ */ __name((content, emitUpdate, parseOptions) => (props) => {
        return commands2.setContent(props.editor.storage.markdown.parser.parse(content), emitUpdate, parseOptions)(props);
      }, "setContent"),
      insertContentAt: /* @__PURE__ */ __name((range, content, options) => (props) => {
        return commands2.insertContentAt(range, props.editor.storage.markdown.parser.parse(content, {
          inline: true
        }), options)(props);
      }, "insertContentAt")
    };
  },
  onBeforeCreate() {
    this.editor.storage.markdown = {
      options: {
        ...this.options
      },
      parser: new MarkdownParser(this.editor, this.options),
      serializer: new MarkdownSerializer(this.editor),
      getMarkdown: /* @__PURE__ */ __name(() => {
        return this.editor.storage.markdown.serializer.serialize(this.editor.state.doc);
      }, "getMarkdown")
    };
    this.editor.options.initialContent = this.editor.options.content;
    this.editor.options.content = this.editor.storage.markdown.parser.parse(this.editor.options.content);
  },
  onCreate() {
    this.editor.options.content = this.editor.options.initialContent;
    delete this.editor.options.initialContent;
  },
  addStorage() {
    return {
      /// storage will be defined in onBeforeCreate() to prevent initial object overriding
    };
  },
  addExtensions() {
    return [MarkdownTightLists.configure({
      tight: this.options.tightLists,
      tightClass: this.options.tightListClass
    }), MarkdownClipboard.configure({
      transformPastedText: this.options.transformPastedText,
      transformCopiedText: this.options.transformCopiedText
    })];
  }
});
export {
  Editor as E,
  Link$2 as L,
  Markdown as M,
  StarterKit as S,
  Table$2 as T,
  TableCell as a,
  TableHeader as b,
  TableRow as c
};
//# sourceMappingURL=vendor-tiptap-Dvg9y4X0.js.map
