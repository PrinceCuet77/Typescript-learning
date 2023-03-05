const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers) // Output: 20.7

// Fix the rest operators number
const add2 = (...numbers: [number, number, number]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

// const addedNumbers2 = add2(5, 10, 2, 3.7) // Produce an error.
const addedNumbers2 = add2(5, 10, 2)
console.log(addedNumbers2) // Output: 17
