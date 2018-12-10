/*
    targetObj
    {
        $el: 目标元素,
        url: '',  //请求图片的地址
        width: 展示的宽度，默认值是200,
        lazyLoad: true, 是否开启懒加载
    }

*/
class WaterFallBase {
    constructor(targetObj) {
        this.$showBox = document.querySelector(targetObj.$el);
        this.imageBoxWidth = targetObj.width || 200;
        // this.$showBox = this.querySelector('.show-box');
        this.init();
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
        this.$showBox.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const $li = document.createElement('li');
            $li.index = i;
            $li.style.width = this.imageBoxWidth + 'px';
            this.$liAll.push($li);
            this.$showBox.appendChild($li);
        }
    }
    // 插入数据: 重新渲染， 后续添加
    insertData(data, bool) {
        if(!bool) {
            // 清空所有的li元素的内容
            this.$liAll.forEach(item => {
                item.innerHTML = '';
            })
        }
        for(let i = 0; i < data.length; i++) {
            // 获取最短的一列s索引
            const index = this.countShort();
            const div = document.createElement('div');
            div.className = 'img-list';
            //  图片异步加载，无法正确获取宽高
            // 但是数据有返回，通过数据计算
            div.style.height = data[i].height * 200 / data[i].width + 'px'; 
            const img = document.createElement('img');
            img.src = data[i].img;
            this.loadImage(img, data[i])
            .then(img => {
                div.appendChild(img);
            })
            .catch(img => {
                console.log('加载失败')
                img.src = `http://via.placeholder.com/${data[i].width}x${data[i].height}`;
                div.appendChild(img);
            })
            this.$liAll[index].appendChild(div);

        }
    }
    // 加载图片
    loadImage($img) {
        return new Promise((resolve, reject) => {
            $img.onload = function() {
                resolve($img)
            }
            $img.onerror = function() {
                reject($img);
            }
        })
    }
    // 计算最短
    countShort() {
        // 计算出此时宽度最小的那一个
        var arr = []
        for (let i = 0; i < this.$liAll.length; i++) {
            const obj = {
                index: i,
                height: this.$liAll[i].clientHeight
            }
            arr.push(obj);
        }
        arr.sort(function (a, b) {
            return a.height - b.height;
        })
        // console.log(arr);
        return arr[0].index
    }
}