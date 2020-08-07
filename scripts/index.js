
function chatbot(name, creator="Google"){
  var template = ['how are you', 'hello', 'your name', 'who created you'];
  var response = [
    'I am fine, what of you', 
    'hi, how are you doing', 
    'My name is ' + name + ', how may I help you',  
    'I was created by '+creator
    ];
  
  var message;
  while(message != 'bye'){
    message = prompt("type your message:");
    for(var i = 0; i < template.length; i++){
      var temp = template[i];
      var check = message.includes(temp);
      if(check == true){
        alert(response[i]);
      }
    }
  }
  var returnMessage = "this is "+name+" by "+creator;
  return returnMessage
}

function Person(name, height){
  this.name = name;
  this.height = height;
  var friends = ['livinus', 'prime'];
  this.saySomething = function(something){
    document.write(something);
  }
  this.sayName = function(){
    document.write(this.name);
  }
  this.printStatus = function(){
    var checker = checkName(this.name);
    document.write(checker + " " + friends);
  }
  var checkName = function(check){
    if(name == check){
      return true;
    }else{
      return false
    }
  }
}
function Child(name, height){
  this.cry = function(){
    document.write("child is crying");
  }
  Person.call(this);
}
var person1 = new Person("Nwafor", 12);
var person2 = new Child("Sandra", 9);
person2.cry();
person2.saySomething(" I am a child and also a person");