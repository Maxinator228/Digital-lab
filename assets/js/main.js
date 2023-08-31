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

let phoneAuth = document.querySelector('input[type=tel]')

const maskOptions = {
    mask: '+{7}(000)000-00-00'
}

let phoneAuthMask = IMask(phoneAuth,maskOptions)

// Функция для плавного скролиннга к якорю

function smoothScroll(target){
    const targetElement = document.querySelector(target)
    if(targetElement){
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        })
    }
}

// Обработчики событий для ссылок

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const target = this.getAttribute('href')
        smoothScroll(target)
    })
})

// Слайдер

const slider = document.querySelector('.slider-cover');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); 

