var weatherobj;
var norisobj;
var quoteobj;

function getCity() {

    var city = $('.input-city').val();


    $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=cc8ef8e5c209d938ab3801daa42b5e31', function (data, status) {

        weatherobj = data;

        var tempInFahrenheit = Math.round(((weatherobj.main.temp-273.15)*1.8)+32);

        var windSpeedInMPH = Math.round(weatherobj.wind.speed * 2.2369);


        $("#weather-picture").attr("src","https://openweathermap.org/img/w/"+weatherobj.weather[0].icon+".png");
        $('.condition').html('<h2>'+ weatherobj.weather[0].description.toUpperCase() +'</h2>');
        $('.temp').html('<h2>'+ tempInFahrenheit +'°F</h2>');
        $('.wind-speed').html('<h2> WIND SPEED: '+ windSpeedInMPH +'MPH</h2>');

    });
}

function getNoris() {

    $(function () {
        $.get('https://api.chucknorris.io/jokes/random', function (data, status) {

            norisobj = data;

            $("#noris-picture").attr("src", norisobj.icon_url);
            $('.noris-joke').html(norisobj.value);


        });
    })

}

function getQuote() {
    $(function () {
        $.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=', function (data, status) {

            quoteobj = data;

            $('.quote').html(quoteobj[0].content + '<p> - '+quoteobj[0].title+'</p>');

        });
    })
}

$(function () {

    $('.get-noris').click(function () {
        getNoris();
    });

    $('.get-quote').click(function () {
        getQuote();
    });


});