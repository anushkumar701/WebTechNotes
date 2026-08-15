# JavaScript

JavaScript is a programming language used to add functionality to web pages.

We can use JavaScript on both the client side and server side.

---

# Ways to Write JavaScript Code

There are two ways:

## 1. Internal JavaScript

* Writing JavaScript code inside the HTML file.
* For this, we use the `<script></script>` tag.
* It is usually written inside the `<body>` tag at the end, before `</body>`.

Example:

```html
<script>
    console.log("Hello JavaScript");
</script>
```

## 2. External JavaScript

* First, create a separate JavaScript file using the `.js` extension.
* Use the `<script></script>` tag in the HTML file.
* Provide the JavaScript file path using the `src` attribute.

Example:

```html
<script src="script.js"></script>
```

JavaScript file:

```javascript
console.log("Hello JavaScript");
```

---

# Printing Statement in JavaScript

`console.log()` is used to print output in the console.

Syntax:

```javascript
console.log();
```

Example:

```javascript
console.log("Hello World");
```

---

# How to Execute a JavaScript Program

We can execute JavaScript programs both inside and outside the browser.

## Inside the Browser

* We need an HTML file.
* Open the HTML file in a browser.
* Inspect the webpage.
* Go to the Console tab.
* The output will be displayed there.

## Outside the Browser

* We need to install Node.js.
* Node.js is a JavaScript Runtime Environment used to execute JavaScript files outside the browser.

Syntax:

```bash
node filename.js
```

Example:

```bash
node app.js
```

---

# Token

A token is a basic building block or smallest meaningful unit in a programming language.

## Components of Token

1. Keyword
2. Identifier
3. Literal
4. Separator
5. Operator

---

# Keyword

Keywords are predefined or reserved words that have a specific meaning in JavaScript.

Examples:

```javascript
let
var
const
if
else
function
return
```

Keywords cannot normally be used as identifiers.

---

# Identifier

An identifier is the name given to variables, functions, classes, etc.

## Rules of Identifier

* Keywords cannot be used as identifiers.
* Spaces are not allowed.
* Special characters are not allowed except `$` and `_`.
* An identifier cannot start with a number.

Example:

```javascript
let studentName = "Ram";
let _age = 21;
let $salary = 50000;
```

---

# Variable

A variable is a container used to store data or values.

In JavaScript, we use three keywords to create variables:

1. var
2. let
3. const

---

# var Keyword

`var` is used to declare a variable.

Example:

```javascript
var sname;              // Declaration

sname = "ram";          // Initialization

var sage = 22;          // Declaration + Initialization

sage = 23;              // Reassignment

var sname;              // Redeclaration
```

---

# let Keyword

`let` is used to declare a block-scoped variable.

* Redeclaration is not possible in the same scope.
* Reassignment is possible.

Example:

```javascript
let phNo = 9865423456;

phNo = 9876543210;      // Reassignment is possible

// let phNo = 1234567890;
// Error - Redeclaration is not possible
```

---

# const Keyword

`const` is used to create a constant variable.

* Declaration and initialization must be done together.
* Reassignment is not possible.

Example:

```javascript
const pi = 3.14;

// pi = 3.15;
// Error
```

---

# Data Type

A data type tells us what kind of data a variable contains.

JavaScript data types are broadly classified into:

1. Primitive Data Types
2. Non-Primitive Data Types

---

# Primitive Data Types

Common primitive data types are:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

---

# 1. Number

In JavaScript, decimal and non-decimal numeric values generally belong to the `number` data type.

Example:

```javascript
let age = 21;

console.log(age);           // 21
console.log(typeof age);    // number

let height = 5.85;

console.log(height);        // 5.85
console.log(typeof height); // number
```

---

# typeof Operator

The `typeof` operator is used to find the data type of a value.

Syntax:

```javascript
typeof variableName;
```

Example:

```javascript
let age = 21;

console.log(typeof age);

// number
```

---

