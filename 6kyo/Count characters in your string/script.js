function count(string) {
  let split = string.split('')
  let obj = {}
  
  split.forEach(s => {
    let count = 0
    for(let i = 0; i < split.length; i++) {
      if(s == split[i]) {
        count += 1
      }
      obj[s] = count 
    }
  })
  return obj
}

console.log(count('banana'));