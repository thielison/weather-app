import { getDay, format } from "date-fns";

const cityCountryEl = document.querySelector("section.city-local-time-info .city");
const localTimeEl = document.querySelector("section.city-local-time-info .localtime");
const temperatureEl = document.querySelector("div.temp-text-info .temperature");
const currentClimateTextEl = document.querySelector("div.temp-text-info .current-climate-text");
const lowestTempElC = document.querySelector(".l-temp-h-temp .lowest-temp");
const highestTempElC = document.querySelector(".l-temp-h-temp .highest-temp");
const feelsLikeTempElC = document.querySelector(".l-temp-h-temp .feels-like-temp");
const humidityEl = document.getElementById("humidity");
const precipitationEl = document.getElementById("precipitation");
const chanceOfRainEl = document.getElementById("chance-of-rain");
const windEl = document.getElementById("wind");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const displayWeatherData = (weatherData) => {
    cityCountryEl.textContent = `${weatherData.cityName}, ${weatherData.countryName}`;

    const numOfDay = getDay(weatherData.localDateTime);
    localTimeEl.textContent = `${daysOfWeek[numOfDay]} ${format(weatherData.localDateTime, "dd MMMM yyyy | hh:mm")}`;

    temperatureEl.textContent = `${weatherData.currentTempC} °C`;
    currentClimateTextEl.textContent = weatherData.currentCondition;
    lowestTempElC.textContent = `${weatherData.lowestTempC}°`;
    highestTempElC.textContent = `${weatherData.highestTempC}°`;
    feelsLikeTempElC.textContent = `${weatherData.feelsLikeC}°`;
    humidityEl.textContent = `${weatherData.humidity}%`;
    precipitationEl.textContent = `${weatherData.precipitationMm}mm`;
    chanceOfRainEl.textContent = `${weatherData.chanceOfRain}%`;
    windEl.textContent = `${weatherData.wind}km/h`;
    sunriseEl.textContent = `${weatherData.sunrise}`;
    sunsetEl.textContent = `${weatherData.sunset}`;
};

export default displayWeatherData;
