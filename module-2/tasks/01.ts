// Вывести список ролей через for
export{}

const roles = ['owner', 'admin', 'reviewer']
for (const index in roles) {
    console .log(index, roles[index]) //не совсем понятно как это работает
}
