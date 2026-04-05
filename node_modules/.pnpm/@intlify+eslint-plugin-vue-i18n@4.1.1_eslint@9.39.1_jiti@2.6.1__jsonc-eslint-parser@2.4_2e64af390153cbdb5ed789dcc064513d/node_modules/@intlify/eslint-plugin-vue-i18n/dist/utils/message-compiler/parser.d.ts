import type { CompileError, ResourceNode } from '@intlify/message-compiler';
export declare function parse(code: string): {
    ast: ResourceNode;
    errors: CompileError[];
};
