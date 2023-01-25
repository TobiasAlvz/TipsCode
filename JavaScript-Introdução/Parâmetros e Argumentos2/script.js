function getBread(custo) {
  let saldo = 50;

  console.log(
    `O saldo atual é ${saldo}, você consegue comprar ${Math.floor(
      saldo / custo
    )} pães`
  );
}
getBread(1.5);
