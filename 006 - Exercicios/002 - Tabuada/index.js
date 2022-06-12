/*
  Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

  multiplicador x número = resultado
  multiplicador x 0 = resultado
  multiplicador x 1 = resultado
  multiplicador x 2 = resultado
  multiplicador x 3 = resultado
  ...
  multiplicador x 10 = resultado

  Obs.: não podemos criar varios consoles.log(multiplicador x 3 = resultado)
*/

const multiplicador = 8;

// let i = 0
// Chegará até o valor desejado = 10
// Ele add + 1 sobre o valor então sempre que acabar o código ele add + 1 = 1 + 1 = 2
for (let i = 0; i <= 100; i++) {
  const calc = multiplicador * i;
  console.log(`${multiplicador} x ${i} = ${calc}`);
}
