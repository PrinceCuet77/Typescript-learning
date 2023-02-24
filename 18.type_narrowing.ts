// Extra check of the type inside the function is called type narrowing.
function detectType(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log('Please provide ID')
        return
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s)
            }
        } else if (typeof strs === 'string') {
            console.log(strs)
        }
    }
}

// ----------------------------------------------------------
// The in operator narrowing.
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string
    email: string 
    isAdmin: boolean
}

function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
    return account.email
}