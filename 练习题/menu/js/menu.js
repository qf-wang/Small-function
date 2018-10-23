var menu = (function () {
    return {
        init() {
            this.$ulbox = $('.set-menu');
            // 菜单栏中显示的标题
            this.getData().then(data => {
                this.data = data;
                this.insertLazyData(this.$ulbox, data, 1);
                this.$ul = this.$ulbox.find('ul');
                this.events();
            })
        },
        events() {
            var _this = this;
            this.$ulbox.on("click", "li:has(ul)>.title",function () {
                $(this).next().slideToggle();
                $(this).children("i").toggleClass("shop-arrow-down").toggleClass("shop-arrow-up");
            })
            this.$ulbox.on('click', '.title .btn', function () {
                // 调用弹窗,显示
                var model = new Model();
                // 括号内传入展示内容
                var parent = $(this).closest('li');
                var parent2 = parent.closest('li')
                console.log(parent2)
                model.show(`${parent.parent().parent().index()}-${parent.index()}`);
            })
            this.$ulbox.on('click', '.load-more',function () {
                //  获取索引找到对应的数据
                if($(this).attr('data-lever') == 1) {
                    _this.insertData(_this.$ulbox, _this.data.slice(2), 1);
                } else {
                    var i = $(this).parent().parent().index();
                    _this.insertData($(this).parent(), _this.data[i].child.slice(2), 2);
                }
                $(this).remove();
            });
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
            for (var i = 0; i < data.length; i++) {
                let li = $('<li></li>');
                let liContent = this.dom(data[i].name, data[i].content, levels);
                li.append(liContent);
                if (data[0].child) {
                    let ul = $('<ul></ul>');
                    this.insertLazyData(ul, data[i].child, 2);
                    li.append(ul);
                }
                dom.append(li)
            }
        },
        insertLazyData(dom, data, levels) {
            // let ul = $('<ul></ul>');
            // ul.className = 'menu';
            // debugger
            var length = data.length > 2 ? 2 : data.length;
            for (var i = 0; i < length; i++) {
                let li = $('<li></li>');
                let liContent = this.dom(data[i].name, data[i].content, levels);
                li.append(liContent);
                if (data[0].child) {
                    let ul = $('<ul></ul>');
                    this.insertLazyData(ul, data[i].child, 2);
                    li.append(ul);
                }
                dom.append(li)
            }
            if(data.length > 2)
                dom.append(`<li class="load-more" data-lever=${levels}>加载更多</li>`);

            // dom.append(ul);

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

        }

    }
})()