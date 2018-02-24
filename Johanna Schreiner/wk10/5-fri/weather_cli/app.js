var request = require('request')
var city = process.argv[2]

request(`api.openweathermap.org/data/2.5/weather?q=${city}`, function (error, response, body) {
  var body = JSON.parse(body)
  var temp = body.main.temp
});

console.log(temp)
