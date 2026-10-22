
console.log("========== PART 1: ARRAY MANIPULATION ==========");

// 1. push()
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.push("Pineapple", "Watermelon", "Papaya");
console.log("1.", fruits);

// 2. pop()
let numbers = [10, 20, 30, 40, 50, 60];
numbers.pop();
console.log("2.", numbers);

// 3. shift()
let names = ["Arun", "Bala", "Kumar", "Ravi", "Vijay"];
names.shift();
console.log("3.", names);

// 4. unshift()
let nums = [30, 40, 50, 60];
nums.unshift(10, 20);
console.log("4.", nums);

// 5. splice() - Remove 2 elements from index 1
let arr5 = [10, 20, 30, 40, 50];
arr5.splice(1, 2);
console.log("5.", arr5);

// 6. splice() - Replace 3 with 100
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1, 100);
console.log("6.", arr6);

// 7. fill()
let arr7 = [10, 20, 30, 40, 50];
arr7.fill("hello", 2, 4);
console.log("7.", arr7);


console.log("\n========== PART 2: ARRAY MERGE AND SEARCH ==========");

// 8. concat()
let a8 = [1, 2, 3];
let b8 = [4, 5, 6];
console.log("8.", a8.concat(b8));

// 9. slice()
let arr9 = [10, 20, 30, 40, 50, 60];
console.log("9.", arr9.slice(1, 5));

// 10. flat(Infinity)
let arr10 = [1, [2, 3], [4, [5, 6]]];
console.log("10.", arr10.flat(Infinity));

// 11. includes()
let arr11 = [10, 20, 30, 40, 50];
console.log("11.", arr11.includes(30));

// 12. indexOf()
let arr12 = [5, 10, 15, 20, 25];
console.log("12.", arr12.indexOf(20));

// 13. lastIndexOf()
let arr13 = [1, 2, 3, 2, 1, 2];
console.log("13.", arr13.lastIndexOf(2));

// 14. sort()
let arr14 = [40, 10, 50, 20, 30];
arr14.sort((a, b) => a - b);
console.log("14.", arr14);

// 15. reverse()
let arr15 = [10, 20, 30, 40, 50, 60, 70];
arr15.reverse();
console.log("15.", arr15);


console.log("\n========== PART 3: SPREAD AND REST OPERATORS ==========");

// 16. Merge two arrays using spread
let a16 = [1, 2, 3, 4];
let b16 = [5, 6, 7, 8];
let merged16 = [...a16, ...b16];
console.log("16.", merged16);

// 17. Merge two objects using spread
let student17 = {
    name: "Saravanan",
    age: 20
};

let job17 = {
    role: "Developer",
    company: "Stackly"
};

let details17 = { ...student17, ...job17 };
console.log("17.", details17);

// 18. Rest operator
function details18(a, b, ...remaining) {
    console.log("18. First:", a);
    console.log("18. Second:", b);
    console.log("18. Remaining:", remaining);
}

details18(10, 20, 30, 40, 50);

// 19. function one(a, b, ...c)
function one(a, b, ...c) {
    console.log("19. Sum:", a + b + c[0] + c[1]);
}

one(10, 20, 30, 40);

// 20. Copy an array using spread
let original20 = [10, 20, 30, 40, 50];
let copied20 = [...original20];
console.log("20. Original:", original20);
console.log("20. Copy:", copied20);


console.log("\n========== PART 4: ARRAY DESTRUCTURING ==========");

// 21. Array destructuring
let arr21 = [10, 20, 30, 40];
let [a21, b21, c21, d21] = arr21;
console.log("21.", a21, b21, c21, d21);

// 22. Nested array destructuring
let nested22 = [1, 2, [3, 4, [5, 6]]];
let [a22, b22, [c22, d22, [e22, f22]]] = nested22;
console.log("22.", a22, b22, c22, d22, e22, f22);

// 23. Student details using destructuring
let student23 = ["Saravanan", 20, 8.5];
let [name23, age23, cgpa23] = student23;
console.log("23. Name:", name23);
console.log("23. Age:", age23);
console.log("23. CGPA:", cgpa23);


console.log("\n========== PART 5: OBJECT DESTRUCTURING ==========");

// 24. Object destructuring
let person24 = {
    name: "Saravanan",
    role: "Developer",
    location: "Madurai"
};

let {
    name: name24,
    role: role24,
    location: location24
} = person24;

console.log("24. Name:", name24);
console.log("24. Role:", role24);
console.log("24. Location:", location24);

// 25. Nested object destructuring
let student25 = {
    name: "Arun",
    address: {
        city: "Madurai",
        state: "Tamil Nadu"
    }
};

let {
    address: { city, state }
} = student25;

console.log("25. City:", city);
console.log("25. State:", state);

// 26. Nested location destructuring
let person26 = {
    name: "Saravanan",
    role: "Developer",
    location: {
        mainLocation: "Chennai",
        currentLocation: "Madurai"
    }
};

let {
    name: name26,
    role: role26,
    location: { mainLocation, currentLocation }
} = person26;

console.log("26. Name:", name26);
console.log("26. Role:", role26);
console.log("26. Main Location:", mainLocation);
console.log("26. Current Location:", currentLocation);


console.log("\n========== PART 6: MIXED PRACTICAL CHALLENGES ==========");

// 27. Remove first and last, add two at beginning
let arr27 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr27.shift();
arr27.pop();
arr27.unshift(100, 200);
console.log("27.", arr27);

// 28. includes(), indexOf(), lastIndexOf()
let arr28 = [10, 20, 30, 20, 40, 20, 50];
let target28 = 20;

console.log("28. Exists:", arr28.includes(target28));
console.log("28. First Index:", arr28.indexOf(target28));
console.log("28. Last Index:", arr28.lastIndexOf(target28));
console.log(
    "28. Occurrences:",
    arr28.filter(num => num === target28).length
);

// 29. Merge employee objects and destructure
let employee1 = {
    name: "Saravanan",
    age: 20
};

let employee2 = {
    role: "Java Developer",
    company: "Stackly"
};

let employee = { ...employee1, ...employee2 };
let { name, role } = employee;

console.log("29. Name:", name);
console.log("29. Role:", role);
console.log("29. Full Details:", employee);

// 30. Flatten and reverse a nested array
let arr30 = [1, [2, 3], [4, [5, 6]], 7];
let result30 = arr30.flat(Infinity).reverse();
console.log("30.", result30);


console.log("\n========== ALL 30 QUESTIONS COMPLETED ==========");
