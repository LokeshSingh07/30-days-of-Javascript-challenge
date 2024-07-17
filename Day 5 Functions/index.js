// Activity 1: Function declaration
function checkEvenOrOdd(num){
    if(num & 1) 
        console.log("Odd number")
    else
        console.log("Even number")
}
checkEvenOrOdd(33);


function square(num){
    return num*num;
}
const res = square(4);
console.log(res);




// Activity 2: Function exppression
const maxOfTwoNumber = function(a, b){
    if(a > b)
        console.log(`${a} is largest`)
    else
        console.log(`${b} is largest`);
}
maxOfTwoNumber(35,66);


const concatTwoString = function(str1, str2){
    const str = str1 + str2;
    return str;
}
console.log(concatTwoString("Hello", "World"));




// Activity 3: Arrow function
const sumOfTwoNumber = (a, b)=>{
    return a + b;
}
console.log(sumOfTwoNumber(5, 6));


const isPresent = (str, char)=>{
    return str.includes(char);
}
console.log(isPresent("Hello", "u"));




// Activity 4: Function parameters & defualt values
const productOfTwoNumber = (a, b=1)=>{
    return a*b;
}
console.log(productOfTwoNumber(5));


const greet = (name, age=18)=>{
    const str = `hello ${name}, age: ${age}`;
    return str;
}
console.log(greet("Rahul"));




// Activity 5: Higher order function
function fn(){
    console.log("Hello");
}

function callFunc(fn, cnt){
    for(let i=0; i<cnt; i++){
        fn();
    }
}
callFunc(fn, 3);


