// Create an object of interface 'Person'
let user1 = {
    name: 'Max',
    age: 20,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
