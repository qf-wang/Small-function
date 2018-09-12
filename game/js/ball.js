var ball = (function () {

    return {
        init: function(ele) {
            this.$ele = this.$ele || document.querySelector(ele);
            this.$zhuan = this.$ele.querySelector('.zhuan');
            this.$ban = this.$ele.querySelector('.ban');
            this.$ball = this.$ele.querySelector('.ball');
            this.timer = null;
            // 挡板小球居中

            // 小球的速度
            this.speedX = 5;
            this.speedY = -5;
            this.insert();
            this.event();
            this.$zhuanAll = this.$zhuan.querySelectorAll('.zhuan-item');
            this.start();
        },
        event: function() {
        	var _this = this;
            document.body.onkeydown = function(e) {
                e = e || window.event;
                var keyCode = e.keyCode || e.which;
                // 获取挡板的位置
                var x = _this.$ban.offsetLeft;
                // 向左键 
                if (keyCode == 37) {
                    x -= 20;
                    _this.banMove(x);
                } else if (keyCode == 39) {
                    // 像右键
                    x += 20;
                    _this.banMove(x);
                }
            }
        },
        start: function() {
            var maxX = this.$ele.clientWidth - this.$ball.offsetWidth;
            var maxY = this.$ele.clientHeight - this.$ball.offsetHeight - this.$ban.offsetHeight;
			var _this = this;
            this.timer = setInterval(function() {
                var x = _this.$ball.offsetLeft + _this.speedX;
                var y = _this.$ball.offsetTop + _this.speedY;
                // 边界检测
                if (x > maxX) {
                    x = maxX;
                    _this.speedX *= -1;
                } else if (x < 0) {
                    x = 0;
                    _this.speedX *= -1;
                }
                if (y < 0) {
                    y = 0;
                    _this.speedY *= -1;
                }
                _this.$ball.style.left = x + 'px';
                _this.$ball.style.top = y + 'px';

                // 运动的时候检测，如果碰见砖抵消并反转
                // debugger
                var flag = false;
                for(var i = 0; i < _this.$zhuanAll.length; i++) {
                    var bool = _this.collision(_this.$ball, _this.$zhuanAll[i]);
                    if(bool) {
                        flag = true;
                        _this.$zhuanAll[i].parentNode.removeChild(_this.$zhuanAll[i]);
                    }
                }
                // 一下碰撞多个， 位置只发生依次改变
                if(flag)
                    _this.speedY *= -1;

                // 挡板检测
                bool = _this.collision(_this.$ball, _this.$ban);
                if (bool) {
                    _this.speedY *= -1;
                    y = maxY;
                } else if( y > maxY + 20) {
                    console.log('游戏结束');
                    clearInterval(_this.timer);
                }
            }, 20)
        },
        end: function() {
            clearInterval(this.timer);
            // var text = confirm('游戏结束，是否重新开始？');
            // if(text) {
            //     // this.init();
            // }
        },
//      stop() {
//
//      },
        // 碰撞检测
        collision: function(obj, obj2) {
            var l1 = obj.offsetLeft,
                l2 = obj2.offsetLeft,
                t1 = obj.offsetTop,
                t2 = obj2.offsetTop,
                r1 = l1 + obj.offsetWidth,
                r2 = l2 + obj2.offsetWidth,
                b1 = t1 + obj.offsetHeight,
                b2 = t2 + obj2.offsetHeight;
            if (t1 > b2 || b1 < t2 || l1 > r2 || r1 < l2) {
                // 没有碰到
                return 0;
            }
            // 碰撞成功
            return 1;
        },
        banMove: function(x) {
            var maxX = this.$ele.clientWidth - this.$ban.offsetWidth;
            if (x > maxX) {
                x = maxX;
            } else if (x < 0) {
                x = 0;
            }
            this.$ban.style.left = x + 'px';
        },
        insert: function() {
            this.$zhuan.innerHTML = '';
            var frag = document.createDocumentFragment();
            for (var i = 0; i < 7; i++) {
                for (var j = 0; j < 10; j++) {
                    var $div = document.createElement('div');
                    $div.className = 'zhuan-item';
                    $div.style.width = this.$ele.offsetWidth / 10 + 'px';
                    $div.style.left = j * this.$ele.offsetWidth / 10 + 'px';
                    $div.style.top = i * 30 + 'px';
                    $div.style.backgroundColor = this.getColor();
                    frag.appendChild($div);
                }
            }
            this.$zhuan.appendChild(frag);
        },
        getColor: function() {
            var str = '#';
            for (var i = 0; i < 6; i++) {
                str += Math.floor(Math.random() * 16).toString(16);
            }
            return str;
        }
    }
}())
ball.init('.main')