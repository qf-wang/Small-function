// 订阅器
function Dep() {
  this.sub = [];
}
Dep.prototype.add = function(watcher) {
  this.sub.push(watcher)
}
Dep.prototype.notify = function() {
  this.sub.forEach(x => {
    x.update();
  })
}



function Watcher(vm, exp, fn) {
  debugger
  this.vm = vm; // data 数据
  this.exp = exp; // obj.a.a 获取哪一个数据
  this.fn = fn;
  Dep.target = this;
  var val = this.vm;
  exp.forEach(x => {
    val = val[x];
  })
  Dep.target = null;

}
Watcher.prototype.update = function() {
  debugger
  var val = this.vm;
  this.exp.forEach(x => {
    val = val[x];
  })
  this.fn(val);
}