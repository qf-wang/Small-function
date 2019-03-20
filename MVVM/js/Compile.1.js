// 编译, 把指令转换为对应的代码
// 获取一个盒子内的所有节点
// 避免频繁操作，把所有节点存放在文档碎片中

function Compile(el, vm) {
  vm.$el = document.querySelector(el);
  const frageMent = document.createDocumentFragment();
  let child;
  while (child = vm.$el.firstChild) {
    frageMent.appendChild(child);
  }

  function replace(node) {
    let children = [...node.childNodes];
    // debugger
    const reg = /\{\{(.+?)\}\}/g;
    children.forEach(child => {
      // 如果节点是文本节点, 且有指令，就进行替换
      if (child.nodeType == 3 && reg.test(child.textContent)) {
        // 获取原来的文本模版，用来做替换
        var textModel = child.textContent;
        // 获取所有标签{{obj.a.a}}, {{age}}
        var attrArr = textModel.match(reg);
        child.textContent = getReplacedValue(textModel, attrArr, vm);
        // 添加监听器，当值修改时，触发，更新对应dom
        new Watcher(vm, attrArr, function(vm) {
          child.textContent = getReplacedValue(textModel, attrArr, vm);
        });
      } else if (child.nodeType == 1) {
        // 如果是元素节点，就循环每一个子节点进行判断
        replace(child);
      }
    })
  }
  replace(frageMent);
  vm.$el.appendChild(frageMent);
}
function getValue(str, vm) {
  var val = vm;
  var attrArr = str.split('.');
  attrArr.forEach(attr => {
    val = val[attr];
  })
  return val;
}

function getReplacedValue(textModel, strArr, vm) {
  strArr.forEach(attr => {
    var realAttr = attr.slice(2, -2);
    var val = getValue(realAttr, vm);
    textModel = textModel.replace(attr, val);
  })
  return textModel;
}

function compile(el, data) {
  new Compile(el, data);
}