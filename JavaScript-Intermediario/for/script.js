const array = [];
let count = 1;

function fizzBuz() {
  for (count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      array.push("FizzBuz");
    }
    if (count % 3 === 0) {
      array.push("Fizz");
    } else if (count % 5 === 0) {
      array.push("Buz");
    } else {
      array.push(count);
    }
  }
  console.log(array);
}

fizzBuz();
