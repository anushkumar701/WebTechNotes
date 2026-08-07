# JavaScript

## Introduction

- JavaScript is a programming language used to add functionality to web pages.
- It can be used on both:
  - Client-side
  - Server-side

---

# Ways to Write JavaScript

## 1. Internal JavaScript

- JavaScript code is written inside the HTML file.
- Uses the `<script></script>` tag.
- Place the `<script>` tag at the end of the `<body>` section.

### Example

```html
<script>
  console.log("Hello");
</script>
```

---

## 2. External JavaScript

- Create a separate file with the `.js` extension.
- Link it using the `src` attribute.

### Example

```html
<script src="script.js"></script>
```

---

# Printing Statement

```javascript
console.log();
```

---

# Executing JavaScript

## Inside Browser

- Create an HTML file.
- Open it in the browser.
- Inspect → Console tab.

## Outside Browser

- Install Node.js.
- Execute using:

```bash
node filename.js
```

---

# Token

A token is the smallest unit of a programming language.

## Types of Tokens

- Keywords
- Identifiers
- Literals
- Separators
- Operators

---

# Keywords

- Predefined reserved words.
- Must be written in lowercase.

### Example

```javascript
let
var
const
if
else
```

---

# Identifiers

## Rules

- Cannot use keywords.
- No spaces.
- Cannot start with numbers.
- Special characters are not allowed except `$` and `_`.

### Example

```javascript
let studentName;
let $price;
let _age;
```

---

# Variables

Variables store data.

JavaScript provides:

- `var`
- `let`
- `const`

---

## var

```javascript
var sname;

sname = "Ram";

var age = 22;

age = 23;

var sname;
```

### Features

- Redeclaration ✔
- Reinitialization ✔

---

## let

```javascript
let phone = 9876543210;

phone = 9999999999;
```

### Features

- Redeclaration ✘
- Reinitialization ✔

---

## const

```javascript
const pi = 3.14;
```

### Features

- Redeclaration ✘
- Reinitialization ✘
- Must initialize during declaration.

---

# Difference Between var, let and const

| Feature          | var             | let       | const     |
| ---------------- | --------------- | --------- | --------- |
| Redeclaration    | ✔               | ✘         | ✘         |
| Reinitialization | ✔               | ✔         | ✘         |
| Scope            | Global/Function | Block     | Block     |
| Hoisting         | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |

---

# Variable Hoisting

- Applicable with `var`.
- Declaration moves to the top.
- Value becomes `undefined`.

### Example

```javascript
console.log(x);

var x = 10;
```

### Output

```javascript
undefined;
```

---

# Data Types

Two categories:

## Primitive Data Types

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt

## Non-Primitive Data Types

1. Object
2. Array
3. Function

---

# typeof Operator

Used to know the datatype.

## Syntax

```javascript
typeof variableName;
```

### Example

```javascript
let age = 20;

console.log(typeof age);
```

---

# Number

```javascript
let age = 21;

console.log(age);

console.log(typeof age);
```

---

# String

Strings are enclosed in:

- Single quotes
- Double quotes
- Backticks

### Example

```javascript
let name = "Kratos";

console.log(typeof name);
```

---

# Boolean

Values:

- true
- false

### Example

```javascript
let isStudent = true;

console.log(typeof isStudent);
```

---

# Undefined

Variable declared but not initialized.

### Example

```javascript
let name;

console.log(name);

console.log(typeof name);
```

---

# Null

```javascript
let value = null;

console.log(value);

console.log(typeof value);
```

### Output

```javascript
object;
```

---

# BigInt

Large integers.

### Example

```javascript
let num = 12345678901234567890n;

console.log(typeof num);
```

---

# Undefined vs Null

| Undefined                    | Null                               |
| ---------------------------- | ---------------------------------- |
| Declared but not initialized | Intentionally assigned empty value |
| Type is undefined            | Type is object                     |

---

# Decision Making Statements

1. if
2. if else
3. else if ladder
4. switch

---

## if

```javascript
if (condition) {
}
```

---

## if else

```javascript
if (condition) {
} else {
}
```

---

## else if Ladder

```javascript
if (condition) {
} else if (condition) {
} else {
}
```

---

# Math Object

