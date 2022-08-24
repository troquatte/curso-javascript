const myArrayObj = [
  {
    nome: "Dener",
    sobreNome: "Troquatte",
  },
  {
    nome: "Nay",
    sobreNome: "Troquatte",
  },
  {
    nome: "José",
    sobreNome: "Troquatte",
  },
];

myArrayObj.forEach((item, index) => {
  if (item.nome === "Nay") {
    return console.log("O Mozão ta te esperando");
  }

  console.log(index, item.nome);
});
