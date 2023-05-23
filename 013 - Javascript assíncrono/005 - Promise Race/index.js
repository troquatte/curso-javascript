/**
 * A principal utilidade do Promise.race é quando você deseja executar
 * várias operações assíncronas simultaneamente e obter o resultado
 * da primeira operação que for concluída.
 *
 * Isso é especialmente útil quando você tem um conjunto de promessas
 * e está interessado apenas no resultado da primeira a ser resolvida
 * ou rejeitada, ignorando as demais.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("Promise 1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("Promise 2");
  }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject("Promise 3");
  }, 1000);
});

Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log(1, res);
  })
  .catch((err) => {
    console.log(2, err);
  });
