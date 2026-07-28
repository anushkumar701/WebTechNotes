# JavaScript

JavaScript is a programming language that is used to add functionalities to web pages.

We can use JavaScript both on the client-side and server-side.

---

# How Many Ways Can We Write JavaScript Code?

There are two ways:

## 1. Internal JavaScript

- Writing the JavaScript code inside the HTML file.
- For this, we need the `<script></script>` tag.
- It should be written inside the `<body>` tag at the end, before the `</body>` tag.

## 2. External JavaScript

- First, we have to create a separate JavaScript file using the `.js` extension.
- In the `<script></script>` tag, we have to provide the path of the JavaScript file in the `src` attribute.

---

# Printing Statement in JavaScript

```javascript
console.log();
```

---

# How to Execute a JavaScript Program

We can execute JavaScript programs both inside and outside the browser.

## Inside the Browser

- For executing a JavaScript program inside the browser, we need an HTML file.
- We have to inspect the webpage and go to the Console tab to get the output.

## Outside the Browser

- For this, we have to install Node.js.
- Node.js is a JavaScript Runtime Environment used to execute JavaScript files outside the browser.

### Syntax

```bash
node filename.js
```

---

# Token

A token is the basic building block or smallest unit in any programming language.

### Components of Token

- Keyword
- Identifier
- Literals
- Separator
- Operators

## Keyword

- These are predefined or reserved words having some meaning.
- They should be written in lowercase.

## Identifier

- Components where we can assign names.
- We cannot use keywords as identifiers.
- We cannot give spaces between identifiers.
- Special characters are not allowed (except `$` and `_`).
- We cannot start an identifier with numbers.

---

# Variable

- A variable is a container used to store data or values.
- In JavaScript, we use three keywords to create variables:
  - `var`
  - `let`
  - `const`

---

## var Keyword

```javascript
var sname; // Variable declaration

sname = "ram"; // Variable initialization

var sage = 22; // Variable declaration and initialization

sage = 23; // Variable reinitialization

var sname; // Variable redeclaration
```

---

## let Keyword

- Redeclaration is not possible using the `let` keyword.

### Example

```javascript
let phNo = 9865423456;

let phNo; // Redeclaration is not possible
```

---

## const Keyword

- To create a constant variable, we use the `const` keyword.
- Declaration and initialization must be done in the same line.

---

# Data Type

- It is used to know what kind of data we want to assign to a variable.
- In JavaScript, we have two types of data types.

## Primitive Data Type

### 1. Number

- In JavaScript, both decimal and non-decimal numbers belong to the `number` data type.

#### Note

- The `typeof` operator is used to know the data type of any variable.

### Syntax

```javascript
typeof variableName;
```

### Example

```javascript
let age = 21;
console.log(age); // 21
console.log(typeof age); // number

let height = 5.85;
console.log(height); // 5.85
console.log(typeof height); // number
```

---

### 2. String Data Type

- It is a collection of single or multiple characters that are enclosed with:
  - Single Quotes (`''`)
  - Double Quotes (`""`)
  - Backticks (` ` ``)

### Example

```javascript
let name = "Kratos";

console.log(name); // Kratos
console.log(typeof name); // string
```

---

### 3. Boolean Data Type

- It can take only two values:
  - `true`
  - `false`

### Example

```javascript
let isStudent = true;

console.log(isStudent); // true
console.log(typeof isStudent); // boolean
```

---

### 4. Undefined Data Type

- Any variable that is declared but not initialized is called Undefined.
- `typeof undefined` is `undefined`.

### Example

```javascript
let name;

console.log(name); // undefined
console.log(typeof name); // undefined
```

---

### 5. Null Data Type

- Null is a variable that is assigned with `null`.
- `typeof null` is `object`.

### Example

```javascript
let num = null;

console.log(num); // null
console.log(typeof num); // object
```

---

### 6. BigInt Data Type

- If we want to take very large numbers in JavaScript, we use the BigInt data type.
- For declaring a BigInt value, we have to use `n` as a suffix.

### Example

```javascript
let age = 21n;

console.log(age); // 21n
console.log(typeof age); // bigint
```

---

## Non-Primitive Data Type

- JavaScript has three Non-Primitive Data Types:
  1. Function
  2. Array
  3. Object

---

# Decision Making Statements

1. If Condition
2. If Else Condition
3. Else If Ladder
4. Switch

---

## If Condition

### Syntax

```javascript
if (condition) {
}
```

---

## If Else Condition

### Syntax

```javascript
if (condition) {
} else {
}
```

---

## Else If Ladder

- If we want to check more than one condition, then we should use Else If Ladder.
- Once any one block is executed, the remaining blocks will not be checked.

### Syntax

```javascript
if (condition) {
} else if (condition) {
} else if (condition) {
} else {
}
```
