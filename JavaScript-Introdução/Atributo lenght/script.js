const text = prompt();
const limit = 180;

function limitLenght() {
  if (limit > text.length) {
    alert(`Você ainda tem ${limit - text.length} caracteres para utilizar`);
  } else {
    alert("Você ultrapassou o limite de caracteres");
  }
}
limitLenght();
