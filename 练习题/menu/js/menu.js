var menu = (function () {
    return {
        init() {
            this.$ulbox = $('.set-menu');
            // 菜单栏中显示的标题
            this.getData().then(data => {
                this.insertData(this.$ulbox, data, 1);
                // 所有标题
                this.$title = this.$ulbox.find('.title');
                // 所有ul
                this.$ul = this.$ulbox.find('ul');
                this.events();

                this.lazyLoding();
            })
        },
        events() {
            var _this = this;
            this.$ulbox.find("li:has(ul)>.title").on("click", function () {
                console.log(1)
                $(this).next().slideToggle();
                $(this).children("i").toggleClass("shop-arrow-down").toggleClass("shop-arrow-up");
            })
            this.$title.on('click', '.btn', function () {
                // 调用弹窗,显示
                var model = new Model();
                // 括号内传入展示内容
                var parent = $(this).closest('li');
                var parent2 = parent.closest('li')
                console.log(parent2)
                model.show(`${parent.parent().parent().index()}-${parent.index()}`);
            })


        },

        // 获取数据   
        getData() {
            return new Promise((resolve, reject) => {
                data = $.getJSON('json/menu.json', data => {
                    resolve(data);
                });

            })
        },
        insertData(dom, data, levels) {
            let ul = $('<ul></ul>');
            // ul.className = 'menu';
            // debugger
            for (var i = 0; i < data.length; i++) {
                let li = $('<li></li>');
                let liContent = this.dom(data[i].name, data[i].content, levels);
                li.append(liContent);
                if (data[0].child) {
                    this.insertData(li, data[i].child, 2);
                }
                ul.append(li)
            }
            dom.append(ul);

        },
        dom: function (name, content, levels) {
            levels = levels || 1;
            if (levels == 1) {
                return `<div class="title">
                            <span>${name}</span>
                            <small>${content}</small>
                            <i class="qf shop-arrow-down"></i>
                        </div>`
            }
            return `<div class="title">
                        <span>${name}</span>
                        <small>${content}</small>
                        <button type="button" class="btn btn-warning">弹窗</button>
                    </div>
                    `
        },
        lazyLoding() {
            const length = this.$ul.each(function () {
                var length = $(this).children('li').length;
                if (length > 2) {
                    //让多于的li隐藏   
                    $(this).append('<li class="load-more">加载更多</li>');
                }
            });
            $('.load-more').on('click', function () {
                $(this).css('display', 'none');

            });
        }

    }
})()
class menuTree {
    constructor() {

    }
    //添加数据   
    // 相同样式和属性,递归
    // insertData(data) {
    //     var frag = document.createDocumentFragment();
    //     function createDom(dom, data) {
    //         var ul = document.createElement('ul');
    //         data.forEach((item, index) => {
    //             var li = document.createElement('li');
    //             var div = document.createElement('div');
    //             div.innerHTML = item.name + '<i class="qf qf-shop-reduce"></i>';
    //             li.appendChild(div);
    //             ul.appendChild(li);
    //             // 如果存在child
    //             if(item.child) {
    //                 createDom(li, item.child);
    //             }
    //         })
    //         dom.appendChild(ul);
    //     }
    //     createDom(frag, data);
    //     console.log(this.$target);
    //     this.$target[0].appendChild(frag);
    // }
}