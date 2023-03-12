"use strict";


const arr = [1, 5, -7, 132, 432, 3, 6];

function getMaxOfArray(numArray) {
    return Math.min.apply(null, numArray);
}


console.log(getMaxOfArray(arr));