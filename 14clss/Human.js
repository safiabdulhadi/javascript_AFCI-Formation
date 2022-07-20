"use strict";

/**
 * Une classe est un modèle (un plan ) qui servira à la construction d'un objet.
 * Lorsque l'on voudra créer un nouvel objet à partir d'une classe on applellera 
 * le nom de la classe précédé du mot clef "new".
 * Certaines classses sont déjà intégré à JS :
 * new Data(), new forData() et autres.
 * Evidemment on peut créer les notres.
 * Quelques Conventions de developpeur concernant les classes:
 * un classe par fichier.
 * Le nom de la classe commmence par une majuscule.
 * Le nom du fichier est le même que celui de la classe.
 */

export default class Human{
    /**
     * Lorsque l'on déclare des propriétes dans une classe, il n'y a pas de mot
     * clef let, const ou var.
     */
#name= {};
#age;
/* Une propiété static est accessible uniquement lorsque la classe 
n'est pas instancié
*/
static categorie = "Mamifère";
/**
 * 
 * @param {*} prenom 
 * @param {*} nom 
 * @param {*} age 
 */
    constructor(prenom, nom, age){
        /**
         * Les propriétés peuvent mais n'ont pas besoin d'être déclaré au préalable.
         * Exception faite des propriétés privée qui doivent être déclaré avant.
         * Une propriété privée est une propriété qui n'est accessible qu' à l'interieur
         * de notre objet.
         */
        this.#prenom = prenom;
        this.#nom = nom;
        this.#setAge = age;
        this.createAt = new Date();
    }
        // pareillement aux propriétés, pas besoin du mot clef function pour déclarer des methode
        static description(){
            console.log('Une humain a générlement , une tête, un buste, deux bras et deux jambes');
        }
        set #prenom(p){
            this.#name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
        }
        set #nom(n){
            this.#name.nom = n.toUpperCase();
        }
        get fullname(){
            /**
             * Mes propriétés nom et prenom étant privée, je n'y ai pas accés 
             * en dehors de la classe, mais je peux y accéder via ce getter qui est 
             * public.
             */
            return this.#name.prenom + " " + this.#name.nom;
        }
        set #setAge(a){
            this.#age = parseInt(a);
        }
        get age(){
            return this.#age + " ans";
        }
        salutation(){
            console.log(`Bonjour je suis ${this.fullname} et jai ${this.age}! `)
        }
        anniversaire(){
            this.#age++;
            this.salutation();
        }
}