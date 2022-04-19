// Создать функцию конструктор для создания пользователя с полями name, age. Добавить метод toString, который выводит данные в строку
// Эту задачу делаем на Javascript
function User(name, age){
    this.name = name;
    this.age = age;
    this.toString = function(){
       // console.log(this.name, this.age);
       console.log(this);

    }  
}
const user = new User('Name', 18);
user.toString() //Name, 18

//function fn () {

//}

// const fn2 = function(){

// }

// const fn3 = () => {}