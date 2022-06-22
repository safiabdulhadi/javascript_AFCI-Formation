"use strict";
// ----------DOM-----------
// Document Object Model 
const h = document.createElement("header");
/* je fais appelle à la méthode (fonction) createElement de l'objet document
Celle ci prendra le nom d'une balise html en argument. */
console.log(h);
/* On obtien un objet "balise header" qui contient énormément de propriété et méthode
celles ci sont accessible de la même façon que n'importe quel objet js. */

const m = document.createElement("main");
const f = document.createElement("footer");
h.innerHTML = "<h1> Super site en JS </h1>";
// Sans utiliser create Element, on a modifié le HTML de notre header avec innerHTML 
console.log(h);
f.innerHTML = "<ul><li> Menu 1 </li> <li> Menu 2 </li> <li> Menu 3 </li> <li> Menu 4 </li></ul>";
console.log(f)

for (let i = 0; i<5; i++) {
    // à chaque itération de notre boucle, on crée un nouveau p
    const p = document.createElement("p");
    // on lui a joute notre texte
    p.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque";
    m.appendChild(p);
}
console.log(m);
console.log(document.body);
if(document.body){
    document.body.append(h,m,f);
}
