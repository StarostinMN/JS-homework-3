/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */

let salaryBeforeTaxes = Number(prompt('Введите размер заработной платы до вычета налогов'));

(salaryBeforeTaxes != salaryBeforeTaxes || salaryBeforeTaxes == 0) ? (alert('Вы ничего не ввели или ввели неверное значение')) : alert(`Размер заработной платы за вычетом налогов равен ${CalculateSalaryAfterTaxes(salaryBeforeTaxes)}`);

function CalculateSalaryAfterTaxes(money) {
    return money * 0.87;
}