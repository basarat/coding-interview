import { Queue } from './queue';

console.time('pop');
const pop = [];
for (let i = 0; i < 100000; i++) {
  pop.push('test:' + i);
}
for (let i = 0; i < 100000; i++) {
  pop.pop();
}
console.timeEnd('pop');

console.time('shift');
const shift = [];
for (let i = 0; i < 100000; i++) {
  shift.push('test:' + i);
}
for (let i = 0; i < 100000; i++) {
  shift.shift();
}
console.timeEnd('shift');

console.time('queue');
const queue = new Queue();
for (let i = 0; i < 100000; i++) {
  queue.enqueue('test:' + i);
}
for (let i = 0; i < 100000; i++) {
  queue.dequeue();
}
console.timeEnd('queue');