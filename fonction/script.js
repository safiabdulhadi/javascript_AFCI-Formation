"use strict";
/* Pour déclarer une fonction,
j'utilise le mot clef "function"
suivi de parenthèse qui accueillerons les possibles arguments
Et ensuite des accolades qui contiendrons le fonctionnement de ma fonction. */
function salut() {
    console.log("Bonjour tout le monde !");
}
/* Pour appeler une fonction, il me suffit e taper son nom suivi e parenthèses 
Les opérations d'une fonction, ne sont effectué qu'une fois appelé, si on ne
 l'appelle pas, alors ce qu'elle contient ne s'effectuera jamais. */
salut();
// Il existe d'autres façons de déclarer une fonction.
const salut2 = function () {
    /* on peut ranger une fonction dans une variable, son nom sera alors celui 
    de la variable, on ne met pas de nom après le mot function */
    console.log("Salut tout le monde !");
}
salut2();
// Ici on utilise une fonction fléché.
const salut3 = () => {
    console.log("Coucou tout le monde !");
}
salut3();
// Je peux aussi avoir des fonctions rangé dans des objets 
const s = {
    salut: () => console.log("Salutation tout le monde !")
};
s.salut();
// On peut aussi ranger des fonctions dans un tableau, même si c'est peu utilisé
let arr = [function () {
    console.log("text")
}]
arr[0]()


function bonsoir(nom1) {
    // console.log("Bonsoir " + nom1);
    if (nom1 == undefined) {
        // Afficher un message d'erreur dans la console
        console.error("Donne moi un fichu argument !");
    }
    console.log("Bonsoir " + nom1);
}
/* JS accepte d'appeler une fonction qui attend ds arguments, même sans lui en donner
Les arguments seront alors undfined */
// bonsoir("ali");
bonsoir();
// La fonction attendant un argument, on se doit de lui en donner un.
bonsoir("khan");
// chanque nouvel argument doit être séparé d'une virgule.
/* si on donne plus d'argument que demandé, alors JS va juste ignorer les arguments supplémentaires */
bonsoir("charlie", "Maurice");


function bonneNuit(nom1, nom2){
    // bonus console log : ajouter %c devant le premier argument et du css en second argument
    console.log("%cBonne nuit " + nom1 + " et " + nom2, "color: blue; font_size:4rem;");
    console.log();
}
/* Si une fonction attend plusierus arguments, alors alors de l'appel, il faudra lui donner plusieurs arguments séparé dune virgule.
La première valeur donné ira dans le premier agument, la seconde valeur dans le second et ainsi de suite. */
bonneNuit("Patrick", "Raphael");

function goodBye(nom1, nom2 = "les autres"){
    /* Il est possible de donner des valeurs par défaut à nos paramètres
    dans ce cas, si lui donne une valeur, alors il prendra cette valeur,
    mais si on ne lui donne rien, alors il prendra sa valeur par défaut; */
    console.log("Good bye " + nom1 + " et " + nom2);
}
// affiche khan et les autres.
goodBye("Khan")
// Affiche kevin et Alan.
goodBye("Kevin" ,"Alan");

function  goodMorning(... noms){
    /* Le rest operator (... argument) permet de ranger tous les arguments donné
    dans un tableau. */
    // toString transforme un tableau en string en séparant les valeurs par des virgules
    console.log(noms);
    console.log("Good moring " + noms.toString());
    // join fera de même en séparant les valeurs par le string donné en argument
    console.log("Good moring " + noms.join(" et "));
} 
goodMorning();
goodMorning("Anoine", "Jean", "Charle", "Louis");

function goodEvening(nom1, nom2, ... noms){
    console.log("Good Evening "  + nom1 + " , " + nom2 + " et " +noms.toString());
}
goodEvening("Pierre", "Paul", "Jacque", "Karl");


// --------------------------------Retour sur forEach et fonction callback----------------------------
let pr = ["Alice", "Ariel", "Mulan", "Belle"];
/* certaines fonctions, comme foEach, prennent en argument une autre fonction.
par exemple forEach appelle la fonction donné en argument, pour chaque élément du tableau. */
pr.forEach(bonsoir);
/* On appelle cela une fonction callback 
cela peut être une fonction déclaré précédement, comme une fonction directement écrite entre les parenthèses de forEach, on
parle alors fonction anonyme */
pr.forEach(function(princesse) { console.log("Bienvenue " + princesse)});
// On peut réduire un fonction anoyme à une fonction fléché
pr.forEach((princesse)=>{console.log("Bienv... " + princesse);})
// Si on a un seul argument , alors on peut même retirer les parenthèses

// Si on a une sele instruction dans notre fonction , on peut retirer les accolades.
pr.forEach((princesse)=>console.log("Bienvenue " + princesse));


function compliment(salutation, nom){
    // Ici ma fonction compliment prend en premier argument une fonction.
    // on utilise le premier arument comme une fonction.
    salutation(nom+ " le magnifique")
}
// ! Attenstion, quand on donne une fonction en callback, on lui donne juste le nom.
// ! pas de prenthèse
compliment(bonsoir, "Greg")
compliment(nom=>console.log("Guttentag " + nom), "Hanz");

// ---------------------------------Mettre fin à une fonction, renvoyer une information --------------

function insulte(nom){
    // Le mot clef return met fin à la fonction et renvoi ce qui lui est donné.
    if (nom == undefined) {
        // Afficher un message d'erreur dans la console
        console.error("Donne moi un nom  !");
        // on peut ne rien donner à retourner pour 
        return;
    }
    return nom + " le poltron ";
    // cela ne s'affiche logiquement pas.
    console.log("COUCU TOUT LE MONDE!");
}
// si j'applle la fonction sans console.log, je ne verrai rien.
let ins = insulte("Bob");
// Par contre je peux la donner à un console.log ou a une variable pour récupérer l'information
console.log(ins)
console.log(insulte("Khan"));
let z = insulte("Bruce");
console.log(z);
// Si le return est vide, alors on obtiendrea un undefined
console.log(insulte());
// notre fonction bonsoir ne retourne aucune information, doc elle affichera undefined.
console.log(bonsoir("Bile"))