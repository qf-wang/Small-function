// 创建mvvm框架, 把东西进行整合

class Vue {
    constructor(options) {
        this.$el = document.querySelector(options.$el);
        this.data = options.data;
        this.vm = this;
        observer(this.data);
        new Compile(this.$el, this.data);
    }
}