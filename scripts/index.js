
var template = {
  hello:["HI", "How are you doing", "I am good"],
  name:["I am Jarvis", "I am iron man"]
}

var message;
while(message != 'bye'){
  message = prompt("type your message:");
  for(temp in template){
    var check = message.includes(temp);
    if(check===true){
      var m = template[temp];
      alert(m[1]);
    }
  }
}