"use strict";




const url = "./hero.json";
// Je crée un nouvel objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
// Je donne une fonction qui sera appelé à chaque changement d'état de notre requête
xmlhttp.onreadystatechange = handleRequest;

function handleRequest() {
    /**
     * On attend d'être à l'étape 4 de la requête (indiquant sa fin)
     * et on vérifie que le sttus de la requête est à 200 (tous s'est bien passé)
     */
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let success, data;
        /**
         * try{} catch(err){}
         * N'est pas lié aux requêtes http, il peut être utilisé n'importe où en JS.
         * Il va tenter d'executer le code dans le "try", et si il y a une 
         * erreur, il donnera les informations de l'erreur à catch (dans l'argument
         * placé entre parenthèse) et executera le code des accolades de catch.
         * Cela permet de ne pas faire planter le code si il y a une erreur,
         * et de produire son propre message d'erreur
         */
        try {
            data = JSON.parse(xmlhttp.responseText);
            success = true;
        } catch (error) {
            console.log(error.message + "DANS -> " + xmlhttp.responseText);
            success = false;
        }
        if (success) {
            // console.log(data);
            document.body.innerHTML = `<h1> ${data.members[0].name} </h1>`;
        }
    }
}
/**
 * On ouvre la requête, on lui indique quel type de requête lancer en premier paramètre
 * En second on lui donne l'adresse du fichier ou site auquel on souhaite accéder.
 * En troisème si la requête doit être asynchrone ou non.
 *      Une requête asynchrone se fera pendant que JS peut executer d'autres choses
 *      Alors que en non-asynchrone JS bloquera son execution jusqu'à la fin de la requête
 */
xmlhttp.open("GET", url, true);
// On envoi la requête
xmlhttp.send();

// De nos jours, c'est fetch qui est préféré.
fetch(url).then(handleFetch);

function handleFetch(responseText) {
    // console.log(responseText);
    // La propriété ok est un boolean indiquant si cela s'est bien passé ou non.
    if (responseText.ok) {
        // si le parse fonctionne, il lancera le callback de then
        // sinon ce sera le call back de catch
        responseText.json()
            .then(showResult)
            .catch(error=>console.log(error));
    } else {
        console.log(responseText.statusText);
    }
}
function showResult(data) {
    document.body.innerHTML += `<h2> ${data.members[0].powers[1]} </h2> `;
}