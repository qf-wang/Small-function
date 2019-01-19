class Vue {
    constructor(options) {
        this.$el = document.querySelector(options.$el);
        this.data = options.data;
        this.vm = this;
        observer(this.data);
        new Compile(this.$el, this.data);
    }
}