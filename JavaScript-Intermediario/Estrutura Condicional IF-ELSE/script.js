let randomNumber = Math.round(Math.random() * 100);
randomNumber += 1;

if (randomNumber >= 50) {
  console.log("Acima da metade");
} else {
  console.log("Abaixo da metade");
}

console.log(randomNumber);
