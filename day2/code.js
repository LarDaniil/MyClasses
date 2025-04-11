// Программа "Проверка возраста"

const agePerson = prompt()

if (agePerson < 18) {
    alert("Доступ запрещён")
} else if (agePerson >= 18) {
    alert("Добро пожаловать")
} else {
    alert("Введите корректный возраст")
}

// Программа "Проверка логина"

const namePerson = prompt()

if (namePerson === 'admin') {
    alert("Здравствуйте, Администратор!")
} else {
    alert(`Привет, ${namePerson}`)
}
