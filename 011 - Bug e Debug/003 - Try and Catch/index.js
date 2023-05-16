/**
 * try-catch é uma construção de controle de fluxo em várias linguagens
 * de programação, incluindo JavaScript, que permite lidar com exceções
 * de forma estruturada.
 *
 * A construção try-catch consiste em dois blocos de código:
 * o bloco try e o bloco catch.
 */

const bugNum = () => {
  try {
    const number = "123";

    if (number === 123) {
      return "Seu número é 123 - type Number";
    }

    throw new Error("Deu Ruim");
  } catch (error) {
    throw error;
  }
};

console.log(bugNum());
console.log("Continua executando!");
