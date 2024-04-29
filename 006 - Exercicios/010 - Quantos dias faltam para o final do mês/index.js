/*
  Precisamos desenvolver uma ferramenta que calcule quantos dias faltam para 
  o final do mês

  exp.: `Faltam 2 dias para o fim do mês.
*/

const dataAtual = new Date();

const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();

const primeiroDiaProximoMes = new Date(ano, mes + 1, 1);

const ultimoDiaMesAtual = new Date(primeiroDiaProximoMes - 1);

const umDia = 1000 * 60 * 60 * 24;
const diffTempo = Math.abs(ultimoDiaMesAtual - dataAtual);
const diffDias = Math.ceil(diffTempo / umDia);

console.log(`Faltam ${diffDias} dias para o fim do mês.`);
