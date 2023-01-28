const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

function sortear() {
  if (randomNumber % 2 == 0) {
    console.log("Daner");
  } else {
    console.log("Kalebe");
  }
}

sortear();
