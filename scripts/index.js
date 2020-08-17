
var div = document.getElementById('upper');
div.style.width = "50px";
div.style.height = "50px";

function changeColor(elem){
  elem.style.backgroundColor = 'red';
}

div.onclick = function(e){
  div.style.backgroundColor = 'orange';
}

function generator(){
  var elem = document.createElement('div');
  elem.style.width = "50px";
  elem.style.height = "50px";
  elem.style.position = 'absolute';
  var left = Math.random()*window.innerWidth;
  var top = Math.random()*window.innerHeight;
  
  elem.style.left = left+"px";
  elem.style.top = top+"px";
  elem.style.backgroundColor = 'crimson';
  document.body.appendChild(elem);
  function colorChanger(){
    elem.style.backgroundColor = 'orange';
  }
  function widthChanger(){
    elem.style.width = '100px';
  }
  elem.addEventListener('mouseover', widthChanger);
  elem.addEventListener('mouseover', colorChanger);
  elem.removeEventListener('mouseover', colorChanger);
  elem.removeEventListener('mouseover', widthChanger);
}
generator();
setInterval(function(){generator();}, 2000);
//document.addEventListener('DOMContentLoaded', function(){document.write("loaded")})
window.onload = function(){
  document.write('window is loaded');
}