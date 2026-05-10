// ============================================================
// JavaScript Literals - Complete Guide with VS Code Examples
// ============================================================
// A literal is a notation for representing a fixed value in source code.
// VS Code provides syntax highlighting, IntelliSense, and error detection
// for all literal types.


// ============================================================
// VS CODE SETUP TIPS
// ============================================================
// 1. Open this file in VS Code
// 2. Press Ctrl+` (backtick) to open integrated terminal
// 3. Run: node 12_JavaScript_Literals_VS_Code.js
// 4. Use F5 for debugging with breakpoints
// 5. Hover over literals to see type information
// 6. Use Ctrl+Space for IntelliSense suggestions


// ============================================================
// 1. STRING LITERALS
// ============================================================
// VS Code: Strings are shown in green/orange depending on theme
// Single quotes
let firstName = 'Pramod';
let lastName = 'Dutta';

// Double quotes
let city = "Bangalore";
let country = "India";

// Template literals (Backticks) - ES6+
// VS Code: Syntax highlighting inside ${} expressions
let fullName = `${firstName} ${lastName}`;
let greeting = `Hello, ${fullName}!`;
let multiLine = `
    Name: ${fullName}
    City: ${city}
    Country: ${country}
`;

// Escaping characters
let quote = "He said, \"Hello!\"";
let apostrophe = 'It\'s a beautiful day';
let backslash = "Path: C:\\Users\\Documents";
let newline = "Line 1\nLine 2";
let tab = "Column 1\tColumn 2";

// VS Code Tip: Type 'str' and press Tab for string snippet
// VS Code Tip: Press Ctrl+Shift+L to select all string occurrences

console.log("String literal examples:");
console.log(greeting);
console.log(multiLine);


// ============================================================
// 2. NUMBER LITERALS
// ============================================================
// VS Code: Numbers are shown in blue/light blue

// Integer literals
let age = 30;
let year = 2024;
let negative = -10;

// Floating-point literals
let price = 99.99;
let pi = 3.14159;
let negativeFloat = -0.5;

// Scientific notation
let largeNumber = 1.5e10;    // 15000000000
let smallNumber = 1.5e-10;   // 0.00000000015

// Binary literals (ES6+)
let binary = 0b1010;         // 10 in decimal
let binaryLarge = 0b11110000; // 240 in decimal

// Octal literals (ES6+)
let octal = 0o17;            // 15 in decimal
let octalLarge = 0o377;      // 255 in decimal

// Hexadecimal literals
let hex = 0xFF;              // 255 in decimal
let hexColor = 0x1A2B3C;     // 1715004 in decimal

// BigInt literals (ES2020+)
// VS Code: 'n' suffix is highlighted
let bigNumber = 9007199254740991n;
let hugeNumber = 123456789012345678901234567890n;

// Special numeric values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

// VS Code Tip: Hover over numbers to see their decimal value
// VS Code Tip: Invalid numbers show red squiggly underline

console.log("\nNumber literal examples:");
console.log("Binary 0b1010:", binary);
console.log("Octal 0o17:", octal);
console.log("Hex 0xFF:", hex);
console.log("BigInt:", bigNumber);


// ============================================================
// 3. BOOLEAN LITERALS
// ============================================================
// VS Code: true/false shown in blue/purple (keyword color)

let isActive = true;
let isDeleted = false;
let hasPermission = true;
let isEmpty = false;

// Boolean expressions
let isAdult = age >= 18;           // true
let isExpensive = price > 100;     // false

// VS Code Tip: true/false are keywords, shown in special color
// VS Code Tip: Boolean expressions show type inference

console.log("\nBoolean literal examples:");
console.log("isActive:", isActive);
console.log("isAdult:", isAdult);


// ============================================================
// 4. NULL LITERAL
// ============================================================
// VS Code: null shown as keyword color

let emptyValue = null;
let noData = null;
let userChoice = null;  // User hasn't selected anything

// typeof null is "object" (known JavaScript quirk)
console.log("\nNull literal examples:");
console.log("null value:", emptyValue);
console.log("typeof null:", typeof null);  // "object"


// ============================================================
// 5. UNDEFINED LITERAL
// ============================================================
// VS Code: undefined shown as keyword color

let notAssigned;           // VS Code may hint: "Variable is undefined"
let explicitUndefined = undefined;

function noReturn() {
    // Function without return statement returns undefined
}

let result = noReturn();

console.log("\nUndefined literal examples:");
console.log("notAssigned:", notAssigned);
console.log("explicitUndefined:", explicitUndefined);
console.log("function result:", result);


// ============================================================
// 6. ARRAY LITERALS
// ============================================================
// VS Code: Arrays shown with brackets, items highlighted

// Empty array
let emptyArray = [];

// Array with elements
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
let mixed = [1, "two", true, null, undefined];

