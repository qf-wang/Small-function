// 自定义实现map
/* map定义: 
    作用: 循环数组,并且改变数组的值
    可以传两个参数
        第一个是回调函数: 元素,索引,操作的数组
        第二个是改变函数this指向的对象
*/
Array.prototype.myMap = function(callback, thisArg) {
    // 首先判断是否支持map,如果支持直接使用
    if ('map' in Array.prototype) {
        return this.map(callback, thisArg);
    }
    // 由于map方法都是数组调用,所以默认this就是数组
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(typeof callback == 'function') {
            var val = callback.call(thisArg, this[i], i, this);
            arr.push(val)
        }
    }
    return arr;
}


// 实现bind方法
Function.prototype.bind = function(thisArg) {
    // 首先检测是不是函数
    if(typeof this !== 'function') {
        throw new TypeError('What is trying to be bound is not callable');
    }
    // 获取传进来的参数,不包含第一个
    var arg = Array.prototype.slice.call(arguments, 1);
    var oldFun = this;
    // 定义一个空函数，方便完成继承
    var fun = function() {};
    var newFun = function() {
        // 返回一个函数,当函数调用时,把里面的this指向默认指向bind传进来的第一个
        // 如果函数继续传入参数,和之前的进行合并
        return oldFun.apply(thisArg, arg.concat(Array.prototype.slice.call(arguments)));
    }
    // 这一点有疑问?
    // 感觉既然要继承共有属性,  公有属性的也应该继承: 使用单例模式,就用到公有属性
    fun.prototype = this.prototype;
    newFun.prototype = new fun();
    return newFun;
}
// 珂理化函数思想:一个js预先处理的思想
