"use strict";
// Une commentaire sur une seaule ligne.
/*
"use strict"; indique à js de ne pas corriger les petites
erreurs dont il comprend le sens, la moidre erreur sera signalé.
*/
//------------------Declaration des variables----------------

let banane;
// On déclare une variable classiquement avec le mot clef "let"
console.log("banane :", banane);
// Les variable sont sensible à la casse (attention aux majuscules et minuscules)
var tomate;
//  Le mot clef "var" crée des variables avec une plus grand portée.
const cerise = 5;
// le mot clef "const" permet la déclaration de constante, c'est à dire une variable dont la valeur ne peut pas changer.
/*
le mot clef "const" permet la déclaration de constante, c'est à dire une variable
dont la valeur ne peut pas changer.
on doit définir (donner une valeur ) à ue constante lorsqu'elle est déclaré
*/
// cerise = 3; Cela retourne une erreur car on ne peut pas changer la valeur d'une constant
let a, b, c;
// Je peux déclarer plusieurs variables d'affilé en les séparant d'une virgule.
// var a ; retourne une erreur car la variable a dèjà été dclaré.
var d, e = 4,
    f = 1;
// Je peux définir ou pas mes variables lors de leur déclaration.

/*  Les noms des variables peuvent contenir des lettres, des chiffres, des ou des $.
    mais ne peuvent pas commencer par un chiffre.
*/
// ---------------------la portée des variables--------------------------
let gLet = 1;
var gVar = 1; {
    let hLet = 2;
    var hVar = 3;
    console.log("Call inside the blocks", gLet, gVar, hLet, hVar);

}
console.log(gLet, gVar, hVar);
/*
hLet n'est pas déclaré, car un let déclaré dans un block n"est accessible que dans ce block */
// var par contre est acessible peux importe où il se trouve.
// const suit les même règles que let 
{
    let gLet = 5;
    let gVar = 5;
    /*
    Redéclarer une variable déjà déclaré, ne retournera pas d'erreur si 
    Cela est fait dan un block
    */
    console.log("Dans le block: ", gLet, gVar);
}
/* Les valeurs sont à 5 dans le block et à 1 pour le let hors du block, 
c'est une variable différente mais à 5 pour le var , car c'est bien la même variable */
console.log("Hors du block:", gLet, gVar);

// -------------------TYPES des variables-----------------
let num = 5,
    str = "Coucou",
    bol = true,
    arr = [],
    obj = {},
    und;
// javascript à 5 types principaux.
console.log("num", num);
// Number
console.log("str", str);
// String
console.log("bol", bol);
// Boolean
console.log("arr", arr);
console.log("obj", obj);
// object
// Les tableaux et les objets fonctionnent différement mais sont tous les deux dum même type 
console.log("und", und);
// undefined

console.log("num", typeof (num));
console.log("str", typeof (str));
console.log("bol", typeof (bol));
console.log("arr", typeof (arr));
console.log("obj", typeof (obj));
console.log("und", typeof (und));

bol = 42;

// -----------------CHAINE DE CCARACTERES---------------------
let s1 = "Coucou",
    s2 = 'Coucou',
    s3 = `Coucou`;
// Pour définisr un string, on utilisera au choix "", '', ou ``;
// "" ou ''  n'ont aucune différence dans leur utilisation;
s1 = "L'appostrophe ne pause pas de probléme ici";
s2 = 'L\appostrophe pause problème ici';
s1 = "Le grand ordinateur a dit \"42\"";
s2 = 'Le grand ordinateur a dit "42"';
// Selon si on a besoin d'appostrophe ou de guillement , on devra utiliser \ ou
// Utiliser l'autre caractère pour définir notre string .
s1 = "Karl";
// En js, le symoble de la conaténation et +
s2 = 'Bonjour ' + s1 + ' Comment vas tu?'
console.log(s2);
// Mais on peut aussi obtenir ce résultat avec de l'interpolation 
s3 = `Bonjour ${s1} Comment vas tu`
// L'interpoloation ne peux s'utiliser qu 'avec `` et le symbole ${}
console.log(s3)
/* s1 = "je ne peux pas 
sauter à la ligne"; 
 */
s3 = `Je peux très bien sauter à la igne`;
console.log(s3)
// ----------------- Les NOMBRES---------------
console.log(99999999999);
// JavaScript perd en précision sur de grand nobres.
console.log(0.2 + 0.1);
// I peut aussi avoir des résultats étrange avec certains nombres à virgule.
console.log(
    5 + 5,
    5 - 5,
    5 * 5,
    5 % 5,
    5 ** 5
);
// % Le modulo, retourne le reste d'une divistion 
// ** La puissance.
console.log(
    5 + "5",
    5 - "3",
    5 + "Banane",
    5 - "Banane"
);
/* JS si il doit additionner un string avec un nombre, fera une concaténation
si il doit soustraire in nombre et un string, il testera si le string contient
un nombre, si c'est le cas, il fera la soustraction, sinon il répondrea NaN, not a number  */
console.log(typeof (NaN));
// isNaN() permet de vérifier si le paramètre n'est pas un nombre.
console.log(isNaN(5 - "chaussette"));
console.log(isNaN(5 - "1"));
// Infinity représente le nombre maximum utilisable en JS
console.log(Infinity, -Infinity)
let n = 0;
n = n + 5;
n += 5;
n -= 2;
n *= 3;
n /= 4;
console.log(n)
// variable ++ (ou ++variable) incrémente (augmente) la variable de 1;
// variable -- décrémente de 1;
n++;
n--;
++n;
--n;
// Actuellement n vaut 9
console.log(n++); // afiche 6
console.log(n); // affiche 7
console.log(++n); // affiche 8
console.log(n); // affiche 8
/* 
Si le ++ est placé après , on donnera la valeur de la variable
avant de l'augmenter si il est placé avant, on augmentera d'abbord puis on donnera le résultat. */

