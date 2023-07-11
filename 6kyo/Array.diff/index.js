function arrayDiff(a, b) {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			if (a[i] == b[j]) {
				a.splice(i,1)
				i--; 
			}
		}
	}
	return a
}
// return a.filter(elem => !b.includes(elem)) second vers

console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 2, 3], [1, 2]))

