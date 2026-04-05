import "./rolldown-runtime-DBfy44LZ.js";
//#region src/lib/litegraph/src/utils/mathParser.ts
function tokenize(input) {
	const tokens = [];
	const re = /(\d+(?:\.\d*)?|\.\d+)|([+\-*/%()])/g;
	let lastIndex = 0;
	for (const match of input.matchAll(re)) {
		if (input.slice(lastIndex, match.index).trim()) return void 0;
		lastIndex = match.index + match[0].length;
		if (match[1]) tokens.push({
			type: "number",
			value: parseFloat(match[1])
		});
		else tokens.push({
			type: "op",
			value: match[2]
		});
	}
	if (input.slice(lastIndex).trim()) return void 0;
	return tokens;
}
/**
* Evaluates a basic arithmetic expression string containing
* `+`, `-`, `*`, `/`, `%`, parentheses, and decimal numbers.
* Returns `undefined` for empty or malformed input.
*/
function evaluateMathExpression(input) {
	const tokenized = tokenize(input);
	if (!tokenized || tokenized.length === 0) return void 0;
	const tokens = tokenized;
	let pos = 0;
	let depth = 0;
	const MAX_DEPTH = 200;
	function peek() {
		return tokens[pos];
	}
	function consume() {
		return tokens[pos++];
	}
	function primary() {
		const t = peek();
		if (!t) return void 0;
		if (t.type === "number") {
			consume();
			return t.value;
		}
		if (t.type === "op" && t.value === "(") {
			if (++depth > MAX_DEPTH) return void 0;
			consume();
			const result = expr();
			if (result === void 0) return void 0;
			const closing = peek();
			if (!closing || closing.type !== "op" || closing.value !== ")") return;
			consume();
			depth--;
			return result;
		}
	}
	function unary() {
		const t = peek();
		if (t?.type === "op" && (t.value === "+" || t.value === "-")) {
			consume();
			const operand = unary();
			if (operand === void 0) return void 0;
			return t.value === "-" ? -operand : operand;
		}
		return primary();
	}
	function factor() {
		let left = unary();
		if (left === void 0) return void 0;
		while (peek()?.type === "op" && (peek().value === "*" || peek().value === "/" || peek().value === "%")) {
			const op = consume().value;
			const right = unary();
			if (right === void 0) return void 0;
			left = op === "*" ? left * right : op === "/" ? left / right : left % right;
		}
		return left;
	}
	function expr() {
		let left = factor();
		if (left === void 0) return void 0;
		while (peek()?.type === "op" && (peek().value === "+" || peek().value === "-")) {
			const op = consume().value;
			const right = factor();
			if (right === void 0) return void 0;
			left = op === "+" ? left + right : left - right;
		}
		return left;
	}
	const result = expr();
	if (result === void 0 || pos !== tokens.length) return void 0;
	return result === 0 ? 0 : result;
}
//#endregion
//#region src/lib/litegraph/src/utils/widget.ts
/**
* The step value for numeric widgets.
* Use {@link IWidgetOptions.step2} if available, otherwise fallback to
* {@link IWidgetOptions.step} which is scaled up by 10x in the legacy frontend logic.
*/
function getWidgetStep(options) {
	return options.step2 || (options.step || 10) * .1;
}
function evaluateInput(input) {
	const result = evaluateMathExpression(input);
	if (result !== void 0) {
		if (!isFinite(result)) return void 0;
		return result;
	}
	const newValue = Number(input);
	if (!isFinite(newValue)) return void 0;
	return newValue;
}
function resolveNodeRootGraphId(node, fallbackGraphId) {
	return node.graph?.rootGraph.id ?? fallbackGraphId;
}
//#endregion
export { getWidgetStep as n, resolveNodeRootGraphId as r, evaluateInput as t };

//# sourceMappingURL=widget-W78njY6p.js.map