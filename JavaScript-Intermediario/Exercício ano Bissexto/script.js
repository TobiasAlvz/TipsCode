function leapYear(year) {
  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    console.log(`O ano é ${year}, ele é bissexto`);
  } else {
    console.log(`O ano é`);
  }
}
