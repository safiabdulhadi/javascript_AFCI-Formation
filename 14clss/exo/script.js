"use strict";
/**
 * ----------------------- EXO 1 -------------------------------------
 * Créer une classe facilitant l'usage du DOM.
 */
import S from "./EasyDom.js";
const s = new S(); 

const liste = s.select("ul");
const items = s.select("li");

s.event(liste, "click", ()=>console.log("coucou"));
s.event(items, "click", ()=>console.log("coucou"));

const div = s.tag("div", {textContent: "Bonjour tout le monde !", class: "truc bidule", id:"SUPER"});
document.body.append(div);
/**
 * ----------------------- EXO 2 -------------------------------------
 * Adapter le code du carousel en class.
 */
/**
 * ----------------------- EXO 3 -----------------------------------
 * Faire une version du carousel qui hérite de EasyDom et l'utilise.
 */
/**
 * ----------------------- EXO 4 -------------------------------
 * Faite une page avec un canvas, à chaque clique sur le canvas, 
 * une boule de taille, de vitesse et de couleur aléatoire apparaîtra 
 * et rebondira 
 */
/**
 * ----------------------- EXO 5 -----------------------------------
 * Créer une calculatrice sous la forme d'une classe.
 */