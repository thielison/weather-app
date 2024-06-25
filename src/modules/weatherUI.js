import { getDay, format } from "date-fns";

const cityCountryEl = document.querySelector("section.city-local-time-info .city");
const localTimeEl = document.querySelector("section.city-local-time-info .localtime");
const temperatureEl = document.querySelector("div.temp-text-info .temperature");
const currentClimateTextEl = document.querySelector("div.temp-text-info .current-climate-text");
const lowestTempEl = document.querySelector(".l-temp-h-temp .lowest-temp");
const highestTempEl = document.querySelector(".l-temp-h-temp .highest-temp");
const feelsLikeTempEl = document.querySelector(".l-temp-h-temp .feels-like-temp");
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

    currentClimateTextEl.textContent = weatherData.currentCondition;
    humidityEl.textContent = `${weatherData.humidity}%`;

    chanceOfRainEl.textContent = `${weatherData.chanceOfRain}%`;
    sunriseEl.textContent = `${weatherData.sunrise}`;
    sunsetEl.textContent = `${weatherData.sunset}`;

    const currentScalesSelected = document.querySelector(".temperature-scales").dataset.togglePosition;

    if (currentScalesSelected === "C") {
        temperatureEl.textContent = `${weatherData.currentTempC} °C`;
        lowestTempEl.textContent = `L: ${weatherData.lowestTempC}°`;
        highestTempEl.textContent = `H: ${weatherData.highestTempC}°`;
        feelsLikeTempEl.textContent = `Feels Like: ${weatherData.feelsLikeC}°`;
        precipitationEl.textContent = `${weatherData.precipitationMm}mm`;
        windEl.textContent = `${weatherData.windkph}km/h`;
    } else if (currentScalesSelected === "F") {
        temperatureEl.textContent = `${weatherData.currentTempF} °F`;
        lowestTempEl.textContent = `L: ${weatherData.lowestTempF}°`;
        highestTempEl.textContent = `H: ${weatherData.highestTempF}°`;
        feelsLikeTempEl.textContent = `Feels Like: ${weatherData.feelsLikeF}°`;
        precipitationEl.textContent = `${weatherData.precipitationIn}in`;
        windEl.textContent = `${weatherData.windmph}mph`;
    }
};

// This function is used to display a loading icon while fetching data
// When the loading icon is visible, all elements in the page are hidden
const toggleElementsVisibility = () => {
    const paraElements = document.querySelectorAll("p");
    const loadingIcon = document.querySelector(".loading-icon");

    // Ensures that loadingIcon exists before trying to toggle its class, preventing potential errors
    if (loadingIcon) {
        loadingIcon.classList.toggle("visible");
    }

    paraElements.forEach((para) => {
        para.classList.toggle("hidden");
    });
};

export { displayWeatherData, toggleElementsVisibility };
