"use strict";

const dark = document.querySelector('#darkTheme');

// dark.addEventListener('input', changeTheme);
dark.addEventListener('input', changeTheme2);

// function changeTheme(e){
//     // Si notre checkbox est coché on ajoute le thème dark, sinon on lui retire.
//     document.body.classList.toggle("dark", e.target.checked);
// }


function changeTheme2(e){
    // console.log(document.documentElement.style);
// if(dark.check) { 

//     document.documentElement.style.setProperty("--fond", "#333");
//     document.documentElement.style.setProperty("--text", "antiquewhite");
// } else {
//     document.documentElement.style.setProperty("--fond", "antiquewhite");
//     document.documentElement.style.setProperty("--text", "#333");
// }
console.log(document.documentElement.style);
document.documentElement.style.setProperty("--fond", randColor() );
document.documentElement.style.setProperty("--text", randColor() );

}

function randColor(){
    let rgb = [];
    for(let i = 0; i < 3 ; i++) {
        let c = Math.floor(Math.random()* 256);
        rgb.push(c);
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}