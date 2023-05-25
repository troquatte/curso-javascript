/**
 * A função Promise.allSettled é usada em JavaScript para lidar com várias
 * promessas de forma assíncrona e obter os resultados de todas as promessas,
 * independentemente de terem sido resolvidas ou rejeitadas.
 *
 * Ela retorna uma nova promessa que é resolvida com um array de objetos que
 * descrevem o resultado de cada promessa.
 *
 * A principal utilidade do Promise.allSettled é quando você deseja aguardar
 * a conclusão de um conjunto de promessas e obter informações sobre todas elas,
 * mesmo que algumas tenham sido rejeitadas.
 *
 * Diferentemente do Promise.all, que é interrompido se alguma das promessas
 * for rejeitada, o Promise.allSettled aguardará a conclusão de todas as promessas,
 * independentemente do resultado.
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

Promise.allSettled([promise1, promise2, promise3]).then((resAllSettled) => {
  resAllSettled.forEach((item) => {
    if (item.status === "fulfilled") {
      console.log(item.value);
    } else if (item.status === "rejected") {
      console.log(item.reason);
    }
  });
});
