let randomNumber = Math.round(Math.random() * 100);
randomNumber += 1;

if (randomNumber > 70) {
  console.log("muito bom");
} else if (randomNumber >= 30 && randomNumber <= 70) {
  console.log("media");
} else {
  console.log("Abaixo da metade");
}

console.log(randomNumber);
