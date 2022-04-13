// Подсчитать средний возраст группы
function avgAge(group: Record<string, number>) : number {
    let sum = 0
    for (let key in group) {
        sum += group[key]
    }
}
const group = {
    Jek: 18,
    Peeter: 20,
    Anna: 27
}
console.log(avgAge(group)); //21.666666
