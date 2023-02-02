const list = ["Isaac", "Pedro", "Maria", "João"];

function sortear() {
  const randomNumber = Math.floor(Math.random() * list.length);
  console.log(`Quem vai pagar é ${list[randomNumber]}`);
}

sortear();
