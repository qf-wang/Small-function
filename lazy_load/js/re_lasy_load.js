function LazyLoad(ele, page, pageSize, width) {
    // 图片放入的盒子
    this.imageBox = document.querySelector(ele);
    this.page = page || 1; // 页码
    this.pageSize = pageSize || 40; //每页显示的数量
    // 图片的宽度
    this.width = width || 200;
    // 防止手机
    this.load = true;
}
// 初始化函数  参数：查询字段
LazyLoad.prototype.init = function(words) {
    // 清空盒子内的所有元素， 重置列数
    this.resize();
    // 获取图片
    this.getImage(words);


}
// 根据容器的宽度自适应显示列数
LazyLoad.prototype.resize = function() {
    var arr = []
    for(var i = 0; i < Math.floor(this.imageBox.clientWidth / this.width); i++) {
        arr.push('<li></li>');
    }
    this.imageBox.innerHTML = arr.join('');
    arr = null;
}
// 获取图片资源
LazyLoad.prototype.getImage = function(words) {
    var _this = this;
    var params = {
        page_num: this.page,
        page_size: this.pageSize,
        q: words,
        succees: function(data) {
            _this.loadImage(data);
        }
    }
    sendAJAX("http://dev.91jianke.com:1091/id_v2_5/search_img", params);
}
// 把图片加入到dom中
LazyLoad.prototype.insertImage = function() {

}

// 图片预加载
LazyLoad.prototype.loadImage = function(data) {
    // 处理图片跨域或者加载失败的情况
    this.insertImage(data);
} 
