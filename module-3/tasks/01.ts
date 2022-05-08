// Написать функцию sum для суммирования всех переданных аргументов
function sum(num1: number, ...numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr)
}

console.log(sum(345,546,874))