"use strict";
/**
 * La balise canvas, n'a strictement aucune utilité sans JS.
 */
const canvas = document.querySelector('canvas');
/* Je récupère le contexte dans lequel on va travailler 
(certaines librairies permettent de faire de la 3D ou des animations poussées)*/
const ctx = canvas.getContext("2d");
// --------------- Optionnelle ---------------------
function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);
// --------------------Canvas --------------------------
//fillRect dessine un rectangle rempli avec en argument (x, y, width, height)
ctx.fillRect(50, 50, 150, 25);
// fillStyle permet de changer la couleur de remplissage. 
ctx.fillStyle = "rgb(156,78, 94)";
// Cela n'affecte que les dessins suivants.
ctx.fillRect(67, 87, 98, 35);
// strokeRect dessine un rectangle juste avec ses bordures.
ctx.strokeRect(36, 78, 45, 78);
// strokeStyle change la couleur des lignes du canvas.
ctx.strokeStyle = "red";
// Là aussi que sur ceux qui suivent.
ctx.strokeRect(89,54, 73, 129);
/**
 * Pour des formes plus complexe on va faire ceci :
 * On commence un chemin.
 */
ctx.beginPath();
// On déplacement notre pointeur à une position (x,y)
ctx.moveTo(345, 78);
// Je prévoi jusqu'où ma ligne devra être effectué.
ctx.lineTo(267, 12);
// Je dessine réellement ma ligne.
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 54);
ctx.lineTo(34, 98);
ctx.lineTo(78, 438);
// closePath rajoute une ligne entre mon point de départ et mon point d'arrivé.
ctx.closePath();
ctx.strokeStyle = "green";
// lineWidth gère la largeur de vos lignes.
ctx.lineWidth = 8;
ctx.fillStyle = "yellow";
// fill() permet de remplir la forme tracé.
ctx.fill();
ctx.stroke();

ctx.beginPath()
/**
 *  arc() permet de dessiner des arcs de cercle.
 *  On a la position x et y du centre de l'arc de cercle.
 *  Ensuite le rayon de l'arc de cercle.
 *  Puis la position de départ du radiant.
 *  Puis la position de fin du radiant.
 */
ctx.arc(89, 90, 42, 0, 2*Math.PI);
ctx.stroke();
ctx.beginPath()
ctx.arc(189, 190, 42, 0, 2);
ctx.stroke();
ctx.beginPath()
ctx.arc(289, 190, 42, 5, 2*Math.PI);
ctx.stroke();
// Vide le canvas avec un rectangle en position x,y et d'une largeur et hauteur donnée.
// ctx.clearRect(0,0, canvas.width, canvas.height);

/**
 * Mini EXO :
 * Faire une fonction qui fait les actions suivantes :
 * vider le canvas,
 * puis dessiner un cercle à la position x et y
 * Ajouter une condition 
 *      Si x plus le rayon du cercle plus grand que la largeur du canvas 
 *          ou si x moins le rayon du cercle plus petit que 0
 *              Alors vh égale à moins vh.
 *      Si y plus le rayon du cercle plus grand que la hauteur du canvas 
 *          ou si y moins le rayon du cercle plus petit que 0
 *              Alors vv égale à moins vv.
 * Puis ajouter vh à x et vv à y;
 * lancer une première fois la fonction.
 */
let x = 50, y = 50, vv = 0.01, vh = 0.01, r= 42;

function cercle(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // ctx.drawImage(img, x-500, y-500)
    // ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(x,y,r, 0, 2*Math.PI);
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    if(x+r > canvas.width || x-r <0){
        vh = -vh;
    }
    if(y+r > canvas.height || y-r <0){
        vv = -vv;
    }
    x += vh;
    y += vv;
    requestAnimationFrame(cercle)
}
// cercle()
// On crée une nouvelle image
let img = new Image();
// On lui ajoute sa source.
img.src = "logo-windows.png";
// On attend qu'elle ai chargé pour l'afficher.
img.onload = ()=>{
    ctx.drawImage(img, 0, 0, 500, 400)
    // cercle()
}
ctx.lineWidth = 1;
// font permet de paramétrer la taille et la police d'écriture.
ctx.font = "82px serif"
// strokeText écrit du texte avec le contour des lettres
ctx.strokeText("Coucou", 500, 500)
ctx.fillStyle = "purple"
// On peut aussi gérer l'alignement du texte
ctx.textAlign = "center"
// fillText écrit du texte en remplissant celles ci.
ctx.fillText("Salut", 400, 400,50)
// Optionnellement on peut leur donner une largeur maximum

ctx.lineWidth = 10;
ctx.beginPath()
// Le line cap gère la forme et où s'arrête la ligne.
ctx.lineCap = "round";
ctx.moveTo(550, 40);
ctx.lineTo(550, 400);
ctx.stroke();
ctx.beginPath()
ctx.lineCap = "square";
ctx.moveTo(600, 40);
ctx.lineTo(600, 400);
ctx.stroke();
ctx.beginPath()
ctx.lineCap = "butt";
ctx.moveTo(650, 40);
ctx.lineTo(650, 400);
ctx.stroke();