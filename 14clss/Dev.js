"use strict";
import H from "./Human.js";
/**
 * Le mot clef exends permet de faire hériter de toute les propriétés et mzthodes 
 * de la classe qui suis.
 * je ne peux hériter que d'une classe à la fois, mais une classe qui a hérité, 
 * peut être hérité et ainsi de suite.
 */
export default class Dev extends H {
    constructor(prenom, nom, age, tech) {
        /**
         * La fonction super appel le constructeur du parent, afin de lui donner les 
         * informations requise.
         * même si le constructeur du parent ne requière aucun paramètre, il est important
         * d'appeler super() pour que toute les fonctionnalités soit bien accessible.
         */
        super(prenom, nom, age);
        this.technique = tech;

    }

    set technique(t) {
        // this.tech = Array.isArray(t)? t: [t];
        if (Array.isArray(t)) {
            this.tech = t;

        } else {
            this.tech = [t];
        }
    }
    /**
     * Il est possible de réécrire une méthode d'un parent.
     */
    salutation() {
        console.log(`Bonjour je suis ${this.fullname} et jai ${this.age} et je
        maîtrise ${this.tech.join(',')}! `)
    }

}