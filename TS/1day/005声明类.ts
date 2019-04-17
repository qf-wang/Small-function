class Person {
  name: string;
  age: number;
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}
// 可以使用修饰符
// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。

class Cat {
  private count:number;
  public name:string;
  protected max: string = 'haha';
  constructor(name: string) {
    this.name = name;
    this.count = 10;
  }
}
var cat:Cat = new Cat('xiaoli');
console.log(cat.name);
// console.log(cat.max); // 不可以访问受保护的属性
// console.log(cat.count); // 不可以访问

class Dog extends Cat {
  public color:string;
  constructor(name: string, color: string) {
    super(name);
    this.color = this.name + '的颜色是' +  color;
  }
  getCount():string {
    return this.max; // 可以使用
  }
}
var dog:Dog = new Dog('oo', 'red');


class Man{
  public readonly sex:string = '男'; // 设置只读
}
var man:Man = new Man()
// man.sex='女' 不可以修改