console.log("PTV PLANNER")

var lines = {
  alamein: ["Flinders Street","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"],
  glenWaverley: ["Flagstaff","Melbourne Central","Parliament","Richmond","Kooyong","Tooronga"],
  sandringham: ["Southern Cross","Richmond","South Yarra","Prahran","Windsor"]
}

var origin = prompt("Departing from:")
var originLine
var destination = prompt("Arriving at:")
var destinationLine 
var changeOver = "Richmond"


// finding train lines 

var findOriginLine = function(origin){
  if(lines.alamein.includes(origin) === true){
    originLine = lines.alamein
  } else if(lines.glenWaverley.includes(origin) === true){
    originLine = lines.glenWaverley
  } else {
    originLine = lines.sandringham
  }
  console.log(originLine)
}
findOriginLine(origin)

var findDestinationLine = function(destination){
  if(lines.alamein.includes(destination) === true){
    destinationLine = lines.alamein
  } else if(lines.glenWaverley.includes(destination) === true){
    destinationLine = lines.glenWaverley
  } else {
    destinationLine = lines.sandringham
  }
  console.log(destinationLine)
}
findDestinationLine(destination)

// finding station positions

var originIndex = originLine.indexOf(origin)
var changeOverIndex1 = originLine.indexOf(changeOver)
var changeOverIndex2 = destinationLine.indexOf(changeOver)
var destinationIndex = destinationLine.indexOf(destination)

console.log("originIndex is " + originIndex)
console.log("changeOverIndex1 is " + changeOverIndex1)
console.log("changeOverIndex2 is " + changeOverIndex2)
console.log("destinationIndex is " + destinationIndex)

// plotting the journey

var lineOne = []
var lineTwo = []


if(originIndex < changeOverIndex1){
  var lineOne = originLine.slice(originIndex, changeOverIndex1 + 1)
  var lineTwo = destinationLine.slice(changeOverIndex2 + 1, destinationIndex + 1)
  console.log(lineOne)
  console.log(lineTwo)
} else{ 
  var lineOne = originLine.slice(changeOverIndex1, originIndex + 1)
  var lineTwo = destinationLine.slice(destinationIndex, changeOverIndex2)
  console.log(lineOne)
  console.log(lineTwo)
}

if(originIndex < changeOverIndex1){
  console.log(lineOne.join(" --> ") + " --> " + lineTwo.join(" --> "))
} else{
  console.log(lineOne.reverse().join(" --> ") + " --> " + lineTwo.reverse().join(" --> "))
}





// console.log("PTV PLANNER")

// var lines = {
//   alamein: ["Flinders Street","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"],
//   glenWaverley: ["Flagstaff","Melbourne Central","Parliament","Richmond","Kooyong","Tooronga"],
//   sandringham: ["Southern Cross","Richmond","South Yarra","Prahran","Windsor"]
// }

// // user input
// var origin = prompt("Departing from:")
// var originLine
// var destination = prompt("Arriving at:")
// var destinationLine 
// var changeOver = "Richmond"



// // finding train lines 
// var findOriginLine = function(origin){
//   if(lines.alamein.includes(origin) === true){
//     originLine = lines.alamein
//   } else if(lines.glenWaverley.includes(origin) === true){
//     originLine = lines.glenWaverley
//   } else {
//     originLine = lines.sandringham
//   }
// }
// findOriginLine(origin)

// var findDestinationLine = function(destination){
//   if(lines.alamein.includes(destination) === true){
//     destinationLine = lines.alamein
//   } else if(lines.glenWaverley.includes(destination) === true){
//     destinationLine = lines.glenWaverley
//   } else {
//     destinationLine = lines.sandringham
//   }
// }
// findDestinationLine(destination)

// // finding station positions
// var originIndex = originLine.indexOf(origin)
// var changeOverIndex1 = originLine.indexOf(changeOver)
// var changeOverIndex2 = destinationLine.indexOf(changeOver)
// var destinationIndex = destinationLine.indexOf(destination)

// var lineOne = originLine.slice(originIndex, changeOverIndex1 + 1)
// var lineTwo = destinationLine.slice(changeOverIndex2 + 1, destinationIndex + 1)

// var outputToUser = function(){
//   console.log("origin: " + origin)
//   console.log("destination: " + destination)
//   console.log(lineOne.join(" --> ") + " --> " + lineTwo.join(" --> "))
// }
//  outputToUser()
