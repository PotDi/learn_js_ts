// Скопировать объект в user2 использует спред оператор
export{}

const user = {
    name: "UserName",
    age: 42
}
const user2 = {...user, married: true}
console.log(user2)
