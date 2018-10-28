let startbtn = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
    budgetvalue = document.getElementsByClassName('budget-value')[0], //Получить все блоки в правой части программы через классы 
    daybudgetvalue = document.getElementsByClassName('daybudget-value')[0], //начиная с <div class="budget-value"></div> 
    levelvalue = document.getElementsByClassName('level-value')[0], //и заканчивая <div class="yearsavings-value"></div>)
    expensesvalue = document.getElementsByClassName('expenses-value')[0], //обязательные расходы
    optionalexpensesvalue = document.getElementsByClassName('optionalexpenses-value')[0], //Возможные траты
    incomevalue = document.getElementsByClassName('income-value')[0], //Дополнительный доход
    monthsavingsvalue = document.getElementsByClassName('monthsavings-value')[0], //Накопления за 1 месяц
    yearsavingsvalue = document.getElementsByClassName('yearsavings-value')[0], //Накопления за 1 год

    expensesItem = document.getElementsByClassName('expenses-item'), //поля(input) c обязательными расходами через (class=”expenses-item”)
    expensesBtn = document.getElementsByTagName('button')[0], //Введите обязательные расходы - button Утвердить
    optionalExpensesBtn = document.getElementsByTagName('button')[1], //необязательные расходы - button Утвердить 
    countBudgetBtn = document.getElementsByTagName('button')[2], //Расчет дневного бюджета - button Рассчитать
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // необязат. расх. (optionalexpenses-item)(querySelectorAll)
    incomeItem = document.querySelector('.choose-income'), //Получить поле статьи возможного дохода через querySelector
    checkSavings = document.querySelector('#savings'), //чекбокс  через querySelector -  ПОЛУЧИЛОСЬ!!!!!
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    DayValue = document.querySelector('.day-value');


//   урок 6 (25.10.2018)
//   исправленный вариант (27.10.2018)




let sum = 0,
    money,
    time;

countBudgetBtn.disabled = true;

startbtn.addEventListener('click', function () {

    time = prompt('Введите дату в формате  YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", ' ');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetvalue.textContent = money.toFixed(); //округляем до цел.числа
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    DayValue.value = new Date(Date.parse(time)).getDate();
    countBudgetBtn.disabled = false;
});


expensesBtn.disabled = true;

for (let i = 0; i < expensesItem.length; i++) {
    expensesItem[i].addEventListener('input', function () {
        for (let j = 0; j < expensesItem.length; j++) {
            if (expensesItem[j].value != '') {
                expensesBtn.disabled = false;
            } else {
                expensesBtn.disabled = true;
            }
        }
    });
}

expensesBtn.addEventListener('click', function () {
    // let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (b)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {

            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesvalue.textContent = sum;
});


optionalExpensesBtn.disabled = true;

optionalExpensesItem[0].addEventListener('input', function () {

    if (optionalExpensesItem[0].value != '') {
        optionalExpensesBtn.disabled = false;
    } else {
        optionalExpensesBtn.disabled = true;
    }

});


optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesvalue.textContent += appData.optionalExpenses[i] + ' ';
    }
});


countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget -  sum) / 30).toFixed();
        daybudgetvalue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelvalue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelvalue.textContent = ("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            levelvalue.textContent = "Высокий уровень достатка";
        } else {
            levelvalue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetvalue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(',  ');
    incomevalue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1); //округляем до 1й десятой после запятой
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {

        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1); //округляем до 1й десятой после запятой
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами - optionalExpenses (оставляем пока пустым) 
    income: [], //массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false
};