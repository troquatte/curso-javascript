/*
  Precisamos desenvolver uma ferramenta que conte palavras em um texto

  exp.: javascript = 15
*/

const buscarPalavra = "Jujubes".toLowerCase();
const frase =
  "Jujubes ice cream biscuit cheesecake marshmallow lemon drops. Gummi bears cotton candy toffee cupcake cotton candy. Powder cookie soufflé chupa chups cake chupa chups. Powder cotton candy bonbon topping topping. Donut fruitcake macaroon dessert ice cream. Wafer chocolate bar candy dragée sesame snaps donut candy canes lemon drops. Ice cream liquorice gingerbread sweet gummies cake oat cake chocolate candy. Cookie croissant toffee halvah tootsie roll dessert sweet lemon drops gummi bears. Biscuit muffin jelly pie sweet jelly chocolate cake jujubes. Donut jelly beans jelly beans bear claw cotton candy chocolate cake candy canes marzipan icing. Bonbon chocolate lollipop dragée soufflé tart icing pie lollipop. Liquorice jelly oat cake fruitcake tiramisu pudding gummies. Jelly-o apple pie cake cookie lemon drops oat cake jujubes oat cake. Jelly-o toffee danish pastry cake brownie. Sweet roll chocolate bar fruitcake pie sweet roll gingerbread cake chupa chups. Jelly candy topping cake jelly beans chupa chups cookie pie. Gummi bears pudding liquorice jujubes topping croissant.".toLowerCase();

const contarPalavras = frase
  .split(" ")
  .filter((palavra) => palavra === buscarPalavra).length;

console.log({ buscarPalavra, contarPalavras });
