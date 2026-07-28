//Math.max()

console.log(Math.max(5, 8));
console.log(Math.max(15, 8, 34, 21, 45));

//Math.min

console.log(Math.min(9, 3, 4, 8));

//Math.sqrt
console.log(Math.sqrt(100));
console.log(Math.sqrt(4));

//Math.abs()

console.log(Math.abs(-20));
console.log(Math.abs(-56.9));

//Math.floor()
console.log(Math.floor(5.99)); //15

//Math.ceil()
console.log(Math.ceil(4.1)); // .1

//Math.round
console.log(Math.round(7.4));
console.log(Math.round(7.6));

//Math.random()
console.log(Math.random() * 10);

//generate one number between 0 to 10
console.log(Math.floor(Math.random() * 10));

//generate otp 4 digits
let otp = Math.floor(Math.random() * 9000 + 1000);
console.log(otp);

//generate 10 to 25
let min = 10,
  max = 25;
console.log(Math.floor(Math.random() * 16 + 10));
console.log(Math.floor(Math.random() * (max - min) + 1 + min))
