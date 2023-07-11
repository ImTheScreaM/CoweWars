function minMax(arr){
  let sort_min_max = arr.sort((a,b) => a + b)
	let max = Math.max(...sort_min_max)
	let min = Math.min(...sort_min_max)
  
  return [min,max]
}



console.log(minMax([1,2,3,4,5]));