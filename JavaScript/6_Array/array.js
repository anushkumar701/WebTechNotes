//how to declare

let arr = [10, 20, 30, 40, 50];
console.log(arr);
let arr1 = [10, "anush", true, [30, "hello"]];
console.log(arr1);
console.log(arr.length);
console.log(arr1.length);

//how to access
console.log(arr1[3]);

//how to modify value in any index
arr[3] = 400;
console.log(arr[3]);

//how to transverse array
let subjects=["sql","python","java"]
for(let i=0;i<subjects.length;i++){
    console.log(subjects[i]);
}

//transversing by for of loop
for (let subject of subjects) {
    console.log(subject);
}

//array methods
//1push
let marks=[71,80,95,85]
console.log(marks);
marks.push(100);
console.log(marks);

//2pop
marks.pop();
console.log(marks);

//3shift
marks.shift();
console.log(marks);

//4unshift
marks.unshift(50);
console.log(marks);

//5indexOf
let index=marks.indexOf(85);
console.log(index);

//6includes
let isPresent=marks.includes(80);
console.log(isPresent);

//7reverse
marks.reverse();
console.log(marks);

//8sort
marks.sort();
console.log(marks);

