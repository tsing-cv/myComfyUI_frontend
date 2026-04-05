type NoInfer<T> = [T][T extends any ? 0 : never];
/**
 * Adapted from type-fest's PartialDeep
 */
type PartialDeep<T> = T extends (...args: any[]) => any ? PartialDeepObject<T> | undefined : T extends object ? T extends ReadonlyArray<infer ItemType> ? ItemType[] extends T ? readonly ItemType[] extends T ? ReadonlyArray<PartialDeep<ItemType | undefined>> : Array<PartialDeep<ItemType | undefined>> : PartialDeepObject<T> : PartialDeepObject<T> : T;
type PartialDeepObject<ObjectType extends object> = {
    [KeyType in keyof ObjectType]?: PartialDeep<ObjectType[KeyType]>;
};

/**
 * Lets you pass a deep partial to a slot expecting a type.
 *
 * @returns whatever you pass in
 */
declare const fromPartial: <T>(mock: PartialDeep<NoInfer<T>>) => T;
/**
 * Lets you pass anything to a mock function, while also retaining
 * autocomplete for when you _do_ want to pass the exact thing.
 *
 * @returns whatever you pass in
 */
declare const fromAny: <T, U>(mock: U | NoInfer<T>) => T;
/**
 * Forces you to pass the exact type of the thing the slot requires
 *
 * @returns whatever you pass in
 */
declare const fromExact: <T>(mock: T) => T;

export { NoInfer, PartialDeep, PartialDeepObject, fromAny, fromExact, fromPartial };
