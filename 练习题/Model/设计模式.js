/*
* 设计模式
*/


// 工厂模式
function createPeople() {
    var people = new Object();
    people.name = 'xxx';
    people.age = 18;
    return people;
}

// 构造函数模式
function People() {
    this.name = name;
    this.age = age;
    this.eat = function(){

    }

}

// 原型模式
People.prototype.name = 'xxx';
People.prototype.eat = function() {

}


// 混合模式

function People() {
    this.name = name;
    this.age = age;
}
People.prototype.eat = function() {

}

// 单例模式
// 第一次如果没有对象, 生成一个对象,返回
// 后面如果对象已存在, 直接把就对象返回.


var cPeople = (function(){
    var flag = false;
    var people = new Object();
    people.name = 'xxx';
    people.age = 18;
    return function() {
        if(!flag) {
            flag = people;
        }
        return flag;
    }
}())

var people = cPeople();
var people2 = cPeople();
console.log(people === people2);
