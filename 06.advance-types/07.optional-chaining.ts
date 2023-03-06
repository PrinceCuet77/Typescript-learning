// Optional chaining operator

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' },
}

// Optional chaining helps safely access the nested property and nested object in the data.
// Basically, it checks that if 'fetchedUserData' has a property 'job'. If yes then continue otherwise showing an error to indicate that there is not property named 'job'.
console.log(fetchedUserData?.job?.title)
