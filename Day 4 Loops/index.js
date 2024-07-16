// Activity 1: for loop
let n = 10
for(let i=1; i<=n; i++){
    process.stdout.write(i + " ");
}
console.log("");


for(let i=1; i<=n; i++){
    console.log(`5*${i} = ${5*i}`);
}



// Activity 2:  while loop
let sum=0;
let i=1;
while(i<=n){
    sum += i;
    i++;
}
console.log("\nSum : ", sum);


i=10
while(i >= 1){
    process.stdout.write(i + ' ');
    i--;
}
console.log("");


// Activity 3: do-while loop
i=1;
n=5;
do{
    process.stdout.write(i+ " ");
    i++;
}while(i<=n)


let fact=1;
i=1;
n=5;
do{
    fact *= i;
    i++
}while(i<=n);
console.log("\nFact : ", fact);



// Activity 4: Nested loops
let row = 5;
let col = 5;
for(let m=1; m<=row; m++){
    for(let n=1; n<=m; n++){
        process.stdout.write("* ")
    }
    console.log("");
}
console.log("")



// Activity 5: Loop control statements
n=10;
for(let m=1; m<=n; m++){
    if(m == 5) continue;
    process.stdout.write(m + " ");
}
console.log("");


for(let m=1; m<=n; m++){
    if(m == 7) break;
    process.stdout.write(m + " ");
}

