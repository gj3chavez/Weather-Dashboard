
let today = dayjs().format('MM/DD/YYYY');
let cityList = [];

let APIkey = "87fe310e9bafd2b67ff099e357f73ff1";



function currentWeather(city){
    

    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?qt=${city}&units=imperial&appid=${APIkey}`;

    $.ajax({
        url: queryURL,
        method:"GET",
    }).then(function(currentWeather){
        console.log(currentWeather);

        $("#forecast_content").css("display", "block");
        $("#current_city").empty();

        let weatherIcon = currentWeather.weather[0].icon;
        let iconURL = `https://api.openweathermap.org/img/w/${weatherIcon}.png`;
        
  let currentCity = $(`
    <h2 id='currentCity'>
    ${currentWeather.name} ${today}<img src='${iconURL}' alt='${currentWeather.weather[0].description}'/></h2>
    <p> Temp:${currentWeather.main.temp} °F</p>
    <p> Humidity:${currentWeather.main.humidity} \%</p>
    <p> Wind Speed:${currentWeather.main.speed} MPH</p>
  `);

$('#current_city').append(currentCity);

let lat = currentWeather.coord.lat;
let lon = currentWeather.coord.lon;
let uviQueryUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`;

$.ajax({
    url: uviQueryUrl,
    method: 'GET'
}).then(function(uviResult){
    console.log(uviResult);

    let uvIndex = uviResult.value;
    let uviIndex
})
    });
}

function futureWeather(lat, lon){

    let futureURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly,alert&appid=${APIkey}`;
    $.ajax({
        url: futureURL,
        method: "GET",
    }).then(function(futureData){
        console.log(futureData);
        $('#forecast').empty();

        for (let i = 1; i < 6; i++){
            let forecast ={
                date: futureData.daily[i].dt,
                icon: futureData.daily[i].weather[0].icon,
                temp: futureData.daily[i].temp.day,
                humidity: futureData.daily[i].humidity
            };

            let present = moment.unix(forecast.date).format('MM/DD/YYYY');
            let iconURL = `<img src='https://api.openweathermap.org/img/w/${forecast.icon}.png' alt='${futureData.daily[i].weather[0].main}'/>`;


            let futureResults = $(`
                <div class= 'pl-4'>
                    <div class= 'card pl-4 pt-4 mb-4 bg-primary text-dark' style='width: 13rem;>
                        <div class= 'card-body'>
                            <h5>${present}</h5>
                            <p>${iconURL}</p>
                            <p> Temp:${forecast.temp} °F</p>
                            <p> Humidity:${forecast.humidity} \%</p>
                        </div>
                    </div>
                </div>
            `);

            $('#forecast').append(futureResults);
            
        }

});
}

$('#submit').on('click', function(event){
    event.preventDefault();

    let city = $('#enter_city').val().trim();
    currentWeather(city);
    if (!cityList.includes(city)){
        cityList.push(city);
        let newSearchCity = $(`<li class='city_container'>${city}</li>`);
        $('#city_container').append(newSearchCity);
    };

    localStorage.setItem('city', JSON.stringify(cityList));
    console.log(cityList);
});

$(document).on('click', '.city_container', function(){
    let showCity = $(this).text();
    currentWeather(showCity);
});

$(document).ready(function(){
    let lastSearchedCity = JSON.parse(localStorage.getItem('city'));

    if(lastSearchedCity !== null){
        let searchedHistory = lastSearchedCity.length -1;
        let searchedCity = lastSearchedCity[searchedHistory];
        currentWeather(searchedCity);
        console.log(`Searched city: ${searchedCity}`);

    }
});

    
    
   