export declare const noUnnecessaryWhitespace: {
    category: "stylistic";
    messages: {
        readonly unnecessary: "Unnecessary whitespace.";
    } | undefined;
    name: "no-unnecessary-whitespace";
    readonly options: {
        rootFontSize?: number | undefined;
        detectComponentClasses: boolean;
        tsconfig?: string | undefined;
        tailwindConfig?: string | undefined;
        messageStyle: "visual" | "compact" | "raw";
        entryPoint?: string | undefined;
        tags?: (string | [string, ({
            match: import("../types/rule.js").MatcherType.String;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectKey;
            pathPattern?: string | undefined;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectValue;
            pathPattern?: string | undefined;
        })[]])[] | undefined;
        variables?: (string | [string, ({
            match: import("../types/rule.js").MatcherType.String;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectKey;
            pathPattern?: string | undefined;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectValue;
            pathPattern?: string | undefined;
        })[]])[] | undefined;
        attributes?: (string | [string, ({
            match: import("../types/rule.js").MatcherType.String;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectKey;
            pathPattern?: string | undefined;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectValue;
            pathPattern?: string | undefined;
        })[]])[] | undefined;
        callees?: (string | [string, ({
            match: import("../types/rule.js").MatcherType.String;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectKey;
            pathPattern?: string | undefined;
        } | {
            match: import("../types/rule.js").MatcherType.ObjectValue;
            pathPattern?: string | undefined;
        })[]])[] | undefined;
        selectors: ({
            callTarget?: number | "all" | "first" | "last" | undefined;
            kind: import("../types/rule.js").SelectorKind.Callee;
            match?: ({
                type: import("../types/rule.js").MatcherType.String;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectKey;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectValue;
            })[] | undefined;
            name: string;
            path?: string | undefined;
        } | {
            callTarget?: number | "all" | "first" | "last" | undefined;
            kind: import("../types/rule.js").SelectorKind.Callee;
            match?: ({
                type: import("../types/rule.js").MatcherType.String;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectKey;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectValue;
            })[] | undefined;
            name?: string | undefined;
            path: string;
        } | {
            kind: import("../types/rule.js").SelectorKind.Attribute;
            match?: ({
                type: import("../types/rule.js").MatcherType.String;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectKey;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectValue;
            })[] | undefined;
            name: string;
        } | {
            kind: import("../types/rule.js").SelectorKind.Tag;
            match?: ({
                type: import("../types/rule.js").MatcherType.String;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectKey;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectValue;
            })[] | undefined;
            name: string;
        } | {
            kind: import("../types/rule.js").SelectorKind.Variable;
            match?: ({
                type: import("../types/rule.js").MatcherType.String;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectKey;
            } | {
                path?: string | undefined;
                type: import("../types/rule.js").MatcherType.ObjectValue;
            })[] | undefined;
            name: string;
        })[];
    } & {
        allowMultiline: boolean;
    };
    recommended: true;
    rule: {
        create: (ctx: import("node_modules/@eslint/core/dist/cjs/types.cjs").RuleContext<{
            LangOptions: import("eslint").Linter.LanguageOptions;
            Code: import("eslint").SourceCode;
            RuleOptions: [Required<{
                rootFontSize?: number | undefined;
                detectComponentClasses: boolean;
                tsconfig?: string | undefined;
                tailwindConfig?: string | undefined;
                messageStyle: "visual" | "compact" | "raw";
                entryPoint?: string | undefined;
                tags?: (string | [string, ({
                    match: import("../types/rule.js").MatcherType.String;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectKey;
                    pathPattern?: string | undefined;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectValue;
                    pathPattern?: string | undefined;
                })[]])[] | undefined;
                variables?: (string | [string, ({
                    match: import("../types/rule.js").MatcherType.String;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectKey;
                    pathPattern?: string | undefined;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectValue;
                    pathPattern?: string | undefined;
                })[]])[] | undefined;
                attributes?: (string | [string, ({
                    match: import("../types/rule.js").MatcherType.String;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectKey;
                    pathPattern?: string | undefined;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectValue;
                    pathPattern?: string | undefined;
                })[]])[] | undefined;
                callees?: (string | [string, ({
                    match: import("../types/rule.js").MatcherType.String;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectKey;
                    pathPattern?: string | undefined;
                } | {
                    match: import("../types/rule.js").MatcherType.ObjectValue;
                    pathPattern?: string | undefined;
                })[]])[] | undefined;
                selectors: ({
                    callTarget?: number | "all" | "first" | "last" | undefined;
                    kind: import("../types/rule.js").SelectorKind.Callee;
                    match?: ({
                        type: import("../types/rule.js").MatcherType.String;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectKey;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectValue;
                    })[] | undefined;
                    name: string;
                    path?: string | undefined;
                } | {
                    callTarget?: number | "all" | "first" | "last" | undefined;
                    kind: import("../types/rule.js").SelectorKind.Callee;
                    match?: ({
                        type: import("../types/rule.js").MatcherType.String;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectKey;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectValue;
                    })[] | undefined;
                    name?: string | undefined;
                    path: string;
                } | {
                    kind: import("../types/rule.js").SelectorKind.Attribute;
                    match?: ({
                        type: import("../types/rule.js").MatcherType.String;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectKey;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectValue;
                    })[] | undefined;
                    name: string;
                } | {
                    kind: import("../types/rule.js").SelectorKind.Tag;
                    match?: ({
                        type: import("../types/rule.js").MatcherType.String;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectKey;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectValue;
                    })[] | undefined;
                    name: string;
                } | {
                    kind: import("../types/rule.js").SelectorKind.Variable;
                    match?: ({
                        type: import("../types/rule.js").MatcherType.String;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectKey;
                    } | {
                        path?: string | undefined;
                        type: import("../types/rule.js").MatcherType.ObjectValue;
                    })[] | undefined;
                    name: string;
                })[];
            } & {
                allowMultiline: boolean;
            }>];
            Node: import("eslint").JSSyntaxElement;
            MessageIds: "unnecessary";
        }>) => import("eslint").Rule.RuleListener;
        meta: {
            messages?: {
                readonly unnecessary: "Unnecessary whitespace.";
            };
            docs: {
                description: string;
                recommended: boolean;
                url: string;
            };
            fixable: "code" | undefined;
            schema: {
                additionalProperties: false;
                properties: Record<string, boolean | import("@valibot/to-json-schema").JsonSchema> | undefined;
                type: "object";
            }[];
            type: "problem" | "layout";
        };
    };
};
//# sourceMappingURL=no-unnecessary-whitespace.d.ts.map