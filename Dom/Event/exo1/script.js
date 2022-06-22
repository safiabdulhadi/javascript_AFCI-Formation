"use strict";
// -----------------------EXO 1 ---------------------

/* 
faire que lors de la selection d'une couleur dans la div 2
le texte du bouton change de couleur,
et lors de l'appuie sur le bouton,
le background de la div change de couleur.
*/

const d2 = document.querySelector('.div2');
const i2 = document.querySelector('.div2 input');
const b2 = document.querySelector('.div2 button');
i2.addEventListener('input', textColor);
b2.addEventListener('click', bgColor);
function textColor(e){
    b2.style.color =e.target.value;
}
function bgColor(){
    d2.style.backgroundColor = i2.value;
}

// ---------------------EXO 2 ----------------------------

/* 
Lors du clique sur le bouton de la div 3,
faire apparaître une modale (soit dejà crréé en html / soit que l'on crée en Js)
Cette modale doit contenir un élément permettant de la faire disparaître.
*/


const m2 = document.querySelector('.m2');
const m2btn =m2.querySelector("button:last-of-type");
//réponse 2:
function modal2(){
    m2.classList.toggle("hidden");

}

// b3.addEventListener('click', modal2);
// m2btn.addEventListener('click', modal2);
// réponse 3:
b3.addEventListener("click", ()=>m2.style.dis)







// ---------------------EXO 3 ----------------------------

/* 
faites que tous nos li dans la na double de taille lorsque l'on 

*/












// ----------------------EXO 4 ----------------------------
/*
Utilise les élèvements "mouseover" et "mousemove" pour 
faire que lorsque l'on passe sur le span du footer, il commence à sa position d'origine.
et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine .
*/