function fizzBuzz(numbers) {
  let str = "";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) str += "fizzbuzz";
    else if (numbers[i] % 3 === 0) str += "fizz";
    else if (numbers[i] % 5 === 0) str += "buzz";
  }
  return str;
}
const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"