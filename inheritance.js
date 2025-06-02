// Inheritance in JavaScript
// // Inheritance is a way to create a new class that is based on an existing class.
// // The new class inherits the properties and methods of the existing class.

class Parent {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
class Child extends Parent {
    constructor(name, age, school){
        console.log("Child constructor called");
        // Super is used to call the constructor of the Parent class and access its properties
        super(name, age);
        super.greeting(); // Call the constructor of the Parent class
        this.school=school;
        console.log("Executing Child constructor");
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I go to ${this.school}`);
    }
}
let child1=new Child("John", 10, "ABC School");
let child2=new Child("Jane", 12, "XYZ School");
child1.greet(); // Hello, my name is John and I go to ABC School