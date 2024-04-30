/*
  Precisamos desenvolver uma ferramenta gere senhas aletórias de acordo com tamanho especifico

  exp.: new pass = BXUwPof1fh47fF1qYKQD
*/

const caracteres =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const tamanhoSenha = 12;

let senha = "";

for (let i = 1; i <= tamanhoSenha; i++) {
  const indice = Math.floor(Math.random() * caracteres.length);
  senha += caracteres.charAt(indice);
}

console.log(senha);
