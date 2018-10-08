let budjet = prompt("Ваш бюджет на месяц");
let timeData = prompt("Введите дату в формате YYYY-MM-DD");
let questionOne = prompt("Введите обязательную статью расходов в этом месяце");
let questionTwo = prompt("Во сколько обойдется?");
var expenses = questionTwo;
let money = budjet - expenses; // Общий расход за месяц - это месячный бюджет минус РАСХОДЫ в этом месяце
alert('Ваш дневной бюджет ' + money / 30); //Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
console.log(budjet);
console.log(timeData);
console.log(questionOne);
console.log(questionTwo);
console.log(expenses);
console.log(money);
let appData = {
    budjet: money, //бюджет (передаем сюда переменную из п.2)
    timeData, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses, // объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: null, //объект с необязательными расходами - optionalExpenses (оставляем пока пустым) 
    income: null, //массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false //свойство savings (выставляем его как false)
};
appData.expenses['questionTwo'] = questionOne;