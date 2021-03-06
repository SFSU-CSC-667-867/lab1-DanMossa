// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
console.log(array);

array.forEach((arrayItem) => {
    console.log(arrayItem);
});

// use map
const arrayTest = [1, 2, 3];
const newArray = arrayTest.map(i => i + 1);
console.log(newArray);

// use pop
newArray.pop();
console.log(newArray);

// use push
newArray.push(6);
console.log(newArray);

// use shift
newArray.shift();
console.log(newArray);

// use unshift
newArray.unshift();
console.log(newArray);

// use filter