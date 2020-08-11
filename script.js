$(document).ready(function() {

    // var pastSearch = localStorage.getItem("pastSearch");

    // $(pastSearch).append(".navbar");

    var openWeatherKey = "215a44c9d95d2514b4a159142a1c1ddb";

    var now = moment().format("LLLL");

    $(".currentTime").append(now);

    $(".btn").on("click", function(e){
        e.preventDefault();

        var userSearch =$("#locSearch").val();

        localStorage.setItem("pastSearch", JSON.stringify(userSearch));



        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?"+"&units=imperial",
            method: "GET",
            data: {
                q: userSearch,
                appid: openWeatherKey
            }
        }).then(function(response){
            console.log(response);

            $(".display-4").text(userSearch);

            var iconLoc = $(".imgIcon");
            $(iconLoc).attr("src", response.weather[0].icon);

            var temp = $(".temp");
            $(temp).append(response.main.temp);

            var humid = $(".humidity");
            $(humid).append(response.main.humidity);

            var wind = $(".windSpd");
            $(wind).append(response.wind.speed);

            var UV = $(".uvIndex");
            $(UV).append("response./*pathway to uv index if server was responding*/");
        });

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?",
            method: "GET",
            data: {
                q: userSearch,
                appid: openWeatherKey
            }
        }).then(function(response){
            console.log(response);
            $(".card-title").text(response.list[0].dt_text);
            // var forecastLoc = $(".cards")
            // var cardDiv = $("<div>");
            // $(cardDiv).addClass("card");
            // var cardBody = $("<div>");
            // $(cardBody).addClass("card-body")
            // var cardDate = $("<h5>");
            // $(cardDate).text(response.list[0].dt_text);

            // $(forecastLoc).display(cardDiv);


        });
    });
});

