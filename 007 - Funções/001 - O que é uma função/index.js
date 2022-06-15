/*
  O que é uma função?
  É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Functions declaration
function isValidDeclaration() {
  const soma = 1 + 2;

  if (soma === 3) {
    return true;
  }

  return false;
}
// console.log(isValidDeclaration());

// 2 - Functions expression
const isValidExpression = function () {
  return false;
};

// console.log(isValidExpression());
// 3 - Arrow Functions
const isValidArrow = () => {
  const multiplicacao = 2 * 2;
  return multiplicacao;
};

console.log(isValidArrow());
