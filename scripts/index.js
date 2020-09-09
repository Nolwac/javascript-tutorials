
function Person(name, age){
  this.name = name;
  this.age = age;
  this.hello = function(){
    document.write("This is a prove of inheritance");
  }
}

class Employee extends Person{
  constructor(name, age, salary){
    super(name, age)
    this.salary = salary;
  }
  getPaid(){
    document.write(this.name + " has been paid " + this.salary)
  }
  static saySomething(message){
    document.write(message);
  }
}

class Executive extends Employee{
  constructor(name, age, salary, role){
    super(name, age, salary);
    this.position = role;
  }
  playRole(){
    document.write(this.name + " the " + this.position + " is now play his role");
  }
}

let employ1 = new Employee("Nwafor Livinus", 30, 200000);
let ceo = new Executive("Onah Sochima", 30, 1000000, "Chief Executive Officer");
ceo.getPaid();
employ1.getPaid();
Employee.saySomething("This will give an error");
ceo.playRole();
console.log(employ1);