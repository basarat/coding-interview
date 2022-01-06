import { Queue } from './queue';

test('Basic Tests', () => {
  const queue = new Queue();
  expect(queue.size()).toBe(0);
  queue.enqueue('test');
  expect(queue.size()).toBe(1);
  queue.enqueue('second');
  expect(queue.dequeue()).toBe('test');
  expect(queue.size()).toBe(1);
  expect(queue.dequeue()).toBe('second');
  expect(queue.size()).toBe(0);
});
