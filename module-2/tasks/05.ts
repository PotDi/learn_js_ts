// Написать функцию, которая убирает дублирование в массиве строк
function uniq(arr: string[]): string[] {
    let result:string[] = [] //объявляем массив в который будем складывать результат
    for (let usr of arr) {
        if (!result.includes(usr)) {
            result.push(usr);
        }
    }
    return result
}

const users = ['user1', 'user2', 'user3', 'user2']
console.log(uniq(users)) //['user1', 'user2', 'user3']
