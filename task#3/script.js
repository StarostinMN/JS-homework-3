/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

const numA = Number(prompt('Введите первое число'));
const numB = Number(prompt('Введите второе число'));
const numC = Number(prompt('Введите третье число'));

function GetMaxOfNumbers(numberA, numberB, numberC) {
    let max = numberA;
    if (numberB > max) { max = numberB };
    if (numberC > max) { max = numberC };
    return max;
}

alert(`Максимальное из введенных чисел ${numA}, ${numB}, ${numC} равно ${GetMaxOfNumbers(numA, numB, numC)}`);