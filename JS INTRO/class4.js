// CONDITIONALS

const student = 'Bryan'
const age = 11

// If we have just one option we will have just the if and the else statement 


// If we have multiple options we would have the if, else if and else statement
if (age <= 10){
  alert('should be in basic 5')
} else if (age <= 15){
  alert('should be in grade 12')
} else{
  alert('should be preparing for external examinations')
}

// = assignment operator
// == checks if the items are equal in value 
// === checks if the item is equal in value and data type 
// (15 == '15' this is correct and 15 === '15' is wrong)

// write a condition statement of diffrent student with diffrent grade and console it to the log

let student1 = "Obinna";
let grade1 = 85;

let student2 = "Bryan";
let grade2 = 65;

let student3 = "Jessica";
let grade3 = 52;

let student4 = "David";
let grade4 = 35;

if (grade1 >= 70){
  console.log(student1 + "Got an A");
} else if(grade1 >= 60) {
  console.log(student1 + "Got a B");
} else if (grade1 >= 50) {
  console.log(student1 + "Got a C");
} else if (grade1 >= 40) {
  console.log(grade1 + "Got a D")
} else {
  console.log(student1 + "Got an F")
}

if (grade2 >= 70){
  console.log(student2 + "Got an A");
} else if(grade2 >= 60) {
  console.log(student2 + "Got a B");
} else if (grade2 >= 50) {
  console.log(student2 + "Got a C");
} else if (grade2 >= 40) {
  console.log(grade2 + "Got a D")
} else {
  console.log(student2 + "Got an F")
}
 
if (grade3 >= 70){
  console.log(student3 + "Got an A");
} else if(grade3 >= 60) {
  console.log(student3 + "Got a B");
} else if (grade3 >= 50) {
  console.log(student3 + "Got a C");
} else if (grade3 >= 40) {
  console.log(grade3 + "Got a D")
} else {
  console.log(student3 + "Got an F")
}

if (grade4 >= 70){
  console.log(student4 + "Got an A");
} else if(grade4 >= 60) {
  console.log(student4 + "Got a B");
} else if (grade4 >= 50) {
  console.log(student4 + "Got a C");
} else if (grade4 >= 40) {
  console.log(grade4 + "Got a D")
} else {
  console.log(student4 + "Got an F")
}