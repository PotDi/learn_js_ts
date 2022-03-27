// Дописать функцию для подсчета суммы нечетных чисел в массиве
function sumOdd(arr: number[]): number {
    let sum = 0
    for (let array of arr ) {
        if (array % 2 === 1) { //насколько я правильно понял??
            sum += array
        }
    }
    return sum
}

const nums = [1, 2, 3]
console.log(sumOdd(nums)) // 4
