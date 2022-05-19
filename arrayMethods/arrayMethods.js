// Tasks
// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

// function camelize(str){
//     let array = str.split('-')
//     // console.log(array)
//     let array2 = array.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     // console.log('test', array2)
//     str = array2.join('')
//     return str
// }
// console.log(camelize("hoping-for-the-best"))
// console.log(camelize('-oh-my-gosh-I-think-I-finally-got-this-to-work!'))

// tried this one with the .forEach and didn't find a way to make that work. suspect the returning of a new array of .map is necessary in this case. I end up reassigning the original string with the new array
// str.charAt(0).toUpperCase() + str.slice(1);
// function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }
 
// Open a sandbox with tests.

// solution


// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// PREP:
// Parameters:
// takes in three values- array of numbers, a- upper limit(including a) of values for new array, and b- lower limit(including b) of values for new array. 
// Results:
// leaves original array unmodified, and returns a new array with upper value = a (if available- otherwise highest one), and lowest value = b (if available)
// Examples:
// if the array given is 1 2 3 4 5 6 7 8, and a = 6 b = 3, the new array would be 3 4 5 6.
// Pseudocode:
// since we need a new array, I'll start with the .map method. set up a conditional that tests each element for if it is within the limits given. I'll try an arrow function using a ternay- if element[i] <= a && element[i] >= b, add it to the new array. perhaps a regular for loop would be better. I'm not sure that it is possible to do an && in the ternary. 
// another methos to consider is the .filter

// function filterRange(arr, a, b){
//     let filteredArr = arr.filter((element) => element >= a && element <= b )
//     // console.log('test', filteredArr)
//     return filteredArr
// }

// filterRange([1,2,3,4,5,6,7,8], 2, 7)

// function filteredRange(arr,a,b){
//     let newArray = []
//     arr.forEach((element) =>{
//         if(element >= a && element <= b){
//             newArray.push(element)
//         }
//     })
//     return newArray
// }

// console.log(filteredRange([1,2,3,4,5,6,7,8], 2, 7))
// // Open a sandbox with tests.

// solution
// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// function filterRangeInPlace(arr, a,b){
//     for(let i = 0; i < arr.length; i++){
//     console.log(arr, arr[i],"firstTest")
//         let value = arr[i]
//         if(value < a || value > b){
//             console.log("curious",arr, arr[i])
//             arr.splice(i,1,)
//             i--
//         }
//     }              
//     console.log(arr,"endresult")
// }

// filterRangeInPlace([3,4,5,6,7,8,9],5,7)


// alert( arr ); // [3, 1]
// Open a sandbox with tests.

// solution


// Sort in decreasing order
// importance: 4
// let arr = [5, 2, 1, -10, 8];

// function sortDecreasing(arr){
   
//     arr.sort((a,b) => b - a)
//     alert(arr)
// }
// sortDecreasing([6, -8, 3, 15, -90])


// let arr = [5, 2, -15, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );
// // -9,2,5,8
// ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10
// solution
// Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// function copySorted(arr){
  
//     let mapArray = arr.map(e=>e).sort()
//     let sorted = arr.slice()
//     // console.log("first", mapArray)
//     sorted = sorted.sort()
//     // console.log("second", mapArray)
//     alert(sorted)
//     alert(arr)
//     alert(mapArray)
//     // console.log(sorted)

// }
// copySorted(["HTML", "JavaScript", "CSS"])


// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
// solution



// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.


// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.
// Open a sandbox with tests.

// solution
// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary
// solution
// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// solution
// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete
// solution
// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// solution
// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// solution
// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O
// Open a sandbox with tests.

// solution
// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

// Open a sandbox with tests.

// solution