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

  /**
   * Adds an item in O(n)
   **/
  add(value: T) {
    const node = {
      value,
      next: null,
    };
    if (this.head == null) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next != null) {
        tail = tail.next;
      }
      tail.next = node;
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

// const list = new LinkedList<number>();
// [1, 3, 9, 12].forEach(item => list.add(item));
// for (const item of list.values()) {
//   console.log(item);
// }
