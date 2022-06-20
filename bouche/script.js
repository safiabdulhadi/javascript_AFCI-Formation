"use strict";
// ------------------------------WHILE-------------------------------
let a = 0;
// Tant que a est plus petit que 10
while(a<10){
    console.log("a vaut ", a);
    // ON R2P7TE LES INSTRUCTIONS QUI SONT ENTRE LES ACCOLADES;
    a++;
}
// ! ATTENTION  d'avoir toujours un moyen de sortir de la boucle.
while(true){
    // Ici notre boucle étant à true, elle ne s'arrêtera jamais.
    console.log("a vaut ", a );
    a++;
    if (a ==20){
        break;
    }
}
do{
    console.log("a vaut ", a);

/* do while permet d'effectuer une action une première fois avant de vérifier si on souhaite la répéter. */
    
}while(a < 5);

// --------------------For-----------------------

for(let i = 0; i<10 ; i++){
    /* La boucle for prend 3 pramètres séparés de ";"
    Le premier est la déclaration et définition d'une variable numérique
    Le second la condition d'arrête de la boucle 
    Le troisième de combien doit augmenter (ou diminuer) la variable à chaque itératics */
    console.log("i vaut ", i);
}
let arr = ["pizza", "cannelé", "gratin dauphinois"];
let person = {nom: "Pierre", age:55, yeax: "vert"};
for (let food in arr){
    /* le for in va récupérer les index des différents éléments du tableau 
    si le tableau contient 3 élément, le for in fera 3 itérations 
    sa variable valant à tour de rôle 0, 1 puis 2.*/
    console.log(food, "->" , arr[food]);
}
for(let carac in person){
    // Utilisé sur un objet, on obtient le nom de toute les propriétés.
    console.log(carac, "->" , person[carac]);
}
// syntaxe: for("déclaration de variable" in étableau/objet)
for(let f of arr){
    /* for of foctionne comme for in mais au lieu de récupérer à chaque itération
    l'index, il récupére directiement les valeurs des tableaux. */
    console.log(f);
}
// for (let truc of person ){}le for of ne fonctionne pas avec les objets
// ---------------------------forEach et map-----------------------------
let a1 = [4,40,40,30,20,10];
/* forEach et map sont des méthodes (fonction)  appartenant aux tableaux.
par ce fait, elles ne fonctionnent que sur les tableaux et utilise la syntaxe suivante:
tableau. forEach(fonction); tableau.map(fonction) */

a1.forEach(al => console.log(a1));
/* Ici forEach fait une itération par élément du tableau, 
à chacune des itération l'élément suivant du tableau est rangé dans la variable
donné en parmètre (ici el)  
et on lui indique d'afficher notre variable. */

// forEach sur son fonctionnement se rapproche de for of;

// On poussera un peu plus loin forEach quand on verra les fonctions.

// map est un méthode qui va nous renvoyer un nouveau tableau.
// Je déclare donc une nouvelle variable pour accueillir ce nouveau tableau.
let a2 = a1.map(val => val*2);
/* map boucle sur chacun des éléments du tableau , et effectue une opération
sur ces éléments avant de construire un nouveau tableau avec. */
console.log(a2);


let a3 = ["bidule", "machin", "truc"];
// Les opérations ne sont pas forcément mathématique.
let a4 = a3.map(str => str.toUpperCase());
console.log(a4);