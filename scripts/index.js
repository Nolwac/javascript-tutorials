
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

var str1 = "this is the way of strings";
var str2 = " this is the second way";
var str3 = str1.endsWith("ings");
var str4 = str2.startsWith(" tr");
var str5 = str2.includes("way");
var str6 = str1.indexOf(' is');
var str7 = str1.replace("is", "esis");

document.write(str1)