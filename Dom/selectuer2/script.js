"use strict";
const h1 = document.querySelector('#mainTitle');
console.log(h1);

/* Nos éléments html possèsendent une propiété style qui prmet de modifier leur css.
ce css ajoué par js deviendra du css inline (dans la balise de l'éléments ) 
pour selectionner une propiété css, il suffit de faire suivre le .style par le nom de la propiété css.
 !ATTENTION , les propriétés css s'écrivant avec "-" sont remplacé par un version 
 !camelcase : background-color devient backgroundColor */
h1.style.backgroundColor = "rgb(123, 45,98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0, 3)";
h1.style.color = "red";
console.log(h1.classList);
h1.classList.add("banane");
h1.classList.remove("banane");
h1.classList.toggle("banane");
console.log(h1.classList.contains("banane"));
h1.classList.toggle("banane");

// --------------------------------les autrees attibut-------------------------------
console.log(h1.id);
h1.id +="2";

console.log(h1.getAttribute("id"));

const a = document.querySelector('footer ul li a ');
console.log(a);
// setAttribute permet d'ajouter ou modifier un attribut de notre élément html.
// Le premier paramètre est le nom de l'attribut. le second sa valeur.
a.setAttribute("target", "_blank");
// getAttribute permet de récupérer la valuer d'un attribut donné en paraètre.
console.log(a.getAttribute("href"));
/* Cela dit pour la majorité des attributs, ils sont tout simplement modifable
 ou récuperable en appelant directement leurs noms : */
console.log(a.href, a.target);
// on peut selectionner, modifier ou créer des data-attribute via .dataset
// on récuère sa valeur avec .dataset.nomDuDataAtrribute 
// par exemple je veux récupérer data-truc je devrais taper .dataset.truc 
console.log(a.dataset.color);
a.dataset.color = "ça ne marche pas avec les couleurs !";
// Modifier un élément qui n'esiste pasz l"ajoutera simplement.
a.dataset.bidule = "Coucou, je ne sert à rien !";


const li2 = document.querySelectorAll("footer li");
console.log(li2);

const header = document.querySelector('header');
const h = header.querySelector('h1');
console.log(h1);

console.log(header.nextElementSibling);

console.log(header.nextSibling)
console.log(li2[2].previousElementSibling);
console.log(li2[2].previousSibling);

console.log(header.parentElement);
console.log(li2[0].closest('footer'));


console.log(Header.chidren);
// h.remove();
// header.removeChild(h1);