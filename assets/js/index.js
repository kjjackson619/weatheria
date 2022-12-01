//var config = require('../../public/config');
var searchBtn = document.getElementById('#btn');
var input = document.getElementById('#input');

// var localStorage = function () {
//     localStorage.setItem("",)
// };

var getWeatherByCity = function () {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + "columbus" + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);

            });

        });

};

var getWeatherByZipCode = function () {
    fetch("https://api.openweathermap.org/geo/1.0/zip?zip=" + "43230,US" + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
            });
        });
};

function searchFunction() {
    if (input == true) {
        searchBtn.innerHTML = getWeatherByCity();
        return;
    }
    else {
        console.log(error);
    }
};



searchBtn.addEventListener('click', searchFunction);

getWeatherByCity();
getWeatherByZipCode();
