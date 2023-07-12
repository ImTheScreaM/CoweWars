export function stairsIn20(stairs:number[][]) {
  return 20 * stairs.reduce((a1,b1) => a1 + b1.reduce((a2,b2) => a2 + b2,0),0)
}