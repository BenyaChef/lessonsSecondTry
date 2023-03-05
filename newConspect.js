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
