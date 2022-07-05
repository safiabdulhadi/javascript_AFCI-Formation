"use strict";
/**
 * Faire une requête sur le lien donné ci-dessous.
 * Analyser l'objet JSON obtenu,
 * Et afficher toutes les informations qui nous sont rendu
 */

const ur12 = "https://api.thedogapi.com/v1/images/search";
fetch(ur12).then(res => {
    if (res.ok) {
        res.json()
            .then(data => {
                console.log(data[0]);
                document.body.innerHTML += `<img src="${data[0].url}" alt="image aléatoire d'animal">`;
            })
            .catch(err=>console.log(err.statusText))
    }
    // console.log("hello")
})