var inputEl = document.getElementById('#input').value;

// var localStorage = function () {

// };

var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + "columbus" + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35"

var getWeather = function () {
    fetch(url).then(function (response) {
        response.json().then(function (data) {

            var card = document.createElement("div");
            var cardInfo = card.textContent;

            cardInfo.textContent = data.name;

            card.appendChild(cardInfo);
        });

    });

};



getWeather();


