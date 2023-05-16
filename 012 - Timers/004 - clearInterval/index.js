const timer = setInterval(() => {
  console.log("Meu timer foi iniciado!");
}, 1000);

console.log("Meu console!");

setTimeout(() => {
  clearInterval(timer);
}, 3000);
