"use strict";
/**
 * Exo :
 * Adapter le feu de circulation avec async et await
 */
const lights = document.querySelectorAll('#trafficLight > div');

function changeColor(index, resolve){
    let colors = ["green", "yellow", "red"];
    lights.forEach((l, i)=>{
        l.style.backgroundColor = i != index ? "": colors[i]
    })
    resolve();
}
function switchPromise(time, i){
    return new Promise(resolve=>{
        setTimeout(changeColor, time, i, resolve);
    })
}

function step(){
    switchPromise(2000, 0)
        .then(()=>switchPromise(3000, 1))
        .then(()=>switchPromise(1000, 2))
        .then(()=>step());
}
step()