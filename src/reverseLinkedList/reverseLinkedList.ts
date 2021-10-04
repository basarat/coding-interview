import { LinkedList, LinkedListNode } from '../linkedList/linkedList';

/** 
 * Reverse a linked list in place
 * Space: O(1)
 * Time: O(n)
 */
export function reverseLinkedList<T>(list: LinkedList<T>) {
  let previous: LinkedListNode<T> | null = null;
  let current: LinkedListNode<T> | null = list.head;

  while (current != null) {
    // Copy before overwriting
    let next = current.next;

    // Reverse
    current.next = previous;
    
    // Step forward
    previous = current;
    current = next;
  }

  // Swap head and tail
  [list.head, list.tail] = [list.tail, list.head];
}
