function calcImc(weight, height) {
  const imc = Math.round(weight / Math.pow(height, 2));
  if (imc < 18.5) {
    console.log(`Seu IMC é ${imc}, voce está fraco`);
  } else if (imc > 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é ${imc}, voce está normal`);
  } else {
    console.log(`Seu IMC é ${imc}, voce está acima do peso`);
  }
  return imc;
}

calcImc(90, 1.8);
