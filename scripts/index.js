let person = {
  name:"Livinus",
  country:"Nigeria",
  state:"Ebonyi",
  interest:"Programming technology",
  other:{
    friends:["Prince", "Julius", "Michael"],
    height:2.15,
  }
}
let firstname, interest, country, state, occupation;

({name:firstname="Nwafor", interest, country, state, occupation="Tailoring"} = {
  name:"Livinus",
  country:"Nigeria",
  state:"Ebonyi",
  interest:"Programming technology",
  other:{
    friends:["Prince", "Julius", "Michael"],
    height:2.15,
  }
})
//let {other:{height:h}, interest} = person;
// document.write(firstname);
// document.write(occupation);
//document.write(h)
document.write(interest)