"use strict";
// Selectionne des éléments par leurs noms de balise.
const li = document.getElementsByTagName("li");
// retourne un objet contentant tous les éléments trouvés
console.log(li);
li[0].textContent = "Marbre";
// Selectionne des éléments par un nom de classe.
const p = document.getElementsByName("step");
const p1 = document.getElementsByName("marche1");
// Même si on a qu'un seul élément, on aura un objet contenant cet élément.
console.log(p, p1);
// p1.textContent ne fonctionne pas, il faudra bien faire p1[0].textContent.


// Selectionnne directement l'élément qui posséde cet id
const h1 = document.getElementById("mainTitle");
// Ici pas de THMLCollection, il n'y a qu'un élément, on obtient doc directment celui ci
console.log(h1);


/* les querySelector prennent en argument n'importe quel selecteur CSS
il rendra le premier élément qui correspond à ce selcteur  */
// const p2 = document.querySelector("main > p:nth-of-type(2)");
const p2 = document.querySelector(".marche2");
console.log(p2)
// celui ci rendra le premier p
// const p2 = document.querySelector("main > p:nth-of-type(2)");
/* Fonctionne come le querySelector mais rend un objet "NodeList" contenant tous 
les éléments correspondant */
const li2 = document.querySelectorAll("footer li");
// ! Attention certaines fonctions qui pourraient marcher sur NodeList pourrais ne pas fonctionner sur HTMLCollection.
console.log(li2);


// ------------------------EXO-1----------------
// Déplacer la modle dans le body

const m = document.querySelector("aside div");
document.body.append(m);

// ------------------------EXO 2----------------
// modifier le texte des li du footer, si possible ave une boucle.
const lis = document.querySelectorAll("footer li");
lis.forEach(textChange)

function textChange(el){
        el.textContent = "JS ne me fais peur !" .toUpperCase()
}

// ------------------------EXO 3----------------
// Remplacer le texte des paragraphes pair.
// réponse 1:
const paras = document.querySelectorAll(".step:nth-child(even)");
para.forEach(textChange);

// réponse 2:

const prasé = document.querySelectorAll(".step");
for (let i = 0; <paras.length; i++){
    if(i%2 = 0){
        textChange(paras2[i]);
    }
}


const h1 = document.querySelector('#mainTilte');
console.log(h1);