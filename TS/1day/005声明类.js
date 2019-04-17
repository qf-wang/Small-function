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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// 可以使用修饰符
// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.max = 'haha';
        this.name = name;
        this.count = 10;
    }
    return Cat;
}());
var cat = new Cat('xiaoli');
console.log(cat.name);
// console.log(cat.max); // 不可以访问受保护的属性
// console.log(cat.count); // 不可以访问
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = _this.name + '的颜色是' + color;
        return _this;
    }
    Dog.prototype.getCount = function () {
        return this.max; // 可以使用
    };
    return Dog;
}(Cat));
var dog = new Dog('oo', 'red');
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男'; // 设置只读
    }
    return Man;
}());
var man = new Man();
// man.sex='女' 不可以修改
