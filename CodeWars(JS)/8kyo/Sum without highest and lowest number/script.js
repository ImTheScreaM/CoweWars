function sumArray(array) {
	if (array && array.length > 1) {
		let sortedArray = array.sort((a, b) => a - b).slice(1,-1)
		return sortedArray.reduce((acc,cur) => acc + cur ,0) 
	}
	return 0
}

console.log(sumArray(null)) // 0
console.log(sumArray([])) // 0
console.log(sumArray([3])) // 0
console.log(sumArray([3, 5])) // 0
console.log(sumArray([6, 2, 1, 8, 10])) //16
console.log(sumArray([0, 1, 6, 10, 10])) // 17
console.log(sumArray([6, -20, -1, -10, -12])) // -28
console.log(sumArray([6, 20, -1, 10, 12])) // 28
