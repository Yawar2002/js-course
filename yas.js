let myAge = 20;
// This is my age
let earlyYears = 2;
// This is early years
earlyYears *= 10.5;
console.log(earlyYears); // Output: 21

let laterYears = myAge - 2;
// This is later years
laterYears *= 4;
console.log(laterYears); // Output: 72

// Calculate my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears); // Output: 93

// Convert my name to lowercase
let myName = 'YAWAR'.toLowerCase();
console.log(myName); // Output: yawar

// Print a message using template literals
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

// Additional calculation with variable x
let x = myAge;
x *= 10;
console.log(x); // Output: 200
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
let sales= true;
sales=true
if(true){
  console.log('Time to buy!')
}
let sale= false;
sale=false;
if(false){
  console.log('Time to buy!')
}

let price = 10.5;
let day = "Monday";

day === "Monday" ? price -= 1.5 : price += 1.5;
console.log('day');

let saless = false;

saless = false;

if(saless) {
  console.log('Time to wait for a sale.');
}
else{
  console.log('Time to wait for a sale.');
}
                    let hungerLevel=7;
                        hungerLevel=7;
                    if(hungerLevel>7){
                        console.log('Time to eat!');
                    } else{
                         console.log('We can eat later!');
                    }

                    let mood = 'sleepy';
                    let tirednessLevel = 6;
                    if(mood==='sleepy' && tirednessLevel>8){
                      console.log('time to sleep');
                    }
                    else{
                      console.log('not bed time yet');
                    }
                    let wordCount = 5;

                    if (wordCount) {
                      console.log("Great! You've started your work!");
                    } else {
                      console.log('Better get to work!');
                    }
                    
                    
                    let favoritePhrase = '';
                    
                    if (favoritePhrase) {
                      console.log("This string doesn't seem to be empty.");
                    } else {
                      console.log('This string is definitely empty.');
                    }                                
                 
       let tool = '';

      tool = 'marker';
                    
       // Use short circuit evaluation to assign writingUtensil variable below:
      let writingUtensil = tool || 'pen';
                    
          console.log(`The ${writingUtensil} is mightier than the sword.`);