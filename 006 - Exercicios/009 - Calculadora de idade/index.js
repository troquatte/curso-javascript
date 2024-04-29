/*
  Precisamos desenvolver uma ferramenta que calcule a idade da pessoa de acordo 
  com a data especifica

  exp.: A idade da pessoa é x anos.
*/
const dataNascimento = "20/12/1991";

const hoje = new Date();
const partes = dataNascimento.split("/").reverse();

if (partes.length !== 3) {
  throw new Error("Formato de data inválido. Use o formato DD/MM/AAAA.");
}

const nascimento = new Date(partes.join("-"));

let idade = hoje.getFullYear() - nascimento.getFullYear();

const mesHoje = hoje.getMonth() + 1;
const mesNascimento = nascimento.getMonth() + 1;

if (
  mesHoje < mesNascimento ||
  (mesHoje === mesNascimento && hoje.getDate() < nascimento.getDate())
) {
  idade--;
}

console.log(`A idade da pessoa é ${idade} anos.`);
