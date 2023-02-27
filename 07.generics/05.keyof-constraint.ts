function extractAndConvert(obj: object, key: string) {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({ name: 'Prince' }, 'name')) // Output: Value: Prince

// Using 'keyof' keyword or constraint. It is used because of specify the 'key' of the 'object'.
// 'U' is a key of 'T' type. (Because 'T' extends 'object')
function extractAndConvert2<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert2({ name: 'Max' }, 'name')) // Output: Value: Max
