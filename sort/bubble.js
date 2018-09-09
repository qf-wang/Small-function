function bubbleSort(arr) {
    // 如果是数组进行检测
    if(checkType(arr) == 'Array') {
        for(var i = 1; i < arr.length; i++) {
            for(var j = 0; j <arr.length - i; j++) {
                if(arr[j] > arr[j + 1]) {
                    var max = arr[j];
                    arr[j] = arr[j +1];
                    arr[j + 1] = max;
                }
            }
        }
    }
}

// 检测数据类型
function checkType(data) {
    return Object.prototype.toString.call(data).match(/\w+/g)[1]
}