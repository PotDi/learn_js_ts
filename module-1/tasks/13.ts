// Доработать таблицы истинности. Сделать вывод через for. Не использовать массивы!!!
export{}

console.log(`a\tb\ta&&b\ta||b\t!a\t!b`)
for(let i = 0; i < 4; i++) {
    const a = i === 2 || i === 3
    const b = i === 1 || i === 3
    console.log(`${a}\t${b}\t${a && b}`)
}