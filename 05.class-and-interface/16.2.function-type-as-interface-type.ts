// 'interface' is also used to define the structure of the function.
// I can use 'interface' as an alternative of an custom 'type'.
// I can create a function type in an 'interface'.

interface addFn {
    (a: number, b: number): number
}

// Similar as custom type -
// type addFn = (a: number, b: number) => number

let add: addFn = (n1: number, n2: number): number => {
    return n1 + n2
}

console.log(add(2, 4)) // Output: 6
