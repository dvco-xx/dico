//Arrays
//--------------------------------------------------------------------------------------------------------------------------------------
/* let selectedColors = ["red", "blue"];
selectedColors[2] = false;
console.log(selectedColors); */

//--------------------------------------------------------------------------------------------------------------------------------------
//FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------
//Example of function that performs a task
// function greet(name, lastName) {
//   console.log("Welcome back, " + name + " " + lastName);
// }
//Example of function that performs a calculation.
// function square(num) {
//   return num * num;
// }
// console.log(square(5));
//greet("David", "Osuchukwu");

//--------------------------------------------------------------------------------------------------------------------------------------
//OPERATORS
//--------------------------------------------------------------------------------------------------------------------------------------
// ARITHMETIC OPERATORS
// let x = 10;
// let y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);    //exponent or square
// console.log(++x, x++);  //increment first then display vs display first then increment
// console.log(x);
// console.log(--x, x--);
// console.log(x);

//COMPARISON OPERATORS
// let x = 1;

//RELATIONAL OPERATORS
// console.log(x > 1);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// STRICT EQUALITY OPERATOR
// console.log(1 === 1); //true
// console.log("1" === 1); //false

// LOOSE EQUALITY OPERATOR
// console.log(1 == 1); //Does not care that the data-types of variables/objects being compared don't match.
// console.log("1" == 1); //If the types don't match, it will implicitly convert the value on the right to match the one on the left.
// console.log(true == 1);

// TERNARY OPERATOR
//If a customer has 100 points they are gold customer otherwise they are 'silver' customer.
// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type); //gold

//THE LOGICAL OPERATORS - &&, ||, !
//Logical AND (&&) - returns 'true' only when both sides ar true
//Logical OR (||) - returns 'true' if at least one side is true
//Logical NOT (!) - returns reverse

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan); //true

//Logical OR (||)
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log("Eligible: ", eligibleForLoan); //false

// Logical NOT (!)
// let applicationRefused = !eligibleForLoan;
// console.log("Application Refused?", applicationRefused); //true

// LOGICAL OPERATORS WITH NON-BOOLEAN VALUES
// Falsey values are *NOT same with the boolean 'false'
// Include the following: undefined, null, 0, "", (boolean) false, NaN

// //Truthy - values that aren't falsey e.g strings, (boolean) true

// let userColor = "red";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

//--------------------------------------------------------------------------------------------------------------------------------------
// Exercise SWAP VALUES
//--------------------------------------------------------------------------------------------------------------------------------------
//swap a and b using c (as temp)
// let a = "red";
// let b = "blue";
// let c = a;
// a = b;
// b = c;

// console.log("a = ", a + " " + "b = ", b);

//--------------------------------------------------------------------------------------------------------------------------------------
// Exercise -- "Greetings"
//--------------------------------------------------------------------------------------------------------------------------------------
// let timeInHour = 21;

// if (timeInHour >= 6 && timeInHour < 12) console.log("Good morning!");
// else if (timeInHour >= 12 && timeInHour < 18) console.log("Good afternoon!");
// else console.log("Good Evening!");

//--------------------------------------------------------------------------------------------------------------------------------------
// USING SWITCH CASE
//--------------------------------------------------------------------------------------------------------------------------------------
// let role = "guest";

// switch (role) {
//   case "guest":
//     console.log("Guest user!");
//     break;

//   case "moderator":
//     console.log("Moderator user!");
//     break;
//   default:
//     console.log("Unknown user!");
//}

//--------------------------------------------------------------------------------------------------------------------------------------
// LOOPS ➿
//--------------------------------------------------------------------------------------------------------------------------------------
//FOR LOOP
// for (let i = 0; i <= 5; i++) console.log("Hello, world!");

//WHILE LOOP
// let i = 0;
// while (i <= 5) {
//   console.log("Hello, world!");
//   i++;
// }

//DO WHILE LOOP
// do {
//   console.log("Hello, world!");
//   i++;
// } while (i <= 5);

//Using FOR IN display properties of an object
// const person = {
//   name: "David",
//   age: 24,
//   occupation: "JS/React Web Developer",
// };
// for (let key in person) console.log(key, person[key]);

//Using FOR IN LOOP to display elements of an array
// const colors = ["red", "yellow", "black"];
// for (let key in colors) console.log(colors.key);

