function checkForFactor (base, factor) {
  if (base % factor === 0) {
    return true
  }
  return false
}



console.log(checkForFactor(10,2)) // true // 10 / 2 => 5
console.log(checkForFactor(9,2)) // false  9 / 2 => 4 with remainder 5