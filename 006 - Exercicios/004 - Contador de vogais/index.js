/*
  Precisamos desenvolver um contador de vogais que não apenas calcule a quantidade  
  de vogais em uma frase, mas também retorne as vogais que foram utilizadas.

  exp.: Abacate = { total: x, vogais: [x,y,z] }
*/

let minhaString = "Dener São Pedro Troquatte";
minhaString = minhaString.toLowerCase();

const vogais = [...minhaString].filter((vogal) =>
  /[aeiouáéíóúàèìòùãẽĩõũâêîôûäëïöü]/.test(vogal)
);

const total = vogais.length;
console.log({ total, vogais });
