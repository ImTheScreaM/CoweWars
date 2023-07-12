function solveExpression(exp) {
	for (let i = 0; i <= 9; i++) {
		const ex = exp.replace(/\?/g,i).split('=')
		if (/--/.test(ex[0])) {
      ex[0] = ex[0].replace(/(-([0-9]+))/g, '($1)')
    }
    if (/\b00|00\b/g.test(ex.join('='))) continue
    if (exp.includes(i)) continue
    if (eval(ex[0]) == ex[1]) return i
  }
  return -1
}



console.log(solveExpression(['1+1=?']))
console.log(solveExpression(['123*45?=5?088']))
console.log(solveExpression(['-5?*-1=5?']))
console.log(solveExpression(['19--45=5?']))
console.log(solveExpression(['??*??=302?']))
console.log(solveExpression(['?*11=??']))
console.log(solveExpression(['??*1=??']))
console.log(solveExpression(['??+??=??']))