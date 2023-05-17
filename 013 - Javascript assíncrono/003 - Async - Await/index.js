/**
 * Async/Await: O async/await é uma forma mais recente e mais legível
 * de lidar com tarefas assíncronas em JavaScript.
 *
 * Essa abordagem utiliza as palavras-chave async e await para indicar funções
 * assíncronas e pausar a execução até que uma Promise seja resolvida.
 */

const pedido = (pedido) => {
  return new Promise((resolve, reject) => {
    if (pedido === "Pizza") {
      return reject(`Não temos o seu pedido: [${pedido}]`);
    }

    setTimeout(() => {
      resolve(`Chegou o seu pedido [${pedido}]`);
    }, 5000);
  });
};

const reservarPedido = async () => {
  try {
    console.log(await pedido("Arroz"));
    console.log(await pedido("Carninha"));
    console.log(await pedido("Pizza"));
  } catch (error) {
    console.log(error);
  }
};

reservarPedido();
