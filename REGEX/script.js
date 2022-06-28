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
//Vérifie que les caractères "^" apparaisse.
// \permet d'échaper un caractère utilisé dans les regex.
console.log(r17, r17.test("bonjour 8 fois"), r17.test("bonjour"));