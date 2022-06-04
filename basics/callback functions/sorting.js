const numbers = [10, 20, 15, 01, 13];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

const numbers1 = [10, 20, 15, 01, 13];
numbers.sort(function(b, a) {
  return b - a;
});
console.log(numbers1);


