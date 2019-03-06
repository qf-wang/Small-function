var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + " " + lastName;
    }
    Student.prototype.getAge = function () { };
    return Student;
}());
var stu = new Student('王京', '郑甜');