// Array with expressions
let calculated = [1 + 1, 2 * 3, 10 / 2];

// Nested arrays (multi-dimensional)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Array with objects
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

// VS Code Tip: Type '[' and VS Code shows array methods in IntelliSense
// VS Code Tip: Hover over array to see type: any[] or string[]
// VS Code Tip: Press Ctrl+Space after array name for method suggestions

console.log("\nArray literal examples:");
console.log("numbers:", numbers);
console.log("matrix[1][2]:", matrix[1][2]);  // 6


// ============================================================
// 7. OBJECT LITERALS
// ============================================================
// VS Code: Objects shown with braces, properties highlighted

// Empty object
let emptyObject = {};

// Object with properties
let person = {
    firstName: "Pramod",
    lastName: "Dutta",
    age: 30,
    isActive: true
};

// Object with mixed value types
let product = {
    id: 101,
    name: "Laptop",
    price: 999.99,
    inStock: true,
    tags: ["electronics", "computers"]
};

// Object with computed property names (ES6+)
let propName = "dynamicKey";
let dynamicObject = {
    [propName]: "dynamic value",
    ["key" + 2]: "another dynamic key"
};

// Object with shorthand properties (ES6+)
let a = 1, b = 2;
let shorthand = { a, b };  // Same as { a: a, b: b }

// Object with methods
let calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this;
    },
    subtract(n) {
        this.value -= n;
        return this;
    },
    getValue() {
        return this.value;
    }
};

// Nested objects
let company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Bangalore",
        country: "India"
    },
    employees: [
        { name: "John", role: "Developer" },
        { name: "Jane", role: "Designer" }
    ]
};

// VS Code Tip: Type 'obj' + Tab for object snippet
// VS Code Tip: Press Ctrl+Space inside {} for property suggestions
// VS Code Tip: Hover over property to see its type

console.log("\nObject literal examples:");
console.log("person:", person);
console.log("calculator result:", calculator.add(5).subtract(2).getValue());


// ============================================================
// 8. REGULAR EXPRESSION LITERALS
// ============================================================
// VS Code: Regex shown in orange/red with pattern highlighting

// Simple patterns
let digitPattern = /\d+/;
let wordPattern = /\w+/;
let spacePattern = /\s+/;

// Pattern with flags
// g = global, i = case-insensitive, m = multiline
let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let phonePattern = /\d{3}-\d{3}-\d{4}/;
let caseInsensitive = /hello/i;

// Complex patterns
let urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
let datePattern = /\d{2}\/\d{2}\/\d{4}/;

// Using regex
let text = "Contact us at support@example.com or sales@example.com";
let emails = text.match(emailPattern);

// VS Code Tip: Regex literals have special syntax highlighting
// VS Code Tip: Invalid regex patterns show red underline

console.log("\nRegex literal examples:");
console.log("Emails found:", emails);
console.log("Is '123' a digit?", digitPattern.test("123"));


// ============================================================
// 9. TEMPLATE LITERALS (Advanced)
// ============================================================
// VS Code: Backticks with ${} expressions have rich highlighting

