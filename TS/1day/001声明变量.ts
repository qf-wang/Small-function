// ts中的新增数据类型
//  void, enum, Tuple(元祖),any，never

var a:string = 'hello';
// 引用数据类型的字符串
var b:String = new String('hello');
var num:number = 123;








// 断言， 不进行特殊的数据检查和解构
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;


let reg:RegExp = /\d+/g;
let obj:Object = {
  name: 'xiaoli'
}

