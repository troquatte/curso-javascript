const Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 123456,
  n: 5,
  link: { a: "a é = a", b: { c: "C é = c" } },
};

const { tamanho, estoque, marcas = "Não possui Marca alguma!" } = Tenis;
console.log(tamanho, estoque, marcas);

const { secret: randomNumber, n: avaliacoes } = Tenis;
console.log(secret);
console.log(randomNumber);
console.log(avaliacoes);

const {
  link: {
    a,
    b: { c },
  },
} = Tenis;

console.log(a);

console.log(Tenis.link.a, Tenis.link.b.c);
