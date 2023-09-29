var weatherURL = "https://api.openweathermap.org"
var apiKey = "2deeb2a69137fff43aae291e7205b285"
var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=2deeb2a69137fff43aae291e7205b285"
var city = ""

$("#search").on("click",function(event) {
  event.preventDefault()
  city = $("#city-name").val()
    if (city === "") {
      alert("Please enter valid city")
    }
    else if (city != "") {
      
      getWeather()
    }


})


function getWeather() {


var requestURL = "http://api.openweathermap.org/data/2.5/forecast?appid=c04c273159790588c5d89056e8655cce&units=imperial&q="+city


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
    var lat = data.city.coord.lat
    var lon = data.city.coord.lon
    
    console.log(data)
    
    weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=2deeb2a69137fff43aae291e7205b285"
    fiveDayForecast()
  });
}

function fiveDayForecast() {
  fetch(weatherAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   
  var temp = data.list[0].main.temp
  var tempFar = (((temp-273.15)*9)/5)+32
    tempFar = tempFar.toFixed(0)
  var weatherDescription = data.list[0].weather[0].description
  var windSpeed = data.list[0].wind.speed
  var humidity = data.list[0].main.humidity
    windSpeed = windSpeed.toFixed(0)
    console.log(data)
    console.log(tempFar)
    console.log(weatherDescription)
    console.log(windSpeed)
    console.log(humidity)
   
  });
}


// 'http://openweathermap.org/img/w/${icon}.png'