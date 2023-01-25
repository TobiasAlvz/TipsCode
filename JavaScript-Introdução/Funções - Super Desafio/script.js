function myTime(age) {
  const defaultValue = 90;
  const timeLeft = defaultValue - age;
  const daysYear = 365;
  const weeksYear = 52;
  const monthsYear = 12;

  console.log(
    `Você tem ${timeLeft * daysYear} dias, ${timeLeft * weeksYear} semanas e ${
      timeLeft * monthsYear
    } meses restantes `
  );
}

myTime(56);
