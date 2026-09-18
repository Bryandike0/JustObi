// DOM

// DOM: Document Object Model

console.log(document)

// With DOM js has the ability to access and make your page dynamic

// Using DOM 

// JS can change the HTML elements on the page 
// JS can change all HTML attributes and styles in the page 
// JS can remove existing HTML element and attributes
// JS can add existing HTML element and attributes
// JS can react to all existing html event in the page 
// JS can create new HTML events in the page 

// Document Object Model (DOM) Is a programming interface for web documents.

// ACCESSING THE DOM;

// JS can access the DOM in several ways. The most common methods are;

// document.getElementByID()
const example2 = document.getElementById('exampleid')
console.log(example2.innerHTML)

// document.getElementByClassName()
const example1 = document.getElementsByClassName('exampleclass')
console.log(example1[0].innerHTML)-

// document.getElementByTagName()
const example3 = document.getElementsByTagName('h3')
console.log(example3[2].innerHTML)
// document.querySelector()
// A QUERY SELECTOR can select anything on the page
const example4 = document.querySelector('.exampleclass')
console.log(example4.innerHTML)

// document.querySelectorAll()
const example5 = document.querySelectorAll()