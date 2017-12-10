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
  for(var i = 0; i < trainLineList.length; i++){
    var departTrainLine = trainLineList[i].indexOf(departStation)
    console.log(departTrainLine)
    return departTrainLine
  }  
}

findDepartTrainLine(trainLineList, departStation)