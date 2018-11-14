window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    const tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    const hideTabContent = (a) => { // -----  чтобы скрыть все эл-ты нашей страницы
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); // скрыать полностью со страницы
            tabContent[i].classList.add('hide'); //
        }
    };

    hideTabContent(1); // скрываются все кроме 1го

    const showTabContent = (b) => { // ------  и показывается то что нам нужно
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => { // делигирование ; куда кликать - targen
        const target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) { // с пом цикла проверяется чобы название темы совпадало с информацией
                if (target == tab[i]) { // все! табы возьмем и переберем сравнив с тем что мы кликнули
                    hideTabContent(0); // таргет - куда мы тыкаем - скрываем все табы
                    showTabContent(i); //  показываем тот кот совпадает
                    break;
                }
            }
        }
    });


    // Timer

    const deadLine = '2018-11-20';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24);

        if (days < 10) {
            days = "0" + days;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        let updateClock = () => {
            let t = getTimeRemaining(endtime);
            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            } else {

                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }
        };
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadLine);

    // Modal   --- новый ES6 стандарт
    const more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        // this.classList.add('more-splash');
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Modal - Узнать подробнее  - новый ES6 стандарт
    const descriptionBtn = document.querySelector(".description-btn"),
        descriptionBtnCollection = document.getElementsByClassName("description-btn");

    for (var i = 0; i < descriptionBtnCollection.length; i++) {
        descriptionBtnCollection[i].addEventListener("click", () => {
            overlay.style.display = "block";
            more.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    }
    // Form    - различные состояния нашего запроса 

    let message = {
        loading: 'Загрузка...', // 3 разных свойства - 1я когда еще не обработалась 
        success: 'Спасибо! Скоро мы с вами свяжемся!', // 2е свойство
        failure: 'Что-то пошло не так...' // 3е свойство
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        btnFormTwo = document.querySelector('#form');
    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve()
                            } else {
                                reject()
                            }
                        }
                    });
                    request.send(data);
                });
            } // End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }

    sendForm(form);
    sendForm(btnFormTwo);

    // Slider
    let slideIndex = 1, // параметр текущего слайда
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) { // функция показа слайдов 

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for(let i = 0; i < slides.length; i++) {
        //     slides[i].slides.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); // вызываем ф-ю шоуслайд с 2й как аргумент (н = 1)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {

        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }

        }
    });

    // Calc

    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener("change", function () {
        personSum = +this.value;
        let placeCoefficient = place.options[place.selectedIndex].value;
        total = ((daysSum + personSum) * 4000) * placeCoefficient;

        if (persons.value == "" || persons.value == 0 || restDays.value == "" || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener("change", function () {
        daysSum = +this.value;
        let placeCoefficient = place.options[place.selectedIndex].value;
        total = (daysSum + personSum) * 4000 * placeCoefficient;

        if (persons.value == "" || restDays.value == "" || restDays.value == 0 || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    persons.addEventListener("keyup", function () {
        var numRus = new RegExp("[0-9]");
        var cutString = persons.value;
        var cutStringLen = persons.value.length;

        if (numRus.test(cutString.substr(-1))) {
            // console.log("match");
        } else {
            cutString = cutString.substring(0, cutStringLen - 1);
            persons.value = cutString;
        }
    });

    restDays.addEventListener("keyup", function () {
        var numRus = new RegExp("[0-9]");
        var cutString = restDays.value;
        var cutStringLen = restDays.value.length;

        if (numRus.test(cutString.substr(-1))) {
            // console.log("match");
        } else {
            cutString = cutString.substring(0, cutStringLen - 1);
            restDays.value = cutString;
        }
    });

    place.addEventListener("change", function () {
        if (persons.value == "" || restDays.value == "" || restDays.value == 0 || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = (daysSum + personSum) * 4000 * this.options[this.selectedIndex].value; // Промежуточная переменная для хранения суммы
            totalValue.innerHTML = a;
        }
    });
});