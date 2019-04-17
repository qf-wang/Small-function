"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Me = /** @class */ (function () {
    function Me(age) {
        this.name = 'wj';
        this.age = age;
    }
    Me.prototype.hobby = function () {
        console.log('我也执行了');
        return '学习编程';
    };
    return Me;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.height = 183;
        return _this;
    }
    Son.prototype.bussiness = function () {
        console.log('成为了商人');
    };
    // 重写hobby方法
    Son.prototype.hobby = function () {
        _super.prototype.hobby.call(this); // 调用父类方法
        return '学习医术';
    };
    return Son;
}(Me));
var son = new Son(18);
console.log(son.age);
console.log(son.name);
console.log(son.hobby());
