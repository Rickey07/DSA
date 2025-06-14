// Create a counter using counter returning function

function createCounter () {
    let count = 0
    return function () {
        return console.log(count++)
    }
}

const counter1 = createCounter();

counter1();
counter1();
counter1();
counter1();

// Why this loop prints same value as always.
// use var first
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// The reason is that var is attached to global memory scope and global memory get's updated after 1 second it takes variable value from there.

// We can change it to let as let is block scoped so it will work.