"use strict";

/**
 * textContent => Retorna o text COM formatações, mas sem os elementos html.
 * innerText => Retorna somente o texto, sem formatações ou elementos html.
 **/

const classP = document.querySelector(".paragrafo");
const idP = document.querySelector("#paragrafo");

console.log(classP.textContent);
console.log(idP.innerText);

classP.textContent = "Dener Troquatte";
idP.innerText = "<strong>Dener Troquatte</strong>";
