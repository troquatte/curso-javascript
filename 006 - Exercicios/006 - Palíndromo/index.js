/*
  Precisamos desenvolver uma ferramenta que verifique se a palavra é um palíndromo

  exp.: arara = true
  exp.: dener = false
*/

let palavra = "Arara";
palavra = palavra.toLowerCase();

const palindromo = palavra === palavra.split("").reverse().join("");

if (palindromo) {
  return console.log(palavra + " é um palíndromo.");
}

return console.log(palavra + " não é um palíndromo.");
