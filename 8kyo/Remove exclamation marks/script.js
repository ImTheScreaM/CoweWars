function updateLight(current) {
  if (current === "green") {
    return "yellow"
  } else if (current === "yellow") {
    return "red"
  } else if (current === "red") {
    return "green"
  }
}

console.log(updateLight("green"))// yellow
console.log(updateLight("yellow")) // red
console.log(updateLight("red")) // green

