// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле

//const page = new Page("Yandex", 'https://yandex.ru')
//page.open()

class Page {
    open() {
        throw new Error("Переход на страницу <Название> : <url>.")
    }
    url: string
    name: string
    constructor(url: string, name: string) {
        this.url = url
        this.name = name
    }
}
const page = new Page("Yandex", 'https://yandex.ru')
console.log(page)
page.open()