# 2. String

A string is a sequence of characters enclosed within:

* Single quotes `' '`
* Double quotes `" "`
* Backticks `` ` ` ``

Example:

```javascript
let name = "Kratos";

console.log(name);          // Kratos
console.log(typeof name);   // string
```

---

# 3. Boolean

Boolean can have only two values:

```javascript
true
false
```

Example:

```javascript
let isStudent = true;

console.log(isStudent);        // true
console.log(typeof isStudent); // boolean
```

---

# 4. Undefined

A variable that is declared but not assigned a value has the value `undefined`.

Example:

```javascript
let name;

console.log(name);          // undefined
console.log(typeof name);   // undefined
```

---

# 5. Null

`null` represents an intentional absence of a value.

Example:

```javascript
let num = null;

console.log(num);          // null
console.log(typeof num);   // object
```

Note:

`typeof null` returns `"object"`. This is a historical behavior of JavaScript.

---

# 6. BigInt

BigInt is used to represent very large integers.

We use `n` as a suffix.

Example:

```javascript
let age = 21n;

console.log(age);          // 21n
console.log(typeof age);   // bigint
```

---

# Non-Primitive Data Types

Common non-primitive/reference types are:

1. Function
2. Array
3. Object

---

# Decision-Making Statements

JavaScript provides the following decision-making statements:

1. if
2. if...else
3. else if ladder
4. switch

---

# if Condition

Syntax:

```javascript
if (condition) {

}
```

Example:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Eligible");
}
```

---

# if...else Condition

Syntax:

```javascript
if (condition) {

} else {

}
```

Example:

```javascript
let age = 15;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
```

---

# else if Ladder

If we want to check multiple conditions, we can use an `else if` ladder.

Once one condition becomes true and its block executes, the remaining conditions are skipped.

Syntax:

```javascript
if (condition) {

} else if (condition) {

} else if (condition) {

} else {

}
```

---

# Math Object

`Math` is a built-in JavaScript object used to perform mathematical operations.

---

# Math.max()

Used to find the maximum number.

Example:

```javascript
console.log(Math.max(5, 8, 19, 25, 45));

// 45
```

---

# Math.min()

Used to find the minimum number.

Example:

```javascript
console.log(Math.min(9, 5, 8, 29, 4, 3));

// 3
```

---

# Math.abs()

Returns the absolute value.

Example:

```javascript
console.log(Math.abs(-20));

// 20
```

---

# Math.floor()

Returns the largest integer less than or equal to the given number.

Example:

```javascript
console.log(Math.floor(5.2));   // 5
console.log(Math.floor(5.99));  // 5
```

---

# Math.ceil()

Returns the smallest integer greater than or equal to the given number.

Example:

```javascript
console.log(Math.ceil(4.3));   // 5
console.log(Math.ceil(4.6));   // 5
```

---

# Math.round()

Rounds a number to the nearest integer.

Example:

```javascript
console.log(Math.round(5.4));   // 5
console.log(Math.round(5.7));   // 6
```

If the decimal part is `.5` or greater, it rounds to the next integer.

---

# Math.pow()

Used to calculate the power of a number.

It takes two parameters:

1. Base
2. Power

Example:

```javascript
console.log(Math.pow(2, 3));

// 8
```

---

# Math.sqrt()

Used to find the square root of a number.

Example:

```javascript
console.log(Math.sqrt(100));

// 10
```

---

# Math.random()

Generates a random number from `0` up to, but not including, `1`.

Example:

```javascript
console.log(Math.random());
```

---

# Generate Random Number Within a Range

Example:

```javascript
let start = 10;
let end = 50;

let randomNumber =
    Math.floor(Math.random() * (end - start + 1)) + start;

