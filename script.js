$(document).ready(function() {

    var openWeatherKey = "b10bebbbf017be387f3696dc3a2bb870";
    /* 
        to set item in localstorage

        vat obj = {
            name:"abc",
            age:25
        }
        localstorage.setItem("objName", (obj);

        var data = localsorage.getItem("objName");
    */
    $(".btn").on("click", function(e){
        e.preventDefault();
        var userSearch =$("#locSearch").val();
        console.log("City name: "+userSearch);
        var queryURL = "https://www.api.openweathermap.org/data/2.5/weather?q";


        $.ajax({
            url: "https://www.api.openweathermap.org/data/2.5/weather?",
            method: "GET",
            data: {
                q: userSearch,
                key: openWeatherKey
            }
        }).then(function(response){
            console.log(response);

            var temp = $(".temp");
            $(temp).append("response./*pathway to temp if server was responding*/");

            var humid = $(".humidity");
            $(humid).append("response./*pathway to humidity if server was responding*/");

            var wind = $(".windSpd");
            $(wind).append("response./*pathway to wind speed if server was responding*/");

            var UV = $(".uvIndex");
            $(UV).append("response./*pathway to uv index if server was responding*/");
        });

        $.ajax({
            url: "api.openweathermap.org/data/2.5/forecast?",
            method: "GET",
            data: {
                q: userSearch,
                key: openWeatherKey
            }
        }).then(function(response){
            console.log(response);
            var forcastCardLoc = $(".cards")
            $
        })
    });
});

