// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

var makeNamesObject = function(name1, name2, name3){
  var newObj = {}

  var newName1 = name1.split(' ');
  var newName2 = name2.split(' ');
  var newName3 = name3.split(' ');

  for(var i = 0; i < newName2.length; i++){
    var propType = newName1[0];
    var valType = newName1[1];
    newObj[propType] = valType;
  }

  for(var i = 0; i < newName2.length; i++){
    var propType = newName2[0];
    var valType = newName2[1];
    newObj[propType] = valType;
  }

  for(var i = 0; i < newName3.length; i++){
    var propType = newName3[0];
    var valType = newName3[1];
    newObj[propType] = valType;
  }


  return newObj
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
