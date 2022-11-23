//var config = require('../../public/config');
var searchBtn = document.getElementById('#btn');
var input = document.getElementById('#input');

var getWeather = function () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?" + "lat=33.44&lon=-94.0" + "4&exclude={part}&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);

            });

        });

};

function searchFunction() {
    if (input == true) {
        searchBtn.innerHTML = getWeather();
        return;
    }
    else {
        console.log(error);
    }
};



searchBtn.addEventListener('click', searchFunction);

getWeather();
