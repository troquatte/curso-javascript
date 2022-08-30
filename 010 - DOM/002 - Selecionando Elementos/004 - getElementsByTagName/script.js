"use strict";

// Retorna todas as classes com o mesmo nome
const p = document.getElementsByClassName("paragrafo");
console.log(p);

// Só conseguimos iterar o Array dos elementos ( HTMLCollection ) com o FOR
for (let element of p) {
  console.log(element);
}
