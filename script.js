
console.log("========== PART 1: FUNCTIONS AND PARAMETERS ==========");

// 1. Welcome function
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

// 2. Student details
function studentDetails(name, age, cgpa) {
    console.log("Name:", name, "Age:", age, "CGPA:", cgpa);
}
studentDetails("Arun", 20, 8.5);
studentDetails("Kumar", 21, 9.1);

// 3. Return student fee
function calculateFee(fee) {
    return fee;
}
let studentFee = calculateFee(50000);
console.log("Student Fee:", studentFee);

// 4. Calculate discount on ₹200,000
function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;
    console.log("Discount:", discountAmount);
    console.log("Final Fee:", finalFee);
}
discount(10);

// 5. Default parameter
function studentForm(name, age, disability = "no") {
    console.log(name, age, disability);
}
studentForm("Arun", 20, "yes");
studentForm("Kumar", 21, "no");
studentForm("Priya", 19);


console.log("\n========== PART 2: FUNCTION TYPES AND SCOPE ==========");

// 6. Named function
function displayMessage(message) {
    console.log(message);
}
displayMessage("Hello JavaScript");

// 7. Anonymous function
const printName = function(name) {
    console.log(name);
};
printName("Saravanan");

// 8. Arrow function
const printNumber = (number) => {
    console.log(number);
};
printNumber(100);

// 9. var, let and const scope
function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block, var:", a);
    // b and c cannot be accessed outside the if block.
}
checkScope();

// 10. Hoisting
console.log("Hoisting output:");
console.log(value);
var value = 10;


console.log("\n========== PART 3: CALLBACKS AND HIGHER-ORDER FUNCTIONS ==========");

// 11. Callback
function second() {
    console.log("Second function executed");
}
function first(callback) {
    console.log("First function executed");
    callback();
}
first(second);

// 12. Add and call callback
function add(callback, a, b) {
    console.log("Sum:", a + b);
    callback(a, b);
}
function showNumbers(a, b) {
    console.log("Numbers:", a, b);
}
add(showNumbers, 10, 5);

// 13. Subtraction callback
const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};
function addForSub(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}
addForSub(sub, 20, 8);

// 14. Multiplication callback
function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}
function multiplicationMessage() {
    console.log("Multiplication completed");
}
multiply(multiplicationMessage, 5, 4);

// 15. Division callback
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    console.log("Division:", num1 / num2);
}
function calculate(callback, a, b) {
    callback(a, b);
}
calculate(divide, 20, 4);

// 16. Higher-order function
function processStudent(callback) {
    callback("Saravanan");
}
function displayStudent(name) {
    console.log("Student Name:", name);
}
processStudent(displayStudent);


console.log("\n========== PART 4: GENERATOR FUNCTIONS ==========");

// 17. Cashback generator
function* cashbackOffers() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
const offers = cashbackOffers();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// 18. Call next() three times
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}
const numberGenerator = numbers();
console.log(numberGenerator.next());
console.log(numberGenerator.next());
console.log(numberGenerator.next());

// 19. Five discount messages using for-of
function* discountOffersList() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "No discount";
}
for (const offer of discountOffersList()) {
    console.log(offer);
}

// 20. Three student names using for-of
function* studentNames() {
    yield "Arun";
    yield "Kumar";
    yield "Priya";
}
for (const name of studentNames()) {
    console.log(name);
}

// 21. Four yields and check done
function* fourValues() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
const generator = fourValues();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


console.log("\n========== PART 5: CURRYING AND UNCURRYING ==========");

// 22. Normal add function
function normalAdd(a, b, c) {
    console.log("Normal sum:", a + b + c);
}
normalAdd(5, 10, 15);

// 23. Curried add function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log("Curried sum:", curriedAdd(5)(10)(15));

// 24. Curried function using arrow syntax
const calculateSum = (a) => (b) => (c) => a + b + c;
console.log("Arrow curried sum:", calculateSum(5)(10)(15));

// 25. Product price, discount and quantity
function calculateTotal(price) {
    return function(discountPercent) {
        return function(quantity) {
            const discountedPrice =
                price - (price * discountPercent / 100);
            return discountedPrice * quantity;
        };
    };
}
console.log("Total Product Price:", calculateTotal(1000)(10)(3));

// 26. Compare normal and curried functions
function normalFunction(a, b, c) {
    return a + b + c;
}
function curriedFunction(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log("Normal:", normalFunction(5, 10, 15));
console.log("Curried:", curriedFunction(5)(10)(15));


console.log("\n========== PART 6: IIFE, RETURN AND MIXED PRACTICE ==========");

// 27. IIFE sale message
(function(productName, discountPercent) {
    console.log(
        `${productName} is available at ${discountPercent}% discount!`
    );
})("Laptop", 15);

// 28. Return a number
function getNumber() {
    return 100;
}
const returnedNumber = getNumber();
console.log("Returned Number:", returnedNumber);

// 29. Return student marks
function getMarks(marks) {
    return marks;
}
const studentMarks = getMarks(85);
console.log("Student Marks:", studentMarks);

// 30. Student fee calculator with default parameter and callback
function calculateStudentFee(fee = 200000, callback) {
    const discountAmount = callback(fee);
    const finalFee = fee - discountAmount;
    return finalFee;
}
function calculateStudentDiscount(fee) {
    return fee * 10 / 100;
}
const finalFee = calculateStudentFee(
    undefined,
    calculateStudentDiscount
);
console.log("Final Student Fee:", finalFee);

console.log("\n========== ALL 30 QUESTIONS COMPLETED ==========");
