/*
    targetObj
    {
        $el: 目标元素,
        url: '',  //请求图片的地址
        width: 展示的宽度，默认值是200,
        lazyLoad: true, 是否开启懒加载
    }

*/
class WaterFall {
    constructor(targetObj) {
        this.$showBox = document.querySelector(targetObj.$el);
        this.imageBoxWidth = targetObj.width || 200;
        // this.$showBox = this.querySelector('.show-box');
    }
    // 初始化
    init() {
        // 根据图片宽度获取可以显示几列
        const count = Math.floor(window.innerWidth / this.imageBoxWidth);
        // 得到几列后，获取总宽度
        const width = count * this.imageBoxWidth;
        // 把宽度给展示图片的盒子show-box
        this.$showBox.style.width = width + 'px';
        // 用来存储li
        this.$liAll = [];
        for (let i = 0; i < count; i++) {
            const $li = document.createElement('li');
            $li.index = i;
            $li.style.width = this.imageBoxWidth + 'px';
            this.$liAll.push($li);
            this.$showBox.appendChild($li);
        }

        this.getData().then(data => {
            data = JSON.parse(data).data;
            this.insertData(data);
        });
    }
    // 获取数据
    getData() {
        var _default = {
            page_num: 1,
            page_size: 40,
            q: '世界杯'
        }
        return sendAjax('https://dev.91jianke.com:1091/id_v2_5/search_img', {
            data: _default
        })
    }
    // 插入数据
    insertData(data) {
        console.log(data);
    }
    // 懒加载
    lazyLoad() {

    }
    // 加载图片
    loadImage() {
        
    }
    // 计算最短
    countShort() {
        // 计算出此时宽度最小的那一个
        var arr = []
        for (let i = 0; i < liAll.length; i++) {
            // 由于flex布局的特殊性，li默认高度100%， 所以要动态给他设置高度
            liAll[i].style.height = liAll[i].style.height ? liAll[i].style.height : 0
            const obj = {
                index: i,
                height: parseInt(liAll[i].style.height)
            }
            arr.push(obj);
        }
        arr.sort(function (a, b) {
            return a.height - b.height;
        })
        console.log(arr);
        return arr[0].index
    }
}