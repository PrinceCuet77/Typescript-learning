abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    // Abstract method
    abstract getSepia(): void

    // Normal method
    getRealTime(): number {
        return 20
    }
}

class Instragram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter) // super() method is calling the parent class.
    }

    // Abstract method must be implemented
    getSepia(): void {
        console.log('Get sepia.')
    }
}

const instragram = new Instragram('test', 'test', 3)
instragram.getSepia()
console.log(instragram.getRealTime())

export {}
