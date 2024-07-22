// Activity 1: Basic Event Handling
const btn = document.querySelector('#btn');
const para = document.querySelector('#evHn');
btn.addEventListener('click', function(){
    para.textContent = "You clicked a btn"
})


const imgEv = document.querySelector('#myImage');
imgEv.addEventListener('dblclick', function(){
    imgEv.style.visibility =  imgEv.style.visibility === 'hidden' ? 'visible' : "hidden"; 
})




// Activity 2: Mouse Events
const btn1 = document.querySelector(`#btn1`);
btn1.addEventListener('mouseover', function(){
    btn1.style.backgroundColor = 'skyblue'
})

btn1.addEventListener('mouseout', function(){
    btn1.style.backgroundColor = 'initial'
})




// Activity 3: Keyboard Events
const keyEv = document.querySelector('#keyEv');
keyEv.addEventListener('keydown', function(e){
    console.log("key pressed: ", e.key);
})


const keyEv2 = document.querySelector('#keyEv2');
const para2 = document.querySelector('#para2');
keyEv2.addEventListener('keyup', function(e){
    console.log("key released: ", para2.textContent);
})




// Activity 4: Form Events
const form = document.querySelector('#submit-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(form);
    
    for(let [key,value] of  formData.entries()){
        console.log(key + " " + value);
    }
})


document.getElementById('dropdown').addEventListener('change', function(e){
    console.log(e.target);
    const selectedValue =  e.target.value;
    document.getElementById('selectedValue').textContent = `Selected value: ${selectedValue}`;
})




// Activity 5: Event Delegation
document.getElementById('myList').addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        console.log(`Clicked item: ${e.target.textContent}`);
    }
})



let itemCount= 1;
document.getElementById('addItem').addEventListener('click', function(){
    const newItem = document.createElement('li');
    newItem.textContent = `Dynamic Item ${itemCount++}`;
    document.getElementById('dynamicList').appendChild(newItem);
})

document.getElementById('parent').addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        console.log(`Clicked dynamic item: ${e.target.textContent}`);
    }
})

