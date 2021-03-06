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

    info.addEventListener('click', function (event) {  // делигирование ; куда кликать - targen
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) { // с пом цикла проверяется чобы название темы совпадало с информацией
                if (target == tab[i]) {  // все! табы возьмем и переберем сравнив с тем что мы кликнули
                    hideTabContent(0);   // таргет - куда мы тыкаем - скрываем все табы
                    showTabContent(i);   //  показываем тот кот совпадает
                    break;
                }
            }
        }
    });
});