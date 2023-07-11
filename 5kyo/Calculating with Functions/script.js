function zero(num) {
	return num ? num(0) : 0
}
function one(num) {
	return num ? num(1) : 1
}
function two(num) {
	return num ? num(2) : 2
}
function three(num) {
	return num ? num(3) : 3
}
function four(num) {
	return num ? num(4) : 4
}
function five(num) {
	return num ? num(5) : 5
}
function six(num) {
	return num ? num(6) : 6
}
function seven(num) {
	return num ? num(7) : 7
}
function eight(num) {
	return num ? num(8) : 8
}
function nine(num) {
	return num ? num(9) : 9
}

function plus(b) {
	return function (a) {
		return a + b
	}
}
function minus(b) {
	return function (a) {
		return a - b
	}
}
function times(b) {
	return function (a) {
		return a * b
	}
}
function dividedBy(b) {
	return function (a) {
		return Math.floor(a / b)
	}
}
