const hamburger = document.querySelector('.hamburger');
const slideMenu = document.querySelector('.slide-menu');

let menuVisible = false;


//event listeners

hamburger.addEventListener('click', function(){
    if(!menuVisible){
    hamburger.classList.add('open');
    slideMenu.classList.add('slide-down');
    menuVisible = true;
    }else{
        hamburger.classList.remove('open');
        slideMenu.classList.remove('slide-down');
        menuVisible = false;
    }
});