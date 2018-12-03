var weatherRequest = new XMLHttpRequest();
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ecb60c79e171db217892f089857b991b";

weatherRequest.open('GET', apiURL, true);
weatherRequest.responseType = "text";
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonWeatherData = JSON.parse(weatherRequest.response);
    populateWeatherData(jsonWeatherData);
}

function populateWeatherData(weatherData) {    
    console.log(weatherData);
    document.querySelector('.currenTemp').innerHTML = weatherData.main.temp;
    document.querySelector('.currenTemp2').innerHTML = weatherData.main.temp;
    document.querySelector('.currentHumidity').innerHTML = weatherData.main.humidity;
    document.querySelector('.currentHumidity2').innerHTML = weatherData.main.humidity;
    document.querySelector('.currentWind').innerHTML = weatherData.wind.speed;
    document.querySelector('.currentWind2').innerHTML = weatherData.wind.speed;
    document.querySelector('.currentCurrently').innerHTML = weatherData.weather[0].main;

    var weatherIconUrl = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    document.getElementById("currentCurrentlyImg").src = weatherIconUrl;


}