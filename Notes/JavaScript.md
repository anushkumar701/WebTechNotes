# JavaScript

JavaScript is a programming language that is used to add functionalities to web pages.

We can use JavaScript both on the client-side and server-side.

---

# How Many Ways Can We Write JavaScript Code?

There are two ways:

## 1. Internal JavaScript

•⁠ ⁠Writing the JavaScript code inside the HTML file.
•⁠ ⁠For this, we need the ⁠ <script></script> ⁠ tag.
•⁠ ⁠It should be written inside the ⁠ <body> ⁠ tag at the end, before the ⁠ </body> ⁠ tag.

## 2. External JavaScript

•⁠ ⁠First, we have to create a separate JavaScript file using the ⁠ .js ⁠ extension.
•⁠ ⁠In the ⁠ <script></script> ⁠ tag, we have to provide the path of the JavaScript file in the ⁠ src ⁠ attribute.

---

# Printing Statement in JavaScript

⁠ javascript
console.log();
 ⁠

---

# How to Execute a JavaScript Program

We can execute JavaScript programs both inside and outside the browser.

## Inside the Browser

•⁠ ⁠For executing a JavaScript program inside the browser, we need an HTML file.
•⁠ ⁠We have to inspect the webpage and go to the Console tab to get the output.

## Outside the Browser

•⁠ ⁠For this, we have to install Node.js.
•⁠ ⁠Node.js is a JavaScript Runtime Environment used to execute JavaScript files outside the browser.

### Syntax

⁠ bash
node filename.js
 ⁠

---

# Token

A token is the basic building block or smallest unit in any programming language.

### Components of Token

•⁠ ⁠Keyword
•⁠ ⁠Identifier
•⁠ ⁠Literals
•⁠ ⁠Separator
•⁠ ⁠Operators

## Keyword

•⁠ ⁠These are predefined or reserved words having some meaning.
•⁠ ⁠They should be written in lowercase.

## Identifier

•⁠ ⁠Components where we can assign names.
•⁠ ⁠We cannot use keywords as identifiers.
•⁠ ⁠We cannot give spaces between identifiers.
•⁠ ⁠Special characters are not allowed (except ⁠ $ ⁠ and ⁠ _ ⁠).
•⁠ ⁠We cannot start an identifier with numbers.

---

# Variable

•⁠ ⁠A variable is a container used to store data or values.
•⁠ ⁠In JavaScript, we use three keywords to create variables:

- ⁠ var ⁠
- ⁠ let ⁠
- ⁠ const ⁠

---

## var Keyword

⁠ javascript
var sname; // Variable declaration

sname = "ram"; // Variable initialization

var sage = 22; // Variable declaration and initialization

sage = 23; // Variable reinitialization

var sname; // Variable redeclaration
 ⁠

---

## let Keyword

•⁠ ⁠Redeclaration is not possible using the ⁠ let ⁠ keyword.

### Example

⁠ javascript
let phNo = 9865423456;

let phNo; // Redeclaration is not possible
 ⁠

---

## const Keyword

•⁠ ⁠To create a constant variable, we use the ⁠ const ⁠ keyword.
•⁠ ⁠Declaration and initialization must be done in the same line.

---

# Data Type

•⁠ ⁠It is used to know what kind of data we want to assign to a variable.
•⁠ ⁠In JavaScript, we have two types of data types.

## Primitive Data Type

### 1. Number

•⁠ ⁠In JavaScript, both decimal and non-decimal numbers belong to the ⁠ number ⁠ data type.

#### Note

•⁠ ⁠The ⁠ typeof ⁠ operator is used to know the data type of any variable.

### Syntax

⁠ javascript
typeof variableName;
 ⁠

### Example

⁠ javascript
let age = 21;
console.log(age); // 21
console.log(typeof age); // number

let height = 5.85;
console.log(height); // 5.85
console.log(typeof height); // number
 ⁠

---

### 2. String Data Type

•⁠ ⁠It is a collection of single or multiple characters that are enclosed with:

- Single Quotes (⁠ '' ⁠)
- Double Quotes (⁠ "" ⁠)
- Backticks (` ` ``)

### Example

⁠ javascript
let name = "Kratos";

console.log(name); // Kratos
console.log(typeof name); // string
 ⁠

---

### 3. Boolean Data Type

