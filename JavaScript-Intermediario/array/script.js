const names = ["joao", "maria", "jose", "davi"];
const newName = prompt();

if (names.includes(newName)) {
  alert("Nome incluido na lista, acesso liberado");
} else {
  alert("Desculpe, seu nome não foi achado na lista");
}
