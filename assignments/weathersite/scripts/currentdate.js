var d = new Date();

var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

var wd = weekday[d.getDay()];
document.getElementById("weekday").innerHTML = wd;

var monthday = new Array(12);
    monthday[0] = "January";
    monthday[1] = "February";
    monthday[2] = "March";
    monthday[3] = "April";
    monthday[4] = "May";
    monthday[5] = "June";
    monthday[6] = "July";
    monthday[7] = "August";
    monthday[8] = "September";
    monthday[9] = "October";
    monthday[10] = "November";
    monthday[11] = "December";
    
var md = monthday[d.getMonth()];
document.getElementById("month").innerHTML = md;

var day = d.getDate();
document.getElementById("day").innerHTML = day;
var year = d.getFullYear();
document.getElementById("year").innerHTML = year;