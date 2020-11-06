let names = ['prince', 'charles', 'nwafor', 'sandra'];
let otherNames = ['solomon', 'henry', 'williams'];

let fullList = [...names, ...otherNames];
let info = {name:"Nwafor", age:20, height:2.3}
let otherInfo = {firstName:"Livinus", country:"Nigeria"}

let fullInfo = {...info, ...otherInfo}

console.log(fullInfo);
console.log(fullList);