
var template = ['how are you', 'hello', 'your name', 'who created you'];
var response = ['I am fine, what of you', 'hi, how are you doing', 'My name is Jarvis, how may I help you',  'I was created by nwafor']

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