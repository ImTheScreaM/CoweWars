function calculateYears(principal, interest, tax, desired) {
	let year = 0
	while (principal < desired) {
		year++
		principal = principal + ((principal*interest) - (principal*interest*tax))
	} 
	return year
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3