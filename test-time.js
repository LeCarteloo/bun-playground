// Bun test-time.js
// Node test-time.js

console.time('test');
for (let i = 0; i < 10000; i++) console.log(i * i);
console.timeEnd('test');
