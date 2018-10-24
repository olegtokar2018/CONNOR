let start = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
    budgetvalue = document.getElementsByClassName('budget-value'), //Получить все блоки в правой части программы через классы 
    daybudgetvalue = document.getElementsByClassName('daybudget-value'), //начиная с <div class="budget-value"></div> 
    levelvalue = document.getElementsByClassName('level-value'), //и заканчивая <div class="yearsavings-value"></div>)
    expensesvalue = document.getElementsByClassName('expenses-value'),
    optionalexpensesvalue = document.getElementsByClassName('optionalexpenses-value'),
    incomevalue = document.getElementsByClassName('income-value'),
    monthsavingsvalue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsvalue = document.getElementsByClassName('yearsavings-value'),
    expensesitem = document.getElementsByClassName('expenses-item'), //поля(input) c обязательными расходами через (class=”expenses-item”)
    expensesItemBtn = document.getElementsByTagName('button'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // необязат. расх. (optionalexpenses-item)(querySelectorAll)
    inputClassChooseIncome = document.querySelector('.choose-income'), //Получить поле статьи возможного дохода через querySelector
    inputSavings = document.getElementById('savings'), //чекбокс  через getElementById
    // inputSavings = document.querySelector('.input');  //чекбокс  через querySelector - НЕ ПОЛУЧИЛОСЬ!!!!!
    inputClassChooseSum = document.querySelector('.choose-sum'),
    inputClassChoosePercent = document.querySelector('.choose-percent'),
    inputClassYearValue = document.querySelector('.year-value'),
    inputClassMonthValue = document.querySelector('.month-value'),
    inputClassDayValue = document.querySelector('.day-value');



console.log(start); //Получить кнопку "Начать расчет" через id
console.log(budgetvalue); //Получить все блоки в правой части программы через классы (которые имеют класс название-value, 
console.log(daybudgetvalue); //начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)*/
console.log(levelvalue);
console.log(expensesvalue);
console.log(optionalexpensesvalue);
console.log(incomevalue);
console.log(monthsavingsvalue);
console.log(yearsavingsvalue);
console.log(expensesitem[0]); //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
console.log(expensesitem[1]);
console.log(expensesitem[2]);
console.log(expensesitem[3]);
console.log(expensesItemBtn[0]); //кнопка “Утвердить”  через Tag,
console.log(expensesItemBtn[1]); //кнопка “Утвердить”   
console.log(expensesItemBtn[2]); //кнопка “Рассчитатьь” 
console.log(optionalExpensesItem[0]); //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
console.log(optionalExpensesItem[1]);
console.log(optionalExpensesItem[2]);
console.log(inputClassChooseIncome); //Получить поле статьи возможного дохода через querySelector 
console.log(inputSavings); //чекбокс  через querySelector   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(inputClassChooseSum); //сумма
console.log(inputClassChoosePercent); //процент
console.log(inputClassYearValue); //год
console.log(inputClassMonthValue); //месяц
console.log(inputClassDayValue); //день