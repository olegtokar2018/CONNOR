let money = +prompt("Ваш бюджет на месяц", "30000"), //Первая будет спрашивать "Ваш бюджет на месяц?"
    timeData = prompt("Введите дату в формате YYYY-MM-DD", "2000-02-02"); //Вторая "Введите дату в формате YYYY-MM-DD"


alert('Ваш дневной бюджет ' + money / 30); //Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

let appData = {
    budget: money, //бюджет (передаем сюда переменную из п.2)
    time: timeData, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами - optionalExpenses (оставляем пока пустым) 
    income: [], //массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false //свойство savings (выставляем его как false)
};

let i = 0;
//      ЦИКЛ    FOR   - 1й вариант
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", 'Ремонт автомобиля');
    let b = prompt("Во сколько обойдется?", '5000');
}

//     ЦИКЛ     VHILE   - 2й вариант
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');
//     i++;
// }

//      ЦИКЛ    DO WHILE   - 3й вариант
// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//   let b = prompt("Во сколько обойдется?", '');
//   i++;


if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
    a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
    }
    else {
        i = i - 1;
    }

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