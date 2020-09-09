
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

let employ1 = new Employee("Nwafor Livinus", "200,000");
employ1.getPaid();
Employee.saySomething("This will give an error");
console.log(employ1);