// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test =  3;

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes
hello = 5; // changing the type of variable is okay, in this case string to number.

// const is a constant
const iAmAConstant = 9;

// objects
// variables can also be objects
const obj = {};

// objects can dynamically add and remove properties
obj.a = 9;

// For Practice

// declare an object with an object as a property
const newObject = {
    y: {
        a: 'Hello',
        b: 4,
        c: 7,
    }
};

console.log(newObject);

// delete a property
delete newObject.y;
newObject.a = 'p';
console.log(newObject);

// change a property
newObject.a = 9;
console.log(newObject);