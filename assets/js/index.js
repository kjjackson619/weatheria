
var btn = document.getElementById('#btn');
var inputEl = document.getElementById('#input').val();

// var localStorage = function () {

// };


const formHandler = function () {

    var getWeatherByCity = "https://api.openweathermap.org/geo/1.0/direct?q=" + inputEl + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35"

    var getWeatherByZipCode = "https://api.openweathermap.org/geo/1.0/zip?zip=" + inputEl + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35"



}




btn.addEventListener('click', formHandler);


