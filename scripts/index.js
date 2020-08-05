
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


function printSomething(interest){
  function inner(programmer){
    document.write(programmer + " is the programmer and is interested in " + interest+"<br>");
  }
  return inner;
}
var call = printSomething("Programming");
var call2  = printSomething("Mathematics")

call("Nwafor");
call("bishop");
call2("Nwafor");
call2("bishop");