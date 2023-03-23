
let today =moment().format('L');
let cityList = [];
let key = '87fe310e9bafd2b67ff099e357f73ff1';



function currentWeather(city){
    

    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid={key}`;

    $.ajax({
        url: weatherURL,
        method:"GET",
    }).then(function(currentWeather){
        console.log(currentWeather);

        $("#forecast_content").css("display", "block");
        $("#current_city").empty();

        let weatherIcon = weatherForecast.weather[0].icon;
        let iconURL = `https://api.openweathermap.org/img/w/${weatherIcon}.png`;
        
  let currentCity = $(`
    <h2 id='currentCity'>
    ${weatherForecast.name} ${today}<img src='${iconURL}' alt='${weatherForecast.weather[0].description}'/></h2>
    <p> Temp:${weatherForecast.main.temp} °F</p>
    <p> Humidity:${weatherForecast.main.humidity} \%</p>
    <p> Wind Speed:${weatherForecast.main.speed} MPH</p>
  `);

$('#current_city').append(currentCity);
    });
}

function futureWeather(lat, lon){

    let futureURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&exclude=current,minutely,hourly,alert&appid={key}`;
    $.ajax({
        url: futureURL,
        method "GET",
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
                    <div class= 'card pl-4 pt-4 mb-4 bg-primary text-dark' style='width: 15rem;>
                        <div class= 'card'>
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

    let city = $('#city_input').val().trim();
    currentWeather(city);
    if (!cityList.includes(city)){
        cityList.push(city);
        let searchedCities = $(`<li class='show-cities>${city}</li>`);
        $('#city_container').append(searchedCities);
    };

    localStorage.setItem('city', JSON.stringify(cityList));
    console.log(cityList);
});

$(document).on('click', '.show-cities', function(){
    let showCity = $(this).text();
    currentWeather(showCity);
});

$(document).ready(function(){
    let cityListArr = JSON.parse(localStorage.getItem('city'));

    if(cityListArr !== null){
        let searchedHistory = cityListArr.length -1;
        let searchedCity = cityListArr[searchedHistory];
        currentWeather(searchedCity);
        console.log(`Searched city: ${searchedCity}`);

    }
});

    
    
   