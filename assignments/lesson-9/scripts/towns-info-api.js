var townEventsPreston = document.querySelector('#eventListPreston');
var townEventsSoda = document.querySelector('#eventListSoda');
var townEventsFish = document.querySelector('#eventListFish');
var requestTownsURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var requestTowns = new XMLHttpRequest();
requestTowns.open('GET', requestTownsURL);
requestTowns.responseType = 'json';
requestTowns.send();
requestTowns.onload = function() {
    var townInfo = requestTowns.response;
    showTownInfo(townInfo);
    showTownInfoSoda(townInfo);
    showTownInfoFish(townInfo);
}
function showTownInfo(jsonObj) {
    var townDetails = jsonObj['towns'];
    for(var i = 0; i < townDetails.length; i++) {
        if (townDetails[i].name == "Preston") {
            document.getElementById('townNamePreston').innerHTML = townDetails[i].name;
            document.getElementById('mottoPreston').innerHTML = townDetails[i].motto;
            document.getElementById('yearFoundedPreston').innerHTML = townDetails[i].yearFounded;
            document.getElementById('populationPreston').innerHTML = townDetails[i].currentPopulation;
            document.getElementById('averageRainPreston').innerHTML = townDetails[i].averageRainfall + " inches";

            var myListPreston = document.createElement('ul');
            var townEvents = townDetails[i].events;
                for(var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myListPreston.appendChild(listItem);
                }
            
            townEventsPreston.appendChild(myListPreston);
            break;
        }
    }
}

function showTownInfoSoda(jsonObj) {
    var townDetails = jsonObj['towns'];
    for(var i = 0; i < townDetails.length; i++) {
        if (townDetails[i].name == "Soda Springs") {
            document.getElementById('townNameSoda').innerHTML = townDetails[i].name;
            document.getElementById('mottoSoda').innerHTML = townDetails[i].motto;
            document.getElementById('yearFoundedSoda').innerHTML = townDetails[i].yearFounded;
            document.getElementById('populationSoda').innerHTML = townDetails[i].currentPopulation;
            document.getElementById('averageRainSoda').innerHTML = townDetails[i].averageRainfall + " inches";

            var myListSoda = document.createElement('ul');
            var townEvents = townDetails[i].events;
                for(var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myListSoda.appendChild(listItem);
                }
            
            townEventsSoda.appendChild(myListSoda);
            break;
        }
    }
}

function showTownInfoFish(jsonObj) {
    var townDetails = jsonObj['towns'];
    for(var i = 0; i < townDetails.length; i++) {
        if (townDetails[i].name == "Fish Haven") {
            document.getElementById('townNameFish').innerHTML = townDetails[i].name;
            document.getElementById('mottoFish').innerHTML = townDetails[i].motto;
            document.getElementById('yearFoundedFish').innerHTML = townDetails[i].yearFounded;
            document.getElementById('populationFish').innerHTML = townDetails[i].currentPopulation;
            document.getElementById('averageRainFish').innerHTML = townDetails[i].averageRainfall + " inches";

            var myListFish = document.createElement('ul');
            var townEvents = townDetails[i].events;
                for(var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myListFish.appendChild(listItem);
                }
            
            townEventsFish.appendChild(myListFish);
            break;
        }
    }
}