console.log(randomNumber);
```

This generates a random integer between `10` and `50`.

---

# Looping Statements

Common looping statements are:

1. for loop
2. while loop
3. do...while loop

---

# for Loop

Syntax:

```javascript
for (initialization; condition; updation) {

}
```

Example:

Print numbers from 1 to 5:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

# while Loop

Example:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

# do...while Loop

This loop checks the condition at the end.

Therefore, it is called an exit-controlled loop.

Even if the condition is initially false, the loop executes at least once.

Example:

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

---

# Function

A function is a block of code designed to perform a specific task.

Functions are mainly used for code reusability.

---

# Named Function

A function having a name is called a named function.

Syntax:

```javascript
function functionName() {

}
```

Example:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

To execute the function, we need to call the function using its name.

---

# Function With Parameters

A function can accept values through parameters.

Example:

```javascript
function add(a, b) {
    console.log(a + b);
}

add(2, 3);
```

Output:

```text
5
```

---

# Function With Return Statement

The `return` statement sends a value back from the function.

Example:

```javascript
function sub(a, b) {
    return a - b;
}

let res = sub(40, 10);

console.log(res);
```

Output:

```text
30
```

---

# Anonymous Function

A function without a name is called an anonymous function.

Syntax:

```javascript
function () {

}
```

An anonymous function is normally assigned to a variable or passed as an argument.

---

# Function Expression

A function assigned to a variable is called a function expression.

Syntax:

```javascript
let add = function () {

};
```

Example:

```javascript
let add = function () {
    console.log(10 + 5);
};

add();
```

---

# Arrow Function

Arrow functions provide a shorter syntax for writing functions.

Syntax:

```javascript
let add = () => {};
```

Example:

```javascript
let add = (a, b) => a + b;

