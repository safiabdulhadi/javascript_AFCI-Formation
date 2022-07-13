
/**
 *                   EXPORT
 * on peut importer avec un script de type module les fonctions ou objet d'un 
 * autre script.Pour cela il faut que ce script à importer comporte le mot clef
 * "export" devant la déclaration de fonction.
 * on peut exporter autant d'élement qu l'on souhaite , mais seul l'in d'entre  eux
 * peut profiter de " export default"
 * 
 *  ---------- IMPORT
 * par défaut, l'import ne peut se trouver que dans le block le plus haut.
 * C'est à dire pas dans un fonction, une condition, une boucle ou autre./
 * 
 * Sans default dans le fichier, il suffit d'utiliser le mot clef import,
 * suivi d'entre accolade, séparé de 
 */

import start, {create} from "./carousel.js";
const images = ["./img/img1.jpg","./img/img2.jpg","./img/img3.jpg"];
const carousel = create(images);
document.body.append(carousel);

start();