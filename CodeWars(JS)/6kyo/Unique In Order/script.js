var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, b) => a !== iterable[b - 1]) 
}


console.log(uniqueInOrder('AAAABBBCCDAABBB')); // 'A','B','C','D','A','B'