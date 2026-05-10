// ============================================================
// JavaScript Keywords - Practical Examples for VS Code Users
// ============================================================
// How to practice these keywords in VS Code:
// 1. Open this file in VS Code
// 2. Use F5 to run with Node.js debugger, or
// 3. Use Ctrl + ` to open terminal and run: node filename.js
// 4. Use Ctrl + / to toggle comments on/off while experimenting
// 5. Use F12 to "Go to Definition" on any keyword


// ============================================================
// VS CODE TIP: Quick Console Logging
// Type 'log' and press Tab for console.log snippet
// Type 'clg' and press Tab (with extensions)
// ============================================================


// ============================================================
// 1. DECLARATION KEYWORDS (var, let, const, function, class)
// ============================================================

// VS CODE TIP: Hover over variables to see type info
// VS CODE TIP: Press F2 to rename all occurrences safely

// var - Old way (function scope)
// VS CODE WARNING: var is underlined to suggest using let/const instead
var oldStyleVariable = "I am old style";
var userAge = 30;

// let - Block scope variable (Recommended)
// VS CODE TIP: let will show as keyword in blue/purple color
let firstName = "Pramod";
let lastName = "Dutta";
let isActive = true;
let currentYear = 2024;

// const - Block scope constant (Recommended for fixed values)
// VS CODE TIP: const variables that are never reassigned show no warnings
const PI = 3.14159;
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";
const APP_NAME = "MyApp";

// VS CODE EXPERIMENT: Try changing const value to see error squiggly
// PI = 3.14; // VS Code will show red underline: "Cannot assign to 'PI'"

// function - Declare reusable code blocks
// VS CODE TIP: Type 'function' and press Tab for snippet
function greetUser(name) {
    // VS CODE TIP: Press Ctrl+Space inside () to see parameter hints
    return `Welcome, ${name}!`;
}

function calculateTotal(price, quantity, taxRate = 0.1) {
    // VS CODE TIP: Hover over 'taxRate' to see default value
    let subtotal = price * quantity;
    let tax = subtotal * taxRate;
    return subtotal + tax;
}

// VS CODE TEST: Hover over function names to see JSDoc info
// VS CODE TEST: Press Ctrl+Shift+Space inside () for parameter hints

// class - Object blueprint (ES6+)
// VS CODE TIP: Type 'class' and press Tab for class snippet
// VS CODE TIP: Use Ctrl+. (dot) for Quick Fix suggestions
class User {
    // VS CODE TIP: constructor keyword is highlighted specially
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.createdAt = new Date();
    }
    
    // Method
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    // Static method
    static createGuest() {
        return new User("Guest", "User", "guest@example.com");
    }
}

// VS CODE TIP: Type 'new' then class name, press Ctrl+Space for IntelliSense
let user1 = new User("John", "Doe", "john@example.com");
console.log(user1.getFullName());


// ============================================================
// 2. CONTROL FLOW KEYWORDS (if, else, switch, case, try, catch)
// ============================================================

// VS CODE TIP: Select code and press Shift+Alt+F to auto-format
// VS CODE TIP: Bracket matching: Click on { to see matching }

// if, else if, else - Make decisions
let examScore = 85;

if (examScore >= 90) {
    console.log("Grade: A (Excellent!)");
} else if (examScore >= 80) {
    console.log("Grade: B (Good job!)");
} else if (examScore >= 70) {
    console.log("Grade: C (Satisfactory)");
} else if (examScore >= 60) {
    console.log("Grade: D (Needs improvement)");
} else {
    console.log("Grade: F (Failed)");
}

// VS CODE TIP: Select code block, press Ctrl+/ to comment/uncomment entire block

// switch, case, default - Multiple conditions
// VS CODE TIP: Type 'switch' and press Tab for snippet
let dayOfWeek = new Date().getDay();
let dayName;

