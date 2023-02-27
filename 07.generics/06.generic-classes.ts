// - A simple generic class.
class DataStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }

        this.data.splice(this.data.indexOf(item), 1) // This is how I can remove an item from an array.
    }

    getItems() {
        return [...this.data] // Return a copy of that data.
    }
}

// Mention which kind of data I want to store. (Maintain making flexable and strongly typed using generics)
const textStorage = new DataStorage<string>()
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems()) // Output: [ 'Manu' ]

const numStorage = new DataStorage<number>() // Also work.

const objStorage = new DataStorage<object>()
const maxObj = { name: 'Max' } // 'object' is reference type. So, if I want to use same 'object' then I need to store this 'object' into a variable and then use that variable.

objStorage.addItem(maxObj)
objStorage.addItem({ name: 'Manu' })

objStorage.removeItem(maxObj)
console.log(objStorage.getItems()) // Output: [ { name: 'Manu' } ]

// - I can use like the following as well (with union type).
class DataStorage2<T extends string | number | boolean> {}
