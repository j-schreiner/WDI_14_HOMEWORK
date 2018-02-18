$('.color-choice').keypress(function(event){
  var keycode = event.keyCode || event.which

  if(keycode == '13') {
    event.preventDefault()
    $colorChoice = $('.color-choice').val()
    $('.brush').css("background-color", $colorChoice )
    
  }
})


$('.movie-choice').keypress(function(event){
  var keycode = event.keyCode || event.which

  if(keycode == '13') {
    event.preventDefault()
    title = $('.movie-choice').val()
    $.get('http://omdbapi.com?apikey=2f6435d9&t=' + title)
    .done(function(movie) {
      $('.brush').css('background-image', 'url(' + movie.Poster + ')')
    })
  }
})


for (var i = 0; i <= 100; i++){
  var $newSquareDiv = $('<div>', {"class": "square"})
  $('.squares').append($newSquareDiv)

}

$('.squares').on('mouseover', '.square', function(event){
  $(event.target).css("background-color", $colorChoice)
})

