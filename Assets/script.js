var weatherURL = "https://api.openweathermap.org"
var apiKey = "2deeb2a69137fff43aae291e7205b285"
var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=2deeb2a69137fff43aae291e7205b285"


function getWeather() {
// var city = connect with input box from HTML (Use .val at end to grab)

// var requestURL = "http://api.openweathermap.org/data/2.5/forecast?appid=c04c273159790588c5d89056e8655cce&units=imperial&q=${city}" 
var requestURL = "http://api.openweathermap.org/data/2.5/forecast?appid=2deeb2a69137fff43aae291e7205b285&units=imperial&q=chicago"


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}

getWeather()