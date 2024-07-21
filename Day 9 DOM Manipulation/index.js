// Activity 1: Selecting and manipulating Elements
const greet = document.getElementById('greet');
greet.textContent = "hello jii";

const container = document.getElementsByClassName('container');         // return HTML Collection, similar to an array 
container[0].style.backgroundColor = "red";




// Activity 2: Creating and Appending Elements
const div = document.createElement(`div`);
div.textContent = 'This is a div element';
document.body.append(div);


const myList = document.querySelector('#mylist');
const list = document.createElement('li');
list.textContent = 'Item 3...';
myList.append(list);


// Activity 3: Removing Elements
const delPara = document.querySelector('#delPara');
delPara.remove();                                                       // Alternate <Parent>.removeChild(<child>)


const ParentEle = document.getElementById('parentElement');
ParentEle.removeChild(ParentEle.lastElementChild);                      // lastChild or lastElementChid




// Activity 4: Modifying Attributes and Classses
const img = document.querySelector('#imgW3');
// img.src = "https://www.w3schools.com/w3css/img_lights.jpg"; 
img.setAttribute('src', "https://www.w3schools.com/w3css/img_lights.jpg")


const mdEle = document.getElementById('mdEle');
mdEle.classList.add('prop1');
mdEle.classList.add('prop2');
mdEle.classList.remove('prop1');
mdEle.classList.toggle('prop3');                                        // Adds 'prop3' if not present, removes it if present



// Activity 5: Event Handling
const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    mdEle.firstElementChild.innerText = 'Heading changed';
})


mdEle.addEventListener('mouseover', function(){
    mdEle.style.borderColor = 'red';
})
mdEle.addEventListener('mouseout', function(){
    mdEle.style.borderColor = 'blue';
})