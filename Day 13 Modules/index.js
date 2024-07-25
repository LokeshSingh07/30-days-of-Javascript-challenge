// Activity 1: Creating and Exporting Modules
const add =  require('./A1/add.js');
const res = add(2,4);
console.log(res);

const person = require("./A1/person.js");
console.log(person);




// Activity 2: Named and Default exports
const { sum, sub, div, mul } = require("./A2/opn.js");
console.log("Addition : ", sum(2,4));
console.log("Subtraction : " , sub(2,4));
console.log("Division : ", div(2,4));
console.log("Multiply : ", mul(2,4));


const greet = require('./A2/defexp.js');
greet();




// Activity 3: Importing Entire Modules
const utility = require('./A3/utility.js');

console.log("PI : ", utility.PI);
console.log("PORT : ", utility.PORT);
console.log("Area of circle : ", utility.circle(5));
console.log("Area of sq. : ", utility.square(5));
console.log("Area of triangle : ", utility.triangle(5, 10));





// Activity 4: Using Third-Party Modules
const _ = require('lodash');
let arr = [1,2,3,4];
_.reverse(arr);
console.log(arr);


const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>{
    console.log("Response : ", res.data);
})
.catch((err)=>{
    console.log("Error : ", err);
});




// Activity 5: Module Bundling (Optional)
