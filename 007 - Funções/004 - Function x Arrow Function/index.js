/*
  1 - Nome de função
  2 - Retorno
  3 - Não tem Hoisting
  4 - Arguments
*/

function nomeFunc() {
  return "Dener Troquatte";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
  return "Dener Troquatte";
};

console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "Dener Troquatte";

console.log(nomeFuncArrowReturn());

const nomeFuncArrowHoisting = () => {
  return "Dener Troquatte";
};

console.log(nomeFuncArrowHoisting());

// Não funciona o arguments
// const nomeFuncArrowArguments = () => {
//   return arguments;
// };
// console.log(nomeFuncArrowArguments());

function nomeFuncArguments() {
  return arguments;
}

console.log(nomeFuncArguments("Dener Troquatte"));

const nomeFuncArrowParams = (param) => param;

/* 
  5 - Não pode ser invocada com New
*/

function newFunc() {
  return "Dener Troquatte";
}

console.log(new newFunc());

const newFuncArrow = () => {
  return "Dener Troquatte";
};

console.log(new newFuncArrow()); // o New não vai Funcionar na Arrow Function

/* 
  6 - Contexto
  Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.
  
  Isso significa que arrow functions herdam o contexto local de onde foi declarado, 
  enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
  no momento da chamada 

  Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente 
  como o contexto global, que no caso dos navegadores é window
*/

const lanches = {
  cardapio: [
    { nome: "x-salada", preco: "R$ 25" },
    { nome: "x-bolovo", preco: "R$ 30" },
  ],

  meuPedidoFunc: function (select) {
    return console.log(this.cardapio[select]);
  },

  meuPedidoFuncTimeOut: function () {
    setTimeout(
      function () {
        console.log(this.cardapio);
        console.log(this);
      }.bind(this),
      1000
    );
  },

  meuPedidoArrowFunc: (select) => {
    this.cardapio = [
      { nome: "x-salada", preco: "R$ 25" },
      { nome: "x-bolovo", preco: "R$ 30" },
    ];

    return console.log(this.cardapio[select]);
  },
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();

/*
  7 - Constructor
  Arrow functions não podem ser constructors, então não é possível usar o operador 
  new com a mesma.
*/

class newFunc {
  constructor(nome) {
    this.nome = nome;
  }
}

const a = new newFunc("Dener Troquatte");
console.log(a.nome);
