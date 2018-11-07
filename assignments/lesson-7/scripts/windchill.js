var tempF = parseFloat(document.getElementById('temperatureInput').innerHTML);
var speed = parseFloat(document.getElementById('windSpeedInput').innerHTML);
var calWindChill = Math.round((35.74 + .6215 * tempF - 35.75 * Math.pow(speed, .16) + .4275 * tempF * Math.pow(speed, .16))*100)/100;
document.getElementById('resultElement').innerHTML = calWindChill;