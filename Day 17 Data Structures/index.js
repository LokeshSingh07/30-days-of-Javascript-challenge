// Activity 1: Linked list
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next .
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1);
console.log(node2);


// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList{
    constructor(){
        this.head = null;
    }

    // add a node to the end 
    add(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }
    
    // remove a node from the end
    remove(){
        if(!this.head){
            cout<<"Can't delete node";
        }
        else{
            let curr = this.head;
            let prev = null;
            while(curr.next){
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
        }

    }
    
    
    // display all nodes.
    display(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }

}

const root = new LinkedList();
root.add(11);
root.add(57);
root.add(73);
root.add(22);

console.log("List before removing last node:");
root.display();

console.log("List after removing last node:");
root.remove();
root.display();





// Activity 2: Stack
// Task 3: Implement a stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack{
    constructor(){
        this.items = [];
    }

    // push
    push(value){
        this.items.push(value);
    }

    // pop
    pop(){
        if(!this.items){
            console.log('Cannot remove element from satck');
            return null;
        }
        else{
            return this.items.pop();
        }
    }

    // peek
    peek(){
        if(!this.items){
            console.log('Stack is empty');
            return null;
        }
        else{
            return this.items[this.items.length - 1];
        }
    }

    // isEmpty
    isEmpty(){
        return this.items.length === 0;
    }

    // size
    size(){
        return this.items.length;
    }

    
    // display
    display(){
        console.log(this.items);
    }
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);

st.display();

console.log("Top :", st.peek());

console.log("Popped item: ", st.pop());
console.log("Top: ", st.peek());

console.log("is Empty: ", st.isEmpty());
console.log("Size: ", st.size());

st.display();


// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.
const reverseString = (str)=>{
    const st = new Stack();

    // push all element in the stack
    for(const char of str){
        st.push(char);
    }

    // pop all element one by one from the stack and add in the resultant string
    let reversedStr = '';
    while(!st.isEmpty()){
        reversedStr += st.pop();
    }

    return reversedStr;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString); // Output: Hello, World!
console.log("Reversed String:", reversedString); // Output: !dlroW ,olleH




// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class queue{
    constructor(){
        this.items = [];
    }


    // push
    push(val){
        this.items.push(val);
    }

    // pop
    pop(){
        if(!this.items){
            console.log("Queue is empty");
            return null;
        }
        else{
            return this.items.shift();
        }
    }


    // front
    front(){
        if(!this.items){
            console.log("Queue is empty");
            return null;
        }
        else{
            return this.items[0];
        }
    }


    // isEmpty
    isEmpty(){
        return this.items.length == 0;
    }

    
    // size
    size(){
        return this.items.length;
    }

    // display
    display(){
        console.log(this.items);
    }
}


const qu = new queue();
qu.push(1);
qu.push(2);
qu.push(3);
qu.display();

console.log("front : ", qu.front());
console.log("size : ", qu.size());

qu.pop();
console.log("display ===>")
qu.display();

console.log("front : ", qu.front());
console.log("is Empty : ", qu.isEmpty());





// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue{
    constructor(){
        this.queue = new queue();
    }

    // add print job to the queue
    addPrintJob(job){
        console.log(`Adding print job: ${job}`);
        this.queue.push(job);
    }


    // pprocess the next print
    processNextJob(){
        if(this.queue.isEmpty()){
            console.log("No print jobs to process.");
            return;
        }

        const job = this.queue.pop();
        console.log(`Processing print job: ${job}`);
    }


    // display
    displayJobs(){
        console.log("Current print jobs in the queue ==> ");
        this.queue.display();
    }
}


const printerQueue = new PrinterQueue();


printerQueue.addPrintJob("doc1.pdf");
printerQueue.addPrintJob("doc2.pdf");
printerQueue.addPrintJob("doc3.pdf");

printerQueue.displayJobs();

printerQueue.processNextJob();
printerQueue.displayJobs();






// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right .
class TreeNode{
    constructor(val){
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

const node = new TreeNode(20);
console.log("node : ", node);



// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree{
    constructor(){
        this.root = null;
    }

    // Method to add node in BT
    insert(val){
        const newNode = new TreeNode(val);
        if(!this.root){
            this.root = newNode;
        }
        else{
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode;
            }
            else{
                this._insertNode(root.left, newNode)
            }
            
        }
        else{
            if(!root.right){
                root.right = newNode;
            }
            else{
                this._insertNode(root.right, newNode)
            }
        }
    }


    // inorder traversal
    inorderTraversal(root){
        if(!root) return null;

        this.inorderTraversal(root.left);
        console.log(root.value);
        this.inorderTraversal(root.right);
    }

    inorderTraversalFromRoot(){
        this.inorderTraversal(this.root);
    }

}

const tree = new BinaryTree();
tree.insert(8);
tree.insert(3);
tree.insert(6);
tree.insert(4);
tree.insert(1);
tree.insert(10);

console.log("In-order traversal of the binary tree:");
tree.inorderTraversalFromRoot();





// Activity 5: Graph (optional)

