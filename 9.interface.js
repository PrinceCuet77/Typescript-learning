"use strict";
// Difference: 'interface' can extend using 'extends' keyword and 'type' can extend using '&' way.
// 'interface' can add a new field like in line no 15 but 'type' is not add a new field.
exports.__esModule = true;
// I can ignore 'googleId' because it's optional. If I can use then it's normal string assign.
// Variable of 'User' interface
var user = {
    dbId: 1,
    email: 'R@gmail.com',
    userId: 11,
    githubToken: 'GitHub',
    startTrail: function () {
        return 'start trail';
    },
    getCoupon: function (couponName, value) {
        if (couponName === void 0) { couponName = 'Nothing'; }
        if (value === void 0) { value = 1; }
        return 10;
    }
};
// Variable of 'Admin' interface
var admin = {
    dbId: 1,
    role: 'admin',
    email: 'R@gmail.com',
    userId: 11,
    githubToken: 'GitHub',
    startTrail: function () {
        return 'start trail';
    },
    getCoupon: function (couponName, value) {
        if (couponName === void 0) { couponName = 'Nothing'; }
        if (value === void 0) { value = 1; }
        return 10;
    }
};
console.log(user.startTrail());
