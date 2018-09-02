var obj = {
  name: 'xiaolan',
  age: 18,
  sister: [{
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

  }
}
// 把一个对象的属性方法合并到另外一个对象上
function deepCopy(obj, newObj) {
  // 定义一个递归函数，如果属性为对象，继续执行
  function deepFn(obj, newObj) {
    for (let i in obj) {
      // 属性为对象时
      if (typeof obj[i] == 'object' && obj.hasOwnProperty(i)) {
        // 如果obj的属性为对象，给newObj也添加一个属性为空对象，不然无法循环添加属性
        newObj[i] = {};
        deepFn(obj[i], newObj[i]);
        // 属性添加完成，跳过这一步
        continue;
      }
      // 属性不为对象时,直接赋值
      newObj[i] = obj[i]
    }
  }
  // 设置默认值
  newObj = newObj || {};
  // 检测如果不是对象跳出
  if (typeof newObj != 'object') {
    return
  }
  deepFn(obj, newObj);
  return newObj;
}
var newObj = {
  type: '属性合并'
}
newObj = deepCopy(obj, newObj);
console.log(newObj);
console.log(obj);