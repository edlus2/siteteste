let inte = document.getElementById("interrupto");
let interruptooff = document.getElementById("interruptooff");
let interruptoon = document.getElementById("interruptoon");
inte.addEventListener('click',apert);




function apert(){
    if(interruptooff === display.none){
        interruptooff.style.display= 'block';
    }else

    interruptooff.style.display ='none';
    interruptoon.style.display = 'block';
}
