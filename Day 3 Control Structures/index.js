// Activity 1: if-Else Statements
let num = 10;
if(num > 0)
    console.log("Positive number")
else if(num < 0)
    console.log("Negative number")
else
    console.log("Zero")


let age = 21;;
if(age >= 18)
    console.log("You can vote")
else
    console.log("You cannot vote")



// Activity 2: Nested if-else Statement
const num1 = 10;
const num2 = 20;
const num3 = 30;
if(num1 > num2){
    if(num1 > num3)
        console.log("num1 is the largest")
    else
        console.log("num3 is the largest")
}
else{
    if(num2 > num3)
        console.log("num2 is the largest")
    else
        console.log("num3 is the largest")
}


// Activity 3: Switch case
let day = 7;
switch(day){
    case 1: console.log("monday");
    break;
    case 2: console.log("tuesday");
    break;
    case 3: console.log("wednesday");
    break;
    case 4: console.log("thursday");
    break;
    case 5: console.log("friday");
    break;
    case 6: console.log("saturday");
    break;
    case 7: console.log("sunday");
    break;
    default: console.log("Invalid day");
}

const score = 93;
switch(score){
    case score >= 90 : console.log("A")
    break;
    case score >= 80 : console.log("B")
    break;
    case score >= 70 : console.log("C")
    break;
    case score >= 60 : console.log("D")
    break;
    default: console.log("F")
}


// Activity 4: Conditional (Ternary) operator
num = 11;
const res = num & 1 ? console.log("Odd") : console.log("Even"); 


// Activity 5: Combining Conditions
const year = 2026;
if((year%4 === 0 && year%100 !== 0) || (year%400 === 0))
    console.log("Leap year");
else
    console.log("Not a leap year");