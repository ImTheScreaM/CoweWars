let twoSum = function (nums, target) {
	const hashMap = {}

	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i]
		if (complement in hashMap) {
			return [i, hashMap[complement]]
		}
		hashMap[nums[i]] = i
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 7, 11, 15], 26))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
