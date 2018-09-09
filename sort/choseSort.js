function choseSort(arr) {
    // 如果是数组进行检测
    if(checkType(arr) == 'Array') {
        for(var i = 0; i < arr.length - 1; i++) {
            for(var j = i + 1; j <arr.length; j++) {
                if(arr[i] > arr[j]) {
                    // arr[i] = arr[j] + (arr[j] = arr[i]) * 0
                    var max = arr[i];
                    arr[i] = arr[j];
                    arr[j] = max;
                }
            }
        }
    }
}

// 检测数据类型
function checkType(data) {
    return Object.prototype.toString.call(data).match(/\w+/g)[1]
}