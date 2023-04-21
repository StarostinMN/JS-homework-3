/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */


const numA = Number(prompt('Введите первое число'));
const numB = Number(prompt('Введите второе число'));

console.log(`Сумма чисел: ${sum(numA, numB)}`);
console.log(`Произведение чисел: ${mult(numA, numB)}`);
console.log(`Разность между большим и меньшим числом: ${dif(numA, numB)}`);
console.log(`Частное от деления большего числа на меньшее: ${div(numA, numB)}`);

function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function dif(a, b) {
    if (a > b) {
        return a - b;
    }
    else { return b - a };
}

function div(a, b) {
    if (a > b) {
        return a / b;
    }
    else { return b / a };
}