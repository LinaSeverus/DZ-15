'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function sortElements(arr) {

    if (arr.length === 0) return console.log('Массив arr пуст');

    let exampleArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            continue
        } else {
            exampleArr.push(arr[i]);
        }
    }

    if (exampleArr.length === 0) {
        return console.log('Ошибка, массив пуст!');
    } else {
        console.log(exampleArr);
    }
}

sortElements(arr);

