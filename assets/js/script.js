const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu__nav');
const body = document.querySelector('body');
const links = document.querySelectorAll('.menu__nav a');

burger.addEventListener('click', function () {
    burger.classList.toggle('toggled');
    menu.classList.toggle('toggled');
    body.classList.toggle('stop-scroll');
});

links.forEach((el) => {
    el.addEventListener('click', function() {
        body.classList.remove('stop-scroll');
        burger.classList.remove('toggled');
        menu.classList.remove('toggled');
    });
});

const participantsSwiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 18,
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        1440: {
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: '#part-next',
        prevEl: '#part-prev',
    },
    pagination: {
        el: '#participantsPagination',
        type: 'bullets',
        clickable: true
    }
});

