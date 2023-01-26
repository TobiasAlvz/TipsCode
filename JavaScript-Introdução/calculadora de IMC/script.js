function calcImc(width, height) {
  const imc = Math.round(width / (height * height));

  return imc;
}

calcImc(178, 90);
