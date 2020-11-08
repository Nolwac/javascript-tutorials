console.log(window.location);

let but = document.createElement('button');
but.innerHTML = "Change URL";
document.body.appendChild(but)
but.onclick = function(){
  //window.location.replace("https://github.com/nolwac");
  window.location.reload();
}