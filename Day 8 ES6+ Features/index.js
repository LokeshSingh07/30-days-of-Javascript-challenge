// Activity 1: Template literals 
let fullname = "lokesh singh";
let age = 21;

const detail = `Hello ${fullname}, ${age}`;
console.log(detail);


const multilineStr = `Hello jii,
kya haal chal`;
console.log(multilineStr);




// Activity 2: Destructuring
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first, second);


const book= {
    title: "Suzume",
    author: "nakamoto",
};
const { title, author } = book;
console.log(title, author);




// Activity 3: Spread and Rest Operators
const arr = [1,2,3,4,5];
// const addArr = [6,7,8,9];
// const newArr = [...arr, ...addArr];
const newArr = [...arr, 6,7,8,9];

console.log(newArr);


const sumOfAll = (...arr)=>{
    return arr.reduce((acc, curr)=> acc + curr, 0);
}
console.log(sumOfAll(1,2,3,4,5));




// Activity 4: Default Parameters
const product = (a, b=1)=>{
    return a*b;
}
console.log(product(10, 2));
console.log(product(10));




// Activity 5: Enhanced Object Literals
const person = {
    fullname,       // shorthand for fullname: fullname
    age,            // shorthand for age: age
    greet(){
        console.log(`Hello, my name is ${this.fullname} and I am ${this.age}`)
    },
    ["hobby" + "list"]: ["watching anime", "dev"]
}
console.log(person);
person.greet();



let dynamicProperty2 = "lastname";
let dynamicProperty3 = "age";
let dynamicMethod = "sayHello";

let individual = {
    firstname: "John",
    [dynamicProperty2]: "Doe",
    [dynamicProperty3]: 25,
    [dynamicMethod](){
        console.log("Hello jii, kya haal chal");
    }
}
console.log(individual);
console.log(individual.sayHello());