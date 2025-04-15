// 1. Функция приветствия

function helloPeople(name) {
    return 'Привет, ' + name
}

console.log(helloPeople(prompt('ВВедите имя!')))


// 2. Функция сложения чисел

function addingNumbers(num1, num2) {

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        return "Вы ввели не числа"
    }
    return 'Сумма чисел: ' + (Number(num1) + Number(num2))
}

console.log(addingNumbers(prompt('Введите первое число'), prompt("введите второе число")))

const strFnAddingNumbers = (num1, num2) => {

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        return "Вы ввели не числа"
    }
    return 'Сумма чисел: ' + (Number(num1) + Number(num2))
}

console.log(strFnAddingNumbers(prompt('Введите первое число'), prompt("введите второе число")))


// 3. Функция проверки возраста

function agePeople(age) {
    if (isNaN(age) || age === '') {
        return "Вы ввели не возраст"
    } else if (age < 18) {
        return 'Доступ запрещен вам меньше 18-ти лет'
    } else {
        return 'Доступ разрешен'
    }
}

console.log(agePeople(prompt('Введите свой возраст')))


// 4. Callback-функция

function doAction(name, action) {
    action(name);
}

function newAction(name) {
    console.log("Привет, " + name)
}

doAction('Daniil', newAction)


// 5. Доп. задача на логику

const ARR = [1, 2, 3, 4]

let newArr = []

function multiplyByTwo(arr) {
    arr.map((num) => {
        newArr.push(num * 2)
    })
    console.log(newArr)
}

multiplyByTwo(ARR)