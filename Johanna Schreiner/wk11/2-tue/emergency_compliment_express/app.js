const PORT = 9000;
var express = require('express');
var _ = require('underscore');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const compliments = [
  "if you were a fruit, you'd be a fine-apple",
  "this may be cheesy, but I think you're grate",
  "shut up and take my money",
  "you're like a sharpie, super fine",
  "thanks for pudding up with me",
  "if you were a triangle, you'd be acute one"
]

const colors = [
  "#4D627F",
  "#262439",
  "#8EA6B0",
  "#899E97",
  "#A89F90",
  "#DACEC2",
  "#E1BFB3",
  "#7E3836",
  "#C07653",
  "#6F2D2F"
]

const fontWeights = ['100', '300', '400', '500', '700']

app.get('/', function(req, res) {
  res.render('index',{
      compliments: _.sample(compliments),
      colors: _.sample(colors),
      fontWeights: _.sample(fontWeights)
  });
});

app.get('/:name', function(req, res) {
  res.render('name',{
      compliments: _.sample(compliments),
      colors: _.sample(colors),
      fontWeights: _.sample(fontWeights),
      name: req.params.name
  });
});

app.listen(PORT, function() {
  console.log(`listening on port: ${PORT}`);
})
