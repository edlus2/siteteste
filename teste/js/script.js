let off = window.document.querySelector('.interruptooff')
let on = window.document.querySelector('.interruptoon')

let led1 = window.document.querySelector('.est')
let led2 = window.document.querySelector('.esta')
let led3 = window.document.querySelector('.estan')



off.addEventListener('click',function(){
    off.style.display = 'none';
    on.style.display = 'block';
    led1.className = 'est1';  
    led2.className = 'est2';
    led3.className = 'est3';

});

on.addEventListener('click',function(){
    off.style.display = 'block';
    on.style.display = 'none';
    led1.className = 'estas';
    led2.className = 'estas';
    led3.className = 'estas';
});