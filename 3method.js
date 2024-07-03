// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);

// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7 ;

console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");
let count; 
console.log(count); // Prints: undefined
count = 10;
console.log(count); // Prints: 10