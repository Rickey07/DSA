
# Introduction to Arrays in JavaScript

Arrays are one of the most important data structures in JavaScript. They allow you to store collections of items under a single variable name. JavaScript arrays are dynamic in size, meaning that they can grow and shrink as needed, which makes them very flexible to use.

## What is an Array?

An array is a special object in JavaScript that can hold multiple values of any type (numbers, strings, booleans, or other objects, including arrays). Each value in an array is assigned an index, which starts at `0` and increases sequentially.

### Basic Syntax

An array can be declared using square brackets `[]` and elements separated by commas:

```javascript
// Example of an array
const fruits = ["Apple", "Banana", "Mango", "Orange"];
```

### Array Properties and Methods

JavaScript arrays have several properties and methods that help you manipulate the data stored within them. Each operation has an associated time complexity, which can help you understand how efficient it is for large datasets.

### Accessing Elements

You can access individual elements in an array using their index:

```javascript
console.log(fruits[0]); // Output: Apple
```

**Time Complexity**:  
- Access by index: **O(1)** (constant time)

### Insertion

There are several ways to insert elements into an array.

#### 1. `push()`

Adds one or more elements to the end of an array:

```javascript
fruits.push("Pineapple");
```

**Time Complexity**:  
- Inserting at the end using `push()`: **O(1)**

#### 2. `unshift()`

Adds one or more elements to the beginning of an array:

```javascript
fruits.unshift("Strawberry");
```

**Time Complexity**:  
- Inserting at the beginning using `unshift()`: **O(n)** (because all existing elements need to be shifted)

### Deletion

#### 1. `pop()`

Removes the last element of the array:

```javascript
fruits.pop();
```

**Time Complexity**:  
- Deleting from the end using `pop()`: **O(1)**

#### 2. `shift()`

Removes the first element from the array:

```javascript
fruits.shift();
```

**Time Complexity**:  
- Deleting from the beginning using `shift()`: **O(n)** (because all remaining elements need to be shifted)

#### 3. `splice()`

You can also remove elements from the middle of an array using `splice()`. It can be used to delete or replace elements.

```javascript
fruits.splice(1, 1); // Removes 1 element starting from index 1
```

**Time Complexity**:  
- Deleting or replacing elements with `splice()`: **O(n)** (because elements after the deleted position may need to be shifted)

### Searching

#### 1. `indexOf()`

Returns the index of the first occurrence of an element in an array:

```javascript
const index = fruits.indexOf("Mango");
console.log(index); // Output: 2
```

**Time Complexity**:  
- Searching for an element using `indexOf()`: **O(n)** (linear time, as it may need to search through the entire array)

#### 2. `includes()`

Checks if a particular element exists in the array:

```javascript
const hasMango = fruits.includes("Mango");
console.log(hasMango); // Output: true
```

**Time Complexity**:  
- Searching with `includes()`: **O(n)**

### Iteration

#### 1. `forEach()`

The `forEach()` method allows you to iterate over all elements in the array:

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

**Time Complexity**:  
- Iterating over the array: **O(n)**

#### 2. `map()`

The `map()` method returns a new array with the result of calling a provided function on every element:

```javascript
const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "MANGO", "ORANGE"]
```

**Time Complexity**:  
- Iterating and transforming elements with `map()`: **O(n)**

## Conclusion

Arrays in JavaScript are a versatile and powerful data structure. With the ability to store, insert, delete, and search for data efficiently, they are foundational to understanding many common algorithms and data structures.

In the next section, we'll explore advanced array methods like `reduce()` and discuss performance considerations in greater detail.
