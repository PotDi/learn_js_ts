// Написать функцию которая меняет key и value местами. Гарантируется что в исходном объект value уникальны
export{}

function objectReverse(obj: Record<string, string>):Record<string, string> {
    Object.keys(objectReverse).forEach(value) {
        var key = objectReverse[value];
        obj[key] = value;
    return obj
}

}

const group = {
    Jek: '18',
    Peeter: '20',
    Anna: '27'
}
console.log(objectReverse(group))
