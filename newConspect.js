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

// const arr = [1, 2, 13, 6, 44];
// arr.sort(compareNum); // числа тоже сортирует как строки сравнивая по знакаво, но при применение callback функции compareNum сортирует правильно 
// console.log(arr);
// function compareNum (a, b) {
//     return a - b;
// }
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
//     console.log(value);  //у метода перебора массива for of есть + в том, что в это переборе можно использовать такие команды как continue и break!
// }

// const str = prompt("", "");
// const product = str.split(", ");  // в переменную product приходят данные от пользователя по средствам переменной str и команды prompt, после этого мы их записываем как массив в переменную product c помощью метода split(), где в кавычка() указываем знак через какой они будут записаные
// product.sort(); // сортирует элементы массива, но при этом записывает их как строки
// console.log(product.join("; "));  // метод join позволяет склеить массив в строку с указание разделительного знака

// Передача данных по ссылке или по значению ! 
// когда мы работаем с приметивными данными (строки, числа) то они передаются по значению, но когда мы работаем с объектами (объкты, массивы, функции) ---
// то передача идёт не по значению, а по ссылке ! 
// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj; // здесь мы не создали новый объект идентичный исходному, а передали ссылку на исходный объект 

// // copy.a = 10; //  когда мы в этом объкте поменяли значения ключа "а" то это же праизошлё и в объкте "obj"

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {   // способ кланирования объекта, поверхностный ! 
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;
// // newNumbers.c.x = 10; // значение ключа "х" вложенного объекта "с", меняется в исходном и кланированом объекте. Нужно применять глубокий способ кланирования

// // console.log(newNumbers);
// // console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add)); // таким образом мы совместили два объекта, создав третий поверхностный объект!
// const clone = Object.assign({}, add); // так мы создали поверхностную копию объкта 

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice(); // создаём поверхностную копию массива! 

// newArray[1] = "qwerty";
// console.log(newArray);
// console.log(oldArray);


// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       internet = [...video, ...blogs, "vk", "fb"]; // спред оператор "..." позволяет развернуть структуры на отдельные элементы

//       console.log(internet);


//       function log (a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//       }

//       const num = [2, 7, 6];

//       log(...num); // в данном случае в функцию мы вместо аргументов передаём массив, который разварачивается благодаря спред оператору

//       const array = ["a", "b"];
//       const newArr = [...array]; // создание поверхностнной копии благодаря спред оператору 

//       const q = {
//         one: 1,
//         two: 2
//       };

//       const newQ = {...q}; // создание поверхностной копии объкта благодаря спред оператору !!! 

// const array = [1, 2, 3, 4];

// //       function grow(x){
// //         for (let key of x) {
// //             const result = key * key;
// //             console.log(result);
// //         }

// // }

// const grow = x => {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//       res *= x[i];
//     }
//     return res;
//   };

// console.log(grow(array));


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ["ru", "eng"],
        programmingLangs: {
            js: "20%",
            php: "10%",
            ruby: "30%"
        },
        exp: "1 month"
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} лет и я владею языка:`;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        
        console.log(str);
        return str;
        
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// function showExperience(plan) {
//     let {exp} = plan.skills;
//     console.log(exp);
//     return exp;
// }

// showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = "";
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`; // оператор += добовляет и присваевает к переменной результат работы цикла, тоесть сначало цикл добавляет результат первой пробежки, а потом присваевает результат второй пробежки, но при этом старый результат сохраняется 
    }
    console.log(str);
    return str;
}


showProgrammingLangs(personalPlanPeter);

const arrNull = [];
const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//     let str = "";

//     arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из:";

//     arr.forEach(function(members) {
//         str += ` ${members}`;
//     });
//     return str;
// }
// console.log(showFamily(arrNull));


// function showFamily(arr) {
    
//     if (arr.length === 0) {
//        return "Семья пуста";
//         } else {
//         let str = "Семья состоит из:";
//         for (let i of arr) {
//             str += ` ${i}`;
//         }
//         return str;
//     }
    
// }

// console.log(showFamily(arrNull));

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];


// function standardizeStrings(arr) {
//     let str = "";
//     for (let i of arr) {
//         str += `${i.toLowerCase()} \n`;
//     }
//     return str;
// }

// console.log(standardizeStrings(favoriteCities));

// const num = 5;
// const someString = "This is some strange string";

// function reverse(str) {
//     if (typeof(str) === "string") {
//     let strReverse = str.split("").reverse().join("");
//     return strReverse;
// } else {
//     return "Ошибка";
// }
// }

// console.log(reverse(num));



// // var str = "фывапролд";
// // var strReverse = str.split("").reverse().join("");

// // console.log(strReverse);


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = "";
//     arr.length === 0 ? str = "Нет доступных валют" : "Доступные валюты:\n";

//     arr.forEach(function(curr, i){
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }        
//     });

//     return str;
// }

// console.log(availableCurr([...additionalCurrencies,...baseCurrencies], "USD"));


//   ООП



const soldier = {
    health: 400,
    armour: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const jonh = Object.create(soldier);// мы создаём новый объект jonh который будет прототипно наследоваться от soldier!

// const jonh = {
//     health: 100
// };

// Object.setPrototypeOf(jonh, soldier); // мы установили прототип для john от солдата !

jonh.sayHello();


console.log("a">"b");


//  чет лень одолела ( =
 