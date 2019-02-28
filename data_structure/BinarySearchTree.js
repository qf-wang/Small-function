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
        const newNode = new Node(key);
        root == null ?  root = newNode : insertNode(root, newNode);

    }
    // 查找某一个元素 
    search(key) {
        
    }
    // 删除一个元素
    remove(key) {

    }
    // 获取最小值
    min() {
        function minNode(node) {
            if(node) {
                while(node && node.left !== null) {
                    node = node.left;
                }
                return node.key;
            }
            return null;
        }
        return minNode(root);
    }
    // 获取最大值
    max() {
        function maxNode(node) {
            if(node) {
                while(node && node.right !== null) {
                    node = node.right;
                }
                return node.key;
            }
            return null;
        }
        return maxNode(root);
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
console.log(tree.max());