switch (dayOfWeek) {
    case 0:
        dayName = "Sunday";
        break;  // VS CODE TIP: 'break' keyword is highlighted
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
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(`Today is ${dayName}`);

// VS CODE WARNING: Missing 'break' will show as potential issue

// try, catch, finally, throw - Error handling
// VS CODE TIP: Type 'try' and press Tab for try-catch snippet
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both arguments must be numbers");
        }
        let result = a / b;
        return result;
    } catch (error) {
        // VS CODE TIP: Hover over 'error' to see Error type
        console.error("Error occurred:", error.message);
        return null;
    } finally {
        // VS CODE TIP: 'finally' keyword is highlighted
        console.log("Division operation attempted");
    }
}

// VS CODE TEST: Set breakpoint on line below and press F5 to debug
divideNumbers(10, 2);
divideNumbers(10, 0);
divideNumbers("10", 2);


// ============================================================
// 3. LOOP KEYWORDS (for, while, do, break, continue)
// ============================================================

// VS CODE TIP: Type 'for' and press Tab for for-loop snippet
// VS CODE TIP: Press F9 to toggle breakpoint on any line

// for loop - Count-controlled iteration
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    // VS CODE TIP: Hover over 'i' to see it's a number type
    console.log(`Iteration: ${i}`);
}

// while loop - Condition-controlled iteration
console.log("--- While Loop ---");
let counter = 5;
while (counter > 0) {
    console.log(`Countdown: ${counter}`);
    counter--;
}

// do...while loop - Execute at least once
console.log("--- Do-While Loop ---");
let doCounter = 1;
do {
    console.log(`Do-while count: ${doCounter}`);
    doCounter++;
} while (doCounter <= 3);

// break - Exit loop immediately
console.log("--- Break Example ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5!");
        break;  // VS CODE: 'break' is highlighted
    }
    console.log(i);
}

// continue - Skip to next iteration
console.log("--- Continue Example ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3!");
        continue;  // VS CODE: 'continue' is highlighted
    }
    console.log(i);
}

// for...in - Iterate over object keys
// VS CODE TIP: 'in' keyword is highlighted
let laptop = {
    brand: "Dell",
    model: "XPS 15",
    ram: "16GB",
    storage: "512GB SSD"
};

console.log("--- For...In Loop ---");
for (let key in laptop) {
    console.log(`${key}: ${laptop[key]}`);
}

// for...of - Iterate over iterable values
// VS CODE TIP: 'of' keyword is highlighted
let colors = ["Red", "Green", "Blue", "Yellow"];

console.log("--- For...Of Loop ---");
for (let color of colors) {
    console.log(`Color: ${color}`);
}


// ============================================================
// 4. RETURN AND YIELD KEYWORDS
// ============================================================

// return - Send value back from function
// VS CODE TIP: Hover over function name to see return type
function getDiscountedPrice(price, discountPercent) {
    if (price <= 0 || discountPercent < 0 || discountPercent > 100) {
        return "Invalid input";  // Early return
    }
    let discount = price * (discountPercent / 100);
    return price - discount;  // VS CODE: Hover to see return value
}

// VS CODE: Set breakpoint inside function, press F5, see return value in debugger
console.log("Discounted price:", getDiscountedPrice(100, 20));

// yield - Pause and resume generator
// VS CODE TIP: Type 'function*' for generator snippet
function* generateId() {
    let id = 1;
    while (true) {
        yield id++;  // VS CODE: 'yield' is highlighted in purple/blue
    }
}

// VS CODE: Use debugger to step through generator
let idGenerator = generateId();
console.log("ID 1:", idGenerator.next().value);
console.log("ID 2:", idGenerator.next().value);
console.log("ID 3:", idGenerator.next().value);


// ============================================================
// 5. THIS, SUPER, AND NEW KEYWORDS
// ============================================================

// this - Current object context
// VS CODE TIP: Hover over 'this' to see inferred type
let website = {
    name: "LearnPlaywright",
    url: "https://example.com",
    getInfo() {
        // VS CODE: 'this' is highlighted, hover to see object shape
        return `${this.name} - ${this.url}`;
    }
};
console.log(website.getInfo());

