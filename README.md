# LearnPlaywrightBasics2X

A comprehensive learning repository for **JavaScript fundamentals** and **Playwright automation testing** concepts. This project is organized into chapters covering everything from basic JavaScript syntax to advanced automation testing patterns.

---

## 📚 Table of Contents

- [About This Repository](#about-this-repository)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [How to Use](#how-to-use)
- [Chapters Overview](#chapters-overview)
  - [Chapter 01: Basics](#chapter-01-basics)
  - [Chapter 02: JavaScript Concepts](#chapter-02-javascript-concepts)
  - [Chapter 03: Identifiers & Literals](#chapter-03-identifiers--literals)
- [VS Code Tips](#vs-code-tips)
- [Running the Code](#running-the-code)
- [Contributing](#contributing)

---

## About This Repository

This repository serves as a structured learning resource for:
- JavaScript programming fundamentals
- Naming conventions and best practices
- VS Code editor shortcuts and productivity tips
- Identifier rules, keywords, and literals in JavaScript
- Foundation concepts for Playwright test automation

Each chapter contains practical examples with VS Code-specific tips, keyboard shortcuts, and hands-on exercises.

---

## Repository Structure

```
LearnPlaywrightBasics2X/
├── Chapter_01_Basics/                          # JavaScript Basics
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JSCommands.js
│   └── 04_HotCode.js
│
├── Chapter02_Javascript_Concept/               # JavaScript Core Concepts
│   └── 05_JS_Basics.js
│
├── Chapter03_Identifier_Literals/              # Identifiers, Keywords & Literals
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Literals_Part02.js
│   ├── 08_Comments.js
│   ├── Identifier_Rules.js
│   ├── JavaScript_Keywords.js
│   ├── JavaScript_Keywords_VS_Code.js
│   ├── JavaScript_Literals_VS_Code.js
│   └── VS_Code_KeyboardShortcuts.md
│
├── .vscode/
│   └── extensions.json                         # Recommended VS Code extensions
│
├── hello.js                                    # Quick start example
└── README.md                                   # This file
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [VS Code](https://code.visualstudio.com/) (recommended editor)
- Basic understanding of programming concepts

---

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/msengar23/LearnPlaywrightBasics2X.git
   cd LearnPlaywrightBasics2X
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Run JavaScript files:**
   ```bash
   node filename.js
   ```

4. **Use VS Code Debugger:**
   - Press `F5` to start debugging
   - Press `F9` to toggle breakpoints
   - Press `F10` to step over, `F11` to step into

---

## Chapters Overview

### Chapter 01: Basics

**Files:** `Chapter_01_Basics/`

Covers foundational JavaScript concepts:
- Variable declarations (`var`, `let`, `const`)
- Data types and type conversions
- Basic operators
- Console commands and debugging
- Essential JavaScript commands for daily use

**Key topics:**
- `01_Basics.js` - Core syntax fundamentals
- `02_JS.js` - JavaScript execution basics
- `03_JSCommands.js` - Useful JavaScript commands
- `04_HotCode.js` - Commonly used code patterns

---

### Chapter 02: JavaScript Concepts

**File:** `Chapter02_Javascript_Concept/05_JS_Basics.js`

Deep dive into JavaScript programming concepts:
- Variable scoping (global vs function vs block)
- Hoisting behavior
- Type coercion and truthy/falsy values
- Comparison operators (`==` vs `===`)
- Template literals and string interpolation
- Arrow functions and function expressions
- Array and object destructuring
- Spread and rest operators

---

### Chapter 03: Identifiers & Literals

**Files:** `Chapter03_Identifier_Literals/`

Comprehensive coverage of JavaScript identifiers, naming conventions, keywords, and literals with VS Code integration.

#### 3.1 Identifier Rules
- **Files:** `06_Identifier_Rules.js`, `Identifier_Rules.js`
- Valid identifier patterns
- Naming conventions (camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE)
- Reserved keywords restrictions
- Case-sensitivity rules
- Unicode support

#### 3.2 Naming Conventions
- **File:** `07_Identifier_Literals_Part02.js`
- camelCase for variables and functions
- PascalCase for classes and constructors
- snake_case for database fields and JSON keys
- SCREAMING_SNAKE_CASE for constants
- Hungarian notation (legacy style)

#### 3.3 Comments
- **File:** `08_Comments.js`
- Single-line comments (`//`)
- Multi-line comments (`/* */`)
- JSDoc documentation comments
- VS Code comment/uncomment shortcuts

#### 3.4 JavaScript Keywords
- **File:** `JavaScript_Keywords.js`
- Declaration keywords: `var`, `let`, `const`, `function`, `class`
- Control flow: `if`, `else`, `switch`, `case`, `try`, `catch`
- Loop keywords: `for`, `while`, `do`, `break`, `continue`
- Object/Class context: `this`, `super`, `new`, `extends`
- Type checking: `typeof`, `instanceof`, `delete`, `in`
- Literals: `true`, `false`, `null`, `undefined`
- Async: `async`, `await`
- Modules: `import`, `export`, `default`

#### 3.5 Keywords with VS Code
- **File:** `JavaScript_Keywords_VS_Code.js`
- All keywords with VS Code-specific tips
- Syntax highlighting explanations
- IntelliSense usage for each keyword
- Debugging tips with breakpoints
- Keyboard shortcuts for keyword navigation

#### 3.6 JavaScript Literals
- **File:** `JavaScript_Literals_VS_Code.js`
- String literals (single, double, template)
- Number literals (integer, float, binary, octal, hex, BigInt)
- Boolean literals (`true`, `false`)
- Null and undefined literals
- Array and object literals
- Regular expression literals
- Function expression literals
- Symbol literals
- Spread/rest literals
- Destructuring patterns

#### 3.7 VS Code Keyboard Shortcuts
- **File:** `VS_Code_KeyboardShortcuts.md`
- Complete Windows keyboard shortcuts reference
- General, editing, navigation, search shortcuts
- Multi-cursor, debugging, terminal shortcuts
- File and editor management shortcuts

---

## VS Code Tips

### Recommended Extensions
Install these extensions for the best experience:
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **JavaScript (ES6) code snippets** - Quick code generation
- **Path Intellisense** - Auto-complete file paths
- **GitLens** - Enhanced Git capabilities

### Essential Shortcuts for This Repo

| Shortcut | Action |
|:---|:---|
| `Ctrl + /` | Toggle line comment |
| `Shift + Alt + A` | Toggle block comment |
| `Ctrl + `` ` | Open integrated terminal |
| `F5` | Start debugging |
| `F9` | Toggle breakpoint |
| `Ctrl + Space` | Trigger IntelliSense |
| `Shift + Alt + F` | Format document |
| `F2` | Rename symbol |
| `F12` | Go to definition |
| `Ctrl + D` | Select next occurrence |
| `Ctrl + Shift + L` | Select all occurrences |
| `Alt + Up/Down` | Move line up/down |

---

## Running the Code

### Run a Single File
```bash
node Chapter_01_Basics/01_Basics.js
```

### Run with Debugging
1. Open the file in VS Code
2. Press `F9` on the line where you want to break
3. Press `F5` to start debugging
4. Use `F10` (step over) or `F11` (step into)

### Run All Chapter 03 Files
```bash
node Chapter03_Identifier_Literals/06_Identifier_Rules.js
node Chapter03_Identifier_Literals/07_Identifier_Literals_Part02.js
node Chapter03_Identifier_Literals/08_Comments.js
node Chapter03_Identifier_Literals/JavaScript_Keywords.js
node Chapter03_Identifier_Literals/JavaScript_Keywords_VS_Code.js
node Chapter03_Identifier_Literals/JavaScript_Literals_VS_Code.js
```

---

## Topics Covered Summary

| Category | Topics |
|:---|:---|
| **Basics** | Variables, Data Types, Operators, Console |
| **Concepts** | Scope, Hoisting, Type Coercion, Comparisons |
| **Identifiers** | Rules, Conventions, Reserved Words |
| **Keywords** | 50+ JavaScript keywords with examples |
| **Literals** | String, Number, Boolean, Array, Object, Regex |
| **VS Code** | Shortcuts, Debugging, IntelliSense, Snippets |
| **Best Practices** | Naming conventions, Code formatting |

---

## Contributing

Feel free to contribute to this learning repository:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-topic`)
3. Commit your changes (`git commit -am 'Add new topic'`)
4. Push to the branch (`git push origin feature/new-topic`)
5. Open a Pull Request

---

## License

This project is for educational purposes.

---

## Author

Created for learning JavaScript and Playwright automation testing basics.

**Happy Learning!** 🎉

---

*Last updated: May 2026*
