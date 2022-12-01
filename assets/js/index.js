//var config = require('../../public/config');
var searchBtn = document.getElementById('#btn');
var input = document.getElementById('#input');

// var localStorage = function () {

// };


// var getWeatherByCity = function () {

//     let name = input.innerHTML;

//     fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + name + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35")
//         .then(function (response) {
//             response.json().then(function (data) {
//                 console.log(data);

//             });

//         });

// };

var getWeatherByZipCode = function () {

    let zip = '43230,us';

    //if (input.innerHTML == zip) {

    fetch("https://api.openweathermap.org/geo/1.0/zip?zip=" + zip + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
            });
        });

    //}

};



searchBtn.addEventListener('click', getWeatherByZipCode);

getWeatherByZipCode();

