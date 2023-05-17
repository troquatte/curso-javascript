/**
 * O conceito de callbacks está relacionado à programação assíncrona,
 * onde certas operações podem levar tempo para serem concluídas,
 * como chamadas de API, manipulação de arquivos ou consultas a bancos de dados.
 *
 * Em vez de esperar que essas operações sejam concluídas antes de continuar
 * a execução do código, os callbacks permitem que o código continue a ser
 * executado, e quando a operação assíncrona é finalizada, o callback é chamado
 * para lidar com o resultado.
 */

setInterval(() => {
  returnConsole();
}, 3000);

const returnConsole = () => {
  return console.log("meu console funcionou");
};

const meuCallback = (func) => {
  console.log(func());
};

meuCallback(() => {
  return 1 + 1;
});
