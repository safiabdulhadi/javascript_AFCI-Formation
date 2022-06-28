"use strict";

const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time')
const mainBtn = document.querySelector('main button')


// Crée un objet date qui contient la date et l'heure du moment de sa création
let date = new Date();
// getfullYear nous rend l'année
copyright.textContent = date.getFullYear();
// toLocaleTimeString nous rend l'heure, les minutes et les secondes en un string.
// mainTime.textContent = date.toLocaleTimeString();
// 


function timer(){
    const dateTimer = new Date();
    mainTime.textContent = dateTimer.toLocaleTimeString();

}
/* setInterval relace une fonction donné en premier parmètre au rythme donné 
en second parmètre (en ms) */
let inInterval = setInterval(timer, 1000);
console.log(inInterval)
// Je range l'indentifiant de mon interval dans une variable.

function stop(){
    clearInterval(inInterval);
}
mainBtn.addEventListener("click", stop);

// SetTimout effectue la fonction donné en premier argument au
// bout du temps donné
// en secound argument (en ms);

let idTimeout = setTimeout(() =>console.log("Coucu en retrard !"),300);
/* comme avec l'intervail, on peut récupérer l'indentifiant
du timout et l'arrête
avant son execution  */
clearTimeout(idTimeout);

const progress = document.querySelector('.progress');
let w = 0;
function load() {
if(w === 100){
    return;

}else{
    w++;
    progress.style.width = w+"%";
    setTimeout(load, 100)
}
}
load();