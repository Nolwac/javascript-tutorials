
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
var array4 = [300, 4,1,6,20,9];
var check = array1.includes("Jude");
function inc(item){
  if(item.includes("e")){
    return item;
  }else{
    return "missing"
  }
}

function finder(item){
  return item.includes("n");
}
var check2 = array1.map(inc);
var found  = array1.find(finder);
var str = array2.toString();
var str2 = array2.join("***----");
document.write(str2);