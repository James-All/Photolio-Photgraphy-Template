const hamburger = document.querySelector('.hamburger');
const slideMenu = document.querySelector('.slide-menu');
const paddingToggle = document.querySelector('#padding-toggle');
const pictureGallery = document.querySelector('#main-gallery');
const ourNav = document.querySelector('#menu-items');
const navItems = document.querySelectorAll('.nav-item');


let menuVisible = false;
let galleryPadding = true;
let hamburgerSpin = false;


//event listeners

hamburger.addEventListener('click', function(){
    if(!menuVisible){
    hamburger.classList.add('open');
    slideMenu.classList.add('slide-down');
    ourNav.classList.add('nav-slide');
    navItems.forEach(item => item.classList.add('nav-item-slide'));
    menuVisible = true;
    }else{
        hamburger.classList.remove('open');
        slideMenu.classList.remove('slide-down');
        ourNav.classList.remove('nav-slide');
        navItems.forEach(item => item.classList.remove('nav-item-slide'));
        menuVisible = false;
    }
});

//toggle for grid padding

paddingToggle.addEventListener('click', function(){
    console.log('check')
    if(galleryPadding){
    pictureGallery.classList.add('remove-padding');
    galleryPadding = false;
    }else{
        pictureGallery.classList.remove('remove-padding');
        galleryPadding = true;
    }
});

//hamburger spin on mouseover/mouseout events

hamburger.addEventListener('mouseover', function(){
    if(!hamburgerSpin && !menuVisible){
    hamburger.classList.remove('spin-reverse');
    hamburger.classList.add('spin');
    hamburgerSpin = true;
    }
})
hamburger.addEventListener('mouseout', function(){
    if(hamburgerSpin && !menuVisible){
    hamburger.classList.remove('spin');
    hamburger.classList.add('spin-reverse');
    hamburgerSpin = false;
    }
})




