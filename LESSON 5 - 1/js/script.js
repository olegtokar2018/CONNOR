let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    //questionApple = prompt("ваше отношение к технике apple"),
    menuItemFi = document.createElement('li'),
    appA = document.getElementById('prompt'),
    // column = document.getElementsByClassName('column')[1],
     column = document.getElementsByClassName('column[1]');

    appApple = document.createElement('div');
    // console.log(columnm);
    console.log(column);
    menuItemFi.classList.add('menu-item');
    menu.insertBefore(menuItem[2], menuItem[1]);
    menu.appendChild(menuItemFi);
    // column.appendChild(appApple);
    menuItemFi.textContent = "пятый пункт";
    title.textContent = "Ms продаем только подлинную технику Apple";
    // document.body.style.backgroundImage = "url(../lesson_5/img/apple_true.jpg)";
    document.body.style.background = 'url(img/apple_true.jpg) center no-repeat'
    adv.remove();
    appA.textContent = "Ваше отношение к технике  Apple";
    // let ask = prompt('Ваше отношение к технике Apple?', '');

    