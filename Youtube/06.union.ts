let score: number | string = 33

// update
score = 44
score = '55' // Also allowed

// Another example ---------------------------
type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let user: User | Admin = { name: 'RSP', id: 334 }
user = { username: 'RS', id: 334 }

// Using inside the function -----------------------
function getDBId(id: number | string): void {
    // making some API calls
    console.log(`DB id is: ${id}`)
}

getDBId(3) // Output: DB id is: 3
getDBId('4') // Output: DB id is: 4

// ---------------------------- Array in union -----------------------------
const data: number[] = [1, 2, 3]
const data1: string[] = ['1', '2', '3']

const data3: number[] | string[] = [1, 2] // Only number array or Only string array but mixed is not allowed

const data4: (string | number | boolean)[] = [1, '2', false] // mixed is allowed in that syntax

// --------------------- Extra ---------------------
let pi: 3.14 = 3.14
// pi = 3.33 // Can't change because I give it only one change to select.

// Same as:
let seatAllotment: 'Aisle' | 'Middle' | 'Window' = 'Aisle'
console.log(seatAllotment) // Outptu: Aisle

// seatAllotment = 'Crew' // Can't do it because I don't have any option for 'Crew'

export {}
