async function getWeatherData(city){
    const apiKey = "e19b31d29dd2a6a32e1f805c276a0c33";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const response = await fetch (apiUrl);
    const data = await response.json();
    return data;
}

function updateCurrentWeather(data){
    const date = new Date(data.dt * 1000);
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    document.getElementById("date").textContent = "Current Weather for";
    document.getElementById("current_date").textContent = date.toLocaleString();
    document.getElementById("current_icon").setAttribute("src", iconUrl);

    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const description = data.weather[0].description;

    document.getElementById("temperature").textContent =`${temp} °F`;
    document.getElementById("humidity").textContent = `${humidity}%`;
    document.getElementById("wind").textContent = `${wind}m/s`;
    document.getElementById("description").textContent = data.weather[0].description;
}

async function updateForecast(city){
    const apiKey = "e19b31d29dd2a6a32e1f805c276a0c33";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    const response = await fetch (apiUrl);
    const data = await response.json();

    for (let i = 1; i <= 5; i++) {
        const date = new Date(data.list[i * 8 - 1].dt * 1000);
        const iconUrl = `http://openweathermap.org/img/wn/${data.list[i * 8 - 1].weather[0].icon}.png`;
        const temp = data.list[i * 8 - 1].main.temp;
        const humidity = data.list[i * 8 - 1].main.humidity;

        document.getElementById(`date${i}`).textContent = date.toLocaleDateString();
              document.getElementById(`icon-${String.fromCharCode(65 + i - 1)}`).setAttribute("src", iconUrl);
        document.getElementById(`temp-${i}`).textContent = `${temp} °F`;
        document.getElementById(`humi-${i}`).textContent = `${humidity}%`;
        
    }
}


document.getElementById("submit").addEventListener("click", async () => {
    const city = document.getElementById("enter_city").value;
    const data = await getWeatherData(city);
    updateCurrentWeather(data);
    updateForecast(city);
});