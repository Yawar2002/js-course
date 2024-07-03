// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
// solution
   



 // can declare two variables at once

// let name = "John";

//  admin= 'name';

// console.log( admin ); // "John"

function makeWorker() {
    let names = "Pete";
  
    return function() {
      alert(names);
    };
  }
  
  let names = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show?

