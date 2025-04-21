// 1. Hoisting переменных

console.log(a); // будет undefined потому что переменная создалась но значения пока в ней нету
var a = 5;



console.log(b); // вызовет ошибку потому что нет такой переменной
let b = 10;


console.log(c); // вызовет ошибку потому что нет такой переменной
const c = 15;


// 2. Hoisting функций

sayHi(); // выведет "Привет" потому что с начала создаеться функфия потом вызов

function sayHi() {
    console.log("Привет!");
}


sayBye(); // будет ошибка потому что сначала осуществляеться вызов функции которой еще не существует а после вызова создаеться только функция

let sayBye = function () {
    console.log("Пока!");
}


// 3. Область видимости

let name = "Daniil";

function sayName() {
    let name = "Max";
    console.log(name);
}

sayName(); // выведет "Max" так как в локальной видимости первое доступно name = "Max"
console.log(name); // выведет "Daniil" так как это в области видимости а то что в функции это есть name это закрыто 


// 4. Блочная область видимости

{
    let message = "Hello from block";
    console.log(message); // работает ибо мы этот кусок кода сделали отдельным блоком 
}

console.log(message); // ошибка потому что в области видимочти ничего нету то что в скобках это отдельный блок кода


// 5. Замыкание (по желанию)

function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    }
  }
  
  const counter = createCounter();
  
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3

  // count постоянно перезаписываться после вызова функции counter