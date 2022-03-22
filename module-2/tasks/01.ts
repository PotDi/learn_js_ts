// Вывести список ролей через for
export{}

const roles = ['owner', 'admin', 'reviewer']
for (const index in roles) {
    console.log(index, roles[index]) //не совсем понятно как это работает
}

for (const role of roles) {
    console.log(role) //не совсем понятно как это работает
}
