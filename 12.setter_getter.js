"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = 'DHAKA';
    }
    Object.defineProperty(User.prototype, "courseCount", {
        // Getter method
        get: function () {
            return this._courseCount;
        },
        // Setter method
        // I can't use 'void' because setter method is not allow any return type on it.
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error('Course count should be more than 1');
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
