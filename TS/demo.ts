class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + " " + lastName;
  }
  getAge(){}
}
var stu = new Student('王京', '郑甜');