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
}