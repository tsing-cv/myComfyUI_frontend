import type { LinkedKeyNode, LinkedModifierNode, LinkedNode, ListNode, LiteralNode, MessageNode, NamedNode, PluralNode, ResourceNode, TextNode } from '@intlify/message-compiler';
import type { ModuloNamedNode } from './parser-v9';
export type MessageElementNode = TextNode | NamedNode | ListNode | LiteralNode | LinkedNode | ModuloNamedNode;
type MessageASTNode = ResourceNode | PluralNode | MessageNode | MessageElementNode | LinkedKeyNode | LinkedModifierNode;
export declare function traverseNode(node: MessageASTNode, visit: (node: MessageASTNode) => void): void;
export {};
