function findOdd(A) {
	let stack = {}

	for (let i = 0; i < A.length; i++) {
		stack[A[i]] = (stack[A[i]] || 0) + 1
	}
	for (let key in stack) {
		if (stack[key] % 2 !== 0) {
			return Number(key)
		}
	}
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
