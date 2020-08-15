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
  this.chatBody = document.createElement('div');
  this.chatBody.setAttribute('class', 'chat-body');
  this.messageBox = document.createElement('div');
  this.messageBox.setAttribute('class', 'message-box');
  this.chatBody.appendChild(this.messageBox);
  this.inputBox = document.createElement('input');
  this.inputBox.setAttribute('class', 'chat-input');
  this.inputBox.setAttribute('type', 'text');
  this.sendButton = document.createElement('button');
  this.sendButton.setAttribute('class', 'chat-button');
  this.sendButton.innerHTML = 'Send';
  this.chatBody.appendChild(this.inputBox);
  this.chatBody.appendChild(this.sendButton);
  document.body.appendChild(this.chatBody);
  
  this.message = "";
  
  this.start = function(){
    //this method of the chatbot starts the conversation
    var self = this;
    function loop(){
      var inputMessage = self.inputBox.value;
      if(self.message != inputMessage){
        self.receive(inputMessage);
        for(var i = 0; i < self.template.length; i++){
          var temp = self.template[i];
          var check = self.message.includes(temp);
          if(check == true){
            self.send(self.responses[i]);
          }
        } 
      }
      
    }
    loop();
    // window.setInterval(loop, 1000);
  }
  function createMessage(message, messageBox, color='crimson'){
    //this function creates a message
    var box = document.createElement('div');
    box.setAttribute('class', 'chat-messsage');
    var text = document.createElement('span');
    text.style.color = color;
    text.setAttribute('class', 'text-message');
    box.appendChild(text);
    messageBox.appendChild(box);
    text.innerHTML = message;
    
  }
  this.receive = function(message){
    //this method receive a message from the user
    this.message = message;
    createMessage(message, this.messageBox);
    
  }
  this.send = function (message){
    //this method send a message to the user or responds to the user
    createMessage(message, this.messageBox, 'green');
  }
  var self = this;
  this.sendButton.addEventListener('click', function(e){
    e.preventDefault();
    self.start();
  });
}

var chat1 = new Chatbot('Jarvis', 'Iron man');