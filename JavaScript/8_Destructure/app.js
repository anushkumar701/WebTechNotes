let student={
    sname:"Kratos",
    age:1024,
    isGod:true,
    skills:["Attack","Kill","Stamina","Strength"],
}
console.log(student.sname);
console.log(student["age"]);

let {sname,age,isPlayer,skills}=student;
console.log(student.sname);
console.log(student.age);
console.log(skills);

// Rest Parameter(...)

function f1(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
f1(10,20,30,40,50)

//Spread Operator
let frontend=["html","css","js","react"]
let backend=["node","express","mongodb"]

console.log(frontend);
console.log(...frontend);

let fullstack=[frontend,backend]
console.log(fullstack);

let fullstack1=[...frontend,backend]
console.log(fullstack1);

let fullstack2=[...frontend,...backend]
console.log(fullstack2);
console.log(...fullstack2);

//merge two object by using spread

let ob1={
    obname:"pen"
}
let ob2={
    price:30
}
let ob3={...ob1,...ob2}
console.log(ob3);

// Shallow Copy and deep copy

let subjects=["java","python","sql"]
let copy=[...subjects]
copy.push("webtech")
console.log(subjects);
console.log(copy);
