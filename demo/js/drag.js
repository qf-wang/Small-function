var drag = (function() {
    var $btn = $('.closeBtn'),
    $cover = $('.cover'),
    $title = $('.title');
    return {
        init() {
            this.event()
        },
        event() {
            var _this = this;
            $btn.onclick = function() {
                $cover.style.display = 'none';
            }
            $title.onmousedown = function(ev) {
                ev.preventDefault();
                var _this = this;
                ev = ev || window.event;
                var _x =ev.pageX - this.parentNode.offsetLeft,
                _y = ev.pageY - this.parentNode.offsetTop;
    
                document.onmousemove = function(ev) {
                    ev = ev = window.event;
                    var  x = ev.pageX - _x;
                    var y = ev.pageY - _y;
                    _this.parentNode.style.left = x + 'px';
                    _this.parentNode.style.top = y + 'px';
    
                }
            }
            document.onmouseup = function() {
                document.onmousemove = null;
            }
        }
    }
    
}())
function $(ele) {
    return document.querySelector(ele);
}

