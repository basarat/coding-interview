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
export class LinkedList<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;

  /**
   * Adds an item in O(1)
   **/
  add(value: T) {
    const node: LinkedListNode<T> = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  /**
   * FIFO removal in O(1)
   */
  dequeue(): T | null {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
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
