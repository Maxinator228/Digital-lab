//  Выпадающее меню

const burger = document.querySelector('.burger-menu')
const nav = document.querySelector('nav')

const burgerMenu = (open) => {
    if(open){
        nav.classList.add('active')
    }else{
        nav.style.animationName = 'closeBurger'
        setTimeout(() =>{
            nav.classList.remove('active')
            nav.style.animationName = 'openBurger'
        },370)
        
    }
}

// Маска для телефона

let phoneAuth = document.querySelector('input[type=tel]')

const maskOptions = {
    mask: '+{7}(000)000-00-00'
}
let phoneAuthMask = IMask(phoneAuth,maskOptions)

// Слайдер

const slider = document.querySelector('.slider-cover');
const images = document.querySelectorAll('.slider .img');

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = 'block';
        image.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(0)

setInterval(nextImage, 3000); 

