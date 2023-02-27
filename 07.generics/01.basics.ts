// - String array
const names: Array<string> = [] // string[]
const names2: string[] = [] // string[]

// - 'Promise' type which returns 'string'
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!')
    }, 2000)
})

// This 'promise' returns a 'string'. So that, I can use any 'string' function on it. If 'promise' return a 'number' then I can do whatever using that 'number'.
promise.then((data) => {
    data.split(' ') // 'resolve' returns 'string', so 'data' is a 'string'.
})
