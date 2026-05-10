// ============================================================
// JavaScript Identifier Rules
// ============================================================
// An identifier is a name given to variables, functions, classes, etc.
// JavaScript has strict rules for what makes a valid identifier.


// RULE 1: Identifiers must start with a letter, underscore (_), or dollar sign ($)
// ------------------------------------------------------------------------------
let name = "Valid";           // Starts with letter - VALID
let _private = "Valid";       // Starts with underscore - VALID
let $jquery = "Valid";        // Starts with dollar sign - VALID

// let 1name = "Invalid";     // Starts with number - INVALID (SyntaxError)
// let @name = "Invalid";     // Starts with @ - INVALID
// let #name = "Invalid";     // Starts with # - INVALID (used for private fields in classes only)


// RULE 2: After the first character, identifiers can contain letters, digits, underscores, or dollar signs
// --------------------------------------------------------------------------------------------------------
let name1 = "Valid";          // Letter followed by digit - VALID
let first_name = "Valid";     // Letters with underscore - VALID
let $value_2 = "Valid";       // Mixed allowed characters - VALID
let userName123 = "Valid";    // camelCase with digits - VALID

// let name@ = "Invalid";     // Contains @ - INVALID
// let my-name = "Invalid";   // Contains hyphen - INVALID (treated as subtraction)


// RULE 3: Identifiers are case-sensitive
// ---------------------------------------
let myVar = 1;
let MyVar = 2;
let myvar = 3;
// These are THREE different variables!
console.log(myVar);  // 1
console.log(MyVar);  // 2
console.log(myvar);  // 3


// RULE 4: Identifiers cannot be reserved keywords
// ------------------------------------------------
// These are INVALID as standalone variable names:
// let, const, var, function, class, return, if, else, for, while,
// switch, case, break, continue, default, true, false, null,
// typeof, instanceof, new, this, super, extends, import, export, etc.

// INVALID examples (will cause SyntaxError if uncommented):
// let let = 5;
// let const = 10;
// let function = "hello";
// let class = "math";
// let return = 1;

// NOTE: Some keywords can be used as property names (valid in objects):
let obj = {
    class: "10th Grade",      // VALID as property name
    function: "test",          // VALID as property name
    let: "value"               // VALID as property name
};


// RULE 5: Identifiers cannot contain spaces
// ------------------------------------------
// let first name = "Invalid";   // INVALID - contains space
// let first-name = "Invalid";   // INVALID - hyphen treated as minus operator


// RULE 6: Unicode letters are allowed (but not recommended for readability)
// -------------------------------------------------------------------------
let \u0041 = "Valid";           // Unicode escape sequence - VALID (A)
let \u006e\u0061\u006d\u0065 = "Valid";  // spells "name" in unicode - VALID
//let \u{1F600} = "Valid";        // Some unicode emojis work in modern JS - VALID

// NOTE: It's better to use ASCII characters for cross-team readability


// RULE 7: Reserved Words in Strict Mode
// ---------------------------------------
// In strict mode, additional restrictions apply:
// "use strict";
// let eval = 5;    // INVALID in strict mode
// let arguments = 5; // INVALID in strict mode
// let interface = 5; // INVALID in strict mode (future reserved)
// let implements = 5; // INVALID in strict mode
// let package = 5;   // INVALID in strict mode
// let private = 5;   // INVALID in strict mode
// let protected = 5; // INVALID in strict mode
// let public = 5;    // INVALID in strict mode
// let static = 5;    // INVALID in strict mode
// let yield = 5;     // INVALID in strict mode


// ============================================================
// COMPLETE LIST OF JAVASCRIPT RESERVED KEYWORDS
// ============================================================
// These CANNOT be used as identifiers:

// Current Keywords:
// break, case, catch, continue, debugger, default, delete, do, else,
// finally, for, function, if, in, instanceof, new, return, switch,
// this, throw, try, typeof, var, void, while, with

// ES5+ Strict Mode Reserved:
// implements, interface, let, package, private, protected, public,
// static, yield

// ES6+ Keywords:
// class, const, enum, export, extends, import, super

// Future Reserved Words (potentially):
// abstract, boolean, byte, char, double, final, float, goto, int,
// long, native, short, synchronized, throws, transient, volatile

// Literals (also reserved):
// true, false, null


// ============================================================
// BEST PRACTICES FOR IDENTIFIERS
// ============================================================

// 1. Use descriptive names
let x = 10;           // Bad - not descriptive
let userAge = 10;     // Good - descriptive

// 2. Use camelCase for variables and functions
let firstName = "John";
let lastName = "Doe";
function getUserName() {
    return firstName + " " + lastName;
}

// 3. Use PascalCase for class names
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

// 4. Use UPPER_SNAKE_CASE for constants
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";

// 5. Avoid single letter names (except in loops)
for (let i = 0; i < 5; i++) {   // 'i' is acceptable here
    console.log(i);
}

// 6. Boolean variables should sound like true/false
let isActive = true;
let hasPermission = false;
let canEdit = true;
let shouldSave = false;

// 7. Avoid using $ and _ at the start unless you have a specific convention
// $ is often used for jQuery or DOM elements
// _ is often used for private variables (convention only)


// ============================================================
// EXAMPLES OF VALID AND INVALID IDENTIFIERS
// ============================================================

// VALID Identifiers:
let myVariable = 1;
let _privateVar = 2;
let $element = 3;
let var123 = 4;
let MY_CONSTANT = 5;
let camelCaseName = 6;
let PascalCaseName = 7;
let snake_case_name = 8;
let \u0048ello = 9;    // Unicode escape for 'H'

// INVALID Identifiers (DO NOT UNCOMMENT - WILL CAUSE ERRORS):
// let 123abc = 1;           // Cannot start with number
// let my-var = 2;           // Hyphen not allowed (treated as subtraction)
// let my var = 3;           // Space not allowed
// let class = 4;            // Reserved keyword
// let return = 5;           // Reserved keyword
// let my@var = 6;           // Special characters not allowed
// let my#var = 7;           // # not allowed (except class private fields)
// let my.var = 8;           // Dot not allowed (treated as property access)


// ============================================================
// SUMMARY TABLE
// ============================================================
// | Rule                                      | Valid? |
// |-------------------------------------------|--------|
// | Must start with letter, _, or $           | Yes    |
// | Can contain letters, digits, _, $         | Yes    |
// | Case-sensitive                            | Yes    |
// | Cannot be reserved keyword                | Yes    |
// | Cannot contain spaces                     | Yes    |
// | Cannot start with digit                   | Yes    |
// | Cannot contain special chars (@, #, etc.) | Yes    |
// | Unicode allowed (but not recommended)     | Yes    |
// ============================================================

console.log("JavaScript Identifier Rules loaded successfully!");