•⁠ ⁠It can take only two values:

- ⁠ true ⁠
- ⁠ false ⁠

### Example

⁠ javascript
let isStudent = true;

console.log(isStudent); // true
console.log(typeof isStudent); // boolean
 ⁠

---

### 4. Undefined Data Type

•⁠ ⁠Any variable that is declared but not initialized is called Undefined.
•⁠ ⁠⁠ typeof undefined ⁠ is ⁠ undefined ⁠.

### Example

⁠ javascript
let name;

console.log(name); // undefined
console.log(typeof name); // undefined
 ⁠

---

### 5. Null Data Type

•⁠ ⁠Null is a variable that is assigned with ⁠ null ⁠.
•⁠ ⁠⁠ typeof null ⁠ is ⁠ object ⁠.

### Example

⁠ javascript
let num = null;

console.log(num); // null
console.log(typeof num); // object
 ⁠

---

### 6. BigInt Data Type

•⁠ ⁠If we want to take very large numbers in JavaScript, we use the BigInt data type.
•⁠ ⁠For declaring a BigInt value, we have to use ⁠ n ⁠ as a suffix.

### Example

⁠ javascript
let age = 21n;

console.log(age); // 21n
console.log(typeof age); // bigint
 ⁠

---

## Non-Primitive Data Type

•⁠ ⁠JavaScript has three Non-Primitive Data Types:

1. Function
2. Array
3. Object

---

# Decision Making Statements

1.⁠ ⁠If Condition
2.⁠ ⁠If Else Condition
3.⁠ ⁠Else If Ladder
4.⁠ ⁠Switch

---

## If Condition

### Syntax

⁠ javascript
if (condition) {
}
 ⁠

---

## If Else Condition

### Syntax

⁠ javascript
if (condition) {
} else {
}
 ⁠

---

## Else If Ladder

•⁠ ⁠If we want to check more than one condition, then we should use Else If Ladder.
•⁠ ⁠Once any one block is executed, the remaining blocks will not be checked.

### Syntax

⁠ javascript
if (condition) {
} else if (condition) {
} else if (condition) {
} else {
}
 ⁠

Math object :
• This is one built-in object in javascript used to perform mathematical operations
Math.max() :
• Used to find the maximum number.
Eg:
console.log(Math.max(5, 8, 19, 25, 45)); //45

Math.min() :
• Used to find the maximum number.
Eg :
console.log(Math.min(9, 5, 8, 29, 4, 3)); //3

Math.abs() :
• Used to provide the positive value.
Eg :
console.log(Math.abs(-20)); // 20

Math.floor() :
• It is used to provide the floor value of the number
Eg :
console.log(Math.floor(5.2)); //5
console.log(Math.floor(5.99));// 5

Math.ceil() :
• It is used to provide the next value of the number.
Eg :
console.log(Math.ceil(4.3)); //5
console.log(Math.ceil(4.6)); //5

Math.round() :
• It is used to provide the roundoff value of the number.
• It the decimal value is .5 or more then it will give next value
Eg :
console.log(Math.round(5.4)); //5
console.log(Math.round(5.7)); //6

Math.pow() :
• It is used to know the power of any number.
• It takes 2 parameters (base and power).
Eg :
console.log(Math.pow(2,3)); //8

Math.sqrt() :
• It is used to know the Square root of any number.
Eg :
console.log(Math.sqrt(100)); //10

Math.random() :
• It will generate one random number b/w 0.0 to 0.99999 (less than 1)
How to generate random number b/w some range?
Let start = 10 ;
Let end=50;
Let randomeNumber = Math.floor(Math.random()\*(end-start)+1 +start);

Looping Statement :
For loop :
_syntax_
For (initialization ; condition ; updation ){
}
_example_
Write a program to print 1 to 5 ?
\*\*\*\*js
For (let i=1 ; i<= 5 ; i++){
Console.log(i);
}
While loop:

Do While Loop :
• This loop check the condition at the end, it is called as exit controlled loop.
• Even though condition is false them also this loop will execute at least one time.

Function :
• Function is one block of code performing some specific task.
• Function is used for code reusability.

Named Function:
• Function having name is called “Named function”.

Syntax:
Function functionname()
{
}
Functionname()

• For executing the function we should call the function by the function name.

Function with parameter:
function add(a,b){
console.log(a+b);

}
add(2,3)

