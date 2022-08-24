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
 * É bacana entender que, se você tem uma condição, ela vai tratar toda sua Array,
 * assim podemos verificar se eles estão ok.
 **/

const temRefri = pedidos.every((element, index) => {
  return element.bebida === "Refrigerante";
});

console.log(temRefri);
