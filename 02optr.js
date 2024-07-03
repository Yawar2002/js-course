// var num1 =5;
// var num2 =6;
// console.log(num1*num2);
// var answer=num1>num2;
// console.log(answer);

var sellingPrice =120;
var listingPrice =550;
var discountPrice =((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Dis is",discountPrice);
displaydisper=Math.round(discountPrice);
console.log("Dis is",displaydisper + "% OFF");

var result = listingPrice>sellingPrice ;
console.log(result);

// if (0 === 1); { alert("hi") }

// // equivalent to:

// if (0 === 1) /*do nothing*/ ;
// alert ("hi");
// console.log("alert");
////////////////////////////////////////////

console.log(3.5+21);
console.log(2024-1969);
console.log(65/240);
console.log(0.2708*100);
//================================================================
//================================================================
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

//typeof operator
//================================================================

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
let newVar = 1;
console.log(typeof newVar);
let newValue = true;
console.log(typeof newValue);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const kelvin=0;
// console.log(kelvin);
const celsius = kelvin - 273;
// console.log(celsius);
let fahrenheit = celsius *(9/5)+32;
// console.log(fahrenheit);
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton= celsius*(33/10);
  newton = Math.floor( newton);
  console.log(`The temperature is ${ newton} degrees  Newton.`);



