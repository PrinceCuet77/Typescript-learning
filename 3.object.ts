const User = {
    name: 'hitesh',
    email: 'hitesh@lco.dev',
    isActive: true,
}

// Passing an object
function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: 'hitesh', isPaid: false })

// Returns an object
function createCourse(): { name: string; price: number } {
    return { name: 'reactjs', price: 10 }
}

export {}
