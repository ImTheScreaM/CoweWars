let isPalindrome = function(x) {
    let numb = [...x.toString()].reverse().join('') //?
		if (x == numb) {
			return true
		} else {
			return false
		}
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10)) 
