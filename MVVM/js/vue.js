// 创建mvvm框架, 把东西进行整合

class Vue {
    constructor(options) {
        this._data = options.data;
        this.vm = this;
        observer(this._data);
        for(let attr in options.data) {
            Object.defineProperty(this, attr, {
                enumerable: true,
                get() {
                    return this._data[attr]
                },
                set(newVal) {
                    this._data[attr] = newVal;
                }
            })
        }
        new Compile(options.$el, this.vm);
        // 把数据挂在对象上， this._data.name ===>  this.name;

    }
}