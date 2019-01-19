// 监听对象中的每一个属性
function observer(data) {
    if(!data || typeof data != 'object') {
        return;
    }
    for(var key in data) {
        define(data, key, data[key]);
    }
}
function define(data, key, value) {
    observer(value);
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            // 添加回掉函数

            return value;
        },
        set (newVal) {
            // 设置值
            if (value === newVal) {
                return;
            }
            value = newVal;
            console.log(`监听到${key}的值改变成${value}`);
            // 修改后值, 触发回调函数
            Dep.emit(key, value);
            
        }
    })
}

