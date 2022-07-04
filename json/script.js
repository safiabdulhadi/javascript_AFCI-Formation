"user script";

const form = document.querySelector('form');

form.addEventListener("submit", saveData);
function saveData(e) {
    // j'empêche mon formulaire de recharger la page
    e.preventDefault();
    // Je transfère les données de mon formulaire à l'objet formData
    const data = new FormData(form);
    // Je déclare un objet vide
    let user = {};
    // je boucle sur mon FormData pour obtenir toute les valeurs et indexation.
    data.forEach((value, name)=>{
        // j'ajoute ces valeurs en tant que propriété
        user[name] = value;
        // J'obtien un objet contenant toute les valeurs de mon forulaire.
    })
    // console.log(user)
    showUser(user);
    const struser = JSON.stringify(user);
    localStorage.setItem("user", struser);
}
function showUser(u) {
const h1 = document.querySelector('h1');
h1.textContent = `Je suis ${u.prenom}, ${u.age} ans!`;
}

const userString = localStorage.getItem("user");
if(userString) {
    const user = JSON.parse(userString);
    console.log(user);
    showUser(user);
}
