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

## Keywords

- Predefined reserved words.
- Must be written in lowercase.

Example:

```javascript
let
var
const
if
else
```

---

## Identifiers

Rules:

- Cannot use keywords.
- No spaces.
- Cannot start with numbers.
- Special characters are not allowed except `$` and `_`.

Example:

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

Features:

- Redeclaration ✔
- Reinitialization ✔

---

## let

```javascript
let phone = 9876543210;

phone = 9999999999;
```

Features:

- Redeclaration ✘
- Reinitialization ✔

---

## const

```javascript
const pi = 3.14;
```

Features:

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

Example

```javascript
console.log(x);

var x = 10;
```

Output

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

Syntax

```javascript
typeof variableName;
```

Example

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

Example

```javascript
let name = "Kratos";

console.log(typeof name);
```

---

# Boolean

Values:

- true
- false

Example

```javascript
let isStudent = true;

console.log(typeof isStudent);
```

---

# Undefined

Variable declared but not initialized.

Example

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

Output

```javascript
object;
```

---

# BigInt

Large integers.

Example

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

Random number in a range:

```javascript
let start = 10;
let end = 50;

let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
```

---

# Functions

A function is a block of code used to perform a specific task.

---

## Named Function

```javascript
function add() {}

add();
```

---

## Function with Parameters

```javascript
function add(a, b) {
  console.log(a + b);
}

add(2, 8);
```

---

## Function with Return

```javascript
function sub(a, b) {
  return a - b;
}

let result = sub(40, 10);

console.log(result);
```

---

## Anonymous Function

```javascript
function(){

}
```

Cannot be called directly because it has no name.

---

## Function Expression

```javascript
let add = function () {
  console.log(10 + 5);
};

add();
```

---

## Arrow Function

```javascript
let add = () => {};
```

Single return statement:

```javascript
let add = (a, b) => a + b;

console.log(add(2, 8));
```

---

# Nested Function

Creating one function inside another function is called a Nested Function.

Example

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

Example

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

Example

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

Example

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

Example 1

```javascript
(function () {
  console.log("Database Connected");
})();
```

Example 2

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

String
String is single or collection of characters eclosed with the single quote / backticks.

Note
if we want to take multi line string then we can enclose the string by using backtick.

String Interpolation / Template Literals
Accessing the varible inside string is called as template literals.
For this string should be enlcosed with backtick and the varible we want to access should be written inside $()

Length Property
It is used to know the length of any string.

```js
let msg = "how are you";
console.log(msg.length); //11
```

String Methods
1.toUppercase()
this method is used to convert the string into uppercase and it will return one new string
it will not change the original string

2.toLowercase()
this method is used to convert the string into lowercase and it will return one new string
it will not change the original string

3.trim()
This method is used to remove space from both sides of string.


4.indexof
  it is used to know the index of the given character
  it will take the first occurance of the character
  if the character is not present ,it will return -1

5.lastIndexof
  it will take the last occurance of the character
  if the character is not present ,it will return -1

6.charAt()
  This method is used to know which character is present at the given index.

7.concat()
  this method is used to combine or merge two or more than two string.
  it will return one new string

8.includes
It is used to know the given string is present or not
if it is present it will return true otherwise it will return false

