
// Part 1: Variables and Data Types

// 1. var, let and const
var number = 10;
var number = 20;
number = 30;
console.log("1. var:", number);

let score = 40;
score = 50;
// let score = 60; // Redeclaration is not allowed in the same scope
console.log("1. let:", score);

const pi = 3.14;
// pi = 3.15; // Reassignment is not allowed
console.log("1. const:", pi);

// 2. Variables and data types
let name = "Saravanan";
let age = 20;
let programmingKnowledge = true;

console.log("2. Name:", name, typeof name);
console.log("2. Age:", age, typeof age);
console.log("2. Programming knowledge:", programmingKnowledge, typeof programmingKnowledge);

// 3. Array of fruits
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log("3. Fruits:", fruits);
console.log("3. First fruit:", fruits[0]);
console.log("3. Last fruit:", fruits[fruits.length - 1]);

// 4. Student object
let studentDetails = {
    name: "Saravanan",
    role: "Full Stack Developer",
    cgpa: 8.5
};

console.log("4. Name:", studentDetails.name);
console.log("4. Role:", studentDetails.role);
console.log("4. CGPA:", studentDetails.cgpa);

// 5. User input (browser only)
// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");
// alert("Your name is " + userName);
// console.log("Age:", userAge);


// Part 2: Operators

// 6. Arithmetic operators  
let a = 15;
let b = 4;

console.log("6. Addition:", a + b);
console.log("6. Subtraction:", a - b);
console.log("6. Multiplication:", a * b);
console.log("6. Division:", a / b);
console.log("6. Modulus:", a % b);
console.log("6. Exponentiation:", a ** b);

// 7. Post-increment and pre-increment
let q7 = 5;
console.log("7.", q7++);
console.log("7.", q7);
console.log("7.", ++q7);

// 8. Post-decrement and pre-decrement
let q8 = 10;
let b8 = q8--;
let c8 = --q8;

console.log("8. a:", q8);
console.log("8. b:", b8);
console.log("8. c:", c8);

// 9. Assignment operators
let value = 20;

value += 5;
console.log("9. After +=:", value);

value -= 3;
console.log("9. After -=:", value);

value *= 2;
console.log("9. After *=:", value);

value /= 4;
console.log("9. After /=:", value);

value %= 3;
console.log("9. After %=:", value);

// 10. Comparison operators
console.log("10.", 5 == "5");
console.log("10.", 5 === "5");
console.log("10.", 10 != "10");
console.log("10.", 10 !== "10");

// 11. Logical operators
let hasID = true;
let isAdult = true;
let isStudent = false;

console.log("11. AND:", hasID && isAdult);
console.log("11. OR:", isAdult || isStudent);
console.log("11. NOT:", !hasID);

// 12. Ternary operator
let userAge = 20;
let ageMessage = userAge >= 18 ? "You are eligible" : "You are not eligible";

console.log("12.", ageMessage);


// Part 3: Type Casting and Conditions

// 13. Data types of expressions
console.log("13.", typeof ("hello" + 10));
console.log("13.", typeof (10 + true));
console.log("13.", typeof (10 + null));
console.log("13.", typeof ("hello" + undefined));

// 14. Convert input into a number (browser only)
// let inputNumber = Number(prompt("Enter a number"));
// console.log("14. Result:", inputNumber + 10);

// 15. Boolean conversion
console.log("15. Empty string:", Boolean(""));
console.log("15. Non-empty string:", Boolean("Hello"));
console.log("15. Zero:", Boolean(0));
console.log("15. True:", Boolean(true));

// 16. Positive or not
let checkNumber = 12;

if (checkNumber > 0) {
    console.log("16. Positive number");
} else {
    console.log("16. Zero or negative number");
}

// 17. Time-based messages (24-hour format)
let time = 14;

if (time >= 4 && time < 6) {
    console.log("17. Early morning");
} else if (time >= 6 && time < 12) {
    console.log("17. Morning");
} else if (time >= 12 && time < 16) {
    console.log("17. Afternoon");
} else if (time >= 16 && time < 20) {
    console.log("17. Evening");
} else if ((time >= 20 && time <= 23) || (time >= 0 && time < 4)) {
    console.log("17. Night");
} else {
    console.log("17. Invalid time");
}

// 18. Nested if for eligibility
let candidateAge = 20;
let height = 175;
let weight = 65;

if (candidateAge >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("18. Eligible");
        } else {
            console.log("18. Weight requirement not met");
        }
    } else {
        console.log("18. Height requirement not met");
    }
} else {
    console.log("18. Age requirement not met");
}


// Part 4: Switch and Loops

// 19. Traffic light
let color = "green";

switch (color.toLowerCase()) {
    case "red":
        console.log("19. Stop");
        break;
    case "yellow":
        console.log("19. Get ready");
        break;
    case "green":
        console.log("19. Go");
        break;
    default:
        console.log("19. Invalid traffic light color");
}

// 20. Print numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log("20.", i);
}

// 21. Even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log("21.", i);
}

// 22. While loop from 10 to 1
let count = 10;

while (count >= 1) {
    console.log("22.", count);
    count--;
}

// 23. Do-while loop from 1 to 10
let j = 1;

do {
    console.log("23.", j);
    j++;
} while (j <= 10);

// 24. Print each character
for (let char of "JavaScript") {
    console.log("24.", char);
}

// 25. Print student names
let students = ["Priya", "Arun", "Kumar", "Divya", "Ravi"];

for (let studentName of students) {
    console.log("25.", studentName);
}

// 26. Print object keys and values
let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log("26.", key + ":", student[key]);
}


// Part 5: Mixed Practice

// 27. Two numbers and arithmetic operations (browser only)
// let firstNumber = Number(prompt("Enter the first number"));
// let secondNumber = Number(prompt("Enter the second number"));
// console.log("27. Sum:", firstNumber + secondNumber);
// console.log("27. Difference:", firstNumber - secondNumber);
// console.log("27. Product:", firstNumber * secondNumber);
// console.log("27. Remainder:", firstNumber % secondNumber);

// 28. Print numbers greater than 10
let numbers = [5, 12, 8, 25, 15];

for (let num of numbers) {
    if (num > 10) {
        console.log("28.", num);
    }
}

// 29. Check age eligibility (browser only)
// let ageInput = Number(prompt("Enter your age"));
// if (ageInput >= 18) {
//     alert("You are eligible");
// } else {
//     alert("You are not eligible");
// }

// 30. Calculator menu (browser only)
// let operation = prompt("Choose: addition, subtraction, multiplication, division");
// let first = Number(prompt("Enter the first number"));
// let second = Number(prompt("Enter the second number"));
// let answer;
//
// switch (operation.toLowerCase()) {
//     case "addition":
//         answer = first + second;
//         break;
//     case "subtraction":
//         answer = first - second;
//         break;
//     case "multiplication":
//         answer = first * second;
//         break;
//     case "division":
//         answer = second !== 0 ? first / second : "Cannot divide by zero";
//         break;
//     default:
//         answer = "Invalid operation";
// }
//
// alert("Result: " + answer);
// console.log("30. Result:", answer);
