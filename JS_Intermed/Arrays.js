const gamaStudents = ["Maria", "Joana", "William", "Marcos"];

gamaStudents.forEach((student) => {
  console.log(student);
});

const students = [
  {
    name: "William",
    age: 18,
  },
  {
    name: "João",
    age: 16,
  },
  {
    name: "Marcelo",
    age: 19,
  },
];

const majorStudents = students.filter((student) => {
  return student.age  >= 18;
});

const notMajorStudents = students.filter((student) => {
  return student.age < 18;
});

console.log(majorStudents);
console.log(notMajorStudents);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const soma = numbers.reduce((previous, next) => {
  return previous + next;
}, 2);

console.log(soma);