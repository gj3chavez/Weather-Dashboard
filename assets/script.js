// let currentday = dayjs().format('MM/DD/YYYY');
// let searchHistory = [];
// let showHistory = false;

// let searchFormEl = document.querySelector('#search_form');
// let cityInputEl = document.querySelector('#city_input');
// let searchHistory = document.querySelector('#search_history');
// let currentWeatherEl = document.querySelector('#current_weather');
// let cityContainer = document.querySelector('current_weather');
// let citySearch = document.getElementById('city_search');
// let forecast = document.querySelector('#forecast')

let today =moment().format('L');
let cityList = [];
let key = '87fe310e9bafd2b67ff099e357f73ff1';



function currentWeather(){
    

    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid={key}`;

    $.ajax({
        url: queryURL,
        method "GET",
    }).then(function(currentWeather){
        console.log(currentWeather);

        $("#forecast_content").css("display", "block");
        $("#current_city").empty();

        let weatherIcon = weatherForecast.weather[0].icon;
        let iconURL = `https://api.openweathermap.org/img/w/${weatherIcon}.png`;
        

        let currentCity = $(`<h2 id='currentCity'>
        ${weatherForecast.name} ${today}<img src='${iconURL}' alt='${weatherForecast.weather[0].description}'/></h2>
        <p>Temperature: ${weatherForecast.main.temp} °F</p>
        <p>Humidity: ${weatherForecast.main.temp} °F</p>
        <p>Temperature: ${weatherForecast.main.temp} °F</p>`)
    })

    
    
   

//     let citySearchHistorybutton =document.createElement('button');
//     citySearchHistorybutton.className = "history_search";
//     citySearchHistorybutton.textContent = citySearchInput;

//     document.querySelector('.search_list').append(citySearchHistorybutton);

//     $('.search_btn').click(function(event){
//         event.preventDefault();

//         clearForecast();

//         let enterCity = this.textContent;
//         getGeoLocation(enterCity);
//     })

//     getGeoLocation(enterCityInput);
// })

// function getGeoLocation(city){
//     fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=87fe310e9bafd2b67ff099e357f73ff1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
         
//         let currentCityLat = data[0].lat;
//         let currentCityLon = data[0].lon;

//         getCurrentWeather(currentCityLat, currentCityLon);
//         getWeatherForecast(currentCityLat, currentCityLon);

//     }).catch(err => console.error(err));
// }

// function getCurrentWeather(lat, lon) {

//     fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=87fe310e9bafd2b67ff099e357f73ff1')
//     .then(response => response.json())
//     .then(function(response){
//         console.log(response);

//         let currentWeatherIcon = 'https:// openweathermap.org/img' + response.weather[0].icon +'@2X.png';
//         let currentWeatherIconImg = document.createElement('img');
//         currentWeatherIconImg.setAttribute('src', currentWeatherIcon);
//         currentWeatherIconImg.id = current_weather;

//         let cityName = document.createElement('div');
//         cityName.textContent = response.name = '_' + today;
//         cityName.id = 'city';

//         let currentTemp = document.createElement('div');
//         currentTemp.textContent = 'Temp: ' + response.main.temp +'\u00b0F';
//         currentTemp.id = 'temp';

//         let currentWind = document.createElement('div');
//         currentWind.textContent = 'Wind: ' + response.wind.speed +'MPH';
//         currentWind.id = 'wind';

//         let currentHumidity = document.createElement('div');
//         currentHumidity.textContent = 'Humidity: ' + response.main.humidity +'%';
//         currentHumidity.id = 'humidity';


//         document.querySelector('.search_list').innerHTML = '';
//         document.querySelector('.search_list').append(cityName, currentTemp, currentWind, currentHumidity);
//         document.querySelector('.search_list').appendChild(currentWeatherIcon);
        
//     })
//     .catch(err => console.error(err));
// }

// function getWeatherForecast(lat, lon){
//     fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=87fe310e9bafd2b67ff099e357f73ff1&units=imperial')
//     .then(response => response.json())
//     .then(function(response){
//         console.log(response);

//         let counter = 0;

//         clearForecast();

//         for (let i = 5; i < response.list.length; i += 6) {
//             counter++

//             futureDate + dayjs(today).add(counter, 'day').format('MM/DD/YYYY');

//             let date = document.createElement('div');
//             date.textContent = futureDate;
//             date.className = 'date';

//             let weatherForecastIcon = 'https://openweather.org/img/wn/' + response.list[i].weather[0].icon + '@2x.png';
//             let weatherForecastIconImg = document.createElement('img');
//             weatherForecastIconImg.setAttribute('src', weatherForecastIcon);
//             weatherForecastIconImg.className = 'forecast-weather-icon';

//             let forecastTemp = document.createElement('div');
//             forecastTemp.textContent = 'Temp' + response.list[i].main.temp +'\u00b0F';
//            forecastTemp.className = 'fore_temp';
    
//             let forecasttWind = document.createElement('div');
//             forecasttWind.textContent = 'Wind: ' + response.list[i].wind.speed +'MPH';
//             forecastWind.id = 'fore_wind';
    
//             let forecastHumidity = document.createElement('div');
//             forecastHumidity.textContent = 'Humidity: ' + response.list[i].main.humidity +'%';
//             forecastHumidity.id = 'fore_humidity';

//             document.querySelector('.forecast-' + counter).append(date, weatherForecastIconImg, forecastTemp, forecasttWind, forecastHumidity);
//         }
            
//         })
//         .catch(err => console.error(err));

//         }

// function createSearchHistory(){

//     let 
// }
  