Built-in object for mathematical operations.

---

## Math.max()

```javascript
console.log(Math.max(3, 1, 5, 2));
```

---

## Math.min()

```javascript
console.log(Math.min(3, 1, 5, 2));
```

---

## Math.abs()

```javascript
console.log(Math.abs(-3));
```

---

## Math.floor()

```javascript
console.log(Math.floor(3.9));
```

---

## Math.ceil()

```javascript
console.log(Math.ceil(3.1));
```

---

## Math.round()

```javascript
console.log(Math.round(3.5));
```

---

## Math.pow()

```javascript
console.log(Math.pow(2, 3));
```

---

## Math.sqrt()

```javascript
console.log(Math.sqrt(16));
```

---

## Math.random()

```javascript
console.log(Math.random());
```

---

## Random Number in a Range

```javascript
let start = 10;
let end = 50;

let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
```

---

# Functions

A function is a block of code used to perform a specific task.

---

# Named Function

```javascript
function add() {}

add();
```

---

# Function with Parameters

```javascript
function add(a, b) {
  console.log(a + b);
}

add(2, 8);
```

---

# Function with Return

```javascript
function sub(a, b) {
  return a - b;
}

let result = sub(40, 10);

console.log(result);
```

---

# Anonymous Function

```javascript
function(){

}
```

- Cannot be called directly because it has no name.

---

# Function Expression

```javascript
let add = function () {
  console.log(10 + 5);
};

add();
```

---

# Arrow Function

```javascript
let add = () => {};
```

---

## Single Return Statement

```javascript
let add = (a, b) => a + b;

console.log(add(2, 8));
```

---

# Nested Function

Creating one function inside another function is called a Nested Function.

### Example

```javascript
let outer = () => {
  console.log("I am outer function");

  let inner = () => {
    console.log("I am inner function");
  };

  inner();
};

outer();
```

---

# Lexical Scoping

- In a nested function, the inner function can access the variables of the outer function.
- The outer function cannot access the variables of the inner function.

### Example

```javascript
function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();
```

---

# Higher Order Function

A function that accepts another function as an argument is called a Higher Order Function.

### Example

```javascript
function display(fun) {
  fun();
}

function hello() {
  console.log("Hello");
}

display(hello);
```

---

# Callback Function

A function passed as an argument to another function is called a Callback Function.

### Example

```javascript
function display(fun) {
  fun();
}

function hello() {
  console.log("Hello");
}

display(hello);
```

Here `hello()` is the callback function.

---

# Armstrong Number Program

```javascript
let num = 153;

let temp = num;

let sum = 0;

while (temp > 0) {
  let rem = temp % 10;

  sum = sum + rem ** 3;

  temp = Math.floor(temp / 10);
}

if (sum == num) {
  console.log("Armstrong Number");
} else {
  console.log("Not an Armstrong Number");
}
```

---

# IIFE (Immediately Invoked Function Expression)

- Executes immediately after creation.
- Executes only once.

## Example 1

```javascript
(function () {
  console.log("Database Connected");
})();
```

---

## Example 2

```javascript
(function (port) {
  console.log("Server running on port", port);
})(3000);
```

---

# Important Interview Questions

1. Difference between `var`, `let`, and `const`
2. Difference between `undefined` and `null`
3. How to know the datatype (`typeof`)
4. What is Lexical Scoping?
5. What is a Higher Order Function?
6. What is a Callback Function?
7. What is IIFE?

---

# String

String is single or collection of characters enclosed with the single quote / backticks.

## Note

If we want to take multi line string then we can enclose the string by using backtick.

---

# String Interpolation / Template Literals

Accessing the variable inside string is called as template literals.

For this string should be enclosed with backtick and the variable we want to access should be written inside `${}`.

---

# Length Property

It is used to know the length of any string.

```javascript
let msg = "how are you";

console.log(msg.length); //11
```

---

# String Methods

## 1. toUpperCase()

This method is used to convert the string into uppercase and it will return one new string.

It will not change the original string.

---

## 2. toLowerCase()

This method is used to convert the string into lowercase and it will return one new string.

It will not change the original string.

---

## 3. trim()

This method is used to remove space from both sides of string.

---

## 4. indexOf()

It is used to know the index of the given character.

