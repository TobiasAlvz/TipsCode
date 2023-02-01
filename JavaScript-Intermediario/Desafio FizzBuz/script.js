const array = [];
let count = 1;

function fizzBuz() {
  array.push(count);
  count++;
  if (count % 3 === 0) {
    array.push("Fizz");
  } else if (count % 5 === 0) {
    array.push("Buz");
  } else if (count % 3 === 0 && count % 5 === 0) {
    array.push("FizzBuz");
  }
  console.log(array);
}

fizzBuz();
fizzBuz();
fizzBuz();
fizzBuz();
fizzBuz();
fizzBuz();

fizzBuz();
fizzBuz();
fizzBuz();
fizzBuz();
fizzBuz();
fizzBuz();
