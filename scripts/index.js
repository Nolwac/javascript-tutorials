
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
  get fullInfo(){
    return this.name + " " + this.salary
  }
  set setName(name){
    this.name = name;
  }
  set setSalary(salary){
    this.salary = salary;
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
employ1.setName = "Nwafor Anayo";
employ1.setSalary = 5000000;
document.write(employ1.fullInfo);
console.log(employ1);