import { MatcherType, SelectorKind } from "../types/rule.js";
export function migrateLegacySelectorsToFlatSelectors(legacy) {
    const selectors = [];
    if (legacy.attributes) {
        for (const attributeSelector of legacy.attributes) {
            selectors.push(migrateLegacySelector(attributeSelector, SelectorKind.Attribute));
        }
    }
    if (legacy.callees) {
        for (const calleeSelector of legacy.callees) {
            selectors.push(migrateLegacySelector(calleeSelector, SelectorKind.Callee));
        }
    }
    if (legacy.tags) {
        for (const tagSelector of legacy.tags) {
            selectors.push(migrateLegacySelector(tagSelector, SelectorKind.Tag));
        }
    }
    if (legacy.variables) {
        for (const variableSelector of legacy.variables) {
            selectors.push(migrateLegacySelector(variableSelector, SelectorKind.Variable));
        }
    }
    return selectors;
}
export function migrateFlatSelectorsToLegacySelectors(selectors) {
    return selectors.reduce((legacy, selector) => {
        const migratedSelector = migrateFlatSelector(selector);
        if (migratedSelector === undefined) {
            return legacy;
        }
        switch (selector.kind) {
            case SelectorKind.Attribute:
                (legacy.attributes ?? (legacy.attributes = [])).push(migratedSelector);
                break;
            case SelectorKind.Callee:
                (legacy.callees ?? (legacy.callees = [])).push(migratedSelector);
                break;
            case SelectorKind.Tag:
                (legacy.tags ?? (legacy.tags = [])).push(migratedSelector);
                break;
            case SelectorKind.Variable:
                (legacy.variables ?? (legacy.variables = [])).push(migratedSelector);
                break;
        }
        return legacy;
    }, {});
}
export function hasLegacySelectorConfig(options) {
    return (options.attributes !== undefined ||
        options.callees !== undefined ||
        options.tags !== undefined ||
        options.variables !== undefined);
}
function toSelectorMatcher(matcher) {
    if (matcher.match === MatcherType.String) {
        return {
            type: matcher.match
        };
    }
    return {
        ...matcher.pathPattern !== undefined && {
            path: matcher.pathPattern
        },
        type: matcher.match
    };
}
function toLegacyMatcher(matcher) {
    if (matcher.type === MatcherType.String) {
        return {
            match: matcher.type
        };
    }
    return {
        ...matcher.path !== undefined && {
            pathPattern: matcher.path
        },
        match: matcher.type
    };
}
function migrateLegacySelector(selector, kind) {
    if (typeof selector === "string") {
        return {
            kind,
            name: selector
        };
    }
    return {
        kind,
        match: selector[1].map(toSelectorMatcher),
        name: selector[0]
    };
}
function migrateFlatSelector(selector) {
    if (selector.kind === SelectorKind.Callee) {
        if (selector.name === undefined) {
            return;
        }
        if (selector.match === undefined) {
            return selector.name;
        }
        return [
            selector.name,
            selector.match.map(toLegacyMatcher)
        ];
    }
    if (selector.match === undefined) {
        return selector.name;
    }
    return [
        selector.name,
        selector.match.map(toLegacyMatcher)
    ];
}
//# sourceMappingURL=migrate.js.map