"use strict";

/**
 * par défaut, this représente l'objet dans lequel il se trouve.
 * au plus haut niveau de notre script, il est donc égale à l'objet window.
 */
console.log(this);
console.log(this === window);

function test(){
    /**
     * Dans une fonction il sera soit indéfini si on utilise "use strict";
     * soit il prendra l'objet parent, ici windiow.
     */
    console.log(this);
}
test();
/**
 * dans un élènement this rreprésente l'élément sur lequel l'évènement a été placé.
 */
document.body.addEventListener("click", test);
/**
 * à la différence de e.target qui renvera l'élément sur lequel l'évènement à lieu.
 * (ici il peut soit renoyer body soit span)
 * this renverrra toujours body (dans notre cas présent)
 */
document.body.addEventListener("click", function(e){
    console.log(this, e.target);
})
/**
 * Dans une fonction fléché, this ne représentera plus l'élément de l'évènement
 * mais l'objet englobant, ici "window";
 */
document.body.addEventListener("click", ()=>{
    console.log(this);
})
document.body.click();
/**
 * .bind() permet de créer une nouvelle fonction avec un this qui retournera 
 * l'objet placé en paramètre de .bind().
 * mon test() donne un this indéfini 
 * mon test2() donne un this gale à {test: "salut tout le monde"}
 */
let test2 = test.bind({text: "salut tout le mode"});
test();
test2();


let article = document.createElement("article");
// Ici au clique le this me retournera mon article.
document.body.addEventListener("click", test.bind(article));
document.body.click();