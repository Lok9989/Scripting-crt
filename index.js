// console.log("Hello, World!");
// function sayHello() {
//     console.log("Hello from sayHello function!");
     
// sayHello();
// console.log("This is a simple JavaScript code snippet.");   

// console.log("one");
// console.log("two");
// setTimeout(() => {
//    console.log("Hello World");
// },5000);
// console.log("three");
// console.log("four");
 


// function sum(a,b){
//      console.log("The sum is: " + (a + b));
// }
// function calculator(a,b,ds){
//      ds(a,b);
// }
// calculator(5,10,sum);
// console.log("This is the end of the code snippet.");
// calculator(5,10,(a,b) => {
//      console.log("The sum is: " + (a + b));
// });
// a callback function is a function that is passed 
// as an argument to another function and is executed after the completion of that function.
// function getData(dataid){
//      setTimeout(() => {
//           console.log("Data received: " + dataid);
//      }, 5000);

// }
// getData(1);
// getData(2);
// getData(3);
// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.}
// promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
const myPromise = new Promise((resolve, reject) => {   
     setTimeout(() => {
          const success = false; // Simulate success or failure
          if (success) {
               resolve("Data fetched successfully!");
          } else {
               reject("Error fetching data.");
          }
     }, 3000);
});

myPromise
     .then(data => {
          console.log("promise resolved",data);  // This will run if the promise is resolved
     })
     .catch(error => {
          console.error("Promise rejected",error); // This will run if the promise is rejected
     });

     function getData(dataid) {
          return new Promise((resolve, reject) => {
               setTimeout(() => {
                    if (dataid) {
                         resolve("Data received: " + dataid);
                    } else {
                         reject("No data found.");
                    }
               }, 2000);
          });
     }
     let result = getData(123);
     result; 

     getData(101)
     .then(data => {
          console.log("Data fetched:", result);
          return getData(102);
     })
     .then(result => {
          console.log("Data fetched:", result);        
          return getData(103);
     })
     