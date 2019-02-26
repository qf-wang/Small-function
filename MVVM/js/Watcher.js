class Wacther {
    constructor(vm, exp, callback) {
        this.vm = vm;
        this.cb = this.callback;
        this.exp = exp;
        Dep.on(exp, callback);
    }
}