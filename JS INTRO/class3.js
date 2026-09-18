// NUMBER METHODS, ARITHEMETIC AND MATH OBJECTS
let x = 6
y = 7

val = x + y
val = x - y
val = x / y
val = x * y
val = x % y //moduls gives the remainder of the div operations 

console.log(val)

// SHORTHAND OPERATIONS 

a = 10
b = 20

answer = a + b
a += b
a -= b
a *= b

console.log(a)

// MATHS OBJECTS
ray = Math.round(5.74) // it rounds the decimal number to the nearest whole number
ray = Math.ceil(5.74) // it rounds the decimal number to the ndearest upper digits
ray = Math.floor(5.74) // it rounds the decimal number down to the nearest lower digits
ray = Math.pow(5, 2) // this means 5 raise to the power of 2 (the second digit is the power of the first)
ray = Math.min(5, 2, 3, 10, 60, 55) //gives the lowestof the numner in the array
ray = Math.max(5, 2, 3, 10, 60, 55) // gives the highest of the numbers in the array
console.log(ray)

// MATH. RANDOM
way = Math.random() // generates a number from 0-1 excluding 1
way = Math.random() * 50 + 1
way = Math.floor(Math.random() * 50 + 1)

console.log(way)