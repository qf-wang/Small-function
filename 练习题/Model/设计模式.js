/*
 * 设计模式
 * 
 */
var obj = {

}
// 工厂模式
var createPeople = function () {
    var person = new Object();
    person.name = 'xx';
    person.age = 18;
    person.eat = function () {

    }

}

var p1 = createPeople();
var p2 = createPeople();
console.log(p1 === p2);

// 构造函数模式
function People() {
    this.name = 'xxx';
    this.age = 18;
    this.eat = function () {}
}

// 原型模式
People.prototype.eat = function () {}


// 混合模式
function People() {
    this.name = 'xxx';
    this.age = 18;
    this.eat = function () {}
}
People.prototype.eat = function () {}


// 单例模式
var createPeople = (function () {
    var flag = false;
    var person = new Object();
    person.name = 'xx';
    person.age = 18;
    person.eat = function () {

    }
    return function () {
        if (!flag) {
            flag = person
        }
        return flag;
    }
}())
