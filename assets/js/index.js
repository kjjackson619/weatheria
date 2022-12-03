var cityEl = document.getElementById('#input');
var buttonEl = document.getElementById('#button');


// var localStorage = function () {

// };x



var getLocation = function () {

    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + "columbus" + "&appid=" + "2cf57f3bc628ca68fe4f4198c9697a35"

    fetch(url).then(function (response) {

        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {

                console.log(data);

            });
        }

        else {
            alert("Invalid! Please enter your city!")
        }
    });

};

buttonEl.addEventListener("click", getLocation());






