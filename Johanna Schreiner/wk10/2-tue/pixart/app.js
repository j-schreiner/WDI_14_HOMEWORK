$('.color-choice').keypress(function(event){
  var keycode = event.keyCode || event.which

  if(keycode == '13') {
    $colorChoice = $('.color-choice').val()
    $('.brush').css("background-color", $colorChoice )
    event.preventDefault()
  }
})


for (var i = 0; i <= 100; i++){
  var $newSquareDiv = $('<div>', {"class": "square"})
  $('.squares').append($newSquareDiv)
}



$('.squares').on('click', '.square', function(event){
  $(event.target).css("background-color", "green")
})

