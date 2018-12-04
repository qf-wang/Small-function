class WaterFall extends WaterFallBase {
  constructor(target) {
    super(target);
    this.create();
    this.imageData = []; //用来存储加载的数据,
    if(target.lazyLoad) this.lazyLoad();
    if(target.resize) this.resize();
  }
  create(words) {
    this.getData(words).then(data => {
      data = JSON.parse(data).data;
      this.imageData = data; //用来存储加载的数据
      this.insertData(data);
    });
  }
  update() {
    return this.getData().then(data => {
      data = JSON.parse(data).data;
      this.imageData.concat(data);
      this.insertData(data, true);
    });
  }
  // 获取数据
  getData(words) {
    var _default = {
      page_num: 1,
      page_size: 40,
      q: words
    }
    return sendAjax('https://dev.91jianke.com:1091/id_v2_5/search_img', {
      data: _default
    })
  }
  // 懒加载
  lazyLoad() {
    // 根据滚动轴剩余高度来判断
    const _this = this;
    let flag = true;
    this.$showBox.parentNode.addEventListener('scroll', function(e) {
      // debugger
      //  获取剩余高度  = 真实高度 - 滚动高度 - 盒子展示高度
      if(flag) {
        let height = this.scrollHeight - this.scrollTop - this.clientHeight;
        if(height < 100) {
          flag = false
          _this.update()
          .finally(_ => {
            console.log(true);
            flag = true;
          });
        } 
      }
      
    })
  }
  resize() {
    let timer = null;
    const _this = this;
    // 浏览器尺寸发生改变，改变布局重新渲染
    window.addEventListener('resize',function(e) {
      clearInterval(timer);
      timer = this.setTimeout(function() {
        // 重新初始化， 生成对应个数li
        _this.init();
        // 把刚才页面中的数据，重新渲染进去， 而不是重新请求数据
        _this.insertData(_this.imageData);
        // 可能页面变宽， 滚动条不存在了， 需要在额外获取数据
      }, 200)
    })
  }
}