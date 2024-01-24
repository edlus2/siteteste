let off = window.document.querySelector('.interruptooff')
let on = window.document.querySelector('.interruptoon')

off.addEventListener('click',function(){
    off.style.display = 'none';
    on.style.display = 'block';
});

on.addEventListener('click',function(){
    off.style.display = 'block';
    on.style.display = 'none';
});