- It will take the first occurrence of the character.
- If the character is not present, it will return `-1`.

---

## 5. lastIndexOf()

It will take the last occurrence of the character.

- If the character is not present, it will return `-1`.

---

## 6. charAt()

This method is used to know which character is present at the given index.

---

## 7. concat()

This method is used to combine or merge two or more strings.

It will return one new string.

---

## 8. includes()

It is used to know whether the given string is present or not.

- If it is present, it will return `true`.
- Otherwise, it will return `false`.

---

# replace()

- This method is used to replace one string with another string.
- It will replace only the first one.

### Example

```javascript
let sentence = `i am from bangalore, i love bangalore`;

console.log(sentence.replace("bangalore", "chennai"));
```

---

# replaceAll()

- This method is used to replace all occurrences of a string.

### Example

```javascript
let password = "hello";

console.log(password.replaceAll("l", "$"));

console.log(sentence.replaceAll("bangalore", "chennai"));
```

---

# split()

This method is used to convert string into array.

### Example

```javascript
let greet = "how are you";

console.log(greet.split(" "));
```

Output:

```javascript
["how", "are", "you"];
```

```javascript
console.log(greet.split(""));
```

Output:

```javascript
["h", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u"];
```

```javascript
console.log(greet.split());
```

Output:

```javascript
["how are you"];
```

---

# slice()

- This method is used to extract some part of another string.
- It takes two parameters:
  - startingIndex
  - endIndex
- It does not include endIndex value.
- Slice can take negative index also.
- endIndex value should be greater than startIndex.

---

# substring()

- This method is used to extract some part of another string.
- It takes two parameters:
  - startingIndex
  - endIndex
- It does not include endIndex value.
- Negative values are not allowed.
- If negative value is provided, it is considered as `0`.
- If endIndex value is smaller than startingIndex, it will swap the values and provide the output.

---

# Array

Array is a linear data structure where we can store multiple values in continuous manner.

In JavaScript, we can store both:

- Homogeneous data
- Heterogeneous data

inside an array.

Array index starts from `0`.

---

# How to Declare Array

```javascript
let arr = [10, 20, 30];

console.log(arr);
```

How to access Array
  console.log(arr[0]);

# How to modify array element
  ```js
    arr[2]=300;
  ```
# How to trasverse Array
  *We can traverse array by using any looping statement like for,while,do-while.
  *we can travere by using for of loop ad for in loop

#  Array Methods

Array methods are built-in functions used to perform operations on arrays.

---

# 1. length

- Used to find the number of elements present in an array.
- It returns the size of the array.

### Example

```javascript
let arr = [10, 20, 30, 40];

console.log(arr.length);
```

### Output

```
4
```

---

# 2. push()

- Used to add one or more elements at the end of an array.
- It modifies the original array.
- It returns the new length of the array.

### Example

```javascript
let arr = [10, 20, 30];

arr.push(40);

console.log(arr);
```

### Output

```javascript
[10, 20, 30, 40]
```

---

# 3. pop()

- Used to remove the last element from an array.
- It modifies the original array.
- It returns the removed element.

### Example

```javascript
let arr = [10, 20, 30];

let result = arr.pop();

console.log(result);
console.log(arr);
```

### Output

```javascript
30
[10, 20]
```

---

# 4. unshift()

- Used to add one or more elements at the beginning of an array.
- It modifies the original array.
- It returns the new length of the array.

### Example

```javascript
let arr = [20, 30];

arr.unshift(10);

console.log(arr);
```

### Output

```javascript
[10, 20, 30]
```

---

# 5. shift()

- Used to remove the first element from an array.
- It modifies the original array.
- It returns the removed element.

### Example

```javascript
let arr = [10, 20, 30];

let result = arr.shift();

console.log(result);
console.log(arr);
```

### Output

```javascript
10
[20, 30]
```

---

# 6. includes()

- Used to check whether an element exists in an array.
- It returns `true` if present, otherwise `false`.

### Example

```javascript
let arr = [10, 20, 30];

console.log(arr.includes(20));
```

### Output

```javascript
true
```

---

# 7. indexOf()

- Used to find the index of an element.
- Returns the first occurrence index.
- If element is not found, it returns `-1`.

