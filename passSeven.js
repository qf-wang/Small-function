function passSeven (max) {
    // 获取max是10的几次方， 得知是几位数，来判断到什么位数
    var length =  max.toString().length;
    for(var i = 1; i < max; i++) {
      for(var j = 0; j < length; j++) {
        // 循环，判断十百位.....上的数字是否为7
        if(Math.floor(i / (10 ** j) % 10) == 7) {
          break;
        }
      }
      if(i % 7 ==0 || j < length) {
        continue;
      }
      document.write(i + ' ')
    } 
 }
 passSeven(1000)