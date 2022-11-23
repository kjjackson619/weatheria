var config = require('../../public/config');

var getWeather = function () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude={part}&appid=" + appId)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);

            });

        });

};

getWeather();
