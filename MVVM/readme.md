### 课前准备
1. 掌握发布订阅设计模式
2. 掌握Object.defineProperty的用法

### 实现效果
```
    <div id="app">
        <input type="text" id="inp" v-model="name">
        <input type="text" id="inp" v-model="name">
        <p>{{name}}</p>
    </div>
    // 修改文本框内容, 三个值会一起改变
    var myapp = new Vue({
        $el: '#app',
        data: {
            name: 'Hello World',
            age: 18
        }
    })
```

### 实现原理
1. 给对应的文本框, 对应的dom添加事件
2. 修改对象属性值时,修改对应dom元素值