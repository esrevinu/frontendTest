/**
 * Created by Administrator on 2016/9/21 0021.
 */
function Person(name){
    var _this = {};
    _this.sayHello = function () {
        alert("person say hello!"+_this._name);
    }
    _this._name = name;
    return _this;
}
function Student(name){
    var _this = Person(name);
    var supersay = _this.sayHello;
    _this.sayHello = function () {
        supersay.call(_this);
        alert("student say hello!"+_this._name);
    }
    return _this;
}
var s1 = Student("SVEN");
s1.sayHello();