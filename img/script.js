"use strict";

const imgs = document.querySelectorAll('.img-container');

imgs.forEach(cont=>{
    cont.querySelector("button").addEventListener("pointerdown", fullscreen.bind(cont))
})

function fullscreen(){
    if(document.fullscreenElement){
        document.exitFullscreen();

    }else{
        this.requestFullscreen();
    }
}