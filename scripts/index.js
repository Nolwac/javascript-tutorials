
var div = document.getElementById('upper');
div.style.width = "50px";
div.style.height = "50px";

function changeColor(elem){
  elem.style.backgroundColor = 'red';
}

div.onclick = function(e){
  div.style.backgroundColor = 'orange';
}

console.log(div);