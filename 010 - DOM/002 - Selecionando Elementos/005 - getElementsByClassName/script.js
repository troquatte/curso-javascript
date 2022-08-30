"use strict";

// Retorna todas as TAGS com o mesmo nome
const p = document.getElementsByTagName("p");
console.log(p);

// Só conseguimos iterar o Array dos elementos ( HTMLCollection ) com o FOR
for (let element of p) {
  console.log(element);
}
