"use strict";

/**
 * innerHtml => Retorna o texto, COM formatações e COM elementos html.
 * createElement => Cria um elemento HTML
 */

const div = document.querySelector("div");
console.log(1, div);

div.innerHTML = `${div.innerHTML} <strong>Esse é meu texto alterado</strong>`;
console.log(2, div);

const elementUl = document.createElement("ul");
[1, 2, 3].forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.innerText = element;
  elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);
