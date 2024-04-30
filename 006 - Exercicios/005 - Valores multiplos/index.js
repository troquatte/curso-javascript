/*
  Precisamos desenvolver um contador que substitua os múltiplos 
  de 3 por "Javascript" e os múltiplos de 5 por "Typescript"

  Para isso use o operador % Remainder.

  exp.: 3, 6, 9...etc por "Javascript" e 5, 10, 15...etc por "Typescript"
*/

for (let i = 1; i <= 100; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("Javascript / Typescript");
      break;

    case i % 3 === 0:
      console.log("Javascript");
      break;

    case i % 5 === 0:
      console.log("Typescript");
      break;

    default:
      console.log(i);
      break;
  }
}
