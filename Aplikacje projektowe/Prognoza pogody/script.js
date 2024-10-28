


class WeatherFetcher {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.setupEventListeners();
    }

    setupEventListeners() {
        let cityInput = document.getElementById('city-input');
        
        document.getElementById('search-weather').addEventListener('click', () => {
            const city = cityInput.value.trim();
            if (city) {
                this.retrieveWeatherData(city);
            }
        });

        cityInput.addEventListener('keypress', (event) => {
            // Sprawdza, czy naciśnięty klawisz to Enter (kod klawisza 13)
            if (event.key === 'Enter') {
                const city = cityInput.value.trim();
                if (city) {
                    this.retrieveWeatherData(city);
                }
            }
        });
    }

    retrieveWeatherData(city) {
        const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric`;

        fetch(urlCurrent)
            .then(res => res.json())
            .then(data => this.displayCurrentWeather(data))
            .catch(err => console.error("Error fetching current weather:", err));

        fetch(urlForecast)
            .then(res => res.json())
            .then(data => this.displayForecastWeather(data))
            .catch(err => console.error("Error fetching weather forecast:", err));
    }

    displayCurrentWeather(weatherData) {
        if (weatherData.cod !== 200) {
            alert('City not found');
            return;
        }

        const {temp} = weatherData.main;
        const description = weatherData.weather[0].description;
        const iconCode = weatherData.weather[0].icon;

        document.getElementById('current-temp').innerHTML = `${Math.round(temp)}°C`;
        document.getElementById('current-info').textContent = description;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const weatherIcon = document.getElementById('current-icon');
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        weatherIcon.style.display = 'block';
    }

    displayForecastWeather(forecastData) {
        const forecastContainer = document.getElementById('daily-forecast');
        forecastContainer.innerHTML = '';

        forecastData.list.forEach((item, index) => {
            if (index % 8 === 0) {  
                const { dt_txt } = item;
                const { temp } = item.main;
                const iconCode = item.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

                const forecastElement = document.createElement('div');
                forecastElement.className = 'daily-forecast-item';
                forecastElement.innerHTML = `
                    <div class="forecast-date">${dt_txt.split(' ')[0]}</div>
                    <img src="${iconUrl}" alt="Weather icon" class="forecast-icon">
                    <div class="forecast-temp">${Math.round(temp)}°C</div>
                `;

                forecastContainer.appendChild(forecastElement);
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '248d369aa6322178f4f2620b2da7f29c';
    new WeatherFetcher(apiKey);
});













