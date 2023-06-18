/**
 * Transform a single item to an array (with one element).
 * Or return the array.
 *
 * @param items the item or items to transform to an array.
 * @return an array of items or an empty array.
 */
export function transformToArray<T>(items?: T | T[]): T[] {
    if(items === undefined) {
        return [];
    }

    if(Array.isArray(items)) {
        return items;
    }

    return [items];
}
