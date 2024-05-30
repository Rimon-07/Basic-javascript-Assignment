"use strict"
// 1 start == Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";
console.log(carName)

//1 end == Create a variable called carName, assign the value Volvo to it.

// 2 start == On one single line, declare three variables with the following names and values:

let firstName = "john" , lastName = "Doe" , age = 35;
console.log(firstName)

//or
let firstName1 = "john";
let lastName1 = "Doe";
let age1 = 35;

console.log(age)

// 2 end == On one single line, declare three variables with the following names and values:

//3 start == Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let x = 10;
let y = 5;

 x*=y

console.log(x)


// 3 end == Use the correct assignment operator that will result in x being 50 (same as x = x * y).

// 4 start == Use comments to describe the correct data type of the following variables:

let length = 16; // data type (number )
console.log(typeof length)


let lastName2 = "Johnson"; // data type (string)
console.log(typeof lastName2)

const x1 = {
  firstName: "John",  
  lastName: "Doe"
};    // data type (object) 
console.log(typeof x1)

// 4 end == Use comments to describe the correct data type of the following variables:


//8 start == Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 
      Brand [0] = "Ford"
      console.log(Brand)

//8 end == Change the first item of Brand to "Ford".

// 8 start == Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length)

// 8 end == Alert the number of items in an array, using the correct Array property:


//9 start == Math Related Problems

//Use the correct Math method to create a random number.

let a = Math.random();
console.log(a)

//Use the correct Math method to return the largest number of 10 and 20.

let b = Math.max(10 , 20);
console.log(b)

//Use the correct Math method to get the square root of 9.

let c = Math.sqrt(9);
console.log(c)

//9 end == Math Related Problems

