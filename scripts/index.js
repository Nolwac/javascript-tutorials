console.log(window.history);

let but = document.createElement('button');
but.innerHTML = "Change URL";
document.body.appendChild(but)

let but2 = document.createElement('button');
but2.innerHTML = "Back";
document.body.appendChild(but2);

let but3 = document.createElement('button');
but3.innerHTML = "Forward";
document.body.appendChild(but3);

let but4 = document.createElement('button');
but4.innerHTML = "Go forward by 1";
document.body.appendChild(but4);

let but5 = document.createElement('button');
but5.innerHTML = "go backward by 2";
document.body.appendChild(but5);

let but6 = document.createElement('button');
but6.innerHTML = "Change history state";
document.body.appendChild(but6);
let num = 0;
but.onclick = function(){
  window.history.pushState({}, "History", "/test/history/"+num);
  num++;
}

but2.onclick = function(){
  window.history.back();
}

but3.onclick = function(){
  window.history.forward();
}

but4.onclick = function(){
  window.history.go(1);
}

but5.onclick = function(){
  window.history.go(-2);
}

but6.onclick = function(){
  window.history.replaceState({id:10}, "Hello State", "/test/history/10-changed")
}