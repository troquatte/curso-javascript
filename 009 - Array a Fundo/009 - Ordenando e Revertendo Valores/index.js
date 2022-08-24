const stringArray = ["A", "C", "D", "W", "L", "B"];

console.log(stringArray.sort());
console.log(stringArray.reverse());

/**
 * sort((a, b) => a - b)
 * se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
 * se retornar 0, a ordenação de "a" e "b" não mudará.
 * se retornar um valor positivo, o valor em "b" será ordenado antes de "a".
 **/

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

console.log(numberArray.sort((a, b) => a - b));
console.log(numberArray.sort((a, b) => b - a));
console.log(numberArray.sort((a, b) => a - b).reverse());

const objArray = [
  {
    nome: "Dener Troquatte",
  },
  {
    nome: "Nay Troquatte",
  },
  {
    nome: "José Troquatte",
  },
  {
    nome: "Isabel Troquatte",
  },
  {
    nome: "Marcio Troquatte",
  },
  {
    nome: "Valentina Troquatte",
  },
];

console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a, b) => b.nome.localeCompare(a.nome)));
console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse());