### Example

```javascript
let arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));
```

### Output

```javascript
1
```

---

# 8. lastIndexOf()

- Used to find the last occurrence index of an element.
- Returns `-1` if element is not found.

### Example

```javascript
let arr = [10, 20, 30, 20];

console.log(arr.lastIndexOf(20));
```

### Output

```javascript
3
```

---

# 9. concat()

- Used to merge two or more arrays.
- It returns a new array.
- Original arrays are not changed.

### Example

```javascript
let arr1 = [10, 20];

let arr2 = [30, 40];

let result = arr1.concat(arr2);

console.log(result);
```

### Output

```javascript
[10, 20, 30, 40]
```

---

# 10. slice()

- Used to extract a part of an array.
- It does not modify the original array.
- It takes:
  - starting index
  - ending index (not included)

### Example

```javascript
let arr = [10, 20, 30, 40];

console.log(arr.slice(1, 3));
```

### Output

```javascript
[20, 30]
```

---

# 11. splice()

- Used to add, remove, or replace elements in an array.
- It modifies the original array.

### Syntax

```javascript
array.splice(start, deleteCount, item1, item2);
```

### Example (Remove)

```javascript
let arr = [10, 20, 30, 40];

arr.splice(1, 2);

console.log(arr);
```

### Output

```javascript
[10, 40]
```

---

# 12. join()

- Used to convert an array into a string.
- Elements are joined using the given separator.

### Example

```javascript
let arr = ["Hello", "World"];

console.log(arr.join(" "));
```

### Output

```javascript
Hello World
```

---

# 13. reverse()

- Used to reverse the elements of an array.
- It modifies the original array.

### Example

```javascript
let arr = [10, 20, 30];

arr.reverse();

console.log(arr);
```

### Output

```javascript
[30, 20, 10]
```

---

# 14. sort()

- Used to sort elements of an array.
- It modifies the original array.

### Example

```javascript
let arr = [30, 10, 20];

arr.sort();+

console.log(arr);
```

### Output

```javascript
[10, 20, 30]
```

---

# 15. forEach()

- Used to execute a function for each element in an array.
- It does not return a new array.

### Example

```javascript
let arr = [10, 20, 30];

arr.forEach((value) => {
  console.log(value);
});
```

---

# 16. map()

- Used to create a new array by performing an operation on each element.
- It returns a new array.
- Original array is not changed.

### Example

```javascript
let arr = [1, 2, 3];

let result = arr.map((value) => {
  return value * 2;
});

console.log(result);
```

### Output

```javascript
[2, 4, 6]
```

---

# 17. filter()

- Used to create a new array based on a condition.
- It returns elements that satisfy the condition.

### Example

```javascript
let arr = [10, 15, 20, 25];

let result = arr.filter((value) => {
  return value > 15;
});

console.log(result);
```

### Output

```javascript
[20, 25]
```

---

# 18. reduce()

- Used to reduce array elements into a single value.
- Commonly used for sum, average, etc.

### Example

```javascript
let arr = [10, 20, 30];

let sum = arr.reduce((total, value) => {
  return total + value;
}, 0);

console.log(sum);
```

### Output

```javascript
60
```

---

# 19. find()

- Used to find the first element that satisfies a condition.
- Returns the element.
- If not found, returns `undefined`.

### Example

```javascript
let arr = [10, 20, 30];

let result = arr.find((value) => {
  return value > 15;
});

console.log(result);
```

### Output

```javascript
20
```

---

# 20. findIndex()

- Used to find the index of the first element that satisfies a condition.
- Returns `-1` if not found.

### Example

```javascript
let arr = [10, 20, 30];

let result = arr.findIndex((value) => {
  return value > 15;
});

console.log(result);
```

### Output

```javascript
1
```

---

# Difference Between map(), filter(), and forEach()

| Method | Return | Purpose |
|---|---|---|
| forEach() | No return | Execute operation for each element |
| map() | New array | Transform elements |
| filter() | New array | Filter elements based on condition |

---

# Difference Between slice() and splice()

| slice() | splice() |
|---|---|
| Does not modify original array | Modifies original array |
| Used for extracting elements | Used for add/remove/replace |
| Returns new array | Returns removed elements |

---