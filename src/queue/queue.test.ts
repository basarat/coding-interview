import { Queue } from './queue';

test('Basic Tests', () => {
  const queue = new Queue();
  expect(queue.size()).toBe(0n);
  queue.enqueue('test');
  expect(queue.size()).toBe(1n);
  queue.enqueue('second');
  expect(queue.dequeue()).toBe('test');
  expect(queue.size()).toBe(1n);
  expect(queue.dequeue()).toBe('second');
  expect(queue.size()).toBe(0n);
});
