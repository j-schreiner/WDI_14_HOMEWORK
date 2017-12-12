// // 1. SIMPLE PROBLEM, SAME TRAIN LINE //

// var alamein = ["Flinders Street","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"]

// var origin = "Flinders Street"
// var destination = "East Richmond"
// var journey = ""

// console.log("origin: " + origin)
// console.log("destination: " + destination)

// alamein.indexOf(origin)

// var originIndex = alamein.indexOf(origin)
// var destinationIndex = alamein.indexOf(destination)


// if(originIndex > -1 && destinationIndex >= 0){
//   console.log(destinationIndex - originIndex + " stations")
// }

// for(var i = 0; i <= destinationIndex; i++){
//   if(i === destinationIndex){
//   journey += alamein[i]
//   } else{
//       journey += alamein[i] + "-->"
//   }
// }
// console.log(journey)



// 1. SIMPLIFIED //

// var alamein = ["Flinders Street","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"]

// var origin = "Flinders Street"
// var destination = "East Richmond"
// var journey = []

// console.log("origin: " + origin)
// console.log("destination: " + destination)

// alamein.indexOf(origin)

// var originIndex = alamein.indexOf(origin)
// var destinationIndex = alamein.indexOf(destination)


// if(originIndex > -1 && destinationIndex >= 0){
//   console.log(destinationIndex - originIndex + " stations")
// }

// journey = alamein.slice(originIndex, (destinationIndex + 1))
// console.log(journey.join(" --> "))



// 2. REFACTORED //

// train lines
var lines = {
  alamein: ["Flinders Street","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"],
  glenWaverley: ["Flagstaff","Melbourne Central","Parliament","Richmond","Kooyong","Tooronga"],
  sandringham: ["Southern Cross","Richmond","South Yarra","Prahran","Windsor"]
}

// user input
var origin = "Flinders Street"
var destination = "East Richmond"


// user input
var originIndex = lines.alamein.indexOf(origin)
var destinationIndex = lines.alamein.indexOf(destination)

// calculating noof stops
if(originIndex > -1 && destinationIndex >= 0){
  var noOfStops = destinationIndex - originIndex
}

// creating journey
var journey = lines.alamein.slice(originIndex, (destinationIndex + 1))
object.keys(lines)


var outputToUser = function(){
  console.log("origin: " + origin)
  console.log("destination: " + destination)
  console.log(noOfStops + " stations")
  console.log(journey.join(" --> "))
}
 outputToUser()

