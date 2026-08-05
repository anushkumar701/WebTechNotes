function empDetails() {
  console.log("Ben");
  console.log(101);
}
empDetails();

function add(a, b) {
  console.log(a + b);
}
add(2, 8);

function sub(a, b) {
  return a - b;
}
let a = sub(40, 10);
console.log(a);
console.log(sub(100, 20));

console.log(add(10, 20));

function spy(num) {
  let sum = 0;
  let mul = 1;

  while (num > 0) {
    let ld = num % 10;
    sum = sum + ld;
    mul = mul * ld;
    num = Math.floor(num / 10);
  }

  return sum == null;
}

console.log(spy(123));

function rev(int) {
  let rev;
  while (int > 0) {
    rev = int % 10;
    int = Math.floor(int / 10);
  }
  return rev;
}

console.log(rev(123));

// prime or not

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let number = 17;

if (isPrime(number)) {
  console.log(number + " is a Prime Number");
} else {
  console.log(number + " is Not a Prime Number");
}

// print prime b/w  1 - 20
for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) console.log(i);
}

// automorphic
let auto = function (num) {
  let count = 0;
  let temp = num;

  while (temp != 0) {
    temp = Math.floor(temp / 10);
    count++;
  }

  let x = num * num;
  let y = 1;
  let res = 1;

  while (count != 0) {
    res = res * 10;
    count--;
  }

  y = x % res;

  if (y == num) console.log(num + " is automorphic");
  else console.log(num + " is not automorphic");
};

auto(25);

//Arrow Function

let multiply = (a, b) => {
  console.log("I am Multiply function");
  console.log(a * b);
};
multiply(10, 3);

let division = (a, b) => a / b;
console.log(division(10, 3));

//Armstrog Number
let countDigit = (n) => {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

let isArmstrong = (n) => {
  let sum = 0;
  let temp = n;
  let count = countDigit(n);

  while (n > 0) {
    let ld = n % 10;
    sum += Math.pow(ld, count);
    n = Math.floor(n / 10);
  }

  return sum == temp;
};

console.log(isArmstrong(153));
