// Objects are entities that have properties and methods.
const student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// Accessing any key in the object we use ".this" keyword
    // "this" refers to the object itself
console.log(student.name); // Accessing property
console.log(student.age); // Accessing property
console.log(student.major); // Accessing property
student.greet(); // Calling method

const family ={
    members_count:21,
    name:"Acharya",
    greetings: function(){
        console.log(`Hi we are ${this.name}'s family`)

    }

}

family.__proto__= student 

// You will be able to access the properties and methods of the student object
// Classes are blueprints for creating objects.
class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start(){
        console.log(`Starting ${this.brand} ${this.model}`);
    }
    stop(){
        console.log("Stopping");
    }
}
let benz=new Car("Benz", "C-Class", 2020);
benz.start(); // Starting Benz C-Class
let toyota=new Car();


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
    bye(){
        console.log("Goodbye");
    }
}
let p1=new Person("John", 25);
let p2=new Person("Jane", 30);
p1.greet(); // Hello, my name is John

// Constructor function
// A constructor function is a special type of function that is used to create objects.
// Even if the class doesn't have a constructor, JavaScript will create a default constructor for you. when we use 
// the "new" keyword, it creates a new object and sets the prototype of the new object to the constructor function's prototype.