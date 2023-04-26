function soma() {
  let valor1 = Number(document.getElementById("valor1").value);
  let valor2 = Number(document.getElementById("valor2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    document.getElementById("resultado").textContent =
      "Insira valores numéricos válidos";
  } else {
    let resultado = valor1 + valor2;
    document.getElementById("resultado").textContent =
      "Resultado: " + resultado;
  }
}
