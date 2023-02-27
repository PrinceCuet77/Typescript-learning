var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// A simple generic class.
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // This is how I can remove an item from an array.
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true); // Return a copy of that data.
    };
    return DataStorage;
}());
// Mention which kind of data I want to store. (Maintain making flexable and strongly typed using generics)
var textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems()); // Output: [ 'Manu' ]
var numStorage = new DataStorage(); // Also work.
var objStorage = new DataStorage();
var maxObj = { name: 'Max' };
objStorage.addItem(maxObj);
objStorage.addItem({ name: 'Manu' });
objStorage.removeItem(maxObj);
console.log(objStorage.getItems());
