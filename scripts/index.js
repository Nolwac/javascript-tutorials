
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

var array1 = ["prime", "livinus", "henry", "jude"];
var array2 = ["jacob", "williams", "prince"];
//concat
array2.push("other friends");
document.write(array1.shift());
array1.unshift("Nolwac");
document.write(array1.pop());
var joined = array1.concat(array2);
document.write(array1 + "<br>" + array2 + "<br>");
document.write(joined +"<br>");
var index = array1.indexOf("livinus");
document.write(index)
