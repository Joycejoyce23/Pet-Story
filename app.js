
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .items');
let dots = document.querySelectorAll('.slider .about-dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1; 

next.onclick = function(){
    if (active + 1 > lengthItems){
        active = 0;
    }
    else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if (active -1 < 0){
        active = lengthItems;
    }
    else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    
    let lastActiveDot = document.querySelector('.slider .about-dots .active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 5000);
}
