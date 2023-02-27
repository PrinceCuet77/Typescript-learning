type User = {
    name: string
    email: string
    isActive: boolean
}

function createUser(user: User): User {
    return user
}

const val: User = createUser({
    name: 'RSP',
    email: 'RSP@gmail.com',
    isActive: false,
})
console.log(val) // Output: { name: 'RSP', email: 'RSP@gmail.com', isActive: false }

// ------------------------- readonly & optional (?) -------------------------------
type User2 = {
    readonly _id: string // Can't change because it's readonly.
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number // Optional because of '?' syntax
}

let myUser: User2 = {
    _id: '12345',
    name: 'RSP',
    email: 'RSP@gmail.com',
    isActive: false,
}

myUser.name = 'ABC'
// myUser._id = "12" // Can't change this

// ---------------------------- mixup types -------------------------------------
type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber &
    cardDate & {
        cvv: number
    }

const va: cardDetails = {
    cardNumber: 12,
    cardDate: '123',
    cvv: 12,
}

console.log(va) // Output: { cardNumber: 12, cardDate: '123', cvv: 12 }

export {}
