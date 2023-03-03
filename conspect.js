"use strict";

// let number = 5;
// number = 10;

// console.log(number);

// const obj = {
// 	name:  "Max",
// 	age: 33,
// 	inMarrid: true
// };

// console.log(obj.inMarrid);

// let arr = ["oranje.png", "apple.jpg", 4, {}, [], "banan.bmp"]; // массив это частный случай объекта

// console.log(arr[7]); // значение массива которое не объявлено существует внутри кода и выводиться как ubdefined


// Разница между массива и объектами, и неочевидные синтаксические возможности 

// const arr = ["a","b","c"];
// const arrObj = {
// 	0: "a",
// 	1: "b",
// 	2: "c"
// };  // массив очень похож на объект где в качестве ключа выступает индекс массива 

// в качестве ключа объекта не рекомендованно использовать тип данных число.

// alert("hello");

// const result = confirm("are yure here ?"); // даные полученные от пользователя передаються в переменную как тип данных boolean
// console.log(result);

// const answer = prompt("Вам есть 18 ?", ""); // даные полученные от пользователя передаються в переменную как тип данных string  но если перед prompt установить оператор + то тип данных будет число
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt("Как ваше имя ?");
// answers[1] = prompt("Укажите вашу Фамилию");
// answers[2] = +prompt("Укажите ваш возвраст");

// console.log(typeof(answers));

// console.log(typeof(null)); тип данных null имеет тип данных object и это признаная ошибка 
// такие команды как confir, aler, prompt сущиствуют только внутри брвузера, в консоли они не выполняються !!!

// Интерполяция 

// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);

// const user = prompt("Как тебя зовут", "");
// alert(`Привет, ${user}!`);

// Операторы JS

// console.log("arr" + " - object"); //Конкатенация - Объединение строк в JavaScript использует оператор плюс (+)
// console.log(4 + +"8"); //Унарный плюс преобразует строку в число, если это возможно

// let increment = 10,
//     decrement = 10;

//     // increment++; //инкремент постфиксный вариант, сначало вовращает старое значение и после этого произврдит добавление
//     // decrement--; //декремент
    
//     // ++increment; //инкремент префиксный вариант, сначало производит добавление, а после возвращает результат
//     // --decrement; //декремент

// // console.log(increment++);
// // console.log(decrement--);
// console.log(++increment);
// console.log(--decrement);

// console.log(5%2); // деление с остатком

// console.log(4*2 == 8); // == оператор равенства, результат выполнения кода true
// console.log(4*2 == "8"); // обычное равенство сравние по значению, но не по типу данных результат выполнения кода true
// console.log(4*2 === "8"); // === оператор строгого равенства который сравнивает не только значения, но и тип данных, результат выполнения кода false
// console.log(2 + 2 * 2 != 8); // != оператор, не равен сравнивает числа по значению, !== строгое не равенство, сравнивает по значению и по типу данных

// // && // оператор "и" возыращает true только когда все условая true 
// // || // оператор "или" возвращает true когда хотябы одно из условий соответсвует true

// const isChecked = false,
// 	isClosed = true;

// console.log(!isChecked && isClosed); // ! - оператор отрицания, в первой переменной значение false, но благодаря операторй "! отрицания" значение меняется на true


// Условия!!!

// const sum = 49;

// // if (sum < 49) {
// // 	console.log("Error");
// // } else if (sum > 100) {
// // 	console.log("Fatal error");
// // } else {
// // 	console.log("Not bad!");
// // }

// // (sum === 51) ? console.log("Ok!") : console.log("Error");

// switch (sum) {
// 	case 49:
// 		console.log("No!");
// 		break;
// 	case 100:
// 		console.log("No again!");
// 		break;
// 	case 50:
// 		console.log("Yes!I do it");
// 		break;
// 	default:
// 		console.log("Not to day!");
// 		break;	
// }

// Логические операторы

// && логический оператор "и" в логическом контексте возвращает true если все условия true
// || логический оператор "или" в логичском контексте возвращает true если хотя бы одно условие true 

// const hamberger = 5;
// const fries = 0;

// if (hamberger && fries) {
// 	console.log("I'm full!");
// } else {
//     console.log("I'm very angry");
// }

// console.log((hamberger && fries)); // результат логических операций это логическое булёвое значение!
// динамичесеская типизация в JS есть пять сущностей которые в логическом контексте всегда будут false "ноль, пустая строка без пробела '', null, undefined, NaN"


// console.log(hamberger === 3 && cola && fries); // оператор && возыращает первое ложное значение на котором он остановился, а если все аргументы правдивые то он вернёт последнее true

// console.log(1 && 0); // вернёт 0 так как 0 это первый ложный аргумент 
// console.log(1 && 5); // здесь всё аргументы true и поэтому возвращается 5 так как это последний true аргумент 
// console.log(null && 5); // здесь возвращается null так как оператор && возвращает первое ложное значение на которое наткнулся
// console.log(0 && "asd"); // здесь вернёт 0 так как 0 это всегда false, а как мы знаем оператор && возвращает первое ложное значение 

// const hamberger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// // console.log(hamberger === 3 && cola === 2 || fries === 3 && nuggets);

// if (hamberger === 3 && cola === 2 || fries === 3 && nuggets) {  // логический оператор || "или" возвращает первое true на которое наткнётся, если всё аргументы false то возвращается последнее ложное значение.
// 	console.log("I'm full!");
// } else {
// 	console.log("I'm very angry");
// }


// Цыклы !

// let num = 50;

// // while (num <= 55) {    // выполнять действие пока условие в скобках выполняется 
// // 	console.log(num);
// // 	num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;


// // if (hamburger || cola || fries === 3 || nuggets) {
// //    console.log('Done!');
// // }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
//     console.log("error");
// }

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for ( let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first; // метка first и команда continue останавливает цикл и возвращает его к месту метки в нашем случае к верхнему циклц, метки нужно называть осознано так же как и переменные 
//             console.log(`Third level: ${k}`);
//         }
// 	}
// }

// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i)
//     }
    
// }
// firstTask();

// function secondTask() {
//     for ( let i = 20; i > 10; i--) {
//         if (i === 13) {
//             break;
//         }
//         console.log(i);
//     }
    
// }

// secondTask();

// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if ( i % 2 === 0) {
//             console.log(i);
//         }
//     }
    
// }

// thirdTask();

// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }


// let num = 2;

// while (num <= 16) {
//     if (num % 2 === 0) {
//         num++;
//         continue;
//     } else {
//         console.log(num);
//     }
//     num++;
// } 

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
    
// }

// fifthTask();

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
    
    
//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, "Shopping", 20, "Homework"];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === "number") {
//            data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === "string") {
//             data[i] = `${data[i]} - done`;
//         }
//     }
    
    
//     console.log(data);
//     return data;
// }

// secondTask();

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, "Shopping", 20, "Homework"];
//     const result = [];
//     for (let i = data.length - 1; i >= 0; i--) {
//         result.push(data[i]);
//     }
//     console.log(result);
//     return result;
// }

// thirdTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();

const lines = 5;
let result = "";

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

for (let i = 0;)