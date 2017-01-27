// ex-01 flipColor

// Write a function called flipColor. This function may be
// used to change the color of a tile in a game. It should
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and
// vice-versa.
//
//
var flipColor = function(someObj){
  if(someObj.color === 'blue'){
    someObj.color = 'red'
  }else{
    someObj.color = 'blue'
  }
  return someObj

}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var tile = {
    width: "200px",
    height: "200px",
    background: "black",
    color: "blue"
}

var tile2 = flipColor(tile)

console.assert(tile2.color === "red")
console.assert(flipColor(tile2).color === "blue")