console.log(add(2, 8));
```

If an arrow function contains a single expression, we can return the value directly without using `return` and `{}`.

---

# Nested Function

Creating a function inside another function is called a nested function.

Example:

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

In nested functions, an inner function can access variables from its outer function's scope.

The outer function cannot directly access variables declared inside the inner function.

Example:

```javascript
function outer() {

    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();
```

Here, `inner()` can access `x` because of lexical scoping.

---

# Higher-Order Function

A function that accepts another function as an argument or returns another function is called a Higher-Order Function.

---

# Callback Function

A function passed as an argument to another function is called a Callback Function.

Example:

```javascript
function greet(callback) {
    callback();
}

function message() {
    console.log("Hello");
}

greet(message);
```

Here:

* `greet()` → Higher-Order Function
* `message()` → Callback Function

---

# Difference Between var and let

## 1. Redeclaration

### var

Redeclaration is possible.

```javascript
var a = 10;

var a = 20;

console.log(a);
```

### let

Redeclaration in the same scope is not possible.

```javascript
let b = 50;

// let b = 60;
// Error
```

---

# 2. Scope

| Keyword | Scope          |
| ------- | -------------- |
| var     | Function Scope |
| let     | Block Scope    |
| const   | Block Scope    |

Example:

```javascript
{
    var x = 10;
    let y = 20;
    const z = 30;

    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
}

console.log(x); // 10

// console.log(y); // Error
// console.log(z); // Error
```

---

# 3. Hoisting

`var`, `let`, and `const` declarations are hoisted, but they behave differently.

With `var`, the variable can be accessed before its declaration and gives `undefined`.

Example:

```javascript
console.log(x);

var x;
```

Output:

```text
undefined
```

`let` and `const` remain in the Temporal Dead Zone until their declaration is reached.

Example:

```javascript
console.log(y);

let y;
```

This produces an error.

---

# Variable Hoisting

Hoisting is JavaScript's behavior where declarations are processed before the code is executed.

Example:

```javascript
console.log(x); // undefined

var x;
```

The `var` declaration is hoisted, but its initialization is not.

---

# Important Questions

1. Var vs Let vs Const
2. Undefined vs Null
3. How to know the datatype?
4. Lexical Scoping
5. Higher-Order Function and Callback Function
6. What is IIFE?

---

# IIFE

IIFE stands for:

**Immediately Invoked Function Expression**

An IIFE is a function expression that executes immediately after it is created.

Example:

```javascript
(function () {
    console.log("Database connected");
})();
```

---

# IIFE With Parameter

```javascript
(function (port) {
    console.log("Server is running on port number", port);
})(3000);
```

---

# String

A string is a sequence of characters enclosed within:

1. Single quotes
2. Double quotes
3. Backticks

Example:

```javascript
let str1 = "hi";
let str2 = 'hi';

let str3 = `hi
hello
how
are
you`;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
```

---

# Multiline String

If we want to create a multiline string, we can use backticks.

Example:

```javascript
let message = `Hello
How are you?
Welcome to JavaScript`;
```

---

# String Interpolation / Template Literals

Template literals allow us to access variables inside a string.

For this:

* String should be enclosed using backticks.
* Variable or expression should be written inside `${}`.

Example:

```javascript
let name = "Kratos";
let age = 21;

console.log(`My name is ${name} and my age is ${age}`);
```

---

# String length Property

The `length` property is used to find the length of a string.

Example:

```javascript
let msg = "how are you";

console.log(msg.length);
```

---

# String Methods

## toUpperCase()

Converts a string to uppercase.

It returns a new string and does not modify the original string.

Example:

```javascript
let str = "Kratos";

let result = str.toUpperCase();

console.log(str);     // Kratos
console.log(result);  // KRATOS
```

---

## toLowerCase()

Converts a string to lowercase.

Example:

```javascript
let str = "KRATOS";

console.log(str.toLowerCase());
```

---

## trim()

Removes whitespace from both sides of a string.

Example:

```javascript
let str = "  hi   ";

let result = str.trim();

console.log(str.length);
console.log(result.length);
```

---

## indexOf()

Returns the index of the first occurrence of the given value.

If the value is not found, it returns `-1`.

Example:

```javascript
let str = "hello how are you";

console.log(str.indexOf("o"));
```

---

## lastIndexOf()

Returns the index of the last occurrence.

Example:

```javascript
let str = "hello how are you";

console.log(str.lastIndexOf("o"));
```

---

## charAt()

Returns the character present at the given index.

Example:

```javascript
let str = "hello";

console.log(str.charAt(3));

// l
```

---

## concat()

Used to combine two or more strings.

Example:

```javascript
let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(" ", str2));
```

---

## includes()

Checks whether a given string is present.

It returns either:

```text
true
false
```

Example:

```javascript
let str = "hello how are you";

console.log(str.includes("you"));

// true
```

---

## replace()

Used to replace a string with another string.

It replaces only the first matching occurrence.

Example:

```javascript
let sentence = "I am from Bangalore, I love Bangalore";

console.log(
    sentence.replace("Bangalore", "Chennai")
);
```

---

## replaceAll()

Used to replace all matching occurrences.

Example:

```javascript
let sentence = "I am from Bangalore, I love Bangalore";

console.log(
    sentence.replaceAll("Bangalore", "Chennai")
);
```

---

# split()

Used to convert a string into an array.

Example:

```javascript
let greet = "how are you";

console.log(greet.split(" "));
```

Output:

```text
["how", "are", "you"]
```

### Split Every Character

```javascript
console.log(greet.split(""));
```

### Without Separator

```javascript
console.log(greet.split());
```

---

# slice()

Used to extract a portion of a string.

Syntax:

```javascript
string.slice(startIndex, endIndex);
```

Important points:

* `startIndex` is included.
* `endIndex` is excluded.
* Negative indexes are allowed.
* Original string is not modified.

Example:

```javascript
let str = "JavaScript";

console.log(str.slice(0, 4));

// Java
```

---

# substring()

Used to extract a portion of a string.

Syntax:

```javascript
string.substring(startIndex, endIndex);
```

Important points:

* `startIndex` is included.
* `endIndex` is excluded.
* Negative values are treated as `0`.
* If `startIndex` is greater than `endIndex`, the values are swapped.
* Original string is not modified.

---

# Arrays

An array is a data structure used to store multiple values.

JavaScript arrays can store:

* Homogeneous data
* Heterogeneous data

Array indexing starts from `0`.

Example:

```javascript
let arr = [10, 20, 30, 40, 50];

