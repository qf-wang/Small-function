// 接口定义
// 在通常情况下，接口是用来定义一些规范，使用这些接口，就必须实现按照接口中的规范来走。
// 其实就是规定声明对象时，必须有哪些属性，也可以有一些选填属性
interface Husband {
  sex:string
  height:string
  age:number,
  money?:number
}
var wangLiHong:Husband = {
  sex: '男',
  height: '173cm',
  age: 24,
  money: 2000000 // 上面三个必写，这一个可以写可以不写
}


// 还可以规范函数类型接口
interface searchMan{
  // 函数两个参数和类型，以及返回的结果
  (sub:string, source: number):boolean;
}
var search: searchMan = function(sub) {
  console.log(sub);
  return false;
}
search('10', 20);

