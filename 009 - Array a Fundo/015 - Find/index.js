const pedidos = [
  {
    id: 420,
    nome: "Dener",
    alimento: "Sandubão de Bacon",
    bebida: "Suco Limão",
  },
  {
    id: 152,
    nome: "Naiady",
    alimento: "Sandubão Vegano",
    bebida: "Suco de Laranja",
  },
  { id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva" },
  {
    id: 33,
    nome: "Isabel",
    alimento: "Sandubão de Picanha",
    bebida: "Refrigerante",
  },
  { id: 55, nome: "José", alimento: "Pizza", bebida: "Refrigerante" },
];

/**
 * Nome bem subjetivo também, mas ele procura e te retorna 1 o primeiro valor encontrado da array.
 **/

const findId = pedidos.find((element) => {
  return element.bebida === 29;
});

console.log(findId);
