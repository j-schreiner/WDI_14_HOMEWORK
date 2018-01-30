console.log("test")

var cityType = document.querySelector("#city-type")

var cityAbbrev = ["NYC", "SF", "LA","SYD", "ATX"]

cityAbbrev.forEach(function(city) {

  var newOption = document.createElement('option')
  newOption.textContent = city
  newOption.value = city

  cityType.appendChild( newOption )
  
})

function changeImage(){

  if(backgroundImage.classList.length >= 1){
    backgroundImage.classList = []
  }

  switch(cityType.value){
    case "NYC":
      backgroundImage.classList.add('nyc')
    break

    case "SF":
      backgroundImage.classList.add('sf')
    break

    case "LA":
      backgroundImage.classList.add('la')
    break
    
    case "SYD":
      backgroundImage.classList.add('sydney')
    break 

    case "ATX":
      backgroundImage.classList.add('austin')
    break
  }
}


var backgroundImage = document.querySelector("body")

cityType.addEventListener("change", changeImage)
