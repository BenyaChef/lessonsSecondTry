"use strict";

// Динамическая типизация в JS

console.log(typeof(5 + "")); // конкретинация - сложение строки с чем-то, другим типом данных, на выходе мы получаем строку.

console.log(typeof(+"5")); // унарный плюч динамический типизирует строку с число!

console.log(typeof(parseInt("15px", 10)));// динамическая типизация через методы чисел


let answer = +prompt("Hello", ""); // метод prompt возвращает данные от пользователя в виде строки, но с помощью унарного плюса, мы вернём от него данные в виде числа. Все данные получаемые от пользователя это строки! 


// to boolean

// 0, "", null, undefinde, NaN в логическом контексте эти все значения являются false!Пустая строка будет false именно пустая без пробелов!
// пустые массивы, объекты в логическом контексте это true 

let switcher = null;

if (switcher) {
    console.log("Working");// условие не выполниться так как switcher = false ! 
}

console.log(typeof(!!"5"));// два знака отрицая преобразуют строку в булиновое значение!

// Замыкание и лексическое окружение ======================================================
//  Любая переменная это свойство объекта лексического окружения

function createCounter () {
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

console.log(result);
