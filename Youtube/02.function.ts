// Function takes arguments and declares the last variable as default variable.
// Function returns the string which I mension in function return type.
function login(
    userId: string,
    password: string,
    isPaid: boolean = false
): string {
    return 'Done'
}

let update: string = login('Prince', '123', true)
let update2: string = login('Prince', '123') // I can use as well because the last argument is default argument.

// Arrow function
let update3 = (
    userId: string,
    password: string,
    isPaid: boolean = false
): string => {
    return `${userId} ${password} ${isPaid}`
}

console.log(update3('P', '122345'))

// map function
let value = [1, 2, 3]
value.map((val: number): string => {
    return `The value is ${val}`
})

// 'void' return type
function hello(msg: string): void {
    console.log(`The message is ${msg}`)
}

// 'never' return type use for handling the error
function handleError(err: string): never {
    throw new Error(err)
}

export {}
