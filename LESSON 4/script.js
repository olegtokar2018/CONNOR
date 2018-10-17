//   урок 4 (16.10.2018)

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате  YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", ' ');
    }
}
start();

let appData = {
    budget: money, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами - optionalExpenses (оставляем пока пустым) 
    income: [], //массив данных с доп. доходом - income (оставляем пока пустым)
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", '');
            let b = prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма ваших накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в мtсяц с вашего депозита: " + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов ?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && typeof (a) != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[i + 1] = a;
            }

        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

        for (i = 0; i < 1; i++) {
            if ((typeof (items)) === 'string' && (items) != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
                appData.income.forEach(function (items, i, arr)) {
                    alert('Способы дополнительного заработка:' + i + ': ' + items + '(массив: ' + arr + ')');
                }
            } else {
                i = i - 1;
                items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
            }
        }
    }

};