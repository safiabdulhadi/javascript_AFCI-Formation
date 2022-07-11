"use strict";
/**
 * 1. Lire la documentation de la fonction sort() de javascript et permettre à celle
 * ci de trier convenablement notre tableau.
 * 2. faire une fonction de "tri" qui va retourner une promesse.
 *            Cette fonction devra trier notre tableau.
 *            Puis si tous s'est bien passé, lancé le .then()
 *            Mais si deux éléments du tableau sont de type différent, lancer le .catch();
 */
let a1 = [5, 12, 8];
let b2 = [7, "27", 9];
// a.sort();
// console.log(a);

a1.sort((a, b) => {
    console.log(a, b);
    return a - b;
})
console.log(a1);

function tri(tab) {
    return new Promise((resolve, reject) => {
        tab.sort((a,b) => {
            if (typeof (a) !== typeof (b)) {
                reject("Tous les éléments du tableau ne sont pas de même type.")
            }
            return a - b;
        })
        resolve("Le tableau a été correctement trié");
    });
}
tri(a1).then(message => console.log(message))
    .catch(error => console.log(error));

tri(a2).then(message => console.log(message))
    .catch(error => console.log(error));