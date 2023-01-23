const yourName = prompt("Digite seu nome: ");

alert(
  `Olá ${yourName.slice(0, 1).toUpperCase()}${yourName.slice(1).toLowerCase()}`
);
