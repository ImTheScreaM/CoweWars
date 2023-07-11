var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let prev = new ListNode()
  const head = prev
  while (l1 || l2 || carry) {
    let valueOne = 0
    let valueTwo = 0
    if (l1) {
      valueOne = l1.val
      l1 = l1.next
    }
    if (l2) {
      valueTwo = l2.val
      l2 = l2.next
    }
    let sum = valueOne + valueTwo + carry
    carry = Math.floor(sum / 10)
    const digit = sum % 10
    let curr = new ListNode(digit)
    prev.next = curr
    prev = curr
    console.log(prev)
  }
  return head.next
};