
function Chatbot(name, creator="Google"){
  this.name = name;
  this.creator = creator;
  this.template = ['how are you', 'hello', 'your name', 'who created you'];
  this.responses = [
    'I am fine, what of you', 
    'hi, how are you doing', 
    'My name is ' + name + ', how may I help you',  
    'I was created by '+creator
    ];
  
  this.message = "";
  
  this.start = function(){
    //this method of the chatbot starts the conversation
    while(this.message != 'bye'){
      this.message = prompt("type your message:");
      for(var i = 0; i < this.template.length; i++){
        var temp = this.template[i];
        var check = this.message.includes(temp);
        if(check == true){
          alert(this.responses[i]);
        }
      }
    }
  }
}

var chat1 = new Chatbot('Jarvis', 'Iron man');

var div = document.getElementById('upper');
var elem = document.createElement('div');
elem.innerHTML = "This is a new html div element";
div.appendChild(elem);
//document.body.removeChild(parent);
var body = div.parentElement;
body.style.backgroundColor = 'orange';
var children = body.children;
console.log(children);
children[0].style.color = 'green';
