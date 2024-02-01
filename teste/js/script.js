// botão on e off
let off = window.document.querySelector('.interruptooff')
let on = window.document.querySelector('.interruptoon')

//led 3 divisorias
let led1 = window.document.querySelector('.est')
let led2 = window.document.querySelector('.esta')
let led3 = window.document.querySelector('.estan')



off.addEventListener('click',function(){
    // botão on e off
    off.style.display = 'none';
    on.style.display = 'block';
    
    //led 3 divisorias
    led1.className = 'est1';  
    led2.className = 'est2';
    led3.className = 'est3';

});

on.addEventListener('click',function(){
    // botão on e off
    off.style.display = 'block';
    on.style.display = 'none';

    //led 3 divisorias
    led1.className = 'estas';
    led2.className = 'estas';
    led3.className = 'estas';
});

