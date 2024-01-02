"use client";

/**
 * Sort an array by a given key and order.
 * @param {Array<any>} data - The data to be sorted.
 * @param {string} key - The key to sort by.
 * @param {string} order - The order to sort by.
 * @return {Array<any>} The sorted data.
 */
export function sortBy(
    data: Array<any>,
    order: "ASC" | "DESC",
    key: string = "completion_sequence"
) {
    return data.sort((a: any, b: any) => {
        if (order === "DESC") [a, b] = [b, a];
        return a[key].localeCompare(b[key]);
    });
}
