/**
 * Created by Administrator on 2016/9/21 0021.
 */
/*1.
var person = {
    name:"sven",
    age:27,
    eat:function () {
        alert("eat");
    }
}
*/
/*2.
function Person(){

}
Person.prototype = {
    name:"sven",
    age:27,
    eat:function(){
        alert("eat");
    }
}
var p = new Person();
*/
(function () {
    var n="WTF";
    function Person(name){
        this._name = name;
    }
    Person.prototype.eat=function () {
        alert("person-eat "+this._name + n);
    }
    window.Person = Person;
}());
(function () {
    function Student(name){
        this._name = name;
    }
    Student.prototype = new Person();
    var global = Student.prototype.eat;
    Student.prototype.eat = function () {
        global.call(this);
        alert("student-eat "+this._name);
    }
    window.Student = Student;
}());

var student = new Student("SVEN");
student.eat();