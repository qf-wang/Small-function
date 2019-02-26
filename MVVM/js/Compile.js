class Compile {
    constructor($el, data) {
        this.$el = $el;
        this.vm = data;
        this.compileElement();
    }
    compileElement($el) {
        // debugger
        // 获取{{}}
        $el = $el || this.$el;
        const reg = /\{\{(.*)\}\}/;
        const _this = this;
        // 遍历左右子元素
        var childNodes = $el.children;
        [...childNodes].forEach(node => {
            const text = node.textContent
            // 获取里面的属性{{}}
            if(text && reg.test(text)) {
                // 更新文本内容, 添加监听器
                _this.compileText(node,  reg.exec(text)[1]);
            }
            // 获取v-model
            if(node.nodeName == 'INPUT') {
                var exp = node.getAttribute('v-model');
                node.value = _this.vm[exp];

                Dep.on(exp, function (node, value) {  // 生成订阅器并绑定更新函数
                    node.value = _this.vm[exp];
                }.bind(this, node));
                
                node.oninput = function() {
                    _this.vm[exp] = this.value;
                }
                console.log(exp);
            }


        })

    }
    compileText (node, exp) {
        // 获取属性值,渲染到页面中
        this.updateText(node, this.vm[exp]);
        // 监听该属性, 如果属性值发生了变化,对应的值也会改变
        Dep.on(exp, function (node, value) {  // 生成订阅器并绑定更新函数
            this.updateText(node, value);
        }.bind(this, node));
        // new Watcher(this.vm, exp, function (node, value) {  // 生成订阅器并绑定更新函数
        //     this.updateText(node, value);
        // }.bind(this, node));

    }
    updateText (node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    }
}