// new - Create instance
// VS CODE TIP: Type 'new' and press Ctrl+Space for class suggestions
let today = new Date();
let regex = new RegExp("[a-z]+", "gi");

// super - Access parent class
// VS CODE TIP: In class, type 'super.' for IntelliSense suggestions
class Admin extends User {
    constructor(firstName, lastName, email, role) {
        super(firstName, lastName, email);  // Call parent constructor
        this.role = role;
    }
    
    getAdminInfo() {
        // VS CODE: super.method() calls parent method
        return `${super.getFullName()} (Role: ${this.role})`;
    }
}

let admin1 = new Admin("Jane", "Smith", "jane@example.com", "Super Admin");
console.log(admin1.getAdminInfo());


// ============================================================
// 6. TYPE-RELATED KEYWORDS (typeof, instanceof, void, delete, in)
// ============================================================

// typeof - Check data type
// VS CODE: typeof results are known at edit time, shown in IntelliSense
console.log(typeof "Hello");           // "string"
console.log(typeof 42);                // "number"
console.log(typeof true);              // "boolean"
console.log(typeof {});                // "object"
console.log(typeof []);                // "object"
console.log(typeof function(){});      // "function"
console.log(typeof undefined);         // "undefined"
console.log(typeof null);              // "object" (known JS quirk)

// instanceof - Check object type
// VS CODE: Shows type narrowing in IntelliSense
let now = new Date();
console.log(now instanceof Date);      // true
console.log(now instanceof Object);    // true
console.log(now instanceof Array);     // false

// in - Check property existence
// VS CODE: Property names shown with IntelliSense
let car = { make: "Toyota", year: 2023 };
console.log("make" in car);      // true
console.log("model" in car);     // false

// delete - Remove property
// VS CODE: May show warning for delete operation
let tempObj = { a: 1, b: 2, c: 3 };
delete tempObj.b;  // VS CODE: 'delete' is highlighted
console.log(tempObj);  // { a: 1, c: 3 }

// void - Evaluate and return undefined
// VS CODE: Rarely used, shown for completeness
let voidResult = void(0);
console.log(voidResult);  // undefined


// ============================================================
// 7. LITERAL KEYWORDS (true, false, null, undefined)
// ============================================================

// VS CODE: These are color-coded as keywords in editor

// true / false - Boolean values
let isLoggedIn = true;
let hasPermission = false;

if (isLoggedIn && !hasPermission) {
    console.log("Logged in but no permission");
}

// null - Intentional empty value
let userChoice = null;  // User hasn't selected anything yet
console.log(userChoice);        // null
console.log(typeof userChoice); // "object"

// undefined - Variable declared but not assigned
let unassignedVar;  // VS CODE: May show hint that it's undefined
console.log(unassignedVar);  // undefined


// ============================================================
// 8. STRICT MODE AND DEBUGGING KEYWORDS
// ============================================================

// "use strict" - Enable strict mode
// VS CODE: Shows at top of file with special highlighting
"use strict";

// In strict mode:
// - Variables must be declared before use
// - Cannot delete variables
// - Cannot use octal syntax
// - Reserved words are strictly enforced

function strictExample() {
    "use strict";
    // VS CODE: Uncomment next line to see error squiggly
    // undeclaredVar = 10; // Error: undeclaredVar is not defined
    
    let localVar = 20;  // Must use let/const/var
    return localVar;
}

// debugger - Set breakpoint in code
function debugMe() {
    let a = 10;
    let b = 20;
    // VS CODE: Uncomment line below to auto-breakpoint when debugging
    // debugger;  // Execution pauses here in VS Code debugger (F5)
    let sum = a + b;
    return sum;
}

// VS CODE: Set breakpoint by clicking left gutter, press F5 to debug


// ============================================================
// 9. MODULE KEYWORDS (import, export, default, as, from)
// ============================================================
// VS CODE: These require module system. File must have .mjs extension
// or "type": "module" in package.json
// VS CODE: Auto-import suggestions with Ctrl+Space

