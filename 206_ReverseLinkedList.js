/* https://leetcode.com/problems/reverse-linked-list/ */

const reverseList = (head) => {
  let prev = null;
  while(head){
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}