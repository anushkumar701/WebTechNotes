let student = {
  sname: "miller",
  sid: 101,
  isStudying: false,
  skills: ["sql", "java", "python", "webtech"],
  address: {
    city: "chennai",
    pin: 600116,
  },
  work: function () {
    console.log("love to sleep");
  },
};

// console.log(student);

// how to access object properties

console.log("Student name is ", student.sname);
console.log("Student id is ", student.sid);
console.log("student skills are ", student.skills);
console.log("student's thired skill is ", student.skills[2]);
console.log("Student's address is ", student.address);
console.log("Student's pin is ", student.address.pin);
student.work();

// how to midify teh object value

student.sid = 102;
console.log(student);

// how o add new property 

student.phNo=987652111
console.log(student);


// how ro delete

delete student.work