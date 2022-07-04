"use strict";

const indicator = document.querySelector('.scroll-indicator'),
    main = document.querySelector('main'),
    options = {
        // l'option root permet de changer le scrolling observé.
        // par défaut c'est celui du document. mais si on a ajouté un scrolling 
        // sur un élément html, on pourrait faire nos obers
        // root: main  

        /**
         * rootMargin permet d'étendre ou réduire la zone de détection.
         * avec un nombre posistif, la détection sera hors de l'écran.
         * avec un nombre négatif, elle se fera dans une zone réduite de l'"cran.
         * Que ce soit pour l'entré ou la sortie de l'élément."
         */
        // rootMargin: "200px"
        // threshold indique via un chiffre entre 0 et 1 , combien de pourcentage
        // de l'élément doit être visible pour lanc
        // threshold: 0.03
    },
// L'intersection Observer est un objet qui prend une fonction 
// call baqck lors de sa création .
observer = new IntersectionObserver(setIndictor, options);
/* L'intersection observer a besoin qu'on lui indiqu
ce qu 'il doit observer.
ici on utilise sa variable.obserse (la cible à observer) */
observer.observe(main);
/**
 * On peut observer autant d'élément qu'on le souhaite
 * par exemple avec un querySelectorall et un foreach.
 */

function setIndictor(entries) {
    /**
     * La fonction donné en callback sera lancé à chaque fois
     * qu'un élément observé, entre ou sort de l'écran.
     */
    let entry = entries[0];
    console.log(entry);
    /**
     * On trouvera dans cet objet tout un tas d'information utile:
     * target => Pareil qu'avec les évèments, c'est la cible qui a été intersecté
     * (qui est entré dans le viewport)
     * isIntersecting => un boolean qui indique si l'élément est dans le viewport ou non 
     * interextionRation =>  un chiffre entre 0 et 1, qui indique à quel point l'élément 
     * en visible.
     * boudingClicntRect => position et taille de notre élément.
     * intersectionRect => Position et taille VISIBLE de notre élément.
     * rootBounds => position et taille de l'élément racine (par defaut viewport)
     * 
     */
    if (entry.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation);
    } else {
        // pour alleger mon sit, je coupe mon évènement quand je n'en ai pas besoin.
        window.removeEventListener("scroll", indicatorAnimation);
    }

    function indicatorAnimation() {
        /**
         * scrollY représente combien de pixel on a scroll.
         * offsetTop représente la position par rapport au top de notre élément.
         */
        if (window.scrollY > main.offsetTop) {
            // ScrollHeight représente la hauteur de l'élément incluant le padding vertical
            // .toFixed retourne un string correspondant à notre nombre avec "n" chiffres
            // aprés la virgule.
            const prc = ((window.scrollY - main.offsetTop) / main.scrollHeight).toFixed(2);
            indicator.style.transform = `scaleX(${prc})`;

        } else {
            indicator.style.transform = "scaleX(0)";
        }
    }
}
/*
On peut arrêter l'obersation d'un élément avec : 
variableObserver.unobserve (élément observé);
ici ça donnerait:
observer.unobserve(main);


on peut arrêter toute observation de notre observer avec:
variableOberver.disconnect();
ici:
observer.discounnect();
changque observer étant liéà une fonction, si on veut lancer des observations 
au fonctionnement totalement différent, il vaudre mieux créer un nouvel observer.
*/