//Using FOR OF LOOP to display contents of an array
// const fruits = ["apple", "banana", "orange"];
// for (let fruitType of fruits) console.log(fruitType);

//--------------------------------------------------------------------------------------------------------------------------------------
//10. Exercise 1 - Find the max out of 2 numbers using A function
//--------------------------------------------------------------------------------------------------------------------------------------
// Method 1
// let max_num = max(38, 60);
// console.log(max_num);
// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// Method 2 - shortest method !!!
// let max_num = max(38, 60);
// console.log(max_num);
// function max(x, y) {
//   return x > y ? x : y;
// }

//Method 3 - Most descriptive
// function max(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }
// let a = 12;
// let b = 12;
// let max_num = max(a, b);
// console.log("Which number is higher Mach? ");
// if (max_num > a) console.log("b is higher because b =", b);
// else if (max_num > b) console.log("a is higher because a =", a);
// else console.log("Neither a nor b");
// console.log("a is ", a + "\nb is ", b);

//---------------------------------------------------------------------------------------------------------------------------------------
//11. Exercise 2 - Landscape or Portrait?
//--------------------------------------------------------------------------------------------------------------------------------------
// let ans = isLandscape(600, 400);
// console.log(ans); //or simply console.log(isLandscape(600, 400));
// if (ans === true) console.log("It is a landscape painting!");
// else console.log("It is a portrait painting!");
// function isLandscape(width, height) {
//   // using ternary method)
//   return width > height;
//   //Normal method
//   // if (width > height) return true;
//   // else return false;
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise - FIZZBUZZ ALGORITHM
//--------------------------------------------------------------------------------------------------------------------------------------
//Instructions: If input % 3 === 0 display "Fizz"
//else if input % 5 === 0 display "Buzz"
//else if input % 3 === 0 && input % 5 === 0 display "FizzBuzz"
//else if input % 3 !== 0 && input % 5 !== 0 display input
//else display "NaN"
//--------------------------------------------------------------------------------------------------------------------------------------
//MY IMPLEMENTATION
// let output = fizzBuzz(30);
// console.log(output);
// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   else if (input % 3 === 0 && input % 5 !== 0) return "Fizz";
//   else if (input % 5 === 0 && input % 3 !== 0) return "Buzz";
//   else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   else return input;
// }

// 2ND METHOD (MOSH)
// const output = fizzBuzz(3);
// console.log(output);
// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 === 0 && input % 5 == 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   else return input;
//the condition (input % 3 === 0 && input % 5 == 0) is placed above the other conditions because if,
//for example, the user passes 15 as an argument, "Fizz" is printed instead of 'FizzBuzz' since the
//condition (input % 3 === 0) is satisfied i.e 15 is indeed divisible by 3 though this is the wring solution
//}

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise - Check speed
//--------------------------------------------------------------------------------------------------------------------------------------
//Instructions: Speed limit = 70. If (speed <= 70) print "ok"
//+=5 -> 1 point. math.floor(1.3)
//12 points = License suspended
//NOTE: Always store values within variables! Enables easier/more accurate computations
//--------------------------------------------------------------------------------------------------------------------------------------

// checkSpeed(100);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoints = 5;

//   if (speed < speedLimit + kmPerPoints) {
//     console.log("ok");
//     return; //exits function (i.e ignores else block)
//   }
//     const points = Math.floor((speed - speedLimit) / kmPerPoints);
//     if (points >= 12) console.log("License suspended!");
//     else console.log("Points: ", points);
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise - Function that display up to a certain Limit
//--------------------------------------------------------------------------------------------------------------------------------------
//Description: Function that accepts a number and displays from 0 - limit tagging each num as "EVEN or ODD"
//--------------------------------------------------------------------------------------------------------------------------------------
//num = showNumbers(10)
// showNumbers(5);
// function showNumbers(num) {
//   //const lim = num;
//   // for (num = 0; num <= lim; num++) {
//   //   if (num % 2 === 0) console.log(num, " :EVEN");
//   //   else console.log(num, " :ODD");
//   // }
//   //CLEANER ALTERNATIVE
//   for (let i = 0; i <= num; i++) {
//     let message = i % 2 === 0 ? "EVEN" : "ODD";
//     console.log(i, message);
//   }
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise - Function that counts truthy values
//--------------------------------------------------------------------------------------------------------------------------------------
// const array = ["", 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let key of array) {
//     if (key) count++;
//   }
//   return count;
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise - Display ONLY the string properties of an object
//--------------------------------------------------------------------------------------------------------------------------------------
//Instructions: Function should display only the string properties that exist within object movie
//--------------------------------------------------------------------------------------------------------------------------------------
// const movie = {
//   name: "Titanic",
//   releaseYear: 1991,
//   rating: 4.8,
//   genre: "Drama, Romance",
//   Director: "James Cameron",
//   Tag: "Romantic Drama",
// };
// showProperty(movie);

