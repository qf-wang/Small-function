var Model = (function() {
  var instance = null;
  function Dialog() {
    var frag = document.createElement('div');
    frag.innerHTML = `<div class="model-dialog">
                <div class="model-content">
                  <div class="model-header">
                    <a href="javascript:;" class="close">x</a>
                    <h4 class="model-title">提示内容</h4>
                  </div>
                  <div class="model-body">

                  </div>
                  <div class="model-footer">
                    <button class="btn btn-danger" >关闭</button>
                  </div>
                </div>
              </div>`
      
    document.body.appendChild(frag);
    this.ele = document.querySelector('.model-dialog');
    this.$btn = this.ele.querySelector('.btn-danger');
    
    this.$btn.onclick = (function() {
      this.close()
    }).bind(this);
  }
  Dialog.prototype.show = function () {
    this.ele.style.display = 'flex';
  }
  Dialog.prototype.close = function () {
    this.ele.style.display = 'none';
  }
  return function () {
    if(!instance) {
      instance = new Dialog();
    }
    return instance;
  }
}())
