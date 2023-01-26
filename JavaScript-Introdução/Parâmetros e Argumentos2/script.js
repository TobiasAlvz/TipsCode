function getBread(saldo) {
  const custo = 1.5;

  console.log(
    `O saldo atual é ${saldo}, você consegue comprar ${Math.floor(
      saldo / custo
    )} pães`
  );
  return saldo % 1.5;
}
console.log(getBread(50));
