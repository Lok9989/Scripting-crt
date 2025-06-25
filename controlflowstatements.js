//  CONTROL STATEMENTS
let age = 18;
if (age < 18) {
    console.log("you are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("you are an adult.");
}
else {
    console.log("You are a senior citizen.");
}
console.log("/n");

let day=3;
switch(day){
     case 1:
          console.log("Monday");
           break;
     case 2:
          console.log("Monday");
          break;
     case 3:
          console.log("Tuesday");
          break;
     case 4:
          console.log("Wednesday");
          break;
          case 5:
               console.log("Thursday");
               break;
               case 6:
                                   console.log("Friday");
                                   break;
                                   case 7:
                                                       console.log("Saturday");
                                                       default:
                                                                      console.log("Invalid day");
}


     let j=0;
     while (j<5){
          console.log("while loop iteration",j);
          j++;
     }

let k=0;
do{
     console.log("do while",k);
     k++;
}while(k<5)
     console.log(k);

