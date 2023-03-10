"use strict";

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 150000
// };

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;
    
//     data.shops.forEach(shop => {
//         square += shop.length * shop.width;
//     });

//     volume = data.height * square;

//    return data.budget - (volume * data.moneyPer1m3) >= 0 ? "Бюджета достаточно" : "Бюджета недостаточно";
// }

// console.log(isBudgetEnough(shoppingMallData));


// const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Takesi"];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }       
//     }
//     return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`];
// }

// console.log(sortStudentsByGroups(students));


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена выше средней';
    } else {
        return 'Цена ниже средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[3], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);


