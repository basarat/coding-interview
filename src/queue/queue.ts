/**
 * First In First Out (FIFO)
 * with time complexity of O(1) for key operations
 */
export class Queue<T>{
  private data: { [index: string]: T } = Object.create(null);
  private nextEnqueueIndex = 0n;
  private nextDequeueIndex = 0n;

  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
    this.data[this.nextEnqueueIndex.toString()] = item;
    this.nextEnqueueIndex++;
  }

  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    if (this.nextDequeueIndex !== this.nextEnqueueIndex) {
      const dequeued = this.data[this.nextDequeueIndex.toString()];
      delete this.data[this.nextDequeueIndex.toString()];
      this.nextDequeueIndex++;
      return dequeued;
    }
  }

  /**
   * Returns the number of elements in the queue
   */
  size(): bigint {
    return this.nextEnqueueIndex - this.nextDequeueIndex;
  }
}
