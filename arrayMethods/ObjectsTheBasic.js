// Tasks
// Hello, object
// importance: 5
// Write the code, one line for each action:

// // Create an empty object user.
// let user = {}
// // Add the property name with the value John.
//     user.name = "John";
//     // Add the property surname with the value Smith.
//     user.surname = "Smith"

// // Change the value of the name to Pete.
// user.name = "Pete"

// // Remove the property name from the object.
// delete user.name
// solution
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// Comments- I thought I was supposed to create the properties inside the curly braces when I read the instructions. 

// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.




// function isEmpty(obj){
    
//     for(let key in obj){
//         return false
//     }
//     return true
// }

// // Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";


// alert( isEmpty(schedule) ); // false
// // Open a sandbox with tests.

// solution


// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

// let salaries = {
//     John: '100',
//     Ann: '160',
//     Pete: '130'
//   }
  
//   let sum = 0
  
//   for (let key in salaries){
//     sum+=Number(salaries[key])
//   }
//   console.log(sum)

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// for (let key in salaries){
//     let sumArr += salaries[key]
// }


// // If salaries is empty, then the result must be 0.
// for(let i = 0; i < sumArr.length; i++){
//     let sum = 0
//     sum += sumArr[i]
//     console.log("test", sum)
// }
// solution


// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.


// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             // obj[key] = obj[key] * 2
//             obj[key] *= 2
//         }
//     }
// }





// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// Open a sandbox with tests.

// solution


// Object-methods

// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//     read(){
//         this.a = Number(prompt('Give a value', 0))
//         this.b =  Number(prompt('give a second value', 0))
//     },
//     sum(){
//         return "sum equals  " + (this.a + this.b)
//     },
//     mul(){
//         return "product equals  " + (this.a * this.b)
//     }
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// this took a lot of playing around with the code to figure some stuff out.
// Run the demo

// Open a sandbox with tests.

// solution
// Chaining
// importance: 2
// There’s a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence, can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such approach is widely used across JavaScript libraries.

// Open a sandbox with tests.

// solution