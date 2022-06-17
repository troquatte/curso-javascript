let Tenis = {
  tamanho: 45,
  estoque: true,
};

delete Tenis.estoque;

console.log(Tenis);

Tenis.estoque = true;

console.log(Tenis);
