// Difference: 'interface' can extend using 'extends' keyword and 'type' can extend using '&' way.
// 'interface' can add a new field like in line no 15 but 'type' is not add a new field.

// In 'interface' I can give the signature of the function but in object, I must declare function fully.

interface User {
    readonly dbId: Number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string // Arrow function style
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

// Re-opening of the interface (modified the interface)
interface User {
    githubToken: string
}

// I can ignore 'googleId' because it's optional. If I can use then it's normal string assign.
// Variable of 'User' interface
const user: User = {
    dbId: 1,
    email: 'R@gmail.com',
    userId: 11,
    githubToken: 'GitHub',
    startTrail(): string {
        return 'start trail'
    },
    getCoupon(couponName = 'Nothing', value = 1) {
        return 10
    },
}

// 'extends' keyword
interface Admin extends User {
    // role: string // I can use like that
    role: 'admin' | 'ta' | 'learner'
}

// Also do that for extending multiple interface.
interface Person extends User, Admin {}

// Variable of 'Admin' interface
const admin: Admin = {
    dbId: 1,
    role: 'admin', // Extra for 'Admin' interface
    email: 'R@gmail.com',
    userId: 11,
    githubToken: 'GitHub',
    startTrail(): string {
        return 'start trail'
    },
    getCoupon(couponName = 'Nothing', value = 1) {
        return 10
    },
}

console.log(user.startTrail())

export {}
