"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // Normal method
    TakePhoto.prototype.getRealTime = function () {
        return 20;
    };
    return TakePhoto;
}());
var Instragram = /** @class */ (function (_super) {
    __extends(Instragram, _super);
    function Instragram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) // super() method is calling the parent class.
         || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    // Abstract method must be implemented
    Instragram.prototype.getSepia = function () {
        console.log('Get sepia.');
    };
    return Instragram;
}(TakePhoto));
var instragram = new Instragram('test', 'test', 3);
instragram.getSepia();
console.log(instragram.getRealTime());
