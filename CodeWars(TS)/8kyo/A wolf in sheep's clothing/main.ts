export function warnTheSheep(queue: string[]): string {
  const reversed = queue.reverse()
	const found_wolf = reversed.indexOf('wolf')
	if(found_wolf === 0) return "Pls go away and stop eating my sheep"
	return `Oi! Sheep number ${found_wolf}! You are about to be eaten by a wolf!`

}