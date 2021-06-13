type Predicate<T> = (item: T) => boolean
type Selector<T, O = unknown> = (item: T) => O
type Grouping<V> = Record<string, Array<V>>

/*
 * ARRAYS
 */

/*
 * Predicates
 */

/** Checks if the given collection has no elements */
declare function isEmpty(collection: Array<unknown>): boolean

/** Checks if the given collection has any elements */
declare function isNotEmpty(collection: Array<unknown>): boolean

/** Checks if none of the elements in the given collection match the given predicate */
declare function none<T>(collection: Array<T>, predicate: Predicate<T>): boolean

/** Checks if the given collection includes all elements in the other given collection */
declare function includesAll<T, O extends T>(collection: Array<T>, needles: Array<O>): boolean

/** Checks if the given collection includes any of the elements in the other given collection */
declare function includesAny<T, O extends T>(collection: Array<T>, needles: Array<O>): boolean

/** Checks if the given collection includes none of the elements in the other given collection */
declare function includesNone<T, O extends T>(collection: Array<T>, needles: Array<O>): boolean

/*
 * Transformations to Array
 */

/** Transforms all elements in the given collection using the given transformer and builds a new array with the results, removing nullish values */
declare function mapNotNullish<T, O>(collection: Array<T>, transformer: Selector<T, O>): Array<NonNullable<O>>

/** Returns the first n elements of a given collection. Returns the collection if it contains less than n elements. */
declare function takeFirst<T>(collection: Array<T>, n: number): Array<T>

/** Returns the last n elements of a given collection. Returns the collection if it contains less than n elements. */
declare function takeLast<T>(collection: Array<T>, n: number): Array<T>

/** Retursn all elements in the given collection except the first n elements. */
declare function dropFirst<T>(collection: Array<T>, n: number): Array<T>

/** Retursn all elements in the given collection except the last n elements. */
declare function dropLast<T>(collection: Array<T>, n: number): Array<T>

/** Returns all elements in the given collection until the first element that does not match the given predicate (excluded) */
declare function takeFirstWhile<T>(collection: Array<T>, predicate: Predicate<T>): Array<T>

/** Returns all elements in the given collection from the last element that does not match the given predicate (excluded) until the end of the collection */
declare function takeLastWhile<T>(collection: Array<T>, predicate: Predicate<T>): Array<T>

/** Returns all elements in the given collection starting from the first element that does not match the given predicate */
declare function dropFirstWhile<T>(collection: Array<T>, predicate: Predicate<T>): Array<T>

/** Returns all elements in the given collection until the last element that does not match the given predicate */
declare function dropLastWhile<T>(collection: Array<T>, predicate: Predicate<T>): Array<T>

/** Returns all elements in the given collection that do not match the given predicate */
declare function filterNot<T>(collection: Array<T>, predicate: Predicate<T>): Array<T>

/** Returns all elements in the given collection that are not nullish */
declare function filterNotNullish<T>(collection: Array<T>): Array<NonNullable<T>>

/** Returns all distinct elements in the given collection, preserving order by first occurence */
declare function distinct<T>(collection: Array<T>): Array<T>

/** Returns all elements in the given collection that produce a distinct value using the given selector, preserving order by first occurence */
declare function distinctBy<T>(collection: Array<T>, selector: Selector<T>): Array<T>

/** Returns all elements in the given collection, sorted by their result using the given selector */
declare function sortBy<T>(collection: Array<T>, selector: Selector<T, number | string>): Array<T>

/** Returns all distinct elements that appear in both given collections */
declare function intersect<T>(collection: Array<T>, withCollection: Array<T>): Array<T>

/** Returns all distinct elements that appear in either of the given collections */
declare function union<T>(collection: Array<T>, withCollection: Array<T>): Array<T>

/**
 * Calls the given reducer on each element of the given collection, passing it's result as the accumulator to the next respective call,
 * starting with the given initialValue. Returns all intermediate accumulator results.
 */
declare function runningReduce<T, A>(collection: Array<T>, reducer: (accumulator: A, current: T) => A, initialValue: A): Array<A>

/** Returns all elements in the given collection except the given value to remove */
declare function without<T>(collection: Array<T>, toRemove: T): Array<T>

