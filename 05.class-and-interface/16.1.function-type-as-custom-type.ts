type addFn = (a: number, b: number) => number

let add: addFn = (n1: number, n2: number): number => {
    return n1 + n2
}

console.log(add(2, 4)) // Output: 6