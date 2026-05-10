// ============================================================
// JavaScript Keywords - Complete Reference with Examples
// ============================================================

// Keywords are reserved words that have special meaning in JavaScript.
// They cannot be used as variable names, function names, or identifiers.


// ============================================================
// 1. DECLARATION KEYWORDS
// ============================================================

// var - Declares a function-scoped or globally-scoped variable (old way)
var userName = "Pramod";
var age = 30;

// let - Declares a block-scoped variable (ES6+)
let firstName = "Amit";
let lastName = "Sharma";
let isActive = true;

// const - Declares a block-scoped constant (ES6+)
const PI = 3.14159;
const MAX_SIZE = 100;
const API_URL = "https://api.example.com";

// function - Declares a function
function greet(name) {
    return "Hello, " + name + "!";
}

function calculateSum(a, b) {
    return a + b;
}

// class - Declares a class (ES6+)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHello() {
        return `Hello, I am ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}


// ============================================================
// 2. CONTROL FLOW KEYWORDS
// ============================================================

// if, else if, else - Conditional statements
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or F");
}

// switch, case, default - Multi-way branch
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend";
}

// try, catch, finally, throw - Exception handling
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero!");
    }
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Cleanup code always runs");
}


// ============================================================
// 3. LOOP KEYWORDS
// ============================================================

// for - For loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// while - While loop
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}

// do...while - Do-while loop
let num = 0;
do {
    console.log("Do-while num:", num);
    num++;
} while (num < 3);

// break - Exit loop/switch
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit loop when i is 5
    }
    console.log("Break example:", i);
}

// continue - Skip to next iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip iteration when i is 2
    }
    console.log("Continue example:", i);
}

// for...in - Loop through object properties
let car = { brand: "Toyota", model: "Camry", year: 2023 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// for...of - Loop through iterable values
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log("Color:", color);
}


// ============================================================
// 4. RETURN AND YIELD KEYWORDS
// ============================================================

// return - Return value from function
function multiply(a, b) {
    return a * b;
}
let product = multiply(4, 5); // 20

// yield - Pause and resume generator function (ES6+)
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3


// ============================================================
// 5. THIS, SUPER, AND NEW KEYWORDS
// ============================================================

// this - Refers to current object context
let user = {
    name: "John",
    greet() {
        return "Hello, " + this.name;
    }
};
console.log(user.greet());

// new - Create new instance of object
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

// super - Call parent class constructor/methods
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age); // Call parent constructor
        this.salary = salary;
    }
}


// ============================================================
// 6. TYPE-RELATED KEYWORDS
// ============================================================

// typeof - Returns type of operand
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
console.log(typeof undefined);   // "undefined"

// instanceof - Check if object is instance of class
let today = new Date();
console.log(today instanceof Date);     // true
console.log(today instanceof Object);   // true
console.log(today instanceof Array);    // false

// void - Evaluate expression and return undefined
let result = void(0); // undefined

// in - Check if property exists in object
console.log("name" in person1);    // true
console.log("salary" in person1);  // false

// delete - Delete object property
let temp = { a: 1, b: 2 };
delete temp.a;
console.log(temp); // { b: 2 }


// ============================================================
// 7. LITERAL KEYWORDS
// ============================================================

// true - Boolean true
let isEnabled = true;
if (isEnabled) {
    console.log("Feature is enabled");
}

// false - Boolean false
let isDisabled = false;
if (!isDisabled) {
    console.log("Feature is not disabled");
}

// null - Intentional absence of value
let emptyValue = null;
console.log(emptyValue);        // null
console.log(typeof emptyValue); // "object"

// undefined - Variable declared but not assigned
let notAssigned;
console.log(notAssigned);       // undefined


// ============================================================
// 8. STRICT MODE AND DEBUGGING KEYWORDS
// ============================================================

// "use strict" - Enable strict mode
"use strict";
// In strict mode, certain silent errors are thrown
// Variables must be declared before use
// x = 10; // Error in strict mode

// debugger - Set a breakpoint for debugging
function debugExample() {
    let a = 5;
    let b = 10;
    // debugger; // Uncomment to pause execution here in dev tools
    let c = a + b;
    return c;
}


// ============================================================
// 9. MODULE KEYWORDS (ES6+)
// ============================================================

// import - Import bindings from another module
// import { myFunction } from './module.js';
// import myDefault from './module.js';
// import * as myModule from './module.js';

// export - Export bindings from a module
// export const myConst = 10;
// export function myFunc() { return 20; }
// export default class MyClass {}

// export { myConst, myFunc };


// ============================================================
// 10. ASYNC KEYWORDS (ES2017+)
// ============================================================

// async - Declares an async function
async function fetchData() {
    // Simulated async operation
    return new Promise(resolve => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
}

// await - Wait for Promise to resolve
async function displayData() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}


// ============================================================
// 11. STRICT MODE RESERVED WORDS
// ============================================================
// These are reserved in strict mode only:

// implements - Used in TypeScript, reserved in JS strict mode
// interface - Used in TypeScript, reserved in JS strict mode
// package - Reserved in strict mode
// private - Reserved in strict mode
// protected - Reserved in strict mode
// public - Reserved in strict mode
// static - Reserved in strict mode
// let - Already a keyword in all modes
// const - Already a keyword in all modes
// yield - Already a keyword in all modes


// ============================================================
// 12. FUTURE RESERVED WORDS (NOT USED CURRENTLY)
// ============================================================
// These may be used in future versions of JavaScript:

// enum - Reserved for future use
// await - Reserved in modules, used in async/await

// These were reserved in older specs but may be less strict now:
// abstract, boolean, byte, char, double, final, float, goto, int,
// long, native, short, synchronized, throws, transient, volatile


// ============================================================
// 13. CONTEXTUAL KEYWORDS
// ============================================================
// These can be used as identifiers in most contexts:

// as - Used in import statements
// import { x as y } from 'module';

// from - Used in import statements
// import { x } from 'module';

// of - Used in for...of loops
// for (let x of array) {}

// get - Used in getters
// set - Used in setters
// target - Used in Proxy
// async - Can be used as property name
// await - Reserved in modules only


// ============================================================
// 14. KEYWORD USAGE SUMMARY TABLE
// ============================================================
/*
Category                  | Keywords
--------------------------|------------------------------------------
Declarations              | var, let, const, function, class
Control Flow              | if, else, switch, case, default, try, catch, finally, throw
Loops                     | for, while, do, break, continue, in, of
Return/Generators         | return, yield
Object/Class Context      | this, super, new, extends, instanceof, typeof, void, delete
Literals                  | true, false, null, undefined
Modules                   | import, export, default, as, from
Async Programming         | async, await
Strict Mode Reserved      | implements, interface, package, private, protected, public, static
Debugging                 | debugger
Other                     | with (deprecated), in
*/


// ============================================================
// 15. EXAMPLES OF INVALID USAGE (WILL CAUSE ERRORS)
// ============================================================

// DO NOT UNCOMMENT THESE - THEY WILL CAUSE SYNTAX ERRORS:

// let let = 5;           // Cannot use 'let' as variable name
// let const = 10;        // Cannot use 'const' as variable name
// let function = "test"; // Cannot use 'function' as variable name
// let class = "Math";    // Cannot use 'class' as variable name
// let return = 1;        // Cannot use 'return' as variable name
// let if = true;         // Cannot use 'if' as variable name
// let true = 5;          // Cannot use 'true' as variable name
// let null = "nothing";  // Cannot use 'null' as variable name
// let this = "self";     // Cannot use 'this' as variable name

// NOTE: Some keywords CAN be used as property names in objects:
let obj = {
    class: "10th Grade",      // Valid property name
    function: "test",         // Valid property name
    let: "value",             // Valid property name
    const: 100,               // Valid property name
    return: true,             // Valid property name
    if: "condition",          // Valid property name
    true: false               // Valid property name (confusing but valid)
};

console.log(obj.class);   // "10th Grade"
console.log(obj.let);     // "value"
console.log(obj.return);  // true


// ============================================================
// 16. MODERN JAVASCRIPT KEYWORDS TIMELINE
// ============================================================
/*
ES3 (1999):     break, case, catch, continue, default, delete, do, else,
                finally, for, function, if, in, instanceof, new, return,
                switch, this, throw, try, typeof, var, void, while, with

ES5 (2009):     debugger, strict mode reserved: implements, interface,
                let, package, private, protected, public, static, yield

ES6/ES2015:     class, const, export, extends, import, super, yield (official),
                let (official), const (official)

ES2017:         async, await

ES2020:         BigInt (not keyword but type)

ES2022:         Private class fields (#field)
*/


// ============================================================
// 17. PRACTICAL EXAMPLES COMBINING KEYWORDS
// ============================================================

// Example 1: Class with async method
class DataService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async fetchUsers() {
        try {
            let response = await fetch(this.baseUrl + "/users");
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    }
}

// Example 2: Generator with yield
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

// Example 3: Module pattern simulation
const Calculator = (function() {
    let result = 0;
    
    return {
        add(value) {
            result += value;
            return this;
        },
        subtract(value) {
            result -= value;
            return this;
        },
        getResult() {
            return result;
        },
        reset() {
            result = 0;
            return this;
        }
    };
})();

// Example 4: Object with getters/setters
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    
    get width() {
        return this._width;
    }
    
    set width(value) {
        if (value > 0) {
            this._width = value;
        }
    }
    
    get area() {
        return this._width * this._height;
    }
}

console.log("All JavaScript Keywords examples loaded successfully!");
