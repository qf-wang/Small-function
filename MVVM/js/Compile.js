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
      if (child.nodeType == 3 && reg.test(child.textContent)) {
        // 如果节点是文本节点, 且有指令，就进行替换
        var arr = child.textContent.match(reg);
        arr.forEach(x => {
          var attrArr = x.slice(2, -2).split('.');
          console.log(attrArr)
          var attr = null;
          var val = vm;
          // 添加观察者
          // 传如vm, x 的目的是为了获取当前最新值传给回掉函数，进行更新
          new Watcher(vm, attrArr, function(val) {
            child.textContent = child.textContent.replace(x, val); 
            x = val; 
          });
          attrArr.forEach(attr => {
            val = val[attr];
          })
          child.textContent = child.textContent.replace(x, val);
          x = val;
        })
        console.log(arr)
      } else if (child.nodeType == 1) {
        // 如果是元素节点，就循环每一个子节点进行判断
        replace(child);
      }
    })
  }
  replace(frageMent);
  vm.$el.appendChild(frageMent);
}

function updateContent(node, content) {
  node.innerHTML = content;
}

function compile(el, data) {
  new Compile(el, data);
}