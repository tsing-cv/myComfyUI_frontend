import type { CompileError, NamedNode, ResourceNode } from '@intlify/message-compiler';
export type ModuloNamedNode = NamedNode & {
    modulo?: boolean;
};
export declare function parse(code: string): {
    ast: ResourceNode;
    errors: CompileError[];
};
