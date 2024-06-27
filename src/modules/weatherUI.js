import { getDay, format } from "date-fns";
import * as images from "./bg_images";

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

// Each weather condition has a specific code
// https://www.weatherapi.com/docs/weather_conditions.json
// This function changes the background based on the specific weather condition codes
const changeBackgroundImage = (code) => {
    const myImg = new Image();

    switch (code) {
        case 1000:
            myImg.src = images.sunnyClear;
            break;
        case 1003:
            myImg.src = images.partlyCloudy;
            break;
        case 1006:
        case 1009:
            myImg.src = images.cloudy;
            break;
        case 1030:
        case 1135:
        case 1147:
            myImg.src = images.foggy;
            break;
        case 1150:
        case 1153:
        case 1168:
        case 1171:
        case 1172:
            myImg.src = images.drizzle;
            break;
        case 1063:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1198:
        case 1195:
        case 1201:
        case 1240:
        case 1243:
        case 1246:
            myImg.src = images.rainy;
            break;
        case 1114:
        case 1117:
        case 1066:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1255:
        case 1258:
        case 1279:
        case 1282:
            myImg.src = images.snowy;
            break;
        case 1069:
        case 1204:
        case 1207:
        case 1237:
        case 1249:
        case 1252:
        case 1261:
        case 1263:
            myImg.src = images.sleet;
            break;
        case 1087:
        case 1273:
        case 1276:
            myImg.src = images.stormy;
            break;
        default:
            myImg.src = images.defaultImage;
    }

    document.body.style.backgroundImage = `url("${myImg.src}")`;
};

// This function is responsible for displaying the weather data based on the data from the API
const displayWeatherData = (weatherData) => {
    changeBackgroundImage(weatherData.code);

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
