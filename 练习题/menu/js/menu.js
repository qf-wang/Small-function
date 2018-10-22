var menu = (function () {
    return {
        init() {
            this.$ulbox = $('.set-menu');
            // 菜单栏中显示的标题
            this.getData().then(data => {
                this.insertData(data);
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
            this.$title.on('click', '.btn', function() {
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
        insertData(data) {
            let ul = $('<ul class="menu"></ul>');
            // ul.className = 'menu';
            // debugger
            data.forEach((item, index) => {
                let li = $('<li></li>');
                let liContent = `<div class="title">
                                <span>${item.name}</span>
                                <small>${item.content}</small>
                                <i class="qf shop-arrow-down"></i>
                            </div>`;
                li.append(liContent);
                if (item.child) {
                    let ul = $('<ul></ul>');
                    item.child.forEach((item, index) => {
                        let li = $('<li></li>');
                        let liContent = `<div class="title">
                                                <span>二级菜单</span>
                                                <small>二级标题说明</small>
                                            <button type="button" class="btn btn-warning">弹窗</button>
                                        </div>
                                    `
                        li.append(liContent);
                        ul.append(li);
                    })
                    li.append(ul)
                }
                ul.append(li)
            })
            this.$ulbox.html(ul);

        },
        lazyLoding() {
            const length = this.$ul.each(function(){
              var length = $(this).children('li').length;
              if(length > 2) {
                  //让多于的li隐藏   
                  $(this).append('<li class="load-more">加载更多</li>');
              }
            });
            $('.load-more').on('click', function() {
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