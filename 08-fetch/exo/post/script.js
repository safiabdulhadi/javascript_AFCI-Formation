"use strict";

const url = "https://api.thedogapi.com/v1/images/upload";
const api_key = "469f2c7f-9aad-4623-8e7a-d72c11a91b18";

const formulaire = document.querySelector('form');

formulaire.addEventListener("submit", uploadDog);

function uploadDog(e){
    e.preventDefault();
    const formData = new FormData(formulaire);
    fetch(url,{
        method: "POST",
        headers: {"x-api-key": api_key},
        body: formData
    }).then(checkResponse)
}

function checkResponse(response){
    if(response.ok){
        response.json().then(data=>{
            console.log(data);
        })
    }else{
        console.log(response.statusText);
    }
}