// In HTML:
// <input type='text' id='user-input'>

// Version: 01 (type casting)
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')

/// Version: 02 (type casting)
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement

// This '!' allows us that the expression infront of it never yeild null.
// Otherwise
// if (userInputElement) {}

// userInputElement.value = 'Hi there!'

// OR
// const userInputElement = document.getElementById('user-input')
// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there!'
// }
