"use strict";
// TODO:
// In the terminal: tsc --init
// In the 'tsconfig.json' file, uncomment '"experimentalDecorators": true' and save it otherwise decorator is not working.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator is just a function
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
// '@' and function -> indicates that it should be an decorator function
// Gets the output from the decorator first. Because decorator is called when the 'Person' class is defined (class defination) not instanced (new Person() time).
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
// Output:
// Logging...
// [class Person]
// Creating person object...
// Person { name: 'Max' }
