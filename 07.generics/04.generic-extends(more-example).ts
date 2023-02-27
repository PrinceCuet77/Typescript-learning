// I can use new 'interface' or custom type which is an  object named 'Lengthy' and has a property named 'length'.
interface Lengthy {
    length: number
}

// Specify 'T' (Must be 'Lengthy'). Whatever it's like: for an 'array' or 'string', it has a 'length' property.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.'

    if (element.length === 1) {
        descriptionText = 'Got 1 elements.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }

    return [element, descriptionText] // return tuple
}

console.log(countAndDescribe('Hi there!')) // Output: [ 'Hi there!', 'Got 9 elements.' ]
console.log(countAndDescribe(['Sports', 'Cooking'])) // Output: [ [ 'Sports', 'Cooking' ], 'Got 2 elements.' ]
console.log(countAndDescribe([])) // Output: [ [], 'Got no value.' ]

// But I can't use 'number' because 'number' doesn't have length.
// console.log(countAndDescribe(10)) // Will show error. 