const apiKey = "311fbfc0f6c9fa11bbce535d0f760049";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const cardSelector = document.querySelector('.card');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +'°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main == 'Clouds'){
        document.querySelector('.weather-icon').src = 'cloudy.png';
        document.querySelector('.weather-name').innerHTML = 'Cloudy';
    }
    else if(data.weather[0].main == 'Haze'){
        document.querySelector('.weather-icon').src = 'haze.png';
        document.querySelector('.weather-name').innerHTML = 'Haze';
    }
    else if(data.weather[0].main == 'Mist'){
        document.querySelector('.weather-icon').src = 'mist.png';
        document.querySelector('.weather-name').innerHTML = 'Mist';
    }
    else if(data.weather[0].main == 'Clear'){
        document.querySelector('.weather-icon').src = 'clear sky.png';
        document.querySelector('.weather-name').innerHTML = 'Clear';
    }
    else if(data.weather[0].main == 'Drizzle'){
        document.querySelector('.weather-icon').src = 'rain_light.png';
        document.querySelector('.weather-name').innerHTML = 'Light Rain';
    }
    else if(data.weather[0].main == 'Thunderstorm'){
        document.querySelector('.weather-icon').src = 'thunderstorms.png';
        document.querySelector('.weather-name').innerHTML = 'Thunderstorm';
    }
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
})
