let participants = ["Alison", "Paula", "João", "Isaías"];

let qntParticipants = participants.length;

function drawPrize() {
  let drawPrize = Math.random() * qntParticipants;
  drawPrize = Math.floor(drawPrize);

  let draw = participants[drawPrize];

  return draw + " Vai comprar o almoço hoje!";
}
console.log(drawPrize());
