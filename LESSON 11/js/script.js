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

    const deadLine = '2018-11-10';

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


    // Modal 

    // let more = document.querySelector('.more'),
    //     overlay = document.querySelector('.overlay'),
    //     close = document.querySelector('.popup-close');

    // more.addEventListener('click', function () {
    //     overlay.style.display = 'block';
    //     this.classList.add('more-splash');
    //     document.body.style.overflow = 'hidden';
    // });

    // close.addEventListener('click', function () {
    //     overlay.style.display = 'none';
    //     more.classList.remove('more-splash');
    //     document.body.style.overflow = '';
    // });
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

    // Modal - Узнать подробнее

    // let descriptionBtn = document.querySelector(".description-btn"),
    //     descriptionBtnCollection = document.getElementsByClassName("description-btn");

    // for (var i = 0; i < descriptionBtnCollection.length; i++) {
    //     descriptionBtnCollection[i].addEventListener("click", function () {
    //         overlay.style.display = "block";
    //         this.classList.add("more-splash");
    //         document.body.style.overflow = "hidden";
    //     });
    // }
    const descriptionBtn = document.querySelector(".description-btn"),
        descriptionBtnCollection = document.getElementsByClassName("description-btn");

    for (var i = 0; i < descriptionBtnCollection.length; i++) {
        descriptionBtnCollection[i].addEventListener("click", () => {
            overlay.style.display = "block";
            more.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    }
});