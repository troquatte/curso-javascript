"use strict";

const input = document.querySelector("#name");

console.log(input.value);

setTimeout(() => {
  input.value = "Abacate";
  console.log(input.value);
}, 1000);
