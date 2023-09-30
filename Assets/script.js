var weatherURL = "https://api.openweathermap.org"
var apiKey = "2deeb2a69137fff43aae291e7205b285"
var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=2deeb2a69137fff43aae291e7205b285"
var city = ""
var weatherDetails = $("#weather-details")
var fiveDayWeather = $("#five-day-weather")
var imgURL = ""
var imgWeather = $("#icon")
var imgURL1 = ""
var imgWeather1 = $("#icon1")
var imgURL2 = ""
var imgWeather2 = $("#icon2")


var cityFirstLetter = ""
var timerPage = $('#currentDay')
var currentDay = dayjs().format('MMM D, YYYY');
var data = ""
var checkDay = 0


var timerPage1 = $('#day-one')
var dayOne = dayjs().add(1, 'day').format('MMM D, YYYY');

var timerPage2 = $('#day-two')
var dayTwo = dayjs().add(2, 'day').format('MMM D, YYYY');

var timerPage3 = $('#day-three')
var dayThree = dayjs().add(3, 'day').format('MMM D, YYYY');

var timerPage4 = $('#day-four')
var dayFour = dayjs().add(4, 'day').format('MMM D, YYYY');

var timerPage5 = $('#day-five')
var dayFive = dayjs().add(5, 'day').format('MMM D, YYYY');



timerPage.text(currentDay)

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
    currentForecast()
  });
}

function currentForecast() {
  fetch(weatherAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   

  var temperature = data.list[0].main.temp
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
    fiveDayWeather.removeAttr('class')
    
    $("#current-weather").text("Current Weather in " + city)
    $("#temp").text("Temperature:" + temperature + " degrees")
    $("#speed").text("Wind Speed:" + windSpeed + " mph")
    $("#description").text("Description:" + weatherDescription)
    $("#humidity").text("Humidity:" + humidity + "%")

   
   





   
  timerPage1.text(dayOne)
  timerPage2.text(dayTwo)
  timerPage3.text(dayThree)
  timerPage4.text(dayFour)
  timerPage5.text(dayFive)
  
  console.log(data)

  for(let i=0;i<40;i++) {
    var timeText = data.list[i].dt_txt
    timeText = timeText.slice(11)

      if (timeText=="12:00:00" && checkDay===0) {
          checkDay=checkDay+1
          var temperature1 = data.list[i].main.temp
          temperature1 = (((temperature1-273.15)*9)/5)+32
          temperature1 = temperature1.toFixed(1)
          var weatherDescription1 = data.list[i].weather[0].description
  var windSpeed1 = data.list[i].wind.speed
    windSpeed1 = windSpeed1.toFixed(1)
  var humidity1 = data.list[i].main.humidity
  
  var imgIcon1 = data.list[i].weather[0].icon
      imgURL1 = 'http://openweathermap.org/img/w/'+imgIcon1+'.png'
    
    imgWeather1.attr('src',imgURL1)

          $("#temp1").text("Temp:" + temperature1 + " degrees")
          $("#speed1").text("Wind Speed:" + windSpeed1 + " mph")
          $("#description1").text("Description:" + weatherDescription1)
          $("#humidity1").text("Humidity:" + humidity1 + "%")
      }

      if (timeText=="12:00:00" && checkDay===1) {
        checkDay=checkDay+1
        var temperature2 = data.list[i].main.temp
        temperature2 = (((temperature2-273.15)*9)/5)+32
        temperature2 = temperature2.toFixed(1)
        var weatherDescription2 = data.list[i].weather[0].description
var windSpeed2 = data.list[i].wind.speed
  windSpeed2 = windSpeed2.toFixed(1)
var humidity2 = data.list[i].main.humidity

var imgIcon2 = data.list[i].weather[0].icon
    imgURL2 = 'http://openweathermap.org/img/w/'+imgIcon2+'.png'
  
  imgWeather2.attr('src',imgURL2)

        $("#temp2").text("Temp:" + temperature2 + " degrees")
        $("#speed2").text("Wind Speed:" + windSpeed2 + " mph")
        $("#description2").text("Description:" + weatherDescription2)
        $("#humidity2").text("Humidity:" + humidity2 + "%")
    }



    }
  })
}