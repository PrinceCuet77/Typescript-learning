// It's a pattern while using in union type and makes to implement type guard easiler
// This example is also applicable in class.

// Discriminated Union:
// One common property in every object which works on union which describe that object.
interface Bird {
    type: 'bird' // Not a value of the property. (Discriminated Union)
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    // kind: 'Horse' // Also works (literal type)
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    // if ('flyingSpeed' in animal) {} // It works but if typing mistake of 'flyingSpeed' then will not work.
    // if (animal instanceof Bird) {} // It is not working because of 'Bird' is an interface. But it will work in class.

    let speed
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
            break
    }

    // Also works in 'if-else' case.
    // if (animal.type === 'bird') {}

    console.log('Moving at speed: ', speed) // Output: Moving at speed:  10
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })
