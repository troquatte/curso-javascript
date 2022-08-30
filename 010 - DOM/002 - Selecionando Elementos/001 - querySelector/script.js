"use strict";

// Retorna a primeira Tag no querySelector("SUA TAG AQUI")
const h1 = document.querySelector("h1"); // TAG HTML5
const classP = document.querySelector(".paragrafo"); // .CLASS
const idP = document.querySelector("#paragrafo"); // #ID

console.log(h1);
console.log(classP);
console.log(idP);

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
  title.innerText = timer;
  timer++;
}, 1000);
