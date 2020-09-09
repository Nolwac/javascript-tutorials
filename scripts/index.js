
class Employee{
  constructor(name, salary){
    this.name = name;
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
  constructor(name, salary, role){
    super(name, salary);
    this.position = role;
  }
  playRole(){
    document.write(this.name + " the " + this.position + " is now play his role");
  }
}

let employ1 = new Employee("Nwafor Livinus", 200000);
let ceo = new Executive("Onah Sochima", 1000000, "Chief Executive Officer");
ceo.getPaid();
employ1.getPaid();
Employee.saySomething("This will give an error");
ceo.playRole();
console.log(employ1);