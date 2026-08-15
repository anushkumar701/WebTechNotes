// ! how to declare array

let arr = [10, 20, 30, 40, 50];

console.log(arr);
console.log(arr.length);

let arr2 = [10, "hi", true, [20, "bye"]];

console.log(arr2);
console.log(arr2.length);

//  how to access

console.log(arr[1]);

// how to modify value in any index

arr[3] = 400;
console.log(arr[3]);
console.log(arr);

// how to traverse array

let subjects = ["sql", "java", "python", "webtech"];

for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

// trevaersing by for of loop

for (let subject of subjects) {
  console.log(subjects);
}

// Array method

//! 1.push()

let marks = [75, 80, 95, 65];

console.log(marks);

marks.push(90);

console.log(marks);

// !2 pop()

let food = ["biriyani", "maggie", "fried rice", "upma"];

console.log(food);

food.pop();
console.log(food);

// ! 3 shift()

let movies = ["leo", "master", "beast", "jananayagan"];

console.log(movies);

movies.shift();
console.log(movies);

// ! 4. unshift()

let series = ["dark", "lusyfer", "f.r.i.e.n.d.s"];

console.log(series);

series.unshift("GOT");

console.log(series);

// ! 5 indexOf()

let numbers = [50, 10, 20, 40, 30];
console.log(series.indexOf(10));

// !6 lastIndexOf()

console.log(numbers.lastIndexOf(10));

// ! 7 includes()

console.log(numbers.includes(100)); //false
console.log(numbers.includes(30)); //true

// !8 contact()

let frontend = ["html", "css", "react"];
let backend = ["java", "node"];

let fullstrack = frontend.concat(backend);
console.log(fullstrack);

// ! 9 join()

let charArr = ["h", "e", "l", "l", "o"];

let str = charArr.join("");
console.log(str);

// ! 10. reverse()

let arr3 = [1, 2, 3, 4, 5];

arr3.reverse();
console.log(arr3);

// ! 11. splice()

let arr4 = [10, 20, 30, 40, 50, 60];

arr4.splice(2, 0);

console.log(arr4);

let arr5 = ["java", "node", "express", "python"];

arr5.splice(2, 0, "javascript");

console.log(arr5);
    