console.log(arr);
```

---

# Access Array Elements

```javascript
console.log(arr[0]); // 10
console.log(arr[1]); // 20
```

---

# Modify Array Elements

```javascript
arr[3] = 400;

console.log(arr[3]);

// 400
```

---

# Traverse an Array

We can traverse an array using looping statements.

## Using for Loop

```javascript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

## Using for...of

```javascript
for (let value of arr) {
    console.log(value);
}
```

## Using for...in

```javascript
for (let index in arr) {
    console.log(index);
}
```

---

# Array Methods

## push()

Adds an element at the end of an array.

Example:

```javascript
let marks = [75, 80, 95, 65];

marks.push(90);

console.log(marks);
```

---

## pop()

Removes the last element of an array.

Example:

```javascript
let food = [
    "biriyani",
    "maggie",
    "fried rice",
    "upma"
];

food.pop();

console.log(food);
```

---

## shift()

Removes the first element.

Example:

```javascript
let movies = [
    "leo",
    "master",
    "beast",
    "jananayagan"
];

movies.shift();

console.log(movies);
```

---

## unshift()

Adds an element at the beginning.

Example:

```javascript
let series = [
    "dark",
    "lucyfer",
    "friends"
];

series.unshift("GOT");

console.log(series);
```

---

## indexOf()

Returns the index of the first occurrence of an element.

Example:

```javascript
let arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));

// 1
```

---

## lastIndexOf()

Returns the index of the last occurrence.

Example:

```javascript
console.log(arr.lastIndexOf(20));

// 3
```

---

## includes()

Checks whether an element is present in the array.

Returns `true` or `false`.

Example:

```javascript
console.log(arr.includes(30));

// true
```

---

## concat()

Combines two or more arrays and returns a new array.

Example:

```javascript
let arr1 = [10, 20];
let arr2 = [30, 40];

let result = arr1.concat(arr2);

console.log(result);
```

---

## join()

Converts an array into a string.

Example:

```javascript
let arr = ["Java", "Python", "JavaScript"];

console.log(arr.join(" "));
```

---

## reverse()

Reverses the original array.

Example:

```javascript
let arr = [10, 20, 30];

arr.reverse();

console.log(arr);

// [30, 20, 10]
```

---

# splice()

`splice()` is used to modify the original array.

It can be used to:

* Add elements
* Remove elements
* Replace elements

Syntax:

```javascript
array.splice(startIndex, deleteCount, replacementValue);
```

Example:

```javascript
let arr = [10, 20, 30, 40, 50, 60];

arr.splice(2, 0, 25);

console.log(arr);

// [10, 20, 25, 30, 40, 50, 60]
```

### Replace Example

```javascript
let arr = ["java", "node", "express", "python"];

arr.splice(2, 1, "javascript");

console.log(arr);
```

---

# slice()

Used to extract a portion of an array.

Important points:

* `startIndex` is included.
* `endIndex` is excluded.
* It does not modify the original array.

Example:

```javascript
let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1, 4);

console.log(result);

// [20, 30, 40]
```

---

# Higher-Order Array Methods

Important higher-order array methods are:

1. map()
2. filter()
3. forEach()
4. reduce()
5. sort()

---

# map()

`map()` is a higher-order array method used to traverse an array and perform an operation on each element.

It returns a new array.

It does not modify the original array.

The callback can receive three parameters:

1. Element
2. Index
3. Array

Syntax:

```javascript
array.map((element, index, array) => {

});
```

Example:

```javascript
let price = [1000, 750, 250, 500];

let updatedPrice = price.map((element) => {
    return element + 200;
});

console.log(updatedPrice);
```

Another example:

