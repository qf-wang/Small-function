// 行参类型，函数返回值类型，有几个行参传递几个实参
function getName(name:string):string {
  return name;
}

getName('str');
// 没有返回值
function setName(name:string):void {
  // return name;
}

// 选填参数和默认值
function chooseGirl(age: number = 18, stature?:string) {

}