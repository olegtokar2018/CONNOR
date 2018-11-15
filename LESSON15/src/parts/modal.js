

function modal() {
    const more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click', () => {
    overlay.style.display = 'block';
    more.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

const descriptionBtn = document.querySelector(".description-btn"),
    descriptionBtnCollection = document.getElementsByClassName("description-btn");

for (var i = 0; i < descriptionBtnCollection.length; i++) {
    descriptionBtnCollection[i].addEventListener("click", () => {
        overlay.style.display = "block";
        more.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });
}

}

module.exports = modal;  // экспортируем