/*
// Named exports
export const appVersion = "1.0.0";
export function helper() { return "I help"; }

// Default export
export default class MainApp { 
    start() { console.log("App started"); }
}

// Named import
import { appVersion, helper } from './myModule.js';

// Default import
import MainApp from './myModule.js';

// Import with alias
import { helper as helpFunction } from './myModule.js';

// Import everything
import * as Utils from './myModule.js';
*/


// ============================================================
// 10. ASYNC KEYWORDS (async, await)
// ============================================================
// VS CODE: These keywords are highlighted in special color
// VS CODE: Top-level await supported in modules

// async - Makes function return a Promise
// VS CODE: Hover over function name to see Promise return type
async function fetchUserData(userId) {
    // Simulate API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "User " + userId });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

// await - Wait for Promise to resolve
// VS CODE: 'await' keyword highlighted, shows type of resolved value
async function displayUser() {
    try {
        // VS CODE: Hover over userData to see resolved type
        let userData = await fetchUserData(1);
        console.log("User:", userData);
        
        // VS CODE: Can chain awaits
        let userData2 = await fetchUserData(2);
        console.log("User 2:", userData2);
    } catch (error) {
        // VS CODE: error typed as Error
        console.error("Fetch failed:", error.message);
    }
}

// VS CODE: Set breakpoint on await line, press F5 to debug async code
// displayUser();


// ============================================================
// 11. VS CODE KEYBOARD SHORTCUTS FOR JAVASCRIPT
// ============================================================
//
// While learning these keywords in VS Code, use these shortcuts:
//
// F5              - Start debugging (run with Node.js)
// F9              - Toggle breakpoint
// F10             - Step over
// F11             - Step into
// Shift+F11       - Step out
// Ctrl+`          - Open integrated terminal
// Ctrl+/          - Toggle line comment
// Ctrl+Shift+/    - Toggle block comment
// Ctrl+Space      - Trigger IntelliSense
// F12             - Go to definition
// Alt+F12         - Peek definition
// Ctrl+.          - Quick fix
// Shift+Alt+F     - Format document
// Ctrl+Shift+L    - Select all occurrences
// Ctrl+D          - Select next occurrence
// F2              - Rename symbol
// Ctrl+K Ctrl+S   - Open keyboard shortcuts


// ============================================================
// 12. COMPLETE KEYWORD SUMMARY TABLE
// ============================================================
/*
Category              | Keywords
----------------------|------------------------------------------
Declarations          | var, let, const, function, class
Control Flow          | if, else, switch, case, default
Exception Handling    | try, catch, finally, throw
Loops                 | for, while, do, break, continue, in, of
Return/Generators     | return, yield
Object/Class          | this, super, new, extends
Type Checking         | typeof, instanceof, void, delete, in
Literals              | true, false, null, undefined
Modules               | import, export, default, as, from
Async                 | async, await
Strict Mode           | "use strict", debugger
Reserved (Strict)     | implements, interface, package, private,
                      | protected, public, static, yield
Future Reserved       | enum
Deprecated            | with
*/


// ============================================================
// 13. VS CODE EXPERIMENT SECTION
// ============================================================
// Try these exercises in VS Code to practice keywords:
//
// EXERCISE 1: Uncomment the lines below to see VS Code errors
// let let = 5;         // Error: Cannot use 'let' as identifier
// let class = "test";  // Error: Cannot use 'class' as identifier
// let return = 1;      // Error: Cannot use 'return' as identifier
// let true = 5;        // Error: Cannot use 'true' as identifier
// let null = "test";   // Error: Cannot use 'null' as identifier
//
// EXERCISE 2: Try formatting with Shift+Alt+F
// EXERCISE 3: Set breakpoint on console.log and press F5
// EXERCISE 4: Hover over variables to see types
// EXERCISE 5: Press F2 to rename 'user1' to 'currentUser'


console.log("JavaScript Keywords for VS Code loaded successfully!");
console.log("Try running this file with: node 11_JavaScript_Keywords_VS_Code.js");
