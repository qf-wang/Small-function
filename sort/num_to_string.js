const toChineseNum = (num) => {
    const keys = ['零','一','二','三','四','五','六','七','八','九']
    var count = ['','十','百','千']
    var str ='';
    var nums = num.toString().split('').reverse();
    nums.map(function (a, index) {
        str = (keys[a]+ ( a==0?'': count[index>3 ? index-4 : index]))+(index=='4'?'万':'')+str 
    })
    return str.replace(/(零(?=零))|(零$)|(零(?=万))/g,'') 
  }

  var num = toChineseNum(50015001)
  console.log(num)
  