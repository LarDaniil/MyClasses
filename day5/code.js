// 1. Создать объект пользователя

const user = {
    name: "Daniil",
    age: 18,
    city: "Moscow",
    skills: ["HTML", "CSS", "JavaScript"]
}

console.log(user.name)
console.log(user.age)
console.log(user.city)
console.log(user.skills)

user.isStudent = true
delete user.city
user.skills.push('React')


// 2. Массив объектов пользователей

const users = [
    { name: "Daniil", age: 18 },
    { name: "Max", age: 20 },
    { name: "Dima", age: 17 },
    { name: "Artem", age: 21 }
]

let newArrName = []

users.map((user) => {
    newArrName.push(user.name)
})

let newArrAge = []

users.map((user) => {

    if (user.age >= 18) {
        newArrAge.push(user)
    }
})

let newArrNameMax = []

users.map((user) => {
    if (user.name === 'Max') {
        newArrNameMax.push(user)
    }
})


// 3. Деструктуризация

const user2 = {
    name: "Daniil",
    age: 18,
    city: "Moscow"
}

const { name, age, city } = user2;

console.log(name);
console.log(age);
console.log(city);


// 4. Доп. задание на логику

let objUsers = [
    { name: "Daniil", age: 18 },
    { name: "Max", age: 20 },
    { name: "Dima", age: 17 },
    { name: "Artem", age: 21 }
]

let newArrUsers = []

objUsers.map((user) => {
    newArrUsers.push("Имя: " + user.name, "Возраст: " + user.age)
})