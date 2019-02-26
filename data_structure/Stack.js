// 创建栈
// 栈是一种遵循后进先出(LIFO)原则的有序集合.新添加的元素都是在栈顶
const Stack = function () {
    const item = [];
    return new class {
        constructor() {}
        push(element) {
            // 添加元素
            return item.push(element);
        }
        pop() {
            // 删除元素
            return item.pop();
            // 遵循后进先出, 所以删除最新元素,为最后一个
        }
        peek() {
            // 返回栈顶元素(最后一个元素)
            return item[item.length - 1];
        }
        isEmpty() {
            // 是否为空
            return item.length == 0
        }
        clear() {
            // 清空
            return item = [];
        }
        size() {
            // 返回栈里元素的个数
            return item.length;
        }
        print() {
            return item.toString();
        }
    }
}


// 从十进制到任何进制
/**
 * 
 * @param {number} number 要转换的十进制数字
 * @param {number} base 需要变换的进制
 */
function baseConverter(number, base) {
    var remStack = new Stack(),
        rem,
        digits = '0123456789ABCDEF';
    binaryString = '';
    while (number > 0) {
        // 获取模
        rem = Math.floor(number % base);
        remStack.push(digits[rem]);
        number = Math.floor(number / base);
    }
    // 如有有元素
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop();
    }
    return binaryString;
}

// 平衡圆括号
// 意思就是检测左括弧和右括弧数量是否相同
// 例如 ()()  (()()) 都是对的
// (()))) 错误的
function isBracketsBalanced(str) {
    var stack = new Stack();
    var leftBraket = '{([';
    var rightBraket = '})]';
    var index = null;
    for (var i = 0; i < str.length; i++) {
        if (leftBraket.includes(str[i])) {
            // 如果是左边的括号, 就加入到结构中
            stack.push(str[i]);
        } else if ((index = rightBraket.indexOf(str[i])) > -1) {
            // 如果是右边括号, 判断删除的左括号跟有括号是否能匹配
            if (stack.pop() != leftBraket[index]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}