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
var imgURL3 = ""
var imgWeather3 = $("#icon3")
var imgURL4 = ""
var imgWeather4 = $("#icon4")
var imgURL5 = ""
var imgWeather5 = $("#icon5")
var cityStorage = $("#city-name")
var cityList = $("#list")


// Creates current day using js
var cityFirstLetter = ""
var timerPage = $('#currentDay')
var currentDay = dayjs().format('MMM D, YYYY');


// Created data for 5 days by adding days

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

// Put current Day on heading
timerPage.text(currentDay)


// On click of search button saves input city for city data
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

  
  cityStorage = localStorage.setItem("cityStorage",JSON.stringify(city))
  cityStorage = JSON.parse(localStorage.getItem("cityStorage")) || []
  cityList=cityList.append('<button>'+cityStorage)

  $(cityList).on("click",function(event) {
    event.preventDefault()

    city=cityList.val()
    console.log(city)

  })


var requestURL = "https://api.openweathermap.org/data/2.5/forecast?appid=c04c273159790588c5d89056e8655cce&units=imperial&q="+city


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

  //  Grabs first item in data as that is the most current weather

  var temperature = data.list[0].main.temp
    temperature = temperature.toFixed(1)
  var weatherDescription = data.list[0].weather[0].description
  var windSpeed = data.list[0].wind.speed
    windSpeed = windSpeed.toFixed(1)
  var humidity = data.list[0].main.humidity
  var imgIcon = data.list[0].weather[0].icon
      imgURL = 'https://openweathermap.org/img/w/'+imgIcon+'.png'
    
    imgWeather.attr('src',imgURL)
    weatherDetails.removeAttr('class')
    fiveDayWeather.removeAttr('class')
    cityList.removeAttr('class')
    
    $("#current-weather").text("Current Weather in " + city)
    $("#temp").text("Temperature:" + temperature + " degrees")
    $("#speed").text("Wind Speed:" + windSpeed + " mph")
    $("#description").text("Description:" + weatherDescription)
    $("#humidity").text("Humidity:" + humidity + "%")

  //  Shows the date for each card
  timerPage1.text(dayOne)
  timerPage2.text(dayTwo)
  timerPage3.text(dayThree)
  timerPage4.text(dayFour)
  timerPage5.text(dayFive)
  
// Creates a loop to grab the first time at 3 PM and then add 8 to i to get 3 PM data for each day
    
  for(let i=0;i<8;i++) {
    
   
    var timeText = data.list[i].dt_txt
    timeText = timeText.slice(11)


      if (timeText==="15:00:00") {
          
          var temperature1 = data.list[i].main.temp
          temperature1 = temperature1.toFixed(1)
          var weatherDescription1 = data.list[i].weather[0].description
  var windSpeed1 = data.list[i].wind.speed
    windSpeed1 = windSpeed1.toFixed(1)
  var humidity1 = data.list[i].main.humidity
  
  var imgIcon1 = data.list[i].weather[0].icon
      imgURL1 = 'https://openweathermap.org/img/w/'+imgIcon1+'.png'
    
    imgWeather1.attr('src',imgURL1)

          $("#temp1").text("Temp:" + temperature1 + " degrees")
          $("#speed1").text("Wind Speed:" + windSpeed1 + " mph")
          $("#description1").text("Description:" + weatherDescription1)
          $("#humidity1").text("Humidity:" + humidity1 + "%")
          
    
          
        var temperature2 = data.list[i+8].main.temp
        temperature2 = temperature2.toFixed(1)
        var weatherDescription2 = data.list[i+8].weather[0].description
var windSpeed2 = data.list[i+8].wind.speed
  windSpeed2 = windSpeed2.toFixed(1)
var humidity2 = data.list[i+8].main.humidity

var imgIcon2 = data.list[i+16].weather[0].icon
    imgURL2 = 'https://openweathermap.org/img/w/'+imgIcon2+'.png'
  
  imgWeather2.attr('src',imgURL2)

        $("#temp2").text("Temp:" + temperature2 + " degrees")
        $("#speed2").text("Wind Speed:" + windSpeed2 + " mph")
        $("#description2").text("Description:" + weatherDescription2)
        $("#humidity2").text("Humidity:" + humidity2 + "%")
   

        var temperature3 = data.list[i+16].main.temp
        temperature3 = temperature3.toFixed(1)
        var weatherDescription3 = data.list[i+16].weather[0].description
var windSpeed3 = data.list[i+16].wind.speed
  windSpeed3 = windSpeed3.toFixed(1)
var humidity3 = data.list[i+16].main.humidity

var imgIcon3 = data.list[i+16].weather[0].icon
    imgURL3 = 'https://openweathermap.org/img/w/'+imgIcon3+'.png'
  
  imgWeather3.attr('src',imgURL3)

        $("#temp3").text("Temp:" + temperature3 + " degrees")
        $("#speed3").text("Wind Speed:" + windSpeed3 + " mph")
        $("#description3").text("Description:" + weatherDescription3)
        $("#humidity3").text("Humidity:" + humidity3 + "%")

        var temperature4 = data.list[i+24].main.temp
        temperature4 = temperature4.toFixed(1)
        var weatherDescription4 = data.list[i+24].weather[0].description
var windSpeed4 = data.list[i+24].wind.speed
  windSpeed4 = windSpeed4.toFixed(1)
var humidity4 = data.list[i+24].main.humidity

var imgIcon4 = data.list[i+24].weather[0].icon
    imgURL4 = 'https://openweathermap.org/img/w/'+imgIcon4+'.png'
  
  imgWeather4.attr('src',imgURL4)

        $("#temp4").text("Temp:" + temperature4 + " degrees")
        $("#speed4").text("Wind Speed:" + windSpeed4 + " mph")
        $("#description4").text("Description:" + weatherDescription4)
        $("#humidity4").text("Humidity:" + humidity4 + "%")

        var temperature5 = data.list[i+32].main.temp
        temperature5 = temperature5.toFixed(1)
        var weatherDescription5 = data.list[i+32].weather[0].description
var windSpeed5 = data.list[i+32].wind.speed
  windSpeed5 = windSpeed5.toFixed(1)
var humidity5 = data.list[i+32].main.humidity

var imgIcon5 = data.list[i+32].weather[0].icon
    imgURL5 = 'https://openweathermap.org/img/w/'+imgIcon5+'.png'
  
  imgWeather5.attr('src',imgURL5)

        $("#temp5").text("Temp:" + temperature5 + " degrees")
        $("#speed5").text("Wind Speed:" + windSpeed5 + " mph")
        $("#description5").text("Description:" + weatherDescription5)
        $("#humidity5").text("Humidity:" + humidity5 + "%")
    


    }


  }
    
})
}