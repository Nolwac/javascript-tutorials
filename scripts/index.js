console.log(window.screen);
window.screen.orientation.onchange = function(e){
  document.write(window.screen.orientation.type)
}