"use strict";

// Callback функция. Callback это функция которая длжна быть выполнена после того как другая функция завершила своё выполнение 
// Callback позволяет нам быть увереными в том, что код не начнёт своё исполнение пока другой код не выполнен.

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done () {
    console.log("Я прошёл это урок"); 
}

learnJS("JS", done); // передача постоянной функции в качстве callback функции.

// learnJS("JavaScript", function () {
//     console.log("Я прошёл это урок");  // передача ананимной функции, которая после выполнения исчезнит, в качестве callback функции.
// });


// Объкты, деструктуризация объектов
// Объекты в JS это так называемые асициативные массивы 

// const obj = new Object(); // пример создания объкта, но лучше использовать {круглые скобки}

// *Примечание, прямых констант в js не существует!!!

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; // деструктуризация объекта. Мы вытащили ключи вложеного объекта в качестве отдельной переменной 

// console.log(Object.keys(options)); // метод объкта котрые создаёт массив ключей объекта!
// console.log(Object.keys(options).length); // так как у объекта нет свойства length то вот таким способом мы может узнать кол-во ключей в объекте 

const arrObj = Object.keys(options);
console.log(arrObj);

// delete options.name; // удаляет ключ: значение в объекте 
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for ( let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);      // перебор объкта в объекте, где в качестве ключей вложенного объкта выступает (options[key][key])
//         } 
//     } else {
//             console.log(`Свойство ${key} имеет значение ${options[key]}`);
//             counter++;
//     }                                                                       // метод перебора объкта, перебор работает столько раз сколько есть ключей!
//                                                                             // конструкция ${options[key]} позволяет получить значения ключей
// }
// console.log(counter);

// Массивы и псевдомассивы!