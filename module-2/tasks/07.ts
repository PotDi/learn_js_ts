// Подсчитать средний возраст группы
function avgAge(group: Record<string, number>) : number {
    let sum = 0
    let count = 0
    for (let key in group) {
        sum += group[key]
        count++
    }
   // const len = Object.keys(group).length
    console.log('count = ', count)
    return (sum / count)
}

const group1 = {
    Jek: 18,
    Peeter: 20,
    Anna: 27
}
console.log(avgAge(group1)); //21.666666
