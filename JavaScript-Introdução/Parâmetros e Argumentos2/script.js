function getBread(balance, costBread = 1.5) {
  console.log(
    `O saldo atual é ${balance}, você consegue comprar ${calcBread(
      balance,
      costBread
    )} pães`
  );
  calcThing(balance, costBread);
}

function calcBread(dinheiro, custo) {
  const numberBreads = Math.floor(dinheiro / custo);
  return numberBreads;
}

function calcThing(money, costPao) {
  const troco = console.log(`O seu troco é ${money % costPao}`);
  return troco;
}
getBread(50);
