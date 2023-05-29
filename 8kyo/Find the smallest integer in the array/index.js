class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b) => a - b)[0]
  }
}

console.log(findSmallestInt([78, 56, 232, 12, 8])) // 8
console.log(findSmallestInt([78, 56, -232, 12, 8])) // -232
console.log(findSmallestInt([78, 56, -2322, -231212, 8])) // -231212
