var containsDuplicate = function(nums) {
	let  set_nums = new Set(nums)
	return set_nums.size !== nums.length
};