// Multi-line strings
let htmlTemplate = `
    <div class="container">
        <h1>${fullName}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Expression interpolation
let sum = `Sum of 5 and 3 is ${5 + 3}`;
let isEligible = `You are ${age >= 18 ? 'an adult' : 'a minor'}`;

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        let value = values[i] ? `**${values[i]}**` : '';
        return result + string + value;
    }, '');
}

let highlighted = highlight`Name: ${fullName}, Age: ${age}`;

// VS Code Tip: Template literals support syntax highlighting inside ${}
// VS Code Tip: Type backtick + $ for quick interpolation

console.log("\nTemplate literal examples:");
console.log("HTML:\n", htmlTemplate);
console.log("Sum:", sum);
console.log("Highlighted:", highlighted);


// ============================================================
// 10. FUNCTION LITERALS (FUNCTION EXPRESSIONS)
// ============================================================
// VS Code: Function keywords and parameters have special highlighting

// Anonymous function expression
let multiply = function(a, b) {
    return a * b;
};

// Named function expression
let factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

// Arrow function expression (ES6+)
// VS Code: => is highlighted specially
let add = (a, b) => a + b;
let square = x => x * x;
let greetArrow = () => "Hello World!";

// Arrow function with block
let calculate = (x, y) => {
    let sum = x + y;
    let diff = x - y;
    return { sum, diff };
};

// VS Code Tip: Type '=>' and VS Code shows arrow function snippet
// VS Code Tip: Hover over arrow functions to see inferred types

console.log("\nFunction literal examples:");
console.log("multiply(3, 4):", multiply(3, 4));
console.log("factorial(5):", factorial(5));
console.log("add(2, 3):", add(2, 3));
console.log("square(4):", square(4));


// ============================================================
// 11. SYMBOL LITERALS (ES6+)
// ============================================================
// VS Code: Symbol shown as global constructor

let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol('description');  // Different from sym2

// Well-known symbols
let symIterator = Symbol.iterator;
let symToStringTag = Symbol.toStringTag;

// Using symbols as object keys
let symKey = Symbol('privateKey');
let secretObj = {
    [symKey]: "secret value",
    publicProp: "public value"
};

// VS Code Tip: Symbol is shown in autocomplete
// VS Code Tip: Symbol properties are hidden in regular iteration

console.log("\nSymbol literal examples:");
console.log("sym1:", sym1);
console.log("sym2 === sym3:", sym2 === sym3);  // false
console.log("secretObj public:", secretObj.publicProp);


// ============================================================
// 12. SPREAD AND REST LITERALS (ES6+)
// ============================================================
// VS Code: ... is highlighted specially

// Spread in arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];  // [1, 2, 3, 4, 5, 6]

// Spread in objects
let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 };  // { x: 1, y: 2, z: 3 }

// Rest in function parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Rest in destructuring
let [first, ...rest] = [1, 2, 3, 4, 5];

// VS Code Tip: ... is shown in special color
// VS Code Tip: Hover over rest parameter to see array type

console.log("\nSpread/Rest examples:");
console.log("arr2:", arr2);
console.log("obj2:", obj2);
console.log("sumAll(1,2,3,4,5):", sumAll(1, 2, 3, 4, 5));
console.log("first:", first, "rest:", rest);


// ============================================================
// 13. DESTRUCTURING LITERALS (ES6+)
// ============================================================
// VS Code: Destructuring patterns have syntax highlighting

// Array destructuring
let [x, y, z] = [10, 20, 30];
let [head, ...tail] = [1, 2, 3, 4];

// Object destructuring
let { name, age: userAge2 } = person;
let { firstName: fName, lastName: lName } = person;

// Nested destructuring
let { address: { city: userCity } } = company;

// Default values in destructuring
let [p = 1, q = 2] = [100];
let { role = "guest" } = {};

// VS Code Tip: Destructuring shows inline type info
// VS Code Tip: Missing properties show undefined type

console.log("\nDestructuring examples:");
console.log("x, y, z:", x, y, z);
console.log("name:", name, "userAge2:", userAge2);
console.log("userCity:", userCity);


// ============================================================
// 14. SPECIAL LITERALS AND EDGE CASES
// ============================================================

// Empty string literal
let emptyString = "";
let emptyString2 = '';
let emptyTemplate = ``;

// Zero literals
let zero = 0;
let negativeZero = -0;
let positiveZero = +0;

console.log("\nZero comparisons:");
console.log("0 === -0:", 0 === -0);  // true
console.log("Object.is(0, -0):", Object.is(0, -0));  // false

// Empty array vs empty object
let emptyArr = [];
let emptyObj = {};
console.log("typeof []:", typeof emptyArr);  // "object"
console.log("typeof {}:", typeof emptyObj);  // "object"

// VS Code Tip: typeof results shown in IntelliSense


// ============================================================
// 15. LITERALS COMPARISON TABLE
// ============================================================
/*
Literal Type      | Example                    | typeof Result
------------------|----------------------------|---------------
String            | "Hello", 'Hi', `Hey`       | "string"
Number            | 42, 3.14, 0xFF             | "number"
BigInt            | 9007199254740991n          | "bigint"
Boolean           | true, false                | "boolean"
Null              | null                       | "object" (quirk)
Undefined         | undefined                  | "undefined"
Object            | { a: 1 }                   | "object"
Array             | [1, 2, 3]                  | "object"
Function          | function(){}               | "function"
Symbol            | Symbol()                   | "symbol"
Regex             | /abc/                      | "object"
*/


// ============================================================
// 16. VS CODE KEYBOARD SHORTCUTS FOR WORKING WITH LITERALS
// ============================================================
//
// Ctrl+/              - Toggle comment on literal lines
// Ctrl+Shift+/        - Toggle block comments
// Shift+Alt+F         - Format literals (auto-align objects/arrays)
// F12                 - Go to definition of literal types
// Ctrl+Space          - Trigger IntelliSense for literal methods
// Ctrl+Shift+Space    - Parameter hints for literal constructors
// F2                  - Rename literal variable across file
// Ctrl+D              - Select next occurrence of same literal
// Ctrl+Shift+L        - Select all occurrences of same literal
// Alt+Up/Down         - Move literal line up/down
// Shift+Alt+Up/Down   - Copy literal line up/down
// Ctrl+`              - Open terminal to test literals
// F5                  - Debug and inspect literal values
// F9                  - Toggle breakpoint to inspect literal
// Ctrl+K Ctrl+I       - Show hover info for literal type




console.log("\n========================================");
console.log("JavaScript Literals loaded successfully!");
console.log("Try these exercises in VS Code");
console.log("========================================");
