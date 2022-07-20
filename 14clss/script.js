"use strict";
import H from "./Human.js";
/**
 * Je crée une nouvlle instance de ma classe Human (renommé H par l'import default)
 */
const human1 = new H("Abdulhadi", "safi", 28);

console.log(human1);
/**
 * Une méthode ou propriété static ne peut être applé que sur la classe elle même
 * et non sur les objets instancié de la classe.
 */
console.log(Date.now());
console.log(H.categorie);
H.description();
console.log(human1.fullname);
human1.salutation();
human1.anniversaire();

/**
 * Ces exemples ne fonctionnent pas : 
 * 
 */
// let date = new Date();
// console.log(human1.nom);
// Je ne peux pas accéder à une propriété privée
// console.log(human1.#nom);
// je ne peut pas accéder à une propriété privée
const human2 = new H("pieRRe", "fontaine", 34);
human2.salutation();
//------------------Héritage-----------
import D from "./Dev.js";
const developpeur = new D("Kevin", "duchesse", 27, "javascript");
console.log(developpeur);
developpeur.salutation();
developpeur.anniversaire();
D.description();