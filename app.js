const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active-burger');
    if (burgerMenu.classList.contains('active-burger')) {
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
            <nav>
                <ul>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#technologies">TECHNOLOGIES</a></li>
                    <li><a href="#how-to">HOW TO</a></li>
                </ul>
            </nav>
            <div class="mobile-menu-btns">
                <button class="button no-fill">CONTACT US</button> <br>
                <button class="button fill">JOIN HYDRA</button>
            </div>
        `;
    } else {
        header.removeChild(mobileMenu);
    }
})

const techArrowLeft = document.getElementById('tech-left');
const techArrowRight = document.getElementById('tech-right');
const techImages = document.querySelectorAll('.technologies__list img')
let currentImgTechIndex = 0;

techArrowLeft.addEventListener('click', function() {
    techImages[currentImgTechIndex].classList.remove("active");
    currentImgTechIndex = (currentImgTechIndex - 1 + techImages.length) % techImages.length;
    techImages[currentImgTechIndex].classList.add("active");
})

techArrowRight.addEventListener('click', function() {
    techImages[currentImgTechIndex].classList.remove("active");
    currentImgTechIndex = (currentImgTechIndex + 1) % techImages.length;
    techImages[currentImgTechIndex].classList.add("active");
})

const howArrowLeft = document.getElementById('how-left');
const howArrowRight = document.getElementById('how-right');
const howArticle = document.querySelectorAll('.how-build__steps-step')
let currentHowIndex = 0;

howArrowLeft.addEventListener('click', function() {
    howArticle[currentHowIndex].classList.remove("active");
    currentHowIndex = (currentHowIndex - 1 + howArticle.length) % howArticle.length;
    howArticle[currentHowIndex].classList.add("active");
})

howArrowRight.addEventListener('click', function() {
    howArticle[currentHowIndex].classList.remove("active");
    currentHowIndex = (currentHowIndex + 1) % howArticle.length;
    howArticle[currentHowIndex].classList.add("active");
})

const whyArrowLeft = document.getElementById('why-left');
const whyArrowRight = document.getElementById('why-right');
const whyArticle = document.querySelectorAll('.why-we__details-benefits')
let currentWhyIndex = 0;

whyArrowLeft.addEventListener('click', function() {
    whyArticle[currentWhyIndex].classList.remove("active");
    currentWhyIndex = (currentWhyIndex - 1 + whyArticle.length) % whyArticle.length;
    whyArticle[currentWhyIndex].classList.add("active");
})

whyArrowRight.addEventListener('click', function() {
    whyArticle[currentWhyIndex].classList.remove("active");
    currentWhyIndex = (currentWhyIndex + 1) % whyArticle.length;
    whyArticle[currentWhyIndex].classList.add("active");
})

const contactArrowLeft = document.getElementById('contact-left');
const contactArrowRight = document.getElementById('contact-right');
const contactArticle = document.querySelectorAll('.header__contact-data')
let currentContactIndex = 0;

contactArrowLeft.addEventListener('click', function() {
    contactArticle[currentContactIndex].classList.remove("active");
    currentContactIndex = (currentContactIndex - 1 + contactArticle.length) % contactArticle.length;
    contactArticle[currentContactIndex].classList.add("active");
})

contactArrowRight.addEventListener('click', function() {
    contactArticle[currentContactIndex].classList.remove("active");
    currentContactIndex = (currentContactIndex + 1) % contactArticle.length;
    contactArticle[currentContactIndex].classList.add("active");
})