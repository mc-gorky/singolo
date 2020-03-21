// Navigation menu

const NAVBAR = document.querySelector('.navbar');

let selectNavbar = function() {
    NAVBAR.querySelectorAll('a').forEach((elem) => {
    if (event.target.classList.contains('navbar-link')){
        elem.classList.remove('selected');
        event.target.classList.add('selected');
    }
})}

NAVBAR.addEventListener('click', selectNavbar)

// Tags menu

const PORTFOLIO_TAGS = document.querySelector('.portfolio-tags');
const IMAGES = document.querySelector('.images-container');
const IMAGES_ITEM = IMAGES.querySelectorAll('.portfolio-image');

let selectTags = function() {PORTFOLIO_TAGS.querySelectorAll('p').forEach((elem) => {
    if (event.target.classList.contains('portfolio-tags-element')){
        elem.classList.remove('selected');
        event.target.classList.add('selected');
    }
   
})}

let toggleImage = function() {
    IMAGES_ITEM.forEach((elem) => {
        const target = event.target;
        const targetClassList = target.classList;
        const isSelected = targetClassList.contains('selected');

        elem.classList.remove('selected');

        if (elem === target && !isSelected) {
            targetClassList.add('selected');
        }
    });
}

let mixImages = function() {
    const all = document.getElementById('All');
    const web = document.getElementById('Web');
    const graphic = document.getElementById('Graphic');
    const artwork = document.getElementById('Artwork');
    if (event.target === all) {
        IMAGES_ITEM.forEach(elem => elem.style.order = '');
    }
    if(event.target === web){
        IMAGES_ITEM[0].style.order = 1;
        IMAGES_ITEM[4].style.order = 2;
        IMAGES_ITEM[8].style.order = 3;
        IMAGES_ITEM[9].style.order = 4;
    }
    if(event.target === graphic){
        IMAGES_ITEM[0].style.order = 3;
        IMAGES_ITEM[1].style.order = 1;
        IMAGES_ITEM[8].style.order = 2;
        IMAGES_ITEM[9].style.order = 2;
    }
    if(event.target === artwork){
        IMAGES_ITEM[2].style.order = 3;
        IMAGES_ITEM[5].style.order = 2;
        IMAGES_ITEM[7].style.order = 1;
        IMAGES_ITEM[9].style.order = 1;
    }
}


PORTFOLIO_TAGS.addEventListener('click', selectTags)
PORTFOLIO_TAGS.addEventListener('click', mixImages)
IMAGES.addEventListener('click', toggleImage)


//Phone screen switcher

const verticalPhone = document.querySelector('.vertical-iphone');
const horizontalPhone = document.querySelector('.horizontal-iphone');
const phoneImages = document.querySelector('.images-slider');

phoneImages.addEventListener('click', () => {
    if (event.target === verticalPhone){
        verticalPhone.classList.toggle('clicked');
    }
    if (event.target === horizontalPhone){
        horizontalPhone.classList.toggle('clicked');
    }
})


//Submit form

const FORM = document.querySelector('.contact-form')
const SUBMIT_WINDOW = document.getElementById('submit-window')
const CONFIRM_BUTTON = document.getElementById('confirm-button')

FORM.children

let submitForm = function(event) {
    event.preventDefault();
    let subject = FORM.querySelectorAll('input')[2].value;
    let description = FORM.querySelector('.contact-form-textarea').value;
    let subjField = document.getElementById('subj');
    let describeField = document.getElementById('describ');

    if(!subject){
        subjField.textContent = 'Без темы'
    }else{
    subjField.textContent = 'Тема: ' + subject;
    }

    if(!description){
        describeField.textContent = 'Без описания'
    }else{
        describeField.textContent = 'Описание: ' + description;
    }

    SUBMIT_WINDOW.style.display = 'block';
   
}

FORM.addEventListener('submit', submitForm)
CONFIRM_BUTTON.addEventListener('click', () => {
    SUBMIT_WINDOW.style.display = 'none'
    FORM.querySelectorAll('input').forEach((elem) => elem.value  = '');
    FORM.querySelector('.contact-form-textarea').value = '';
})

//slider

let items = document.querySelectorAll('.images-slider-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.left-arrow-element').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.right-arrow-element').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});