n = 17;
// .toString() transforme un nombre en string, par défaut en utilisat la base 10
// Mais on peut lui donner en paramètre sur quelle base faire la conversion.
console.log(n.toString(2));

let s = "54";
console.log(parseInt(s, 10));
// parseInt() fonctionne dans le sens inverse en changeant un string en nombre.
// Le premier paramètre est le string à changer et le secound la base.
let l = "ff";
console.log(parseInt(l, 16));
let n2 = new Number(45);
console.log(n2);
// ---------------Tableaux / Array------------

let a1 = [5, "Truc", true], a2 = new Array(5, "Truc", true);
console.log(a1, a2);
// Pour afficher un élément d'un tableau, il faut appeler la variable 
// lui accoler des crochet et donner l'index (position) de l'élément à afficher
// Attention l'indexation commence à 0;
console.log(a1[1]);
// .length permet de conître la taille du tableau.
console.log(a1.length);
// Permet de récupérer le dernier élément du tableau/
console.log(a1[a1.lenght-1]);
// .push() permet d'ajouter un élément à la fin du tableau
a1.push("Bidule");
console.log(a1);
// .pop() retire le dernier élément du tableau
a1.pop();
console.log(a1);
// .shift() retire le premier élément du tableau
a1.shift()
console.log(a1);
// .unshift() Ajoute un élément au début du tableau
a1.unshift(42);
console.log(a1);

let a3 = [4, 1, 42, 8, 14];
console.log(a3);
a3.sort();
// Tri les élément par ordere Alphabétique.. Même les nombres 
// Pour les nombres on verra avex les fonction comment amémiorer sort().
console.log(a3);


// Ajoute un élément à la dernière place.
a1[a1.length] = "pizza";
console.log(a1);
// Cette façon de faire ne copie pas le tableau mais seulement
// l'adresse à laquelle se trouve le tableau dans notre ordinateur
let a4 = a1;
console.log(a4);
a4.push("super tableau !");
// En modifier un , modifie les deux.
console.log(a1, a4);
// En utilisant la syntaxe de décomposition (sprad operator)
// le tableau est copié élément par élément dans un noubeau tableau.
let a5 = [... a1];
console.log(a5);
a4.push("super clone !");
// Ici mes deux tableaux sont différents
console.log(a1, a5);
// Le spread operrator décompose mon tableau en différents élément séparé d'une virgule
console.log(...a5);
// let a6 = [a1[0],a1[1],a1[2],a1[3],a1[4],a1[5]]
// console.log(a5[0],a5[1],a5[2],a5[3],a5[4],a5[5]);
let a7 = ["pizza", ...a5 , "Pomme", "Banane"];
//Ici j'insert les éléments de a5 entre les éléments de a7
console.log(a7);

let a8 = ["pizza",a5, "Pomme", "Bananae"];
// Ici je selectionne mon élément à l'index 1 qui est un autre tableau 
// puis l'élément à la position 4 de ce second tableau 
console.log(a8);
console.log(a8[1][4]);

let a9 = [[[[[["Coucou"]]]]]];
// On peut avoir autant de tableau que l'on souhaite les un dans les autes.
console.log(a9);
console.log(a9[0][0][0][0][0][0][0]);

// ---------------------Les OBJETS--------------

let o1 = {nom : "dupont", age : 45, losir: ["bowling", "mahjong"] };
/* Un objet javascript ressemble à un tableau , mais utilise des {} au lieu des []
L'autre différence principale sera l'utilisation de mots pour indexer les valeurs au lieu de chiffres. */
console.log(o1);
// Pour selectionner une propriété de mon objet, je peux appeler mon objet suivi d'un 
// point puis du mon de ma propriété.
console.log(o1.nom);
// Ou alors l'appeler comme je selectionne un élément de mon tableau.
console.log(o1["age"]);
console.log(o1["losir"] [0], o1.losir[0]);
// On peut avoir autant d'objet que l'on souhaite les un dans les autres 
let o2 = {vegetal: {legum: {haricot:{couleur:"vert"}}}};
console.log(o2.vegetal.legum.haricot.couleur);

// console.log(o2.vegetal.legum.haricot.couleur, o2);
// là aussi on ne copie pas l'objet mais seulement son adresse
let o3 = o1;
console.log(o3);
// Donc en lui ajoute une nouvelle valeur
o3.signe = "blance";
// On vient aussi changer l'original
console.log(o3,o1);
// Avec le spread Operator on décompose notre objet dans un nouvel objet
let o4 = {...o1};
console.log(o4);
// en changeant sa valeur, mes deux objets sont bien différents.
o4.sgine = "scorpion";
console.log(o4, o1);
// Je transforme un tableau en objet.
console.log({...a1});
// console.log([...o1]); ne fonctionne pas dans le sens inverse.
o4.yeux = "vert";
let o5 ={...o4 , ...o1};
console.log(o5);
