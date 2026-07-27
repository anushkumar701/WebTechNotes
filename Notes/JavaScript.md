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

### Note

- The `typeof` operator is used to know the data type of any variable.

```javascript
typeof variableName;

Example:
  let age =21;
  cosole.log(age)         //21
  console.log(typeof age) //number

  let height =5.85;
  cosole.log(height)         //5.85
  console.log(typeof height) //number

2.String Datatype

      It is collection of single or multiple characters that is enclosed with single quote('') or double quotes (" ") or backticks (` `)
      Eg:
         let name ='Kratos';
         cosole.log(name)         //21
         console.log(typeof name) //String

3.Boolean DataType

      It can take only two values either true or false.
      Eg:
        let isStudent = true;
        cosole.log(typeof isStudent) //true

4.Undefined DataType

      Any variable that is declared but not initialized, is called as undefined.

      typeof undefined is undefined.

      Example:
       let name
       console.log(empNo)       //Undefined
       console.log(typeof name) //Undefined

5.Null DataType
    Null is the varible that is assigned with null.
    typeof null is object.

    Example:
      let num=null;
      console.log(num);
      console.log(typeof num)

6.BigInit DataType
  If we want to take large number in  js, we can take thing biginit datatype.
  For declaring bigint datatype we have to use `n` as a suffix.

  Example:
  let age =21n;
  cosole.log(age)         //21
  console.log(typeof age) //biginit

NonPrimitive Dataatype:
  Js having 3 non primitive datatype.

  1.function
  2.Array
  3.Object


```
