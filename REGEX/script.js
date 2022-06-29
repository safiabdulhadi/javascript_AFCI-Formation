"use strict";
/* Le REGEX ou Expression Régulière, permettent la recherche dans une chîne de 
caractère la présence de caractères en particulier. */

// Une regex commence par un / et fini par un / ou un flag (caractère supplémentaire.)

// const r1 = /a/;
// const r2 = /b/;

const r1 = /ou/;
const r2 = /[ou]/;
// recherche la présence de "ou" dans les mots suivants :
console.log(r1.test("Bonjour"), r1.test("Salut"));
// recherche la présence de "o" ou "u" dans les mots suivants :
console.log(r2.test("Bonjour"), r2.test("Salut"));

const r3 = /^ou/;

//Vérifie que cela commence par "ou"
console.log(r3.test("Bonjour"), r3.test("outre"));


const r4 = /ou$/;

//Vérifie que cela termine par "ou"
console.log(r4, r4.test("Bonjour"), r4.test("mou"));

//Vérifie que cela 

const r5 = /ou|oi/;
//Vérifie que cela contient "ou" ou "oi"
console.log(r5, r5.test("Bonjour"), r5.test("bonsoir"));


const r6 = /a-z/;
//Vérifie que cela contient des lettres de a à z
console.log(r6, r6.test("Bonjour"), r6.test("2154562452"));

//Vérifie que cela contient des lettres de a à z
const r7 = /a-z/;
console.log(r7, r7.test("Bonjour"), r7.test("2154562452"));


const r8 = /ou?/;
//Vérifie que les caractères précédent apparaissent 0 fois ou 1 plus.
// mais au moin un doit apparître.
console.log(r8, r8.test("Bonjour"), r8.test("objet"),r8.test("pizza"));




const r9 = /ou+/;
//Vérifie que les caractères précédent apparaissent 0 fois ou plus.
// mais au moin un doit apparître.
console.log(r9, r9.test("Bonjour"), r9.test("objet"),r9.test("pizza"));





const r10 = /ou*/;
//Vérifie que les caractères précédent apparaissent 0 fois ou plus.
// mais au moin un doit apparître.
console.log(r10, r10.test("Bonjour"), r10.test("objet"),r10.test("pizza"));



const r11 = /ou{2}/;
//Vérifie que les caractères précédent apparaissent 2 fois
console.log(r11, r11.test("Bonjour"), r11.test("bonjour"),r11.test("bjourrrrurr"));



const r12 = /(ou){2}/;
//Vérifie que les caractères précédent apparaissent 2 fois
console.log(r12, r12.test("Bonjour"), r12.test("bonjour"),r12.test("bjourrrrurr"));



const r13 = /(ou){2,4}/;
//Vérifie que les caractères précédent apparaissent 2 et 4 fois
console.log(r13, r13.test("Bonjour"), r13.test("bonjour"),r13.test("bjourrrrurr"));

const r14 = /(ou){2,}/;
//Vérifie que les caractères précédent apparaissent 2 et plus de fois
console.log(r14, r14.test("Bonjour"), r14.test("bonjour"),r14.test("bjourrrrurr"));


const r15 = /\^/;
//Vérifie que les caractères "^" apparaisse.
// \permet d'échaper un caractère utilisé dans les regex.
console.log(r15, r15.test("^^"), r15.test("bonjour"));



const r16 = /\s/;
//Vérifie que la présence d'espace
// \permet aussi de donner un rô
console.log(r16, r16.test("Coucou tout le mode"), r16.test("bonjour"));




const r17 = /\d/;
//Vérifie que la présence de chiffres. égale à [0-9]
console.log(r17, r17.test("bonjour 8 fois"), r17.test("bonjour"));

// -----------------------------Match--------------

const phrase = "J'aime la pizza, les cannelés et les okonomiyaki";
/* match me retourne un tableau correspondant aux zlzments trouvé
par ma regex dans ma chaîne de caractères. */

console.log(phrase.match(/pizza/));
//par défaut la regex s'arrête au premier élément retrouvé.
console.log(phrase.match(/les/));
// Mais en lui ajoutant le flag "g" elle cherchera tous les éléments qui correspondent.
//Les flags s'ajoutent après la fermeture de la regex.
console.log(phrase.match(/les/g));

const phrase2 = "Vive les regex et vive javascript !";
// par défaut notre regex est sensible à la casse. (minuscule, majuscule)
console.log(phrase2.match(/vive/g));
// Avec le flag "i" la regex va ignorer la casse.
console.log(phrase2.match(/vive/gi));

// -----------------------------replace----------------------
/* replace retourne le string en remplaçant l'élément en premier paramètre par 
celui en second paramètre. */
console.log(phrase.replace(/pizza/, "salade"));
// Comme avec une regex.
console.log(phrase.replace(/"pizza"/, "salade"));
// l'avantage de la regex, c'est qu'on pourra lui faire remplacer plusieurs éléments 
// et lui dire que cela importe peu si il y a des majuscules ou non.
console.log(phrase.replace(/pizza|okonomiyaki|cannelé/gi, "salade(s)"));
console.log(phrase.replace(/regex|javascript/gi, "**********"));
// $& permet de ne pas remplacer le mot recherché mais seulement de lui ajouter un string

console.log(phrase2.replace(/javascript/gi, "$& et CSS"));
console.log(phrase2.replace(/javascript/gi, " '$&' (c'est faux) "));


// ------------flag bonus--------------
const phrase3 = `1er  : Maurice
2ème : Paul 
3ème : Charli`;

// Ici même si il doit retourner tous les résultats, on lui indique que l'on recherche
// un string qui commence par un chiffre, donc seul le 1 est pris en compte.
console.log(phrase3.match(/^\d/g));

// Avec le flag "m" pour multiple, il va prendre en compte que les sauts à la igne 
// sont compté comme de nouvelles phrases.
console.log(phrase3.match(/^\d/gm));
// Cela marche aussi avec "$" pour fin de string
console.log(phrase3.match(/\b(\w+)$/gm));
// w recherche des lettres, attention, pour lui un accent n'est pas une lettre.

// Attenstion, toute lettre accentué, n'est pas compris dans [a-z]
console.log(/^[a-z]+$/.test("paul"));
console.log(/^[a-z]+$/.test("élodie"));
// pour accepter des accents, il va falloir les écrires un à un .
console.log(/^[a-zéàèâê]+$/.test("élodie"));
// "." correspond à n'inporte quel caractère.
console.log(phrase.match(/pizza.+cannelé/));
// sauf les sauts )à la ligne.
// le flag "s" permet de prendre en compte les sauts à la ligne.
console.log(phrase3.match(/1.+3/s));