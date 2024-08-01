// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
const outerFunc = ()=>{
    let counter = 0;
    
    const innerFunc = ()=>{
        console.log("inner Function -> ", counter+1);
    }

    return innerFunc;
}
const closureFunc = outerFunc();
closureFunc(); 



// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter(){
    let counter = 0;

    return {
        increment: ()=>{
            counter++;
            console.log(`Counter incremented to: ${counter}`);
        },
        getValue: function(){
            console.log(`Current counter value: ${counter}`);
            return counter;
        }
    }
}
const myCounter = createCounter();
myCounter.increment();
myCounter.getValue();



// Activity 2: Pratical closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
const createUniqueIdGenerator = ()=>{
    let lastId = 0;
    return ()=>{
        lastId++;
        return lastId;
    }
}
const uniqueIdGenerator = createUniqueIdGenerator();
console.log(uniqueIdGenerator());   
console.log(uniqueIdGenerator());   
console.log(uniqueIdGenerator());   



// Task 4: Create a closure that captures a users name and returns a function that greets the user by name.
const createGreeter = (name)=>{
    return ()=>{
        console.log(`Hello, ${name}!`);
    }
}
const greetJohn = createGreeter('John');
const greetJane = createGreeter('Jane');
greetJohn();
greetJane();




// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const createFunctionArray = ()=>{
    let functionArray = [];

    for (let i = 0; i < 5; i++) {
        functionArray.push((function(index){
            return function(){
                console.log(index);
            }
        })(i));
    }

    return functionArray;
}


const functions = createFunctionArray();
functions[0](); 
functions[1](); 
functions[2](); 
functions[3](); 
functions[4]();




// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const ItemManager = ()=>{
    let items = [];

    function addItem(item){
        items.push(item);
        console.log(`${item} added.`);
    }

    function removeItem(item){
        const index = items.indexOf(item);
        if(index != -1){
            items.splice(index, 1);
            console.log(`${item} removed.`)
        }
        else {
            console.log(`${item} not found.`);
        }
    }

    function listItem(){
        console.log('Items:', items);
    }

    return {
        add: addItem,
        remove: removeItem,
        list: listItem
    }
}

const items = ItemManager();

items.add('Apple');
items.add('Banana');
items.list();
items.remove('Apple');
items.list();



// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoise(fn){
    let cache = {};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            console.log(`Fetching from cache for args: ${key}`);
            return cache[key];
        }
        else{
            console.log(`Computing result for args: ${key}`);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}



// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } 
    else {
        return n * factorial(n - 1);
    }
}

const memoizedFact = memoise(factorial);
console.log(memoizedFact(5));
console.log(memoizedFact(5));
console.log(memoizedFact(6));
console.log(memoizedFact(6));
