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


multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            // obj[key] = obj[key] * 2
            obj[key] *= 2
        }
    }
}






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
