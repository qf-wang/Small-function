// 命名空间
// 命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象。
// 使用闭包实现，形成封闭空间，再把函数绑定位函数的静态方法
namespace Model1 {
  var a = 10;
  export function dn():number {
    a++;
    return a;
  }
}
Model1.dn();
Model1.dn();
Model1.dn();
Model1.dn();
var m1 = Model1.dn();
console.log(m1)
