const pedido = (pedido) => {
  return new Promise((resolve, reject) => {
    if (pedido === "Pizza") {
      return reject(`Não temos o seu pedido: [${pedido}]`);
    }

    setTimeout(() => {
      resolve(`Chegou o seu pedido: [${pedido}]`);
    }, 5000);
  });
};

(async () => {
  try {
    console.log(await pedido("Arroz"));
    console.log(await pedido("Carninha"));
    console.log(await pedido("Pizza"));

    console.log("Deu bom!");
  } catch (error) {
    console.log(error);
  }
})();
