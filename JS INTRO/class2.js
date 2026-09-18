// TYPES CONVERSION

// One data type can be converted from one form to another

x = 5;

// x here is a number
console.log(typeof x)

y = String(5)
console.log(typeof y)

let a = Number(true)
console.log(typeof a)

// ARRAYS

// ARRAYS are data structure used to store mulyiple values of the same data type.
//  Each Value is stored in numbered position called an Index

const user = 'Bryan'
const users = ['Bryan', 'Chelsea', 'Jesse', 'Elvis', 'Ebube']

console.log(users[4])  
users.push('mike') //adding an item to the end of the list
users.pop() // to delete the last item from the array
console.log(users)

// STRING, STRING METHOD, CONCATINATION, AND TEMPLATE LITERALS

// a Method is a function you can apply inside of an object

let intro= 'Bryan is just a human';

console.log(intro.length) //to get the length of the string

console.log(intro.indexOf('a' )) // to get the position of the string

console.log(intro.substring(5, 10)) // to get the item or a group of items first value 
// is where to start and the last value is where to end 

console.log(intro.substr(3, 10)) // to print an item or group of items the fist is where it starts and the last is how many values to print or display

console.log(intro.toUpperCase()) // to change to uppercase 
console.log(intro.toLowerCase()) // to change to lowercase

console.log(intro.replace('human', 'sharp')) // to replace an item or string
// The first is the item to replace and the last is the item to replace it with

// ASSIGNMENT
// Create a sentence using template literals having 5 words diffrent variables then in the sentence replace one word with another


let word = 'I am learning Cybersecurity today';
console.log(word);
console.log(word.replace('Cybersecurity', 'Javascript'))

a = 'She'
b = 'made'
c = 'me'
d = 'learn'
e = 'Javascript'

dog =  a + ' ' + b + ' ' + c + ' ' + d + ' ' + e;
console.log(dog)

just = `omorr ${dog}`
console.log(just)

console.log(just.replace('She', 'Precious'))
