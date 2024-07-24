// Activity 1: Understanding promises
const promise1 = new Promise((resolve, _)=>{
    setTimeout(()=>{
        resolve('Promise 1 resolved after 2 sec');
    }, 2000);
})
promise1.then((mg)=>{
    console.log(mg);
})


const promise2 = new Promise((_, reject)=>{
    setTimeout(()=>{
        reject('Promise 2 rejected after 2 sec');
    }, 2000);
})
promise2.catch((err)=>{
    console.error(err);
});




// Activity 2: Chaining promises
function fetchData(msg, delay){
    return new Promise((resolve, _)=>{
        setTimeout(()=>{
            console.log(msg)
            resolve(msg);
        }, delay)
    })
}

fetchData("fetching user data...", 1000)
.then(()=>{
    fetchData("fetching post data...", 2000);
})
.then(()=>{
    fetchData("fetching comment data...", 3000);
})
.catch((err)=>{
    console.error("ERROR : ", err);
})




// Activity 3: using Async / Await
async function logResolveValue(){
    const promise = new Promise((resolve, _)=>{
        setTimeout(()=>{
            resolve("Promies resolved");
        }, delay)
    })

    try{
        const result = await promise;
        console.log(result);
    }
    catch(err){
        console.error(err);
    }
}
logResolveValue();




function fetchData3(msg){
    return new Promise((_, reject)=>{
        reject(msg)
    })
}
async function logRejectedPromise(){
    try{
        const res = await fetchData3("Error while fetchinhg data");
        console.log("response: ", res);
    }
    catch(err){
        console.error("ERROR: ", err);
    }
}
logRejectedPromise();




// Activity 4: Fetching data from an API
const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log("using Promises: ",data)
})
.catch((err)=>{
    console.error('There was a problem with the fetch operation:', err)
})



async function fetchDataFromPublicApi(){
    try{
        const url = "https://jsonplaceholder.typicode.com/todos/1";

        const response = await fetch(url);
        const data = await response.json();
        console.log("Using asnc/await: ", data);
    }
    catch(err){
        console.error(err)
    }
}
fetchDataFromPublicApi();




// Activity 5: Concurrent Promises
const prom1 = new Promise((res, _)=>{
    res("Promise 1 resolved");
})
const prom2 = new Promise((res, _)=>{
    res("Promise 2 resolved");
})
const prom3 = new Promise((res, _)=>{
    res("Promise 3 resolved");
})

Promise.all([prom1, prom2, prom3])
.then((values)=>{
    console.log(values)
})
.catch((err)=>{
    console.error(err)
});