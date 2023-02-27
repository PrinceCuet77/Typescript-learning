interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instragram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // Extra field for 'Youtube' class (I can add more field but I can't reduce field)
    ) {}

    // Must be implemented.
    createStory(): void {
        console.log('Story was created')
    }
}

export {}