/** Returns all elements in the given collection except the given values to remove */
declare function withoutAll<T>(collection: Array<T>, toRemove: Array<T>): Array<T>

/*
 * Transformations to value
 */

/**  */
declare function lastIndex(collection: Array<unknown>): number

/**  */
declare function first<T>(collection: Array<T>): T | undefined 

/**  */
declare function last<T>(collection: Array<T>): T | undefined 

/**  */
declare function findLast<T>(collection: Array<T>, predicate: Predicate<T>): T | undefined 

/**  */
declare function single<T>(collection: Array<T>, predicate: Predicate<T>): T | undefined 

/**  */
declare function firstNotNullishOf<T, O>(collection: Array<T>, selector: Selector<T, O>): NonNullable<O> | undefined 

/**  */
declare function sumOf<T>(collection: Array<T>, selector: Selector<T, number>): number

/**  */
declare function maxBy<T>(collection: Array<T>, selector: Selector<T, number | string>): T | undefined

/**  */
declare function minBy<T>(collection: Array<T>, selector: Selector<T, number | string>): T | undefined

/**  */
declare function maxWith<T>(collection: Array<T>, comparator: (a: T, b: T) => number): T | undefined

/**  */
declare function minWith<T>(collection: Array<T>, comparator: (a: T, b: T) => number): T | undefined

/**  */
declare function maxOf<T, O extends number | string>(collection: Array<T>, selector: Selector<T, O>): O | undefined

/**  */
declare function minOf<T, O extends number | string>(collection: Array<T>, selector: Selector<T, O>): O | undefined

/*
 * Number array transformations
 */

/**  */
declare function average(collection: Array<number>): number | undefined

/*
 * Transformations to other formats
 */

/**  */
declare function zip<T, U>(collection: Array<T>, withCollection: Array<U>): Array<[ T, U ]>

/**  */
declare function unzip<T, U>(pairs: Array<[ T, U ]>): [ Array<T>, Array<U> ]

/**  */
declare function associateBy<T>(collection: Array<T>, selector: Selector<T, string>): Record<string, T>

/**  */
declare function groupBy<T>(collection: Array<T>, selector: Selector<T, string>): Grouping<T>

/**  */
declare function partition<T>(collection: Array<T>, predicate: Predicate<T>): [ Array<T>, Array<T> ]

/**  */
declare function chunked<T>(collection: Array<T>, size: number): Array<Array<T>>

/**  */
declare function windowed<T>(collection: Array<T>, size: number, config?: { step?: number, partial?: boolean }): Array<Array<T>>

// Records

// Predicates

/**  */
declare function includesValue<T>(collection: Record<string, T>, value: T): boolean

/**  */
declare function includesKey<T>(collection: Record<string, T>, value: string): boolean

// Transformations to Records

/**  */
declare function filterEntries<T>(collection: Record<string, T>, predicate: Predicate<[string, T]>): Record<string, T>

/**  */
declare function filterKeys<T>(collection: Record<string, T>, predicate: Predicate<string>): Record<string, T>

/**  */
declare function filterValues<T>(collection: Record<string, T>, predicate: Predicate<T>): Record<string, T>

/**  */
declare function filterValuesNotNullish<T>(collection: Record<string, T>): Record<string, NonNullable<T>>

/**  */
declare function mapEntries<T, O>(collection: Record<string, T>, transformer: Selector<[string, T], [string, O]>): Record<string, O>

/**  */
declare function mapKeys<T>(collection: Record<string, T>, transformer: Selector<string, string>): Record<string, T>

/**  */
declare function mapValues<T, O>(collection: Record<string, T>, transformer: Selector<T, O>): Record<string, O>

// Groups

/**  */
declare function countGroups(collection: Grouping<unknown>): Record<string, number>

/**  */
declare function reduceGroups<T, A>(collection: Grouping<T>, reducer: (accumulator: A, current: T) => A, initialValue: A): Record<string, A>

/**  */
declare function aggregateGroups<T, A>(collection: Grouping<T>, aggregator: (accumulator: A, current: T, key: string, first: boolean) => A, initalValue: A): Record<string, A>

/**
 * Questions
 *
 * 1. null or undefined?
 * 2. Stay with Arrays for intersect and union?
 * 3. Define functions for Iterable or for Array?
 * 4. Records with string
 */

