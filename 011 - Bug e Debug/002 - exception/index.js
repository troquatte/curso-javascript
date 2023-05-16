/**
 * Uma exceção (ou exceção em inglês, "exception") é um evento ou condição
 * anormal que ocorre durante a execução de um programa de computador
 * e interrompe o fluxo normal de execução.
 *
 * Ela indica que algo inesperado aconteceu e que o programa não pode
 * continuar sua execução normal.
 **/

const bugNum = () => {
  const number = "123";

  console.log(number === 123);
  if (number === 123) {
    return "Seu número é 123 - type Number";
  }
  console.log(number);

  throw new Error("Deu Ruim");
};

console.log(bugNum());
