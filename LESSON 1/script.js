let money = prompt("Ваш бюджет на месяц", "30000"), //Первая будет спрашивать "Ваш бюджет на месяц?"
    timeData = prompt("Введите дату в формате YYYY-MM-DD", "2000-02-02"); //Вторая "Введите дату в формате YYYY-MM-DD"

alert('Ваш дневной бюджет ' + money / 30); //Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

let appData = {
    budjet: money, //бюджет (передаем сюда переменную из п.2)
    time: timeData, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами - optionalExpenses (оставляем пока пустым) 
    income: [], //массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false //свойство savings (выставляем его как false)
};

for (let i = 0; i < 2; i++) {
    let question = prompt("Введите обязательную статью расходов в этом месяце", "Ремонт автомобиля"),
        moneyQuestions = prompt("Во сколько обойдется?", "10000");
    appData.expenses[question] = moneyQuestions;
}