//  1-Й ВАРИАНТ
// let age = document.getElementById('age');

// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// showUser();


//  2-Й ВАРИАНТ
let user = {
     age : document.getElementById("age").value,
     value : age,

     showUser :function (surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
};
user.showUser("Токарь",  "Олег");



//  3-Й ВАРИАНТ
// function myFunction() {
//     let x = document.getElementById("myText").value;
//     document.getElementById("demo").innerHTML = x;
// }