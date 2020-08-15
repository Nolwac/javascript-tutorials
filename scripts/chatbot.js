function Chatbot(name, creator="Google"){
  this.name = name;//giving the chatbot a name property
  this.creator = creator;//setting the creator property
  
  /*below is the possible user messaage templates*/
  this.template = ['how are you', 'hello', 'your name', 'who created you'];
  
  /*below is the response messages template which is matched to the user message template*/
  this.responses = [
    'I am fine, what of you', 
    'hi, how are you doing', 
    'My name is ' + name + ', how may I help you',  
    'I was created by '+creator
    ];
  this.chatBody = document.createElement('div');//creating the chatbody
  this.chatBody.setAttribute('class', 'chat-body');//giving it the class of chat-body
  this.messageBox = document.createElement('div');//creating the message box
  this.messageBox.setAttribute('class', 'message-box');//giving it class of message-box
  this.chatBody.appendChild(this.messageBox);//appending it to the chatbody
  this.inputBox = document.createElement('input');//creating the user input box
  this.inputBox.setAttribute('class', 'chat-input');//setting the class to be chat-input
  this.inputBox.setAttribute('type', 'text');//setting the input type to be text input
  this.sendButton = document.createElement('button');//creating the message send button
  this.sendButton.setAttribute('class', 'chat-button');//giving it the class of chat-button
  this.sendButton.innerHTML = 'Send';//making the chat-button have text of send
  this.chatBody.appendChild(this.inputBox);//appending the input box to the chatbody
  this.chatBody.appendChild(this.sendButton);//appending the message send button to the chatbody
  
  
  this.message = "";
  
  this.start = function(){
    //this method of the chatbot starts the conversation
    document.body.appendChild(this.chatBody);//appending the chatbody to the web document body
  }
  function createMessage(message, messageBox, type='send'){
    //this function creates a message
    var box = document.createElement('div');
    box.setAttribute('class', 'chat-message');
    var text = document.createElement('span');
    if(type == 'recieve'){
      text.style.color = 'green';
      text.setAttribute('class', 'text-message-recieve');
    }else{
      text.style.color = 'crimson';
      text.setAttribute('class', 'text-message-send');
    }
    
    
    box.appendChild(text);
    messageBox.appendChild(box);
    text.innerHTML = message;
    
  }
  this.recieve = function(message){
    //this method receive a message from the user
    this.message = message;
    createMessage(message, this.messageBox, 'recieve');
    
  }
  var self = this;
  function checker(){
    var inputMessage = self.inputBox.value;//getting the users input
    if(self.message != inputMessage){//checking to know if the user's input is not thesame as what we already have as the user's message
      self.recieve(inputMessage);//putting the messsage on the message box as a message that the chatbot ha received from the user
      for(var i = 0; i < self.template.length; i++){//checking to know which of the message templates match the user's message
        var temp = self.template[i];
        var check = self.message.includes(temp);
        if(check == true){
          self.send(self.responses[i]);//sending the matched response to the user through the message  box. display it on the message box div.
        }
      } 
    }
  }
  this.send = function (message){
    //this method send a message to the user or responds to the user
    createMessage(message, this.messageBox, 'send');
  }
  var self = this;
  this.sendButton.onclick = function(e){
    e.preventDefault();//preventing the default event callback response
    checker();
  }
}

var chat1 = new Chatbot('Jarvis', 'Iron man');//making an instance
var chat2 = new Chatbot('Alexa', 'Google');//making an instance