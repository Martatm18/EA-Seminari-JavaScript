/// JavaScript 

// ------------------ Interpretation & Execution ------------------
// JavaScript is an interpreted language, executed line-by-line.
// It runs in various environments: browsers, Node.js, etc.
// If there is an error in one line, the following lines will not execute
console.log("Interpretation");
console.log("Line 1 executed"); 
console.log("Line 2 executed"); 
console.log();

// ---------------------- Dynamic Typing ----------------------
// Variables can hold any type and can change types.
console.log("Dynamic Typing Example:");
let variable = 42;
variable = "text";
console.log(typeof variable, variable);
console.log(); 

// ---------------------- Weakly Typed ----------------------
// JavaScript performs implicit type conversion.
console.log("Weakly Typed Example:");
console.log("5" + 3); //ens dona 53 perquè li troba el sentit a sumar algo a un string, ho fa per criteri propi, sol.
console.log("5" - 3); //ens dona 2 perquè no li troba el sentit a restar algo a un string, per tant ho tractarà com un número,ho fa sol.
console.log();

// ---------------------- JSON Compatibility ----------------------
// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// In JS, objects are flexible. No need for boilerplate classes (unlike Java/C#).

console.log("JSON Compatibility");

const student = {
    id: 101,
    name: "Alice Smith",
    skills: ["JavaScript", "Docker"],
    status: "Active"
};

// Accessing properties 
console.log(`Student Name: ${student.name}`);
console.log(`First Skill: ${student.skills[0]}`); 
console.log();

// ---------------------- Arrow Functions ----------------------
console.log("Arrow Functions Examples");

// Concise syntax for writing functions.
const add = (a, b) => a + b;
console.log(add(2, 3));
console.log();

// Difference in context (this) between regular function and arrow function
const student2 = {
  name: "Andrew",
  
// Regular functions define their own 'this' based on HOW they are called
  sayHelloRegular: function() {
    console.log("Hello, I am " + this.name);
  },
  
// Arrow functions do NOT have their own 'this'. 
// They inherit 'this' in this case, the global scope
  sayHelloArrow: () => {
    console.log("Hello, I am " + this.name);
  }
};

student2.sayHelloRegular(); // Output: "Hello, I am Andrew"
student2.sayHelloArrow();   // Output: "Hello, I am undefined" (Key point for explaining scope!)
console.log();

// ----------------------- Single-threaded -----------------------
// JavaScript runs in a single thread, executing one command at a time.
console.log("Single-threaded Example:");

// ---------------------- Asynchronous and Non-blocking ----------------------
// Asynchronous operations (like setTimeout, Promises) allow non-blocking behavior. 
console.log("Asynchronous operations");
console.log("Start");
setTimeout(() => {
  console.log("This executes after 0 ms"); //No veiem això al terminal perquè ha executat el setTimeout però no ha esperat a la resposta, per tant ha seguit amb la següent línia de codi.
}, 0);
console.log("End");
console.log();