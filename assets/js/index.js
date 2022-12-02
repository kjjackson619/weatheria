
var buttonEl = document.getElementById('#btn');
var inputEl = document.getElementById('#input');

// var localStorage = function () {

// };


const formHandler = function () {

    var getWeatherByCity = "https://api.openweathermap.org/geo/1.0/direct?q=" + inputEl + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35"

    if (inputEl == "") {
        console.log(inputEl)
    } else {
        async () => ({
            url: getWeatherByCity,
            method: 'GET'
        }).then(function (response) {
            response.json().then(function (data) {
                console.log(data);
            });
        });
    };


}



buttonEl.addEventListener("click", formHandler);

