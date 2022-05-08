// Создать функцию для подсчета кол-ва свойств в объекте
function count(obj: { Jek: string; Peeter: string; Anna: string }) {
    return Object.keys(obj).length
}

const group = {
    Jek: '18',
    Peeter: '20',
    Anna: '27'
}
console.log(count(group)) // 3
