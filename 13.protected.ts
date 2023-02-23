class User {
    protected _courseCount = 1

    readonly city: string = 'DHAKA'
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {}

    private deleteToken(): void {
        console.log('Token deleted.')
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum
    }
}

class Subuser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4 // I can access because '_courseCount' is protected type.
    }
}

export {}