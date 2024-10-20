/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.about__img, .discount__data`,{origin: 'right'})

document.querySelectorAll('.trick__button').forEach(button => {
    button.addEventListener('click', () => {
        const userName = prompt("Enter your name... if you dare!");
        if (userName) {
            alert(`Ahh ${userName}, beware! A demon shall deliver your item at the stroke of midnight!`);
        }
    });
});
const ghost = document.getElementsById('floating-ghost');
const card = document.getElementsByClassName('home__img');
const spookyWishes = [
    "Wishing you a frightful night!",
    "May the spirits be with you!",
    "Beware, you're not alone!",
    "Something wicked this way comes!",
    "You have been chosen by the spirits!"
];

ghost.addEventListener('click', () => {
    const randomWish = spookyWishes[Math.floor(Math.random() * spookyWishes.length)];
    card.textContent = randomWish;
    card.style.display = 'block';
    setTimeout(() => {
        card.style.display = 'none';
    }, 3000);
});

document.querySelectorAll('.button--link').forEach(button => {
    button.addEventListener('click', () => {
        alert("Your spooky order is on its way! Track your package via the spectral courier service.");
    });
});

// Book Now Button functionality
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const userName = prompt("Enter your name for the spooky booking!");
        if (userName) {
            alert(`Thank you, ${userName}! Your spooky booking is confirmed. Expect ghostly visitors soon!`);
        }
    });
});


// Custom modal functionality for "Book Now"
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        // Show custom modal
        const modal = document.getElementById('customPrompt');
        modal.style.display = 'block';
    });
});

const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modal = document.getElementById('customPrompt');

// When "Submit" is clicked
submitBtn.addEventListener('click', () => {
    const userName = document.getElementById('userNameInput').value;
    if (userName) {
        alert(`Thank you, ${userName}! Your spooky booking is confirmed. Expect ghostly visitors soon!`);
        modal.style.display = 'none'; // Close modal after submission
    } else {
        alert("Please enter your name.");
    }
});

// When "Cancel" is clicked
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Close modal on cancel
});
