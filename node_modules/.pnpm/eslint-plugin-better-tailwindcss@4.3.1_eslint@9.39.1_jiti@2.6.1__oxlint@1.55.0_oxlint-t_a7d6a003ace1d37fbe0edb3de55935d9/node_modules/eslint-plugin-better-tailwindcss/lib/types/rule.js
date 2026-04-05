export var MatcherType;
(function (MatcherType) {
    /** Matches all object keys that are strings. */
    MatcherType["ObjectKey"] = "objectKeys";
    /** Matches all object values that are strings. */
    MatcherType["ObjectValue"] = "objectValues";
    /** Matches all strings  that are not matched by another matcher. */
    MatcherType["String"] = "strings";
})(MatcherType || (MatcherType = {}));
export var SelectorKind;
(function (SelectorKind) {
    SelectorKind["Attribute"] = "attribute";
    SelectorKind["Callee"] = "callee";
    SelectorKind["Tag"] = "tag";
    SelectorKind["Variable"] = "variable";
})(SelectorKind || (SelectorKind = {}));
//# sourceMappingURL=rule.js.map