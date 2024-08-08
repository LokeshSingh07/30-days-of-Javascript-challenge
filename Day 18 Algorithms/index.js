// Activity 1: Sorting Algorithms
// Task 1: Implement Bubble Sort
const bubbleSort = (arr)=>{
    let n = arr.length;

    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log("Bubble sort",arr);
}

bubbleSort([64, 34, 25, 12, 22, 11, 90]);




// Task 2: Implement Selection Sort
const selectionSort = (arr) => {
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        let minIndex = i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]) minIndex = j;
        }

        // swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    console.log("selection sort",arr);
}

selectionSort([64, 25, 12, 22, 11, 90]);




// Task 3: Implement Quick Sort
const quickSort = (arr)=>{
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedArr = quickSort([5,4,7,3,7,3324,6564.34,5,535,35]);
console.log("quick sort",sortedArr);






// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }

    return -1;
}
console.log("Target present in arr at index : ", linearSearch([3,5,7,2,76,7,56,554,32], 32));




// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
const binarySearch = (arr, target)=>{
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor(start + (end-start)/2);
        console.log("mid ", mid);
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) start = mid+1; 
        else end = mid-1;
    }

    return -1;
}

console.log("Target present in arr at index : ", binarySearch([3,5,12,23,24,45,58,78,98], 98));






// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
const countOcc = (str)=>{
    const obj = {};

    for(let ch of str){
        obj[ch] = (obj[ch] || 0) + 1;
    }

    console.log("Character count : ", obj);
}
countOcc("hellojiii");


const occurrences = (str)=>{
    const mp = new Array(26).fill(0);
    const n = str.length;

    for(let i=0; i<n; i++){
        const ch = str.charAt(i);
        // console.log("ch : ", ch);
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0); // Convert char to its index (0-25)   
        mp[index]++;
    }


    console.log("mp : ", mp);

    // printing
    console.log("\nOccurrence : ");
    for(let i=0; i<26; i++){
        if(mp[i] > 0){
            console.log(`{ ${String.fromCharCode(i + 'a'.charCodeAt(0))}: ${mp[i]} } `);
        }
    }
    
    return mp;
}
occurrences("helloji");




// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
const longestSubString = (str)=>{
    const n = str.length;
    let result = 0;
    let j = 0;
    let mp = new Map();

    for(let i=0; i<n; i++){
        const ch = str[i];
        if(mp.has(ch)){
            j = Math.max(mp.get(ch) + 1, j);
        }

        result = Math.max(result, i-j+1);
        mp.set(ch, i);
    }

    console.log(`\nLength of the longest substring without repeating characters: ${result}`);
    // return result;
}

longestSubString("abcabcbbrever");
longestSubString("abba");








// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k){
    const n = arr.length;
    let temp = new Array(n);

    for(let i=0; i<n; i++){
        const index = (i+k) % n;
        temp[index] = arr[i];
    }

    console.log("Rotated array : ", temp);
}
rotateArray([1,2,3,4,5,6,7,8,9], 5);





// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2){
    let merged = [];
    const m = arr1.length;
    const n = arr2.length;
    let i=0, j=0;

    while(i<m && j<n){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        }
        else{
            merged.push(arr2[j]);
            j++;
        }
    }

    while(i<m){
        merged.push(arr1[i]);
        i++;
    }
    while(j<n){
        merged.push(arr2[j]);
        j++;
    }
    
    console.log("Merged array : ", merged);
}
mergeSortedArrays([1,3,5,7,9], [2,4,6]);









// Activity 5: . Dynamic Programming (Optional)




