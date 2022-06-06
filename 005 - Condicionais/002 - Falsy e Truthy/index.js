// Falsy = false, 0, "", NaN, undefined e null
// Truthy = Todos os outros diferentes do [ falsy ]

if ("Dener" * 10) {
  console.log("Bom dia!");
} else {
  console.log("Boa noite!");
}

if (!null) {
  console.log("Falsy or False");
}

if (1 + 1) {
  console.log("True");
}
