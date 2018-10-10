let money = +prompt("Ваш бюджет на месяц?", ' ');
let time = prompt('Введите дату в формате  YYYY-MM-DD', '');
let appData = {
    budget: money, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами - optionalExpenses (оставляем пока пустым) 
    income: [], //массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false //свойство savings (выставляем его как false)
};

var i = 0;


//      ЦИКЛ    FOR 
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');

    //     ЦИКЛ     VHILE 
    // while (i < 2) {
    //     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    //     let b = prompt("Во сколько обойдется?", '');
    //     i++;

    //      ЦИКЛ    DO WHILE
    // var i = 0;
    // do {
    //   let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    //   let b = prompt("Во сколько обойдется?", '');
    //   i++;
    // } while (i < 2);

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }
};
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
