const array = [];
let count = 1;

function fizzBuz() {
  while (count <= 100) {
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
    count++;
  }
  console.log(array);
}

fizzBuz();
