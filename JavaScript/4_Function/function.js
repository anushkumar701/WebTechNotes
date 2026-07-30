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
    int = Math.floor(int / 10)
  }
  return rev;
}

console.log(rev(123));
