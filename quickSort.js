function quickSort(arr) {
    function sort(start, end) {
        if(start >= end) {
            return
        }
        var i = start,
            j = end,
            init = arr[start];
        // 必须先从后找，找到了在从前向后找
        while (i != j) {
            while (arr[j] >= init && j > i) {
                j--;
            }
            while (arr[i] <= init && j > i) {
                i++
            }
            if (j > i) {
                arr[j] = arr[i] + (arr[i] = arr[j]) * 0;
            }
        }
        arr[start] = arr[i];
        arr[i] = init;
        sort(start, i - 1);
        sort(i + 1, end);
    }
    sort(0, arr.length - 1);
}