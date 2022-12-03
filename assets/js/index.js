var input = document.querySelector("#input");
var form = document.getElementById("#form");
var key = '2cf57f3bc628ca68fe4f4198c9697a35'

// var localStorage = function () {

// };x



var getLocation = function () {

    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + `${input}` + "&appid=" + `${key}`;

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

form.addEventListener("submit", e => {
    e.preventDefault();

    getLocation();
});






