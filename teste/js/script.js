let interruptooff = document.getElementById("interruptooff");
interruptooff.addEventListener('click',apert);

function apert(){
    if(interruptooff.classname == 'off' ){
        interruptooff.src = './img/interrupto-off.png';
        interruptooff.className ='on';
    }else{
        interruptooff.src = './img/interrupto-on.png';
        interruptooff.className = 'off';
    }

}
