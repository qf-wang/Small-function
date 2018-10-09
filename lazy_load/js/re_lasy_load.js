function LazyLoad(ele, page, pageSize, width) {
    // 图片放入的盒子
    this.imageBox = document.querySelector(ele);
    // loading框
    this.loading = this.imageBox.nextElementSibling;
    this.page = page || 1; // 页码
    this.pageSize = pageSize || 40; //每页显示的数量
    // 图片的宽度
    this.width = width || 200;
    this.arr = [];
    // 防止手机
    this.load = true;
    this.timer = null;
}
// 初始化函数  参数：查询字段
LazyLoad.prototype.init = function (words) {
    var _this = this;
    // 清空盒子内的所有元素， 重置列数
    this.resize();
    // 获取图片
    this.getImage(words);

    this.imageBox.addEventListener('scroll', function () {
        var bottom = this.scrollHeight - this.scrollTop - this.clientHeight;
        // console.log(bottom)
        if (bottom < 80 && _this.load) {
            _this.load = false;
            _this.page++;
            _this.getImage(words);
        }
    }, false)
    window.addEventListener('resize', function() {
        _this.resize();
        clearInterval(_this.timer);
        // 把现有的图片重新排版
        _this.timer = setTimeout(function() {
            _this.insertImage(_this.arr);
        }, 200)
    })

}
// 根据容器的宽度自适应显示列数
LazyLoad.prototype.resize = function () {
    var arr = []
    for (var i = 0; i < Math.floor(this.imageBox.clientWidth / this.width); i++) {
        arr.push('<li></li>');
    }
    this.imageBox.innerHTML = arr.join('');
    arr = null;
}
// 获取图片资源
LazyLoad.prototype.getImage = function (words) {
    var _this = this;
    var params = {
        data: {
            page_num: this.page,
            page_size: this.pageSize,
            q: words,
        },
        success: function (data) {
            data = JSON.parse(data);
            _this.loadImage(data.data);
        }
    }
    this.loading.style.display = 'block';
    sendAjax("http://dev.91jianke.com:1091/id_v2_5/search_img", params);
}
// 把图片加入到dom中
LazyLoad.prototype.insertImage = function (arrIamge) {
    this.loading.style.display = 'none';
    // console.log(arrIamge)
    var liAll = this.imageBox.querySelectorAll('li');
    for (var index = 0; index < arrIamge.length; index++) {
        var div = document.createElement('div');
        div.className = 'img-list'
        div.style.width = 200 + 'px';
        div.style.height = 200 / arrIamge[index].width * arrIamge[index].height + 'px';
        let _index = this.countHeight(liAll);
        // debugger
        div.appendChild(arrIamge[index]);
        liAll[_index].appendChild(div);
        liAll[_index].style.height = parseInt(liAll[_index].style.height) + parseInt(div.style.height) + 'px'
      }
      this.load =  true;
}
// 计算高度最小的列
LazyLoad.prototype.countHeight = function(liAll) {
    var arr = []
    for(var i = 0; i < liAll.length; i++) {
      // 由于flex布局的特殊性，li默认高度100%， 所以要动态给他设置高度
      liAll[i].style.height = liAll[i].style.height ? liAll[i].style.height : 0
      const obj = {
        index: i,
        height: parseInt(liAll[i].style.height)
      }
      arr.push(obj);
    }
    arr.sort(function(a, b){
      return a.height -b.height;
    })
    // console.log(arr);
    return arr[0].index
}

// 图片预加载
LazyLoad.prototype.loadImage = function (data) {
    var _this = this;
    // 处理图片跨域或者加载失败的情况
    var arr = [];
    var m = 0;
    for(var i = 0; i < data.length; i++) {
        var $img = document.createElement('img');
        $img.src = data[i].img;
        $img.onload = function() {
            m++;
            _this.arr.push(this);
            arr.push(this);
            console.log(m)

            if(m == data.length) {
                _this.insertImage(arr);
            }
        }
        $img.onerror = function() {
            m++;
            console.log(m)
            if(m == data.length) {
                _this.insertImage(arr);
            }
        }
    }
    // this.insertImage(data);
}