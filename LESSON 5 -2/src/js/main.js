let start = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
    budgetvalue = document.getElementsByClassName('budget-value')[0], //Получить все блоки в правой части программы через классы 
    daybudgetvalue = document.getElementsByClassName('daybudget-value')[0], //начиная с <div class="budget-value"></div> 
    levelvalue = document.getElementsByClassName('level-value')[0], //и заканчивая <div class="yearsavings-value"></div>)
    expensesvalue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesvalue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomevalue = document.getElementsByClassName('income-value')[0],
    monthsavingsvalue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsvalue = document.getElementsByClassName('yearsavings-value')[0],
    expensesitem = document.getElementsByClassName('expenses-item'), //поля(input) c обязательными расходами через (class=”expenses-item”)
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // необязат. расх. (optionalexpenses-item)(querySelectorAll)
    inputClassChooseIncome = document.querySelector('.choose-income'), //Получить поле статьи возможного дохода через querySelector
    inputSavings = document.querySelector('#savings'), //чекбокс  через querySelector -  ПОЛУЧИЛОСЬ!!!!!
    inputClassChooseSum = document.querySelector('.choose-sum'),
    inputClassChoosePercent = document.querySelector('.choose-percent'),
    inputClassYearValue = document.querySelector('.year-value'),
    inputClassMonthValue = document.querySelector('.month-value'),
    inputClassDayValue = document.querySelector('.day-value');


console.log(start); //Получить кнопку "Начать расчет" через id
console.log(budgetvalue); //Получить все блоки в правой части программы 
console.log(daybudgetvalue); //через классы (которые имеют класс название-value, 
console.log(levelvalue); //начиная с <div class="budget-value"></div> 
console.log(expensesvalue); //и заканчивая <div class="yearsavings-value"></div>)*/
console.log(optionalexpensesvalue);
console.log(incomevalue);
console.log(monthsavingsvalue);
console.log(yearsavingsvalue);
console.log(expensesitem[0]); //Получить поля(input) c обязательными расходами через класс. 
console.log(expensesitem[1]); //(class=”expenses-item”)
console.log(expensesitem[2]);
console.log(expensesitem[3]);
console.log(expensesItemBtn); //кнопка “Утвердить”  через Tag,
console.log(optionalExpensesBtn); //кнопка “Утвердить”   
console.log(countBudgetBtn); //кнопка “Рассчитатьь” 
console.log(optionalExpensesItem[0]); //поля для ввода необязательных расходов (optionalexpenses-item) 
console.log(optionalExpensesItem[1]); //при пом. querySelectorAll
console.log(optionalExpensesItem[2]);
console.log(inputClassChooseIncome); //Получить поле статьи возможного дохода через querySelector 
console.log(inputSavings); //чекбокс  через querySelector   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(inputClassChooseSum); //сумма
console.log(inputClassChoosePercent); //процент
console.log(inputClassYearValue); //год
console.log(inputClassMonthValue); //месяц
console.log(inputClassDayValue); //день