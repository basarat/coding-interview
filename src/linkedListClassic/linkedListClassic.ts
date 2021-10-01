/**
 * Linked list node
 */
export type LinkedListNode<T> = {
  value: T;
  next: LinkedListNode<T> | null;
}

/**
 * Linked list for items of type T
 */
export class LinkedListClassic<T> {
  head: LinkedListNode<T> | null = null;

  /**
   * Adds an item in O(n)
   **/
  add(value: T) {
    const node = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
    } else {
      let currentTail = this.head;
      while (currentTail.next != null) {
        currentTail = currentTail.next;
      }
      currentTail.next = node;
    }
  }

  /**
   * FIFO removal in O(1)
   */
  dequeue(): T | null {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  /**
   * Returns an iterator over the values
   */
  *values() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
