
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
  this.saySomething = function(something){
    document.write(something);
  }
  this.sayName = function(){
    document.write(this.name);
  }
}

var person1 = new Person("Nwafor", 12);
var person2 = new Person("Prime", 15);
var person3 = new Person("Sandra", 11);
person1.age = 35;
person1.saySomething("I am the person one");
person2.saySomething(" I am the person two")
document.write("<br>");
person3.sayName();