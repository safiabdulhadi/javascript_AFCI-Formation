"use strict";
/**
Math.random() retourne une valeur comprise entre ° et 1
*20 pour le multiplier par 20 (on obtient une valeur entre 0 et 20)
math.floor() arrondi à l'inferieur (on obtient un nombre entier (sans virgule))
 */
let x = Math.floor(Math.random()*20);
if(x < 10){
    // On commence avec un if pour vérifier une condition.
    console.log(x+ "Est plus petit que 10");
}
else if(x>10){
    // si le if est faux, on peut mettre ou pas autant de else if qu'on veut pour
    // vérifier autrant de conditions supplémentaires 
    console.log(x + "Est plus grand que 10");
}
else{
    // Et on peut accéssoirement terminer par un else pour gérer tout les cas qui 
    // ne correspondent pas aux conditions précédentes.
    console.log("Il vaut 10");
}
// une ternaire est une condition résumé en une ligne, utile dans le cas où l'on 
// a peu de condtions et peu de réponse possible:
// condition? true : false;
let message = x<=10 ? x+ "Est plus petit ou égale à 10" : x+ "Est plus grand que 10";
console.log(message);
// Atttenstion de ne pas allé trop loin avec le sternaires pour rester visible ici:
// condition ? true : conditon ? true : false
let m2 = x<10? x+ " Est plus petit que 10" : x>10? x + "Est plus grand que 10" :"Il vaut 10"
console.log(m2);






// ----------------------SWITCH--------------------
// let ville = "a";

let ville = prompt("De quel ville vezez-vous?");
console.log(ville);

ville = ville?? "pas de ville";

// .toLowerCase() transforme toute les lettres d'un string en minuscule
switch(ville.toLowerCase()){
    case "pas de ville":
        console.log("Pourquoui tu ne veux pas répondre?");
        break;
    // switch compare ce qui est mit entre parenthèse et selectionne le case qui correspond
    case "paris":
        case "londre":
            case "tokyo":
                // si je met plusieurs cas les un après les autres,
                // Ils effecturont la même action
        console.log("De la capitale donc.");
        break;
        // Le mot clef break indique où doit s'arrêter le cas.
        case "lille":
            console.log("Moule frite et bière");
            break;
            case "roubaix":
                console.log("l'ancienene capitale du textile");
                break;
                case "armentière":
                    console.log("Une ville pauvre mais fière");
                    break;
                    // Default permet de gérer ce que doit faire le switch si aucune cas ne correspond
                    default:
                        console.log("Je ne connais pas.");
}
// ------------------------------??-----------------
let a, b = undefined, c= null, d= "chaussette", e = {nom: "Bruno"}, f = ["text"];
console.log(a?? "coucou");
console.log(b?? "coucou");
console.log(c?? "coucou");
console.log(d?? "coucou");
console.log(e.nom?? "coucou");
console.log(e.prenom?? "coucou");
console.log(f[0]?? "coucou");
console.log(f[1]?? "coucou");