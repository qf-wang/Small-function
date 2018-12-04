var obj = {
  name: 'xiaolan',
  age: 18,
  sister: [
    {
      name: 'xixi',
      age: 24,
      hobby: ['逛街', '健身']
    },
    {
      name: 'huanhuan',
      age: 22,
      hobby: ['逛街', '美容', '化妆']
    }
  ],
  eat: function () {

  },
  a: null,
  arm: [1,2,3]
}
// 把一个对象的属性方法合并到另外一个对象上
// 相同属性如果数据类型不同或者数据类型为基本数据类型直接进行覆盖， 如果是引用数据类型，且数据类型一样，就进行结合
function checkType(data) {
  return Object.prototype.toString.call(data).match(/\w+/g)[1];
}
function deepCopy(copyObj, newObj) {
  // 定义一个递归函数，如果属性为对象，继续执行,  如过是基本数据类型直接跳出
  if(typeof copyObj != 'object' || copyObj == null) {
      return copyObj;
  }
  // 如果传进来的新值数据类型为对象
  if(checkType(newObj) != checkType(copyObj)) {
    newObj = copyObj instanceof Array ? [] : {};  
  }
  for (let i in copyObj) {
    if(copyObj.hasOwnProperty(i)) {
      // 拷贝的为对象自有可枚举属性
      newObj[i] = deepCopy(copyObj[i], newObj[i]);
    }
  }
  return newObj;
}
var newObj = {
  type: '属性合并',
  arm: {a: 'haha'},
  sister: [1,2,3]
}
newObj = deepCopy(obj, newObj);
console.log(newObj);
console.log(obj);



// function deepCopy(copyObj) {
//   var newObj = copyObj instanceof Array ? [] : {};
//   function deep(copyObj, newObj) {
//     // 定义一个递归函数，如果属性为对象，继续执行
//     for (let i in copyObj) {
//       if (copyObj.hasOwnProperty(i)) {
//         // 拷贝的为对象自有可枚举属性
//         if (typeof copyObj[i] == 'object' && copyObj[i] != null) {
//           newObj = copyObj instanceof Array ? [] : {};
//           deepCopy(copyObj[i], newObj[i]);
//           continue;
//         }
//         newObj[i] = copyObj[i];
//       }
//     }
//     return newObj;
//   }
//   deep(copyObj, newObj);
//   return newObj;
// }