window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) { // -----  чтобы скрыть все эл-ты нашей страницы
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); // скрыать полностью со страницы
            tabContent[i].classList.add('hide'); //
        }
    }

    hideTabContent(1); // скрываются все кроме 1го

    function showTabContent(b) { // ------  и показывается то что нам нужно
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) { // делигирование ; куда кликать - targen
        let target = event.target;
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

    let deadLine = '2018-11-03';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            // hours = Math.floor((t / (1000 * 60 * 60))),
            hours = Math.floor(((t / 1000 / 60) % 60)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);


        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.days < 10) {
                days.textContent = '0' + t.days;
            } else {
                days.textContent = t.days;
            }

            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }



            if (t.total <= 0) {

                seconds.textContent = '00'
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadLine);
});