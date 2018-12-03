var weatherRequest = new XMLHttpRequest();
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ecb60c79e171db217892f089857b991b";

weatherRequest.open('GET', apiURL, true);
weatherRequest.responseType = "text";
weatherRequest.send();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    document.querySelector('.currenTemp').innerHTML = weatherData.main.temp;
}