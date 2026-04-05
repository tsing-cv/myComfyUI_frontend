import { MatcherType, SelectorKind } from "../types/rule.js";
export declare const DEFAULT_CALLEE_SELECTORS: ({
    kind: SelectorKind.Callee;
    match: {
        type: MatcherType.String;
    }[];
    name: string;
} | {
    kind: SelectorKind.Callee;
    match: {
        type: MatcherType.ObjectKey;
    }[];
    name: string;
} | {
    kind: SelectorKind.Callee;
    match: {
        path: string;
        type: MatcherType.ObjectValue;
    }[];
    name: string;
})[];
export declare const DEFAULT_ATTRIBUTE_SELECTORS: ({
    kind: SelectorKind.Attribute;
    name: string;
    match?: never;
} | {
    kind: SelectorKind.Attribute;
    match: ({
        type: MatcherType.String;
    } | {
        type: MatcherType.ObjectKey;
    })[];
    name: string;
})[];
export declare const DEFAULT_VARIABLE_NAMES: [string, {
    match: MatcherType.String;
}[]][];
export declare const DEFAULT_VARIABLE_SELECTORS: {
    kind: SelectorKind.Variable;
    match: {
        type: MatcherType.String;
    }[];
    name: string;
}[];
export declare const DEFAULT_TAG_NAMES: never[];
export declare const DEFAULT_SELECTORS: ({
    kind: SelectorKind.Callee;
    match: {
        type: MatcherType.String;
    }[];
    name: string;
} | {
    kind: SelectorKind.Callee;
    match: {
        type: MatcherType.ObjectKey;
    }[];
    name: string;
} | {
    kind: SelectorKind.Callee;
    match: {
        path: string;
        type: MatcherType.ObjectValue;
    }[];
    name: string;
} | {
    kind: SelectorKind.Attribute;
    name: string;
    match?: never;
} | {
    kind: SelectorKind.Attribute;
    match: ({
        type: MatcherType.String;
    } | {
        type: MatcherType.ObjectKey;
    })[];
    name: string;
} | {
    kind: SelectorKind.Variable;
    match: {
        type: MatcherType.String;
    }[];
    name: string;
})[];
//# sourceMappingURL=default-options.d.ts.map