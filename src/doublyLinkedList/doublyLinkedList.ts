/**
 * Linked list node
 */
export type DoublyLinkedListNode<T> = {
  prev: DoublyLinkedListNode<T> | null;
  value: T;
  next: DoublyLinkedListNode<T> | null;
}

/**
 * Linked list for items of type T
 */
export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null = null;
  tail: DoublyLinkedListNode<T> | null = null;

  /**
   * Adds an item in O(1)
   **/
  add(value: T) {
    const node: DoublyLinkedListNode<T> = {
      prev: null,
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
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
    } else {
      this.head.prev = null;
    }
    return value;
  }

  /**
   * LIFO removal in O(1)
   */
  pop(): T | null {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
    } else {
      this.tail.next = null;
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