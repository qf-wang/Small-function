// Object.setPrototypeOf(obj, prototype)
// 设置对象指向哪一个原型对象
var obj = Object.setPrototypeOf({}, null); 
console.log(obj); // 对象没有__proto__



// Object.create(proto) 返回一个空对象，__proto__指向传入的对象
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;