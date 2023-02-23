class User {
    private _courseCount = 1

    readonly city: string = 'DHAKA'
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {}

    // Private method
    private deleteToken(): void {
        console.log('Token deleted.')
    }

    // Getter method
    get courseCount(): number {
        return this._courseCount
    }

    // Setter method
    // I can't use 'void' because setter method is not allow any return type on it. (For setter method - no return type)
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum
    }
}

export {}

// Note:
// Error: Accessors are only available when targeting ECMAScript 5 and higher. (while use: tsc 12.setter_getter.ts)
// Solution: tsc -t es5 12.setter_getter.ts