```javascript
let subjects = [
    "sql",
    "java",
    "node",
    "python"
];

let upperArr = subjects.map((element) => {
    return element.toUpperCase();
});

console.log(upperArr);
```

---

# filter()

`filter()` is a higher-order array method used to check a condition.

It returns a new array containing only the elements that satisfy the condition.

Example:

```javascript
let marks = [
    56, 75, 59, 80, 65, 90, 45, 88, 70
];

let highest = marks.filter((element) => {
    return element > 70;
});

console.log(highest);
```

Output:

```text
[75, 80, 90, 88]
```

---

# forEach()

`forEach()` is a higher-order array method used to traverse an array.

The callback can receive:

1. Element
2. Index
3. Array

Important difference:

```text
map()      → returns a new array
forEach()  → does not return a new array
```

Example:

```javascript
let arr = [10, 20, 30];

arr.forEach((element) => {
    console.log(element);
});
```

---

# reduce()

`reduce()` is a higher-order array method used to convert an array into a single value.

The callback can receive:

1. Accumulator
2. Element
3. Index
4. Array

Example:

```javascript
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, element) => {
    return acc + element;
}, 0);

console.log(sum);

// 15
```

Common uses:

* Sum
* Multiplication
* Finding total
* Calculating a single result

---

# sort()

`sort()` is used to sort array elements.

It modifies the original array.

## Ascending Order

```javascript
let numbers = [50, 10, 40, 20, 30];

numbers.sort((a, b) => {
    return a - b;
});

console.log(numbers);

// [10, 20, 30, 40, 50]
```

## Descending Order

```javascript
numbers.sort((a, b) => {
    return b - a;
});

console.log(numbers);
```

---

# Object

An object in JavaScript stores data in key-value pairs.

Example:

```javascript
let student = {
    sname: "Miller",
    sid: 101,
    isStudying: false
};
```

Here:

```text
sname       → key
"Miller"    → value

sid         → key
101         → value
```

Key-value pairs are called properties.

Important points:

* Keys should be unique.
* Values can be duplicate.
* Values can have different data types.
* Objects are enclosed using `{}`.

---

# Ways to Create an Object

Common ways to create objects are:

1. Object Literal
2. Class
3. Constructor Function

---

# Object Using Object Literal

Example:

```javascript
let student = {
    sname: "Miller",
    sid: 101,
    isStudying: false,

    skills: [
        "SQL",
        "Java",
        "Python",
        "WebTech"
    ],

    address: {
        city: "Chennai",
        pin: 600116
    },

    work: function () {
        console.log("Love to sleep");
    }
};

console.log(student);
```

---

# Access Object Property

Syntax:

```javascript
objectName.key;
```

Example:

```javascript
console.log(student.sname);

// Miller
```

---

# Modify Object Property

Syntax:

```javascript
objectName.key = value;
```

Example:

```javascript
student.sid = 210;

console.log(student.sid);

// 210
```

---

# Add New Object Property

The same syntax is used to add and modify a property.

If the key already exists:

```text
Existing key → value will be modified
```

If the key does not exist:

```text
New key → new property will be added
```

Example:

```javascript
student.phno = 9876543210;

console.log(student.phno);
```

---

# Delete Object Property

The `delete` operator is used to remove a property from an object.

Syntax:

```javascript
delete objectName.propertyName;
```

Example:

```javascript
let student = {
    name: "Kratos",
    age: 21,
    city: "Chennai"
};

console.log(student);

delete student.age;

console.log(student);
```

Before delete:

```text
{
    name: "Kratos",
    age: 21,
    city: "Chennai"
}
```

After delete:

```text
{
    name: "Kratos",
    city: "Chennai"
}
```

Only the `age` property is removed.

The object itself still exists.

Example:

```javascript
delete student.age;

console.log(student);
```

---

acessing object by using [] squar bracket
   syntax
         objectname["key]
```js
  console.log(student["sname"]) //miller
  console.log(student[sname]) //error