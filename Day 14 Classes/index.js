// Activity 1: class Definition
class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Method to return a greeting message
    greeting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
    
    // Method to update the age property and log the updated age
    updateAge = (age)=>{
        this.age = age;
        return this.age;
    }
}

const person = new Person("lokesh", 21);
person.greeting();


const updatedAge = person.updateAge(22);
console.log(updatedAge);





// Activity 2: class Inheritance
class Student extends Person{
    studentId;
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }

    getStudId = ()=>{
        return this.studentId;
    }

    greeting(){
        super.greeting();
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}


const student1 = new Student("lokesh", 21, '11');
console.log(student1.getStudId());


console.log(student1.greeting());




// Activity 3: Static Methods and Properties
// Task 5: 
class Person2{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
 
    static genericGreeting = ()=>{
        return 'Hello, this is a generic greeting from the Person class.';
    }
}

console.log(Person2.genericGreeting());


// Task 6:
class Student2 extends Person{
    static numberOfStudents = 0;

    studentId;
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        this.numberOfStudents++;
        console.log(`Total number of students: ${Student2.numberOfStudents}`);
    }

    getStudId = ()=>{
        return this.studentId;
    }

    greeting(){
        super.greeting();
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student2 = new Student2('John', 25, 'S12345');
console.log(student1.greeting());



// Activity 4: Getters & Setters
class Person3{
    constructor(fName,lName, age){
        this.firstname = fName;
        this.lastName = lName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstname} ${this.lastName}`
    }

    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstname = firstName;
        this.lastName = lastName;
    }
}

const person3 = new Person3('Lokesh', 'Singh', 25);
// Log the full name using the getter
console.log(person3.fullName); 

// update the name using setter
person3.fullName = "kai hiwatari";

// Log the updated full name
console.log(person3.fullName);





// Activity 5: Private Fields (Optional)
