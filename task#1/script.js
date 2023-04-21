/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */


function getCubing(number) {
    return (number ** 3);
}

const numberA = 2;
const numberB = 3;

console.log(`${numberA}^3 + ${numberB}^3  = ${getCubing(numberA) + getCubing(numberB)}`);