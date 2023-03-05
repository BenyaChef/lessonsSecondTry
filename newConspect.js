"use strict";

// Callback функция. Callback это функция которая длжна быть выполнена после того как другая функция завершила своё выполнение 
// Callback позволяет нам быть увереными в том, что код не начнёт своё исполнение пока другой код не выполнен.

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log("Я прошёл это урок"); 
// }

// learnJS("JS", done); // передача постоянной функции в качстве callback функции.

// // learnJS("JavaScript", function () {
// //     console.log("Я прошёл это урок");  // передача ананимной функции, которая после выполнения исчезнит, в качестве callback функции.
// // });


// // Объкты, деструктуризация объектов
// // Объекты в JS это так называемые асициативные массивы 

// // const obj = new Object(); // пример создания объкта, но лучше использовать {круглые скобки}

// // *Примечание, прямых констант в js не существует!!!

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; // деструктуризация объекта. Мы вытащили ключи вложеного объекта в качестве отдельной переменной 

// // console.log(Object.keys(options)); // метод объкта котрые создаёт массив ключей объекта!
// // console.log(Object.keys(options).length); // так как у объекта нет свойства length то вот таким способом мы может узнать кол-во ключей в объекте 

// const arrObj = Object.keys(options);
// console.log(arrObj);

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
// Псевдо массив имеет структуру как обычный массив, но при этом он не имеет методов ! 

const arr = [1, 2, 13, 6, 44];
arr.sort(compareNum); // числа тоже сортирует как строки сравнивая по знакаво, но при применение callback функции compareNum сортирует правильно 
console.log(arr);
function compareNum (a, b) {
    return a - b;
}
// arr[99] = 0; // это нарушение логики массива, так как в массиве нарушаятся порядок и создётся пустые элементы.

// arr.forEach(function(item, i, arr) { 
//     console.log(`Под индексом ${i} находится элемент массива ${item}, внутри массива ${arr}`);
// }); // метод массива forEach проходится по каждаму элементу массива и применяет к каждому элементу callback функцию в которая принимает в себя 3 аргумента 1й аргумент это элемент массива 2й это индекс элемента 3й это ссылка на массив


// // console.log(arr.length); // функция lenght массива выводин кол-во элементов массива, но при этом выводит вот по такой фомуле, индекс последнего свойства + 1. Если у нас массив состоит из 5 элементов то он и выведит 5 вместо 4
// // console.log(arr);
// // arr.pop(); // метод массива удаляющий последний элемент массива 
// // arr.push(10);
// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) { 
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);  //у метода перебора массива for of есть + в том, что в это переборе можно использовать такие команды как continue и brea!
// }

// const str = prompt("", "");
// const product = str.split(", ");  // в переменную product приходят данные от пользователя по средствам переменной str и команды prompt, после этого мы их записываем как массив в переменную product c помощью метода split(), где в кавычка() указываем знак через какой они будут записаные
// product.sort(); // сортирует элементы массива, но при этом записывает их как строки
// console.log(product.join("; "));  // метод join позволяет склеить массив в строку с указание разделительного знака