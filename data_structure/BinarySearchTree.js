// 二叉树
// 特点: 先设置一个根节点
// 添加一个节点:  比节点小的放左边, 大的放右边.
//  
function Node(key) {
    this.key = key;
    this.left = null; // 左节点
    this.right = null; // 右节点
}
let root = null; // 设置根节点
class BinarySearchTree {
    constructor() {
    }
    // 添加一个元素
    insert(key) {
        var node = root;
        const newNode = new Node(key);
        node = newNode;
        root == null ?  root = newNode : insertNode(root, newNode);
        function insertNode (node, newNode) {
            if(node.key > newNode.key) {
                if(node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if(node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }

    }
    // 查找某一个元素, 存在就发你true
    search(key) {
        var node = root;
        while(node) {
            if(key > node.key) {
                node = node.right;
            } else if(key < node.key) {
                node = node.left
            } else if(key === node.key) {
                return true;
            }
        }
        return false;
    }
    // 删除一个元素
    // 第一种：如果没有左节点也没有右节点， 直接删除
    // 第二种：如果只有左节点，或者右节点，补上 
    // 第三种：如果两个节点都有，那需要从左边子节点中找到最大的一个补上
    remove(key) {
        const removeNode =  (node, key) => {
            if(node === null) {
                return null;
            }
            if(node.key == key) {
                if(!node.left && !node.right) {
                    node = null;
                }  else if(node.left === null) {
                    node = node.right
                } else if (node.right === null){
                    node = node.left;
                } else {
                    // 找到左边最大的一个替换, 或者右边最小的一个
                    var aux = this.findMinNode(node.right);
                    node.key = aux.key;
                    // 删除找到的元素
                    node.right = removeNode(node.right, aux.key);
                }
            } else if(node.key > key) {
                node.left = removeNode(node.left, key);
            } else if(node.key < key) {
                node.right = removeNode(node.right, key);   
            }
            return node;
        }
        root = removeNode(root, key);
    }
    // 未来写成私有方法
    findMinNode(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    }
    // 获取最小值
    min() {
        return this.findMinNode(root).key;
    }
    findMaxNode(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    // 获取最大值
    max() {
        return this.findMaxNode(root).key;
    }
    // 中序遍历所有节点, 从最小的访问到最大的节点
    /**
     * 
     * @param {function} callback 用来定义获取到元素所要做的操作 
     */
    inOrderTraverse(callback) {
        function inOrderTraverseNode(node, callback) {
            if(node !== null) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
            }
        }
        inOrderTraverseNode(root, callback);
    }
    // 先序遍历, 按照顺序,从左到右访问, 应用: 打印结构化的文档
    preOrderTraverse(callback) {
        function preOrderTraverseNode(node, callback) {
            if(node !== null) {
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        }
        preOrderTraverseNode(root, callback);
    }
    // 后序遍历, 优先遍历后代节点, 在访问本节点
    postOrderTraverse(callback) {
        function postOrderTraverseNode(node, callback) {
            if(node !== null) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        }
        postOrderTraverseNode(root, callback);
    }

}


// 测试
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);




// console.log(root)
// tree.postOrderTraverse(x => {
//     console.log(x);
// })
tree.remove(15);
console.log(root);
console.log(tree.search(6));

