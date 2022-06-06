// Добавить в объект функцию toString, которая выводит имя и возраст
export{}
const user = {
    name: "UserName",
    age: 18,
    toString() {
        return `{name: "${this.name}", age: "${this.age}"}`
    }
}
console.log(user.name, user.age)