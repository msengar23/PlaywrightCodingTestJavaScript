/* var name = "Pramod";

var firstName = "Pramod";
var lastName = "Dutta"; // CamelCase

var first_name = "Amit"; // Snake Case

// Naming Conventions (Cases)
// ============================================
// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;



// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";



// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;


// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";


// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array
 */

// Through opencode

// Naming Conventions (Cases)
// ============================================

var name = "Pramod";

var firstName = "Pramod";
var lastName = "Dutta"; // CamelCase

var first_name = "Amit"; // Snake Case

// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;

function getUserName() {
    return userName;
}

function calculateTotalPrice(price, tax) {
    return price + tax;
}


// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class OrderDetails {
    constructor(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
    }
}


// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

function get_user_name() {
    return user_name;
}

function calculate_total_price(price, tax) {
    return price + tax;
}


// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";

const PI = 3.14159;
const MAX_LOGIN_ATTEMPTS = 5;
const DEFAULT_TIMEOUT = 3000;


// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array

let strFirstName = "John";
let strLastName = "Doe";
let nAge = 30;
let nSalary = 50000;
let bIsAdmin = false;
let bHasPermission = true;
let arrUsers = ["Alice", "Bob", "Charlie"];
let arrNumbers = [1, 2, 3, 4, 5];
let objUser = { name: "John", age: 30 };
let objConfig = { host: "localhost", port: 3000 };
let fPrice = 19.99;       // float
let dTotal = 100.50;      // double (in JS, both are number)
let dtToday = new Date(); // date/time
let rePattern = /abc/;    // regular expression
let elButton = null;      // DOM element
let fnCallback = function() {}; // function


// Summary Table
// ============================================
// Convention           | Use Case                        | Example
// ----------------------------------------------------------------------------
// camelCase            | Variables, Functions            | firstName, getUserName()
// PascalCase           | Classes, Constructors           | UserProfile, ShoppingCart
// snake_case           | Variables, Functions (alt)      | user_name, get_user_name()
// SCREAMING_SNAKE_CASE | Constants                       | MAX_SIZE, API_KEY
// Hungarian Notation   | Variables (older style)         | strName, bActive, nCount, arrItems
// ============================================

console.log("Naming Conventions examples loaded successfully!");
