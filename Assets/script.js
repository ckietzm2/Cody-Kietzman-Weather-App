var weatherURL = "https://api.openweathermap.org"
var apiKey = "2deeb2a69137fff43aae291e7205b285"
var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=2deeb2a69137fff43aae291e7205b285"
var city = ""
var weatherDetails = $("#weather-details")
var imgURL = ""
var imgWeather = $("#icon")
var cityFirstLetter = ""

$("#search").on("click",function(event) {
  event.preventDefault()
  
  city = $("#city-name").val()

cityFirstLetter=city.charAt(0).toUpperCase()
city=cityFirstLetter+city.slice(1)


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
   
  temperature = data.list[0].main.temp
  temperature = (((temperature-273.15)*9)/5)+32
    temperature = temperature.toFixed(1)
  var weatherDescription = data.list[0].weather[0].description
  var windSpeed = data.list[0].wind.speed
    windSpeed = windSpeed.toFixed(1)
  var humidity = data.list[0].main.humidity
  var imgIcon = data.list[0].weather[0].icon
      imgURL = 'http://openweathermap.org/img/w/'+imgIcon+'.png'
    imgWeather.attr('src',imgURL)
    weatherDetails.removeAttr('class')
    
    $("#current-weather").text("Current Weather in " + city)
    $("#temp").text("Temperature:" + temperature + " degrees")
    $("#speed").text("Wind Speed:" + windSpeed + " mph")
    $("#description").text("Description:" + weatherDescription)
    $("#humidity").text("Humidity:" + humidity + "%")
    

  
   
  });
}


// 'http://openweathermap.org/img/w/${icon}.png'