function with return statement :

function sub(a, b) {
return a - b;
}

let res = sub(40, 10);
console.log(res);

Anonymous function :
• Any function that does not have any name is called as anonymous function.
Syntax:
Function(){
}
• Here we cannot execute the function because this function does not have any name.

Function with expression:
Sysntax:
Variable = function()
{
}
Example:
Let add=function(){
Console.log(10+5);
}
Add();

Write a JS program to check number id prime or not by using function?

## Function Expression

### Syntax

⁠ javascript
let add = function () {
console.log(10 + 5);
};

add();
 ⁠

---

## Arrow Function

### Syntax

⁠ javascript
let add = () => {};
 ⁠

### Note

In Arrow Function, if there is only one return statement, then there is no need to use the ⁠ return ⁠ keyword and curly braces ⁠ {} ⁠.

⁠ javascript
let add = (a, b) => a + b;
console.log(multiply(2, 8));
 ⁠

write a javaScript program to find the number is armstrong or not

Nested Function :
• Creating one function inside another function is called as nested function .
Example:
let outer= ()=>{
console.log("i am outer function");
let inner = ()=>{
console.log("i am inner function");
}
inner();
}

outer();

What is lexical scooping ?
• In nested function inner function can access the properties of outer function but the outer function can’t access the properties of inner function is called as “lexical scooping”
Higher Order Function and callback Function
Higher order function :
• Any function that takes /accepts any other function as parameter/argument is called as “higher order function”.
Callback Function:
• The function we are sending as an argument to the higher order function, is called as “callback function”.
Difference between var and let :

1. In let key word re-declaration is not possible , but in var keyword re-declaration is possible .
   Ex:
   var a=10;
   var a;// possible

let b=50;
let b; // error

2. ‘Let’ keyword having “block scope” but ‘var’ keyword having ‘functional scope’ and ‘global scope’
   Ex:

{
var x=10;
let y=20;
const z=30;
console.log(x);// 10
console.log(y);// 20
console.log(z);// 30
}
console.log(x);// 10
console.log(y);// error
console.log(z);// error

function scope() {
for (var i = 0; i <= 5; i++) {

}
console.log(i);

}

scope();

3. “variable hoisting” is possible in ‘var’ keyword but in ‘let’ not possible

What is variable hoisting
• If we declared any variable by using ‘var’ keyword and we access it before it’s declaration.
• The declaration will move to the top and it will give output as ‘undefined’.
• This process is called “variable hosting”.
Eg:
console.log(x); //undefined
var x;

console.log(y);//undefined
var y;

question:

1. Var vs let vs const
2. Undefined vs null
3. How to know the datatype
4. Lexical scoping
5. Higher order and callback function
6. What is IIFE

IIFE (Immediate invoke Function expression):
• This function executes only once.
Ex:
(
function()
{
console.log("database connected")
}
)();

(
function(port)
{
console.log("server is running on port number", port)
}
)(3000);

String :
• String id single or collection of characters enclosed with single quote/double quote / backticks.
Ex:
let str1 = "hi";
let str2 = "hi";
let str3 = `hi
hello 
how 
are 
you`;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
Note:
If we want to take multiline string then we can enclosed the string by suing backtick.
String Interpolation/ template Literals :
• Accessing the variable inside string is called template literals.
• For this string should be enclosed with backtick and the variable we want to access should be written inside ${}
Lenth property:
• It is used to know the length of any string.
Ex:
let msg ="how are you"
console.log(msg.length);

String methods :
• toupperCase()
o this method is used to concert the sting into uppercase and it will return one new string.
o it will not change the original string.
• tolowerCase()
o this method is used to concert the sting into lowercase and it will return one new string.
o it will not change the original string.
• trim()
o this method is used to remove space from both side of the string.
• indexOf()
o it is used to know the index of the given character .
o it will tack the first occurrence of the character.
o If the character is not present , it will return -1.
• lastIndexOf()
o it will tack the last occurrence of the character.
o If the character is not present , it will return -1.
• charAt()
o this method is used to know which character is present at the given index .

