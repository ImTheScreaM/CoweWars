function setAlarm(employed, vacation) {
	if (employed == true && vacation == false) {
		return true
	} else {
		return false
	}
}

console.log(setAlarm(true, true)) // false
console.log(setAlarm(false, false)) // false
console.log(setAlarm(true, false)) // true

