const timer = setTimeout(() => {
  console.log("Meu timer foi iniciado!");
}, 10000);

console.log("Meu console!");
clearTimeout(timer);
