// Activity 1: Basic Error Handling with try-catch
function throwError(){
    try{
        throw new Error('Error thrown from throwError()');
    }
    catch(err){
        console.log(err.message);
    }
}
throwError();


const divideNumbers = (num, den)=>{
    try{
        if(den === 0){
            throw new Error('Cannot divide by zero');
        }
        return num/den;
    }
    catch(err){
        console.log(err.message);
    }
}
divideNumbers(10, 0);
console.log(divideNumbers(10, 2));





// Activity 2: Finally block
const demonstrateTryCatchFinally = ()=>{
    try{
        console.log("Inside try block")
        throw new Error('Error thrown from demonstrateTryCatchFinally()');
    }
    catch(err){
        console.log("Inside catch block : " + err.message);
    }
    finally{
        console.log('Inside finally block');
    }
}
demonstrateTryCatchFinally();





// Activity 3: Custom Error Objects
class ApiError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;   
    }
}

(
    function(){
        try{
            throw new ApiError(400, 'Bad Request');
        }   
        catch(err){
            console.log(err.message);
            console.log(err.statusCode);
        }
    }
)()


const validateUserInput = (input)=>{
    try{
        if(!input){
            throw new ApiError(400, 'Bad Request');
        }
    
        console.log(input);
    }
    catch(err){
        console.log(err.message);
    }
}
validateUserInput("");
validateUserInput("Hello jii");




// Activity 4: Error Hndling in Promises
const randomPromise = ()=>{
    return new Promise((resolve, reject)=>{
        const randomNum = Math.random(); 
        if(randomNum < 0.5)
            resolve("Promise resolved successfully!");
        else
            reject(new Error("Promise rejected with an error."));
    })
}
randomPromise()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log("Caught by .catch(): " + err.message);
})



async function handleRandomPromise(){
    try{
        const res = await randomPromise();
        console.log(res);
    }
    catch(err){
        console.log("Error: " + err.message);
    }
}
handleRandomPromise();




// Activity 5: Graceful Error Handling in Fetch
(
    function(){
        const url = "https://invalid-url.example.com";

        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log("Error: " + err.message);
        })
    }
)();



(
    async function(){ 
        try{
            const url = "https://invalid-url.example.com";
            
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }
        catch(err){
            console.log("Error: " + err.message);
        }
    }
)();