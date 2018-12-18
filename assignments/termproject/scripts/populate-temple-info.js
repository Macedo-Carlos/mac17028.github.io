var slideIndex = 0;

// Prev and next buttons functionality
$(function(){
    $('.prev').click(function(){
        showSlide(slideIndex -= 1);
        $(".templeServices, .templeSchedule, .closureDates").empty();
        refreshTempleInfo();
    });

    $('.next').click(function(){
        showSlide(slideIndex += 1);
        $(".templeServices, .templeSchedule, .closureDates").empty();
        refreshTempleInfo();
    });
});

function refreshTempleInfo() {
    var infoRequest = new XMLHttpRequest();
    var templeInfoAPIURL = "https://mac17028.github.io/assignments/termproject/scripts/temple-info.json";

    infoRequest.open('GET', templeInfoAPIURL, true);
    infoRequest.responseType = "text";
    infoRequest.send();

    infoRequest.onload = function() {
        var jsonTempleInfo = JSON.parse(infoRequest.response);
        populateTempleInfo(jsonTempleInfo);
    }
}

function showSlide(n) {
    if (n < 0) {
        document.getElementById('templeName').innerHTML = "Jordan River Utah Temple";
        refreshWeatherInfo("https://api.openweathermap.org/data/2.5/weather?id=5781770&units=imperial&APPID=ecb60c79e171db217892f089857b991b");
        $(function(){
            $('.templeImage > img').attr('src', '/assignments/termproject/images/temples/jordan-river/jordan-river-1.jpg');
        });
        slideIndex = 3;
    } else if (n == 0) {
        document.getElementById('templeName').innerHTML = "Salt Lake Temple";
        refreshWeatherInfo("https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=ecb60c79e171db217892f089857b991b");
        $(function(){
            $('.templeImage > img').attr('src', '/assignments/termproject/images/temples/salt-lake/salt-lake-1.jpg');
        });
    } else if (n == 1) {
        document.getElementById('templeName').innerHTML = "Draper Utah Temple";
        refreshWeatherInfo("https://api.openweathermap.org/data/2.5/weather?id=5774001&units=imperial&APPID=ecb60c79e171db217892f089857b991b");
        $(function(){
            $('.templeImage > img').attr('src', '/assignments/termproject/images/temples/draper/draper-temple-1.jpg');
        });
    } else if (n == 2) {
        document.getElementById('templeName').innerHTML = "Oquirrh Mountain Utah Temple";
        refreshWeatherInfo("https://api.openweathermap.org/data/2.5/weather?id=5781770&units=imperial&APPID=ecb60c79e171db217892f089857b991b");
        $(function(){
            $('.templeImage > img').attr('src', '/assignments/termproject/images/temples/oquirrh-mountain/oquirrh-mountain-1.jpg');
        });
    } else if (n == 3) {
        document.getElementById('templeName').innerHTML = "Jordan River Utah Temple";
        refreshWeatherInfo("https://api.openweathermap.org/data/2.5/weather?id=5781770&units=imperial&APPID=ecb60c79e171db217892f089857b991b");
        $(function(){
            $('.templeImage > img').attr('src', '/assignments/termproject/images/temples/jordan-river/jordan-river-1.jpg');
        });
    } else if (n > 3) {
        document.getElementById('templeName').innerHTML = "Salt Lake Temple";
        refreshWeatherInfo("https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=ecb60c79e171db217892f089857b991b");
        $(function(){
            $('.templeImage > img').attr('src', '/assignments/termproject/images/temples/salt-lake/salt-lake-1.jpg');
        });
        slideIndex = 0;
    }
}

function refreshWeatherInfo(currentURL) {
    var weatherRequest = new XMLHttpRequest();
    var apiURL = currentURL;

    weatherRequest.open('GET', apiURL, true);
    weatherRequest.responseType = "text";
    weatherRequest.send();

    weatherRequest.onload = function() {
    var jsonWeatherData = JSON.parse(weatherRequest.response);
    populateWeatherData(jsonWeatherData);
    }
}

// Populate weather info
var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=ecb60c79e171db217892f089857b991b";

weatherRequest.open('GET', apiURL, true);
weatherRequest.responseType = "text";
weatherRequest.send();

weatherRequest.onload = function() {
    var jsonWeatherData = JSON.parse(weatherRequest.response);
    populateWeatherData(jsonWeatherData);
}

function populateWeatherData(weatherData) {
    document.querySelector('.currentCurrently').innerHTML = weatherData.weather[0].main;
    document.querySelector('.currentTemp').innerHTML = weatherData.main.temp;
    document.querySelector('.currentHumidity').innerHTML = weatherData.main.humidity;
    document.querySelector('.currentWind').innerHTML = weatherData.wind.speed;

    
    var weatherIconUrl = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    document.querySelector('.currentCurrentlyImg').src = weatherIconUrl;
}

// Populate temple info
var infoRequest = new XMLHttpRequest();
var templeInfoAPIURL = "https://mac17028.github.io/assignments/termproject/scripts/temple-info.json";

infoRequest.open('GET', templeInfoAPIURL, true);
infoRequest.responseType = "text";
infoRequest.send();

infoRequest.onload = function() {
    var jsonTempleInfo = JSON.parse(infoRequest.response);
    populateTempleInfo(jsonTempleInfo);
}

function populateTempleInfo(templeInfo) {
    var templeName = document.getElementById('templeName').innerHTML;
    var templesEach = templeInfo['temples']
    var servicesSpan = document.querySelector('.templeServices');
    var scheduleList = document.querySelector('.templeSchedule');
    var closureList = document.querySelector('.closureDates');
    for (var i = 0; i < templesEach.length; i++) {
        if (templeName == templeInfo.temples[i].name) {
            document.querySelector('.templeAddress').innerHTML = templeInfo.temples[i].address;
            document.querySelector('.templeTelephone').innerHTML = templeInfo.temples[i].phone;
            var servicesList = document.createElement('ul');
            var servicesOffered = templeInfo.temples[i].services;
            var templeHours = templeInfo.temples[i].schedule;
            var closureSchedule = templeInfo.temples[i].closure;
            for (var j = 0; j < servicesOffered.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = servicesOffered[j];
                servicesList.appendChild(listItem);
            }
            for (var k = 0; k < templeHours.length; k++) {
                var listItem = document.createElement('li');
                listItem.textContent = templeHours[k];
                scheduleList.appendChild(listItem);
            }
            for (var l = 0; l < closureSchedule.length; l++) {
                var listItem = document.createElement('li');
                listItem.textContent = closureSchedule[l];
                closureList.appendChild(listItem);
            }
            servicesSpan.appendChild(servicesList);
            break;
        }
    }
}