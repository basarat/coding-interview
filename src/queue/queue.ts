/**
 * First In First Out (FIFO)
 * with time complexity of O(1) for key operations
 */
export class Queue<T>{
  private data: { [index: number]: T } = Object.create(null);
  private nextEnqueueIndex = 0;
  private nextDequeueIndex = 0;

  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
    this.data[this.nextEnqueueIndex] = item;
    this.nextEnqueueIndex++;
  }

  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    if (this.nextDequeueIndex !== this.nextEnqueueIndex) {
      const dequeued = this.data[this.nextDequeueIndex];
      delete this.data[this.nextDequeueIndex];
      this.nextDequeueIndex++;
      return dequeued;
    }
  }

  /**
   * Returns the number of elements in the queue
   */
  size(): number {
    return this.nextEnqueueIndex - this.nextDequeueIndex;
  }
}
