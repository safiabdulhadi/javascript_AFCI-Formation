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
let ville = prompt("De quel ville vezez-vous?");
console.log(ville.toLowerCase());


// .toLowerCase() transforme toute les lettres d'un string en minuscule
switch(ville.toLowerCase()){
    // switch compare ce qui est mit entre parenthèse et selectionne le case qui correspond
    case "paris":
        case "londre":
            case "tokyo":
        console.log("De la capitale donc.");
        break;
        case "lille":
            console.log("Moule frite et bière");
            break;
            case "roubaix":
                console.log("l'ancienene capitale du textile");
                break;
                case "armentière":
                    console.log("Une ville pauvre mais fière");
                    break;
                    default:
                        console.log("Je ne connais pas.");
}