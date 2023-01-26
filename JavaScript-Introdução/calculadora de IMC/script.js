function calcImc(weight, height) {
  const imc = Math.round(weight / Math.pow(height, 2));

  return imc;
}

calcImc(90, 1.8);
