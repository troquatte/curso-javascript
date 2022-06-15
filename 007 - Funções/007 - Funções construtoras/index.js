// Name
function Name(name, sobrenome) {
  this.name = name;

  this.sobreNome = () => {
    const nomeCompleto = `${this.name} ${sobrenome}`;
    return nomeCompleto;
  };
}

const dener = new Name("Dener", "Troquatte");

console.log(dener.sobreNome());
// end Name

// Calculadora
function Calculadora() {
  this.soma = (num1, num2) => {
    return `${num1 + num2}`;
  };

  this.subtracao = (num1, num2) => {
    return `${num1 - num2}`;
  };
}

const calculadora = new Calculadora();

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(5, 1));
// end Calculadora
