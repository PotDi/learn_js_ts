// Создать функцию для суммирования двух значений sum2(). Функция должна возвращать функцию которая возвращает сумму двух чисел
// Пример sum2(40)(2) // 42
 
export{}

function sum2(...numbers: number[]) {
    return numbers.reduce((acc,curr) => acc + curr)
}
console.log(sum2(40,2))