// function showProperty(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key + ": " + obj[key]);
//   }
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise - Print multiples up to given limit
//--------------------------------------------------------------------------------------------------------------------------------------
//E.g. 15 = 3, 5,
// console.log(sum(10)); //display outside function

// function sum(num) {
//   let total = 0;
//   for (let i = 0; i <= num; i++) if (i % 3 === 0 || i % 5 === 0) total += i;

//   return total;
//   // else continue;
//   // }
//   // console.log(total); //to display within function
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise calculate average of array values and display grade
//--------------------------------------------------------------------------------------------------------------------------------------
// const marks = [80, 90, 100];
// const average = calculateAverage(marks);
// console.log(calculateGrade(average));

// function calculateAverage(array) {
//   let avg = 0;
//   sum = 0;
//   for (let value of array) sum += value;
//   avg = sum / array.length;
//   return avg;
// }
// function calculateGrade(mark) {
//   if (mark < 60) return "F";
//   if (mark < 70) return "D";
//   if (mark < 80) return "C";
//   if (mark < 90) return "B";
//   return "A";
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Nested Loop that displays the following stars pattern
//*
//**
//***
//****
//*****
//--------------------------------------------------------------------------------------------------------------------------------------
// showStars(5);
// function showStars(num) {
//   for (let i = 1; i <= num; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) pattern += "*";
//     console.log(pattern);
//   }
// }

//--------------------------------------------------------------------------------------------------------------------------------------
// Display prime numbers up to a given number (limit)
//--------------------------------------------------------------------------------------------------------------------------------------
// showPrimes(19);
// function showPrimes(limit) {
//   for (let num = 2; num <= limit; num++) {
//     //loops from 1-20
//     let isPrime = true;
//     for (let factor = 2; factor < num; factor++) {
//       if (num % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(num);
//     }
//   }
// }

////--------------------------------------------------------------------------------------------------------------------------------------
// Object-oriented programming string literal declaration
//--------------------------------------------------------------------------------------------------------------------------------------
// const circle = {
//   radius: 5,
//   area: 28,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("Hello David.");
//   },
//   colors: (color = ["red", "green", "purple"]),
// };
// circle.draw(); //Method call

//--------------------------------------------------------------------------------------------------------------------------------------
//Factory function declaration
//--------------------------------------------------------------------------------------------------------------------------------------
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }
// const circle1 = createCircle(1);
// console.log(circle1.radius);
// const circle2 = createCircle(2);
// console.log(typeof circle2);
// circle1.draw();

//--------------------------------------------------------------------------------------------------------------------------------------
//Constructor functions - Note *Pascal Notation naming convention
//--------------------------------------------------------------------------------------------------------------------------------------
// function Circle(radius, num) {
//   this.radius = radius;
//   this.draw = function (num) {
//     console.log(num);
//   };
// }
// const circle3 = new Circle(5);
// console.log(circle.radius, circle3.draw(7));

//--------------------------------------------------------------------------------------------------------------------------------------
//Dynamic nature of objects (Inserting and deleting properties of objects)
//--------------------------------------------------------------------------------------------------------------------------------------
// const circle = {
//   radius: 5,
// };
// circle.color = "yellow"; //inserts color property with value "yellow"
// circle.draw = function () {  //creates (void) draw function that displays a message
//   console.log("Hey dipshit!");
// };
// delete circle.radius;   //deletes radius property
// console.log(circle);
//console.log(circle.draw); // outputs--> function () { ... }
//circle.draw(); //Outputs: "Hey dipshit!"

//--------------------------------------------------------------------------------------------------------------------------------------
//Exploring FUNCTIONS as OBJECTS. Exploring their methods (call, apply etc)
//--------------------------------------------------------------------------------------------------------------------------------------
// function Product(price, size) {
//   this.price = price;
//   this.size = size;
// }
// const shoe = new Product(5000, "S");
// console.log(shoe);
//Product.call({}, 5, 45);
//same as "new Product(...)". If 'new' keyword is omitted,
//"this" references a global object called window --> Product.call(window,1)
//Product.apply({}, [1, 2, 3]); //useful for passing an existing array into object

//--------------------------------------------------------------------------------------------------------------------------------------
// Exercise - Declare, initialize and display all properties of an object
//--------------------------------------------------------------------------------------------------------------------------------------
// const shoes = {
//   quantity: 40,
//   size: "S",
//   design: "bricklayer",
//   draw(num) {
//     console.log("draw");
//     return num;
//   },
// };
// for (let key in shoes) {
// console.log(key, shoes[key]);
// }

//Using a FOR OF loop to iterate through an object and display key/value pairs **Use the shoe object declared above
//--------------------------------------------------------------------------------------------------------------------------------------
// for (let key of Object.keys(shoes)) {
//   console.log(key, shoes[key]);
// }
// shoes.num = 7;
// console.log(shoes.num);
//Method 3. Using the Object constructor function to display key/value pairs as an array

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise 1 - Create address object using object literal definition
//--------------------------------------------------------------------------------------------------------------------------------------
// const address = {
//   street: "Benin",
//   city: "Lagos",
//   zipCode: 1234,
// };
// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
// }
// showAddress(address);

//--------------------------------------------------------------------------------------------------------------------------------------
//Create and initialize address object using factory function and constructor function
//--------------------------------------------------------------------------------------------------------------------------------------
//------------Factory function--------------
// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }
// const address = createAddress("37 Benin", "Aba", 1234);
// console.log(address);

//-----------Constructor function-------------
// function ShowAddress(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }
// const address1 = new ShowAddress("17 Good-luck", "Lagos", 1234);
// const address2 = new ShowAddress("17 Good-luck", "Lagos", 1234);
// const address3 = address1; //both these object's are referencing the same object in memory
// //console.log(address);

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// //checks if the properties of both variables are equal
// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }
// //check if both variables are pointing to the same memory address
// function areSame(address1, address2) {
//   return address1 === address2; //returns false, because address1 & address2 store similar values but in different memory locations
// }

//--------------------------------------------------------------------------------------------------------------------------------------
// Exercise Blog Post - Create a function that accepts only values of a post object that is yet to be published
//--------------------------------------------------------------------------------------------------------------------------------------
// const post = {
//   title: "Sailing the stormy seas.",
//   body: "etc",
//   author: "James Corden",
//   views: 17,
//   comments: [{ author: "Frank" }, { body: "whatever" }],
//   isLive: true,
// };

// let post = new DraftPost(
//   "Sailing the windy skies",
//   "David Osuchukwu",
//   "blahblahblah"
// );  //passing values by reference into DraftPost constructor function containing details of unpublished post

// console.log(post);

// function DraftPost(title, author, body) {
//   this.title = title;
//   this.author = author;
//   this.body = body;
//   this.views = 0;
//   this.comments = 0;
//   this.isLive = false;
// }

//--------------------------------------------------------------------------------------------------------------------------------------
// Exercise - Declare & initialize price range object belonging to food ordering website
//--------------------------------------------------------------------------------------------------------------------------------------
// const priceRanges = [
//   {
//     label: "$",
//     tooltip: "Cheap",
//     minPerPerson: 0,
//     maxPerPerson: 10,
//     onSale: true,
//   },
//   {
//     label: "$$",
//     tooltip: "Moderate",
//     minPerPerson: 11,
//     maxPerPerson: 20,
//     onSale: true,
//   },
//   {
//     label: "$$$",
//     tooltip: "Expensive",
//     minPerPerson: 21,
//     maxPerPerson: 50,
//     onSale: false,
//   },
//   {
//     label: "$$$",
//     tooltip: "Expensive",
//     minPerPerson: 21,
//     maxPerPerson: 50,
//     onSale: false,
//   },
// ];

// const restaurant = [{ averagePerPerson: 5 }];

//--------------------------------------------------------------------------------------------------------------------------------------
//ARRAY MANIPULATION - ADDING, REMOVING, EMPTYING AND CONCATENATING ARRAYS
//--------------------------------------------------------------------------------------------------------------------------------------
// let numbers = [3, 4]; //initialize array
//Add elements to END of an array
// numbers.push(5, 6);
//Add elements to BEGINNING of an array
// numbers.unshift(1, 2);
// let isEligible = true;
//Add elements to MIDDLE
// numbers.slice(2, 0, isEligible, "a", "b", 1);

// console.log(numbers);

//removes LAST element in array
// numbers.pop();
// console.log(numbers);
//removes FIRST element in array
// numbers.shift();
// console.log(numbers);
//removes from MIDDLE of array
// numbers.splice(1, 2); //accepts 2 arguments: starting index and stopping index
// console.log(numbers);

//-------Emptying an array-----------
// let another = numbers; //first re-assign/point address of new variable to old array locations then...
//Solution 1 - deletes array numbers permanently if no other references are made to it
// numbers = [];
//console.log(another); //display previously deleted numbers array
//Solution 2 (Recommended) ---
//numbers.length = 0; //Re-initialize array length to 0
//Solution 3 ---
//numbers.splice(0, numbers.length);  //Using .splice() method
//Solution 4 (Not recommended) ---
// while (numbers.length > 0){
//   numbers.pop();  //Using .pop() inside a loop
// }

// //---Finding elements in array (Primitives/value types) -------
// console.log(numbers.lastIndexOf(1)); //output = 4. Outputs -1 if value isn't present in array
// console.log(numbers.indexOf(1) !== -1); //checks if a given element (1) is present in array. If it evaluates to 'true', then value is present
// console.log(numbers.includes(1, 2)); //same as above but easier cleaner method.
/**All the above methods also take 2nd argument "fromIndex" that accepts a value that signifies the memory address where the search should begin*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Finding elements in array containing reference types (e.g objects, functions) can only be achieved through...)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];
// ...the use of a predicate or callback function that loops through each array location until it gets
// to the FIRST element/value that satisfies its condition
// *Note: courses.findIndex(function(courses){}); will return index of element

// const course = courses.find(function (course) {
//   return course.name === "a";
// });
// console.log(course); //If index is not found, -1 is returned

// Using newer ES6 'Arrow Function' alternative
// *pass empty brackets (e.g find(() if no other arguments exist
// const course = courses.find(course => course.name === "a");
// console.log(course);

//Combining (.concat()) and slicing (.slice()) an array
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const first = [1, 2, 3, { id: 5 }];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[3].id = 16;
// Method 1 of using the .slice() method
// const sliced = combined.slice(3, 6); //removes everything before starting index (3). Stops after given finishing index
// Method 2
// const sliced = combined.slice(3); //display from starting index till end of array
// Method 3
// const sliced = combined.slice(); //replicates array
// console.log(combined);
// console.log(sliced);
//* NOTE: When copying array of objects, only their references/address are copied.
// Any change made to object values/properties are affected in original array

// Copying/Duplicating an array using the "spread" operator - (recommended)
//--------------------------------------------------------------------------------------------------------------------------------------
//const combined2 = [...first, 'a', ...second, 'b'];

// ITERATING through an array using the .forEach() method
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const numbers = [1, 2, 3];
// numbers.forEach((number, index) => console.log(index, number));

// JOINING elements of an array using the .join() method
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Useful when creating a URL slug
// const joined = numbers.join(",");

// METHOD 2- Using the split( and .join() methods
// const message = "This is my message";
// const parts = message.split(" ");
// const joined2 = parts.join("-");
// console.log(joined2);

// SORTING ELEMENTS IN AN ARRAY
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Useful for when you have disordered array containing all sorts of data-types e.g strings and numbers
// const numbers = [1, 5, 2, 4, 3];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// Sorting an array of string objects
// Instructions, if:
// a < b return  -1
// a > b return 1
// a == b return 0

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "JavaScript" },
// ];

// courses.sort(function (a, b) {
//   //first convert strings to same case before sorting based on ascending ascii values.
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();

//   //compares each string value against their corresponding numeric value on ascii table
//   //and sort/returns true or false depending on given if condition
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses);

// TESTING ELEMENTS IN AN ARRAY using .every() and .some()
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Check if array contains all positive elements
// const numbers = [1, 2, 3, 4];

// const allPositives = numbers.every(function (value) {
//   return value >= 0;
// });
// console.log(allPositives);

// cleaner Arrow Function alternative - .some() is used here to check if there exists at least one element in the array that satisfies the given condition
// which in this case is the occurrence of at least one positive value
// const atLeastOnePositive = numbers.some((value) => value >= 0);
// console.log(atLeastOnePositive);

// FILTERING AN ARRAY (Based on search criteria)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Filter the following array to return only positive numeric values/elements
// const numbers = [1, -1, 2, 3];
// using predicate/callback function (outdated: do NOT recommend)
// const filtered = numbers.filter(function (value) {
//   return value > 0;
// });

// Using cleaner, shorter arrow function notation (recommended)
// const filtered = numbers.filter((n) => n >= 0);

// MAPPING AN ARRAY OF PRIMITIVE VALUES
// map filtered array elements to create html markup
// const items = filtered.map((n) => "<li>" + n + "</li>");
// const html = "<ul>" + items.join(" ") + "</ul>"; // overrides array default separator
// console.log(html);

// mapping results of previously filtered primitive array elements to object with property "value" (more useful with real world instances)
// const items = filtered.map((n) => ({ value: n }));
// console.log(html);

// exemplifying chaining with the aid of above example. Both .filter() and .map() methods return
// totally new arrays, making it possible to execute the continuous "chaining" of other methods
// const items = numbers
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);
// console.log(items);

// REDUCING AN ARRAY using .reduce() method that reduces all elements of an array into a single value (can be string, object etc)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----How the .reduce() works-----
// let accumulator = a and currentValue = c
// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
// a = 6, c = 4 => a = 10
// a = 10, c = 5 => a = 15
// *NOTE: If accumulator isn't initialized to 0 at start of reduce operation then the first array element will be assigned instead
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => (accumulator += currentValue)
// );
// console.log(sum);

// EXERCISE - Define a function that accepts 2 parameters (min, max) and displays all numbers within that range as an array
// const numbers = arrayFromRange(-1, 4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const a = [];
//   for (let i = min; i <= max; i++) a.push(i);
//   return a;
// }

// EXERCISE - Implement a function similar to the .includes() array method
// const numbers = [1, 2, 3, 4, 5];
// console.log(includes(numbers, 5));

// function includes(array, n) {
//   for (let i of array) if (n === i) return true;
//   return false;
// }

// EXERCISE - Implement a function that accepts an_array and elements of an_array,...
// ...and returns an_array excluding excluding elements of an_array
// const numbers = [1, 2, 3, 4, 5, 1, 1, 8];
// const output = except(numbers, [1, 5]);
// console.log(output);

// function except(array, exclude) {
//   const another = [];
//   for (let i of array) if (!exclude.includes(i)) another.push(i);
//   return another;
// }

//EXERCISE - Move element to a certain position within an array *difficult
// const numbers = [1, 2, 3, 4, 5];
// const output = move(numbers, 1, 4);

// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error("Invalid offset!");
//     return;
//   }

//   const another = [...array];
//   const element = another.splice(index, 1)[0];
//   another.splice(position, 0, element);
//   return another;
// }

// EXERCISE - Count occurrences using .reduce() method
// const numbers = [1, 2, 3, 4, 1];
// const output = countOccurrences(numbers, 1);

// console.log(output);

// function countOccurrences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurrences = searchElement === current ? 0 : 1;
//     return accumulator + occurrences;
//   }, 0);
// }

//EXERCISE - Get Max element from an array
// const numbers = [1, 2, 3, 4, 5];
// const output = getMax(numbers);
// console.log(output);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   return array.reduce((a, b) => (a > b ? a : b));

// Alternatively...(not recommended)
//   let max = array[0];
//   for (let i = 1; i <= array.length; i++) if (array[i] > max) max = array[i];
//   return max;
//}

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];
//get all movies in 2018 rating > 4
// sort by rating in descending order
//display title only
//output -> b, a

const filtered = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating) //return 1 if a > b, -1 if a< b and 0 if a === b
  .reverse()
  .map((m) => m.title);

console.log(filtered);
