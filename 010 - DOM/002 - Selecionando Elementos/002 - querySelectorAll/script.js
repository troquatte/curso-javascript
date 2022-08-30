"use strict";

// Retorna todos os elementos em um NodeList no formato Array
// [ todos os p, dentro de um Array ]
// NodeList [p.paragrafo, p#paragrafo]
const p = document.querySelectorAll("p");

p.forEach((element, index) => {
  element.style.color = "#FFF";
  element.style.padding = "20px";

  if (index === 0) {
    element.style.background = "blue";
  }

  if (index === 1) {
    element.style.background = "red";
  }
});
