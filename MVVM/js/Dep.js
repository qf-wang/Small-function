var Dep = (function() {
    var obj = {};
    return {
        on(key, callback) {
            // 如果没有就初始化为数组
            if(!obj[key]) {
                obj[key] = [];
            }
            obj[key].push(callback);
        },
        emit(key, value) {
            obj[key].forEach(fn => {
                fn(value);
            })
        }
    }
}())