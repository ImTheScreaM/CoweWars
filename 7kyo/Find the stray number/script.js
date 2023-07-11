function stray(numbers) {
  return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number))
}

console.log(stray(1,1,2));
console.log(stray(1,2,1));
console.log(stray(1,1,1,3,1,1,1,1,1,1));