
var div = document.getElementById('upper');
div.style.width = "50px";
div.style.height = "50px";
//document.write(div.classList);
//div.setAttribute('class', 'green-color not-dummy');
// div.removeAttribute('class');
document.write(div.getAttribute('class'));

setInterval(function(){
  var attrib = div.getAttribute('class');
  if(attrib.includes('green-color')){
    div.setAttribute('class', 'dummy');
  }else{
    div.setAttribute('class', 'green-color');
  }
}, 100);

chat1.start();