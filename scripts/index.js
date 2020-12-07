console.log(window.navigator)
let but = document.createElement('button');
but.innerHTML =  "copy";
document.body.appendChild(but);

but.onclick = function(e){
  // window.navigator.geolocation.getCurrentPosition(function(obj){
  //   console.log(obj)
  // },
  // function(obj){
  //   console.log(obj);
  //   console.log("attempt failed")
  // });
  //window.navigator.vibrate([500, 150, 500, 150, 500])
  window.navigator.clipboard.writeText("Hello world");
}

let but2 = document.createElement('button');
but2.innerHTML =  "paste";
document.body.appendChild(but2);

but2.onclick = function(){
  console.log(window.navigator.clipboard.readText())
}