//console.log(document.cookie);
let expire = new Date();
document.cookie = "height=2.3; expires="+expire.toUTCString();
document.cookie = "country=Nigeria";
document.cookie = "state=Ebonyi";

function getData(key){
  let cookieString = document.cookie;
  let keyValuePairs = cookieString.split("; ");//["username=Nwafor", "height=7.2"]
  for(i=0; i<keyValuePairs.length; i++){
    let pair = keyValuePairs[i];
    let [pairKey, pairValue] = pair.split("=");//["username", "nwafor"]
    if(pairKey==key){
      return pairValue;
    }
  }
  return null;
}
console.log(getData("country"))
console.log(document.cookie)
