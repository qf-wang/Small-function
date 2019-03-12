// 观察者, 监听对象中的每一个属性
// 利用对象Object.defineProperty()劫持每一个属性
function Observer(data) {
  if (typeof data !== 'object') {
    return null;
  }
  for (var attr in data) {
    let val = data[attr];
    if (typeof val === 'object' && val !== null) {
      Observer(val);
    }
    Object.defineProperty(data, attr, {
      enumerable: true,
      get() {
        return val;
      },
      set(value) {
        if(val === value) return ;
        val = value;
        console.log('监听修改')
        // 深度响应式， 如果还是对象，再劫持每一个属性
        Observer(value);
      }
    })
  }
}
function observer(data) {
  return new Observer(data);
}
// var data = {
//   name: 'xiaolan',
//   data: [1, 2, 3, 4, 5],
//   f: {
//     name: 'xiaoli',
//     age: 18,
//     data: [{
//       name: 'xxx',
//       age: 11
//     }]
//   }
// }
// Observer(data);
// // 新增属性检测不到(问题), 修改引用数据
// console.log(data);