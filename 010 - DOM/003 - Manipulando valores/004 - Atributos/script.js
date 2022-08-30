"use strict";

const div = document.querySelector("div");
div.setAttribute("id", "teste");

div.setAttribute("class", `${div.getAttribute("class")} active`);
div.setAttribute("class", `${div.getAttribute("class")} background-red`);

div.removeAttribute("id");
console.log(div);
