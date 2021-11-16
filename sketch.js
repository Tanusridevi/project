function setup() {
  createCanvas(400, 400);
  var student = {
    name:"Raju",
    class:7,
    marks:[70, 40, 89,91, 85]
  }
  console.log(student.name);
  console.log(student.marks[2]);
  student.marks[2]=50;
  console.log(student.marks[2]);
}

function draw() {
  background(220);
}