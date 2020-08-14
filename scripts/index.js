
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
div.style.width = "50px";
div.style.height = "50px";
//document.write(div.classList);
//div.setAttribute('class', 'green-color not-dummy');
// div.removeAttribute('class');
document.write(div.getAttribute('class'));

setInterval(function(){
  var attrib = div.getAttribute('class');
  if(attrib.includes('green-color')){
    div.setAttribute('class', 'dummy');
  }else{
    div.setAttribute('class', 'green-color');
  }
}, 100);