const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }           
}

module.exports = person;