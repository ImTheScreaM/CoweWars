var maxSequence = function (arr) {
	let rec = 0

	for (let i = 0; i < arr.length; i++) {
		sum = 0
		for (let j = i; j < arr.length; j++) {
			sum += arr[j]
			if (sum > rec) {
				rec = sum
			}
		}
	}
	return rec
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
