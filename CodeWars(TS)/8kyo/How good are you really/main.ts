export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
	const sum = classPoints.reduce((a:number,b:number) : number => a + b)
	let avg = sum / classPoints.length
	return yourPoints > avg
}