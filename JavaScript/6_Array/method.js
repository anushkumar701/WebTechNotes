let arr = [10, 20, 30, 40];

arr.map((ele, index, array) => {
  console.log(ele, index, array);
});


let price = [1000, 200, 300, 400];
let updatedprice = [];

price.map((ele) => {
  updatedprice.push(ele + 400);
});

console.log(updatedprice);


let num = [1, 2, 3, 4, 5];

let num1 = num.reduce((acc, ele) => {
  return acc + ele;
});

console.log(num1);