// Primitive Data Types
let number = 42;
let string = "Hello, World!";
let boolean = true;
let undefinedVar;
let nullVar = null;
let symbolVar = Symbol('unique');
let bigIntVar = 1234567890123456789012345678901234567890n; // BigInt literal

// Reference Types
let arrayvar = [1, 2, 3, 4, 5]; // Array
let objectVar = {
    name: "John",
    age: 30,
    isStudent: false
};
let functionVar = function() {
    return "This is a function";
};

// Function with object declaration inside
let functionVar2 = function() {
    let object2 = {
        name: "Jane",
        age: 25,
        isStudent: true  
    };   
    console.log("Inside functionVar2:");
    console.log(object2);
    return "Function executed";
};

// Output values
console.log("arrayvar:", arrayvar);
console.log("number:", number);
console.log("string:", string);
console.log("boolean:", boolean);
console.log("undefinedVar:", undefinedVar);
console.log("nullVar:", nullVar);
console.log("symbolVar:", symbolVar.toString()); // Convert symbol to string for readable output
console.log("bigIntVar:", bigIntVar);
console.log("objectVar:", objectVar);
console.log("functionVar output:", functionVar());
console.log("functionVar2 output:", functionVar2()); // Executes and logs object2

// Array operations
console.log("First element of arrayvar:", arrayvar[0]);
console.log("Length of arrayvar:", arrayvar.length);

// Type checking
console.log("typeof number:", typeof number); // number
console.log("typeof string:", typeof string); // string
console.log("typeof boolean:", typeof boolean); // boolean
console.log("typeof undefinedVar:", typeof undefinedVar); // undefined
console.log("typeof nullVar:", typeof nullVar); // object (quirk)
console.log("typeof symbolVar:", typeof symbolVar); // symbol
console.log("typeof bigIntVar:", typeof bigIntVar); // bigint
 