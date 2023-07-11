function expressionMatter(a, b, c) {
  let maxNumber = []
	maxNumber.push(a + b + c)
	maxNumber.push(a * b * c)
  maxNumber.push(a + b * c);
  maxNumber.push((a + b) * c);
  maxNumber.push(a *(b * c));
	return Math.max(...maxNumber)
}


console.log(expressionMatter(6,2,1));
console.log(expressionMatter(4,1,7));