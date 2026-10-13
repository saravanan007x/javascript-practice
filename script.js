// Part 1: Variables - var, let, const

var num1 = 10;
num1 = 20;
console.log("1.", num1);

var num2 = 30;
var num2 = 50;
console.log("2.", num2);

let num3 = 100;
num3 = 200;
console.log("3.", num3);

const age = 20;
console.log("4.", age);

// 5. Valid and invalid declarations
var a = 10;
var a = 20;

let b = 30;
b = 40;
// let b = 50; // Invalid in the same scope

const c = 60;
// c = 70; // Invalid

console.log("5. var:", a, "let:", b, "const:", c);

var name = "Saravanan";
let myAge = 20;
const city = "Madurai";

console.log("6.", name, myAge, city);


// Part 2: Printing Statements and Data Types

// 7. Run in a browser
// let userName = prompt("Enter your name");
// alert(userName);

// 8. Run in a browser
// let userAge = prompt("Enter your age");
// console.log(userAge);

// 9. Run in a browser
// let answer = confirm("Do you know JavaScript?");
// console.log(answer);

let studentName = "Saravanan";
let studentAge = 20;
let isStudent = true;
let result;

console.log("10.", studentName, typeof studentName);
console.log("10.", studentAge, typeof studentAge);
console.log("10.", isStudent, typeof isStudent);
console.log("10.", result, typeof result);

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log("11.", fruits);
console.log("11. First fruit:", fruits[0]);
console.log("11. Last fruit:", fruits[fruits.length - 1]);

let items = {
    fruits: ["Apple", "Mango", "Banana"],
    electronics: ["Laptop", "Mobile", "TV"],
    vegetable: "Carrot"
};

console.log("12. Fruits:", items.fruits);
console.log("12. Electronics:", items.electronics);
console.log("12. Vegetable:", items.vegetable);


// Part 3: Arithmetic Operators

let x = 15;
let y = 4;

console.log("13. Addition:", x + y);
console.log("13. Subtraction:", x - y);
console.log("13. Multiplication:", x * y);
console.log("13. Division:", x / y);

let remainder = 27 % 5;
console.log("14.", remainder);

let power = 3 ** 4;
console.log("15.", power);

let preInc = 10;
console.log("16.", ++preInc);

let preDec = 10;
console.log("17.", --preDec);

let postX = 5;
let postY = postX++;

console.log("18. x:", postX);
console.log("18. y:", postY);


// Part 4: Pre/Post Increment and Decrement

let q19 = 4;
console.log("19.", q19++);
console.log("19.", q19);

let q20 = 4;
console.log("20.", ++q20);
console.log("20.", q20);

let q21 = 8;
let b21 = q21++;
console.log("21. a:", q21);
console.log("21. b:", b21);

let q22 = 8;
let b22 = ++q22;
console.log("22. a:", q22);
console.log("22. b:", b22);

let q23 = 6;
let b23 = q23--;
console.log("23. a:", q23);
console.log("23. b:", b23);

let q24 = 6;
let b24 = --q24;
console.log("24. a:", q24);
console.log("24. b:", b24);

let q25 = 2;
q25++;
q25++;
console.log("25.", q25);

let q26 = 10;
--q26;
--q26;
console.log("26.", q26);

let q27 = 3;
q27 = q27++;
console.log("27.", q27);

let q28 = 4;
let d28 = q28++;
console.log("28. c:", q28);
console.log("28. d:", d28);

let e29 = 5;
let f29 = --e29;
console.log("29. e:", e29);
console.log("29. f:", f29);

let a30 = 5;
let b30 = a30++;
let c30 = ++a30;

console.log("30. a:", a30);
console.log("30. b:", b30);
console.log("30. c:", c30);