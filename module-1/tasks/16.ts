// Создать функцию для генерации последовательность 1 3 5 7, сигнатура (n: Number) => string

const sequence = (n: number) => {
    return n
}

const answer = function (n: number) {
    return n
}

function anwr2 (n: number) {
    let str: string = ''
    
    for(let i = 1; i < n; i++) {
        if (i % 2 === 1) {
            str = str + String(i) + ' '
        }
    }
    return str
}

console.log(anwr2(8))