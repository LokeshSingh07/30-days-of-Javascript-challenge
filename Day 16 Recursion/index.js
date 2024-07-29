const log = console.log;

// Activity 1: Basic Recursion
const fact = (n)=>{
    if(n==1) return 1;
    return n * fact(n-1);    
}
log(fact(5));


const fib = (n)=>{
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n-1) + fib(n-2);
}
log(fib(10));





// Activity 2: Recursion with Arrays
const sum = (arr, idx) => {
    if(idx >= arr.length) return 0;

    return arr[idx] + sum(arr,idx+1);
}

const arr = [1,2,3,4,5,6,7,8,9];
log("Sum : ", sum(arr, 0));



const max = (arr, idx)=>{
    if(arr.length == idx) return -Infinity;

    return Math.max(arr[idx], max(arr, idx+1));
}
log("Max : ", max(arr, 0));





// Activity 3: String Manipulation with recursion
const reverse = (str, s, e)=>{
    if(str === "") return "";

    return reverse(str.slice(1)) + str[0];
}

log("Reverse: ", reverse("Hellojii", 0, 5));



const isPlalindrome = (str, s, e)=>{
    if(s >= e) return true;

    if(str[s] != str[e]) return false;

    return isPlalindrome(str, s+1, e-1);
}
log("Is Palindrome: ",isPlalindrome("radar", 0, 4));





// Activity 4: Recursive Search
const binarySearch = (arr, s, e, target)=>{
    // B.C
    if(s > e) return -1;
    
    // 1 case mai solve karunga
    const mid = Math.floor((s+e)/2);
    if(arr[mid] == target){
        return mid;
    }

    // baaki recursion sambhal lega
    if(arr[mid] < target){
        s = mid+1;
    }
    else{
        e = mid-1;
    }

    return binarySearch(arr, s, e, target);
}

const arr1 = [1,2,3,4,5,6,7,8,9,33,45,51];
const target = 45;
log("Element at index : ", binarySearch(arr1, 0, arr1.length, target));



const CountOccurrence = (arr, idx, target)=>{
    // B.C
    if(idx >= arr.length) return 0;

    if(arr[idx] == target){
        return 1 + CountOccurrence(arr, idx+1, target);
    }
    return CountOccurrence(arr, idx+1, target);
}

log("No. of element : ", CountOccurrence([3,4,3,6,2,75,1,2,4,3], 0, 3));





// Activity 5: Tree Traversal (Optional)
