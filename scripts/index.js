var name = "Nwafor Livinus";
function saySomething(something){
  document.write(something);
  window.fullName = "This is my full name";
}

document.write(window.innerWidth);
document.write(window.innerHeight);
var win = window.open('https://github.com', "_blank");
setTimeout(function(){
  win.close();
}, 5000)
