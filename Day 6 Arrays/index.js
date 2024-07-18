// Activity 1: Array creation & access
const arr = [1,2,3,4,5];
console.log(arr);


console.log(arr[0]);
console.log(arr[arr.length-1]);




// Activity 2: Array methods (Basic)
const arr1 = [1,2,3,4];

arr1.push(5);                       // add to the end
console.log(arr1);                  // [ 1, 2, 3, 4, 5 ]

arr1.pop();                         // remove from end
console.log(arr1);                  // [ 1, 2, 3, 4 ]

arr1.shift();                       // remove from beginning
console.log(arr1);                  // [ 2, 3, 4 ]

arr1.unshift(5);                    // add to the beginning
console.log(arr1);                  // [ 5, 2, 3, 4 ]




// Activity 3: Array methods (intermediate)
const mapRes = arr1.map((ele)=>{
    return ele*2;
})
console.log(mapRes);                   // [ 10, 4, 6, 8 ]


// arr1: [ 5, 2, 3, 4 ]
const filterRes = arr1.filter((ele)=>{
    return (ele & 1) != 1 
});
console.log(filterRes);             // [ 2, 4 ]


// arr1: [ 5, 2, 3, 4 ]
const reduceRes = arr1.reduce((acc, ele)=>{
    return acc + ele;
}, 0);
console.log(reduceRes);             // 14




// Activity 4: Array iteration
for(let i=0; i<arr1.length; i++){
    process.stdout.write(arr1[i] + " ");
}
console.log("");


arr1.forEach((ele)=>{
    process.stdout.write(ele + " ");
})
console.log("");




// Activity 5: Multi-dimensional Arrays
const TwoDArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(TwoDArr);



console.log(TwoDArr[1][1]);         // 5
console.log(TwoDArr[2][2]);         // 9