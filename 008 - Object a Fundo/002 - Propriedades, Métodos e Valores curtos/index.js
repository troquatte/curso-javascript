function Tenis(tamanho, estoque, preco) {
  return {
    tamanho,
    estoque,
    preco,
  };
}

console.log(Tenis(35, true, "R$ 35"));

const tamanho = 35;
const estoque = true;
const preco = "R$ 35";

const Tenis2 = {
  tamanho,
  estoque,
  preco,
};

console.log(Tenis2);

const Tenis3 = {
  getTamanho() {
    return 35;
  },
};

console.log(Tenis3.getTamanho());
