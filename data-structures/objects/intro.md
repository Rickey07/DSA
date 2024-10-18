# Let's create the markdown content for objects in JavaScript, including Big O complexities for common operations.
content = """
# Introduction to Objects in JavaScript

Objects in JavaScript are one of the fundamental building blocks of the language. They allow you to store collections of key-value pairs and provide a way to model real-world entities. Unlike arrays, which store data in a sequential index-based manner, objects store data using named properties.

## What is an Object?

An object is a collection of properties, where each property consists of a key (also called a name) and a value. The value can be any valid JavaScript data type, including other objects, arrays, or functions.

### Basic Syntax

You can create an object using curly braces `{}` with key-value pairs:

```javascript
const person = {
  name: "John",
  age: 30,
  isEmployed: true
};

// Accessing properties
console.log(person.name); // Output: John

// Modifying properties
person.age = 31;
console.log(person.age); // Output: 31

person.gender = "male";
console.log(person.gender); // Output: male

console.log(person.name); // O(1)

person.hobby = "Reading"; // O(1)
person.age = 32; // O(1)

delete person.isEmployed;
console.log(person); // O(1)

console.log("name" in person); // Output: true
console.log(person.hasOwnProperty("age")); // Output: true

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Using Object.keys()
Object.keys(person).forEach(key => {
  console.log(key + ": " + person[key]);
});

const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "gender", "hobby"]

const values = Object.values(person);
console.log(values); // Output: ["John", 31, "male", "Reading"]

const entries = Object.entries(person);
console.log(entries); // Output: [["name", "John"], ["age", 31], ["gender", "male"], ["hobby", "Reading"]]

