// 1. Arithmetic Operators
// Arithmetic operators are used to perform arithmetic operations like addition, subtraction, etc.

let a = 5;
let b = 10;
console.log("Arithmetic Operators:");
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let exponent = a ** 2; // a raised to the power 2

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Exponent:", exponent);

// 2. Assignment Operators
// Used to assign values to variables

let x = 10;
console.log("\nAssignment Operators:");
x += 5; // x = x + 5
console.log("After x += 5:", x);
x -= 5; // x = x - 5
console.log("After x -= 5:", x);
x *= 3; // x = x * 3
console.log("After x *= 3:", x);
x /= 2; // x = x / 2
console.log("After x /= 2:", x);
x %= 4; // x = x % 4
console.log("After x %= 4:", x);

// 3. Comparison Operators
// Used to compare two values and return boolean results

console.log("\nComparison Operators:");
let isEqual = (a == b);
let isNotEqual = (a != b);
let isStrictEqual = (a === b);
let isStrictNotEqual = (a !== b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterOrEqual = (a >= b);
let isLessOrEqual = (a <= b);

console.log("a == b:", isEqual);
console.log("a != b:", isNotEqual);
console.log("a === b:", isStrictEqual);
console.log("a !== b:", isStrictNotEqual);
console.log("a > b:", isGreaterThan);
console.log("a < b:", isLessThan);
console.log("a >= b:", isGreaterOrEqual);
console.log("a <= b:", isLessOrEqual);

// 4. Logical Operators
// Used to combine multiple boolean expressions

console.log("\nLogical Operators:");
let andOperator = (a > 0 && b > 0); // true only if both are true
let orOperator = (a > 0 || b < 0);  // true if at least one is true
let notOperator = !(a < b);        // true if a < b is false

console.log("AND (a > 0 && b > 0):", andOperator);
console.log("OR (a > 0 || b < 0):", orOperator);
console.log("NOT !(a < b):", notOperator);

// 5. Bitwise Operators
// Used to perform operations at the binary (bit) level
console.log("\nBitwise Operators:");

let bitwiseAnd = a & b; // Bitwise AND
let bitwiseOr = a | b;  // Bitwise OR
let bitwiseXor = a ^ b; // Bitwise XOR
let bitwiseNot = ~a;    // Bitwise NOT
let leftShift = a << 2; // Left shift
let rightShift = b >> 1; // Right shift

console.log("a & b (AND):", bitwiseAnd);
console.log("a | b (OR):", bitwiseOr);
console.log("a ^ b (XOR):", bitwiseXor);
console.log("~a (NOT):", bitwiseNot);
console.log("a << 2 (Left Shift):", leftShift);
console.log("b >> 1 (Right Shift):", rightShift);

// 6. Ternary Operator
// A shorthand way to write an if-else condition
console.log("\nTernary Operator:");

let max = (a > b) ? a : b;
console.log("Maximum of a and b:", max);

let result = (a % 2 === 0) ? "Even" : "Odd";
console.log("a is:", result);

let status = (b >= 10) ? "High" : "Low";
console.log("b status:", status);
//7.