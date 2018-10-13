var num = '33721';
var resultOne = (num[0] * num[1] * num[2] * num[3] * num[4]);
console.log(resultOne); //Вывести в консоль произведение (умножение) цифр этого числа


var resultTwo  = resultOne * resultOne * resultOne;  //Полученный результат возвести в степень 3
//  alert(resultTwo);


var str = String(resultTwo); 
var res = str.substring(0, 2);  //Вывести на экран первые 2 цифры полученного числа
alert(res);

