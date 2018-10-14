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
    savings: true //свойство savings (выставляем его как false)
};

function chooseExpenses() {
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
}
chooseExpenses();

/*   Создать функцию для определения необязательных расходов (chooseOptExpenses):
Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
Записать ответы в объект optionalExpenses в формате Номер - Ответ.
optionalExpenses:  “ответ на вопрос”
Вызывать функции не обязательно.*/

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов ?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && typeof (a) != '' && a.length < 50) {
            console.log('done');
            appData.optionalExpenses[a] = a;
        }

    }
}

chooseOptExpenses();



//   Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();



//   Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)

function detectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }

}
detectLevel();

// Функция для рассчета накоплений  с депозита если он есть 

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма ваших накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в мtсяц с вашего депозита: " + appData.monthIncome);

    }
}

checkSavings();
