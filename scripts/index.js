
var upperDiv = document.getElementById('upper');
var child = document.getElementById('child');

child.addEventListener('click', function(e){
  console.log('this is a child h2 element');
}, true);

upperDiv.addEventListener('click', function(e){
  console.log('this is the child parent');
}, true);