function towerBuilder(nFloors) {
  let space_tower = ''
  let star_tower = ''
  let result = []
  for (let i = 1; i <= nFloors; i++) {
    space_tower = (" ").repeat(nFloors - i) 
    star_tower = ('*').repeat((i * 2) - 1)
    result.push(space_tower + star_tower + space_tower)
  }
  return result
}

console.log(towerBuilder(3));