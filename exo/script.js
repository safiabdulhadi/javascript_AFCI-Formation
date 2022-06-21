"use strict";
// ---------------------------------EXO 1--------------------------
/* écrire un algorithme qui demade à l'utilisateur un nombre compris entre 1 et 3
jusqu'à ce que la réponse convienne. */


// let x;
// do{
//     x = prompt("Donne moi chiffre entre 1 et 3.");
// } while(x < 1 || x > 3);
// console.log(x);



// ---------------------------------EXO 5.2----------------------
/*Ecrire un algorithme qui demande un nombre compris entre 10 et 20 , jusqu'à ce que
la réponse convienne, en cas de réponse superieur à 20, on ferra apparaître un message 
"Plus petit !" et inversement "plus grand !" si inférieur à 10. */



// let y, m = "Donne moi un chiffre entre 10 et 20.";
// do{
//     y = prompt(m);
//     m = y<10? "Plus grand !" : "Plus petit !";
// } while(y<10 || y > 20);
// console.log(m);


//  équivalent à 
// let y, m = "Donne moi un chiffre entre 10 et 20.";
// do{
//     y = prompt(m);


// if (y < 10){
//     m = "plus grand !";
//     console.log(m)
// }
// else {
//     m = "plus petit !";
//     console.log(m)
// }
// } while(y<10 || y > 20);




// -----------------------------EXO 5.3 -------------------
/* Demander un nombre à l'utilisateur, puis afficher les dix nombres suivante. */

// let z = parseInt(prompt( "Donne moi nombre et je te répondrais les dix suivant."));
// for(let i = z+1; i<=10; i++){
//     console.log(i);
// }


/* Ecrire un algorithme qui demade un nombre puis écrit la table de multiplication de ce nombre. */

// let w = prompt("Donne moi nombre dont tu veux voir la table de multiplication");
// for(let i = 1; i <= 10; i++){
//     console.log(`${w} * ${i} = ${w*i}`);
// }




/* Ecrire un algorithme qui demade un nombre puis calcul la factoriel de ce nombre 
(le 5.5 demande la même chose mais avec des additions plutôt que des multiplications) */


// let v = prompt("Donne moi un nombre !"), total = 1;
// for (let i = 1; i <=v; i++) {
//     console.log("Ittération " + i + ":");
//     console.log("total = " + total + "*" + i);
//     total *= i; // total = total *i;
// }
// console.log("La factoriel de "+v+" vaut "+ total);

/*
 total == 1;
 i ==1;
 v = 5;
 première boucle :
 total = 1*2
 troisième boucle:
 total  2*3
 Quatrième boucle:
 total = 6
 Cinquième boule:
 totoal = 14*5
 i ==6 doc étant superieur à v, la boucle s'arrête 
 J'afficle ensuite total qui ici vaut 120
*/
// -----------------------------EXO 5.7---------------------------
/* Ecrir un algorithme qui demade successivement 20( 5 parceque la flemme) nombres 
et qui lui dise ensuite quel était le plus grand parmi ces nombres.
bonus : Indiquer la position à laquelle a été donné ce nombre */

// let nb, max, pos;
// for(let i = 1; i <=5; i++) {
//     nb = parseInt(prompt("Donne moi un fichu nombre !"));
//     if(i ==1 || max< nb){
//         max = nb;
//         pos = i;
//     }
// }
// console.log(`Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`);

// ------------------------EXO 5.8----------------------------------
/* même exercice que précédement mais on arrête de demander des qui si l'utilisateur
entre un 0 */

// let nb, max, pos;
// let i = 1;
// do{
//     nb = parseInt(prompt("Donne moi un fichu nombre !"));
//     if(i==1 || max<nb){
//         max = nb;
//         pos = i;
//     }
//     i++;
// } while (nb != 0)
// console.log(` Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`);