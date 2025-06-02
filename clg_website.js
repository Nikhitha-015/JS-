let data="secret";
class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
        console.log(`Data: ${data}`);
    }
}
student1=new User("Nikhitha", "nikhitha.acharya@siemens")
student2=new User("Nikhil", "nikhil.acharya@siemens")

class Admin extends User{
    constructor(name, email, role){
        super(name, email);
        this.role=role;
    }
    EditData(){
        console.log(`Editing data for ${this.name}`);
        data="new secret";
        console.log("Data: ", data);
    }

}
admin1=new Admin("Nikhitha", "nikhitha.acharya@siemens", "Admin")