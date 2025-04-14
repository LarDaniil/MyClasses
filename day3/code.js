// 1. Задание — Вывод имён из массива

const users = ["Daniil", "Max", "Dima", "Artem", "Kirill"];

for (let index = 0; index < users.length; index++) {
    console.log("метод for: ", users[index])
}

let i = 0
while (i < users.length) {
    console.log('метод while: ', users[i])
    i++
}

users.forEach(function (item) {
    console.log('метод forEach: ', item)
})


// 2. Задание — Добавить текст в имена

let newArr = []

users.map(function (user, index) {
    newArr.push('Привет, ' + user)
})

console.log(newArr)


// 3. Задание — Работа с массивом объектов

const people = [
    { name: "Daniil", age: 18 },
    { name: "Max", age: 17 },
    { name: "Dima", age: 20 },
    { name: "Artem", age: 16 },
    { name: "Kirill", age: 22 },
];

let newArrName = []
people.map(function (item) {
    newArrName.push(item.name)
})
console.log(newArrName)

let newArrAge = []
people.map((item) => {
    if (item.age >= 18) {
        newArrAge.push(item)
    }
})
console.log(newArrAge)

let newArrNameMax = []
people.map((item) => {
    if (item.name === 'Max') {
        newArrNameMax.push(item)
    }
})
console.log(newArrNameMax)