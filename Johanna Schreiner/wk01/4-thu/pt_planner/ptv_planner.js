console.log("PTV PLANNER")

var alamein = ["Flinders St","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"]
var glenWaverley = ["Flagstaff","Melbourne Central","Parliament","Richmond","Kooyong","Tooronga"]
var sandringham = ["Southern Cross","Richmond","South Yarra","Prahran","Windsor"]

var trainLineList = [alamein, glenWaverley, sandringham]

// DEPARTURE //

var departTrainLine;
var departStationIndex;

var departStation = "Southern Cross"
// var departStation = prompt("Departing From:")


var findDepartTrainLine = function(trainLineList, departStation){
  var departTrainLine = "sandringham" // find array within trainLineList array....searching by inner array contents....
  console.log(departTrainLine)
  return departTrainLine
}

findDepartTrainLine(trainLineList, departStation)

var findDepartStationIndex = function(departTrainLine, departStation){
  var departStationIndex = departTrainLine.indexOf(departStation)
  console.log(departStationIndex)
  return findDepartStationIndex
}

findDepartStationIndex(sandringham, departStation)

// ARRIVAL //

var arriveTrainLine;
var arriveStationIndex;

var arriveStation = "Tooronga"
// var arriveStation = prompt("Arriving At:")

var findArriveTrainLine = function(trainLineList, arriveStation){
  var arriveTrainLine = "glenWaverley" // find array within trainLineList array....searching by inner array contents....
  console.log(arriveTrainLine)
  return arriveTrainLine
}

findArriveTrainLine(trainLineList, arriveStation)

var findArriveStationIndex = function(arriveTrainLine, arriveStation){
  var arriveStationIndex = arriveTrainLine.indexOf(arriveStation)
  console.log(arriveStationIndex)
  return arriveStationIndex
}

findArriveStationIndex(glenWaverley, arriveStation)

// JOURNEY PATH //

console.log("Depart from " + departStation + " on the " + departTrainLine + " line. Change at Richmond to the " + arriveTrainLine + " line. Arrive at " + arriveStation + ".")



