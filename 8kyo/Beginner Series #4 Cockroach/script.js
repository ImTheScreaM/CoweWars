function cockroachSpeed(s) {
  return Math.floor(s * 27.78)
}

console.log(cockroachSpeed(1.08)) // 30
console.log(cockroachSpeed(1.09)) // 30
console.log(cockroachSpeed(0)) // 0