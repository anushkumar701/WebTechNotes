let str1 = "hi";
let str2 = "hi";
let str3 = `hello
how
are 
you`;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

console.log(str3);

//String Interpolation or Template Literals

let a = 10;
let b = 20;
let myName = "Ben";
console.log(`The Addition of ${a} and ${b} is : ${a + b}`);
console.log(`My Name is ${myName}`);

//toUppercase & toLowercase

let str4 = "Kratos";
let z = str4.toUpperCase();
let y = str4.toLowerCase();
console.log(str4);
console.log(z);

//trim()

let str6 = "  hi   ";
let str7 = str6.trim();
console.log(str6.length);
console.log(str7.length);

//indexof

let str8 = "hello how are you";
console.log(str8.indexOf(`o`));

//lastIndexof

let str9 = "hello how are you";
console.log(str8.lastIndexOf(`o`));

//charAt
console.log(str9.charAt(3));

//concat
console.log(str7.concat(" ",str8));

//includes
console.log(str8.includes("me")); 
