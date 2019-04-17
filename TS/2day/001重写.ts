class  Me {
  public name:string = 'wj';
  public age:number;
  constructor(age: number) {
    this.age = age;
  }
  public hobby():string {
    console.log('我也执行了');
    return '学习编程'
  }
}


class Son extends Me {
  public height:number = 183;
  public bussiness():void{
    console.log('成为了商人');
  }
  // 重写hobby方法
  public hobby():string {
    super.hobby(); // 调用父类方法
    return '学习医术';
  }
}

var son:Son = new Son(18);
console.log(son.age);
console.log(son.name);
console.log(son.hobby());
