"use strict";
// 命名空间
// 命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象。
var Model1;
(function (Model1) {
    var a = 10;
    function dn() {
        a++;
        return a;
    }
    Model1.dn = dn;
})(Model1 || (Model1 = {}));
Model1.dn();
Model1.dn();
Model1.dn();
Model1.dn();
var m1 = Model1.dn();
console.log(m1);
