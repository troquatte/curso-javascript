/*
  Precisamos desenvolver uma ferramenta que calcule a idade da pessoa de acordo 
  com a data especifica

  exp.: A idade da pessoa é x anos.
*/

let dataNascimento = "20/12/1991";
dataNascimento = dataNascimento.split("/").reverse();

const hoje = new Date();

if (dataNascimento.length !== 3) {
  return console.log("Formato de data inválido. Use o formato DD/MM/AAAA");
}

dataNascimento = new Date(dataNascimento.join("-"));

let idade = hoje.getFullYear() - dataNascimento.getFullYear();

const mesAtual = hoje.getMonth() + 1;
const mesNascimento = dataNascimento.getMonth() + 1;

if (
  mesAtual < mesNascimento ||
  (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())
) {
  idade--;
}

console.log("A idade da pessoa é de " + idade + " anos.");
