var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0369&lon=-111.3964&units=imperial&APPID=ecb60c79e171db217892f089857b991b";

weatherRequest.open('GET', apiURL, true);
weatherRequest.responseType = "text";
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonWeatherData = JSON.parse(weatherRequest.response);
    populateWeatherData(jsonWeatherData);
    calculateWindChill(jsonWeatherData);
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

    var weatherIconUrl = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    document.getElementById("currentCurrentlyImg").src = weatherIconUrl;
}

function calculateWindChill(weatherData) {
    var tempF = parseFloat(weatherData.main.temp);
    var speed = parseFloat(weatherData.wind.speed);
    var calWindChill = Math.round((35.74 + .6215 * tempF - 35.75 * Math.pow(speed, .16) + .4275 * tempF * Math.pow(speed, .16))*100)/100;
    document.getElementById('resultElement').innerHTML = calWindChill;
}

var forecastRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0369&lon=-111.3964&units=imperial&APPID=ecb60c79e171db217892f089857b991b";

forecastRequest.open('GET', apiURL, true);
forecastRequest.responseType = "text";
forecastRequest.send();

forecastRequest.onload = function() {
    var jsonForecastData = JSON.parse(forecastRequest.response);
    populateForecastData(jsonForecastData);
}

function populateForecastData(forecastData) {    
    console.log(forecastData);
    var forecastWeekDay = new Array(7);
    forecastWeekDay[0] = "Sun";
    forecastWeekDay[1] = "Mon";
    forecastWeekDay[2] = "Tue";
    forecastWeekDay[3] = "Wed";
    forecastWeekDay[4] = "Thu";
    forecastWeekDay[5] = "Fri";
    forecastWeekDay[6] = "Sat";

    for (var i = 7; i < 40; i+=8) {
        if (i == 39) {
            i = 36;
            var forecastDay = parseFloat(forecastData.list[i].dt) * 1000;
            var fwd = forecastWeekDay[new Date(forecastDay).getDay()];
            var forecastDayId = "forecastDay" + i;
            document.getElementById(forecastDayId).innerHTML = fwd;

            var forcastTemp = forecastData.list[i].main.temp_max;
            var forecastTempId = "forecastTemp" + i;
            document.getElementById(forecastTempId).innerHTML = forcastTemp;
        } else {
            var forecastDay = parseFloat(forecastData.list[i].dt) * 1000;
            var fwd = forecastWeekDay[new Date(forecastDay).getDay()];
            var forecastDayId = "forecastDay" + i;
            document.getElementById(forecastDayId).innerHTML = fwd;

            var forcastTemp = forecastData.list[i].main.temp_max;
            var forecastTempId = "forecastTemp" + i;
            document.getElementById(forecastTempId).innerHTML = forcastTemp;
        }
    }
}