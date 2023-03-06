// 'index' type allows us to create object which are more flexible regarding the property they might hold.

interface ErrorContainer {
    [prop: string]: string // [name_of_property: type_of_that_property]: type_of_that_property_value
    // So that, I can use as -> id: string,
    // But can't use as -> id: numeric (Because of 'index' property)
}

const errorBag: ErrorContainer = {
    // email: 1 // Can't use that because of 'index' property
    email: 'Not a valid email',
    1: 'I can use that because 1 can consider as string 1',
    username: 'Must start with a capital character!',
}
