/*
  Precisamos mostrar quantas letras repetiras aparecem em uma palvra
  exp.: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1 }
*/

const palavra = "Abacate".toLowerCase();

let letras = {};

for (let i = 0; i < palavra.length; i++) {
  if (letras[palavra[i]]) {
    letras[palavra[i]]++;
  } else {
    letras[palavra[i]] = 1;
  }
}

console.log(letras);