• concat()
o this method I used to combine/ merge two or more than two strings and it will return on new string.
• Includes()
o It is used to know the give string is present or not .
o If it is present it will return true otherwise it will return false.
• //toUppercase & toLowercase
•
• let str4 = "Kratos";
• let z = str4.toUpperCase();
• let y = str4.toLowerCase();
• console.log(str4);
• console.log(z);
•
• //trim()
•
• let str6 = " hi ";
• let str7 = str6.trim();
• console.log(str6.length);
• console.log(str7.length);
•
• //indexof
•
• let str8 = "hello how are you";
• console.log(str8.indexOf(⁠ o ⁠));
•
• //lastIndexof
•
• let str9 = "hello how are you";
• console.log(str8.lastIndexOf(⁠ o ⁠));
•
• //charAt
• console.log(str9.charAt(3));
•
• //concat
• console.log(str7.concat(" ",str8));
•
• //includes
• console.log(str8.includes("me"));

• replace()

o this method is used to replace one string with another string.
o It will replace only the first one.
• let sentance = `i am from bangalore, i love bangalore`;
•
• console.log(sentance.replace("bangalore", "chennai"));
• replaceAll()
o this method is used to replace all the string.
• let password = "hello";
• console.log(password.replaceAll("l", "$"));
• console.log(sentance.replaceAll("bangalore", "chennai"));

• split():
o this method is used to convert string into array.
• let greet = "how are you"
•
• console.log(greet.split(" "));//[ "how", "are", "you" ]
• console.log(greet.split("")); //[ "h", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u" ]
• console.log(greet.split());//[ "how are you" ]

• slice():

o this method is used to extract some part of another string.
o It takes two parameters .(startingIndex, endIndex), it does not include endIndex value.
o Slice () can take negative index also.
o endIndex value should be greater than startIndex.
• Substring()
o this method is used to extract some part of another string.
o It takes two parameters .(startingIndex, endIndex), it does not include endIndex value.
o here we can’t provide negative value. If we are using that will be considers as 0.
o Here if we are giving endIndex value smaller than startingIndex, it will swap the value and provide the output
Arrays :
• Array is one linear data stretcher where we can store multiple values in continuous manner.
• In JavaScript we can store both homogeneous and heterogeneous data inside array
• Array index starts from 0.

How to declare array:
let arr = [10, 20, 30, 40, 50];
console.log(arr);

how to access array elements:
console.log(arr[0]); //10
console.log(arr[1]); //20

how to modify array element:
arr[3] = 400;
console.log(arr[3]); //400

how to traverse Array
• We can traverse array by using any looping statement like (for, while, do-while)
• We can traverse by using ‘for of’ loop and ‘for in’ loop
Ex:
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}
For of ex:
for (let a of arr) {
console.log(a);

}

Array Methods :
• Push () :
o This method is used to add element at the end of array
• let marks = [75, 80, 95, 65];
•
• console.log(marks);
•
• marks.push(90);
•
• console.log(marks);

• Pop() :
o Used to remove the last element of the array.
• let food = ["biriyani", "maggie", "fried rice", "upma"];
•
• console.log(food);
•
• food.pop();
• console.log(food);
• shift () :
o used to remove the element form the start
• let movies = ["leo", "master", "beast", "jananayagan"];
•
• console.log(movies);
•
• movies.shift();
• console.log(movies);
• unshift () :
o used to add the element from the start
• let series = ["dark", "lusyfer", "f.r.i.e.n.d.s"];
•
• console.log(series);
•
• series.unshift("GOT");
•
• console.log(series);

• index () :
o this method is used to know the first occurrence index of any given element of the array.
• LastIndexOf () :
o this method is used to know the last occurrence index of any given element of the array.
• Includes () :
o Used to check element is present or not in the array.
o It return Boolean(true/false).
• Concat () :
o Used to combine/merge two or more than two arrays and it will return one new array.
• Join () :
o Used to convert any array into string.
• Reverse () :
o Used to reverse the original array.
• Splice() :
o This method is used to modify/change the original array,
o By using this method we can remove, replace and add element in array.
o It can take parameters (startIndex, deleteCount, replacecementValue)
Ex:
let arr4 = [10, 20, 30, 40, 50, 60];

arr4.splice(2, 0);

console.log(arr4);

let arr5 = ["java", "node", "express", "python"];

arr5.splice(2, 0, "javascript");

console.log(arr5);

• Slice () :
o It is used to extract some part of array.
o It will not modify the original array.
o It tacks tow parameters(startIndex, endIndex)but it does not include endIndex value.
