/*
  Forma correta de se usar
  Number 123
  Number 123 + 123 = 246
  Number("123") - 1 = 122


  Cuidado que assim pode gerar Bugs
  Number "123" - 1 = 122
  Number "123" * 2 = 246
*/

console.log(123);
console.log(Number("123") + 1);

console.log("******************");

console.log(typeof 123);
console.log(typeof Number("123"));
console.log(typeof "123");
