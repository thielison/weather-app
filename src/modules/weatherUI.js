import { getDay, format } from "date-fns";

const cityCountryElement = document.querySelector(".city-country-names");
const localTimeElement = document.querySelector(".local-time");
const lastUpdateElement = document.querySelector(".last-updated-climate");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const displayWeatherData = (weatherData) => {
    cityCountryElement.textContent = `${weatherData.cityName}, ${weatherData.countryName}`;

    const numOfDay = getDay(weatherData.localDateTime);
    localTimeElement.textContent = `${daysOfWeek[numOfDay]} ${format(
        weatherData.localDateTime,
        "dd MMMM yyyy | hh:mm"
    )}`;
    lastUpdateElement.textContent = `Last updated: ${format(weatherData.lastUpdateTime, "dd MMMM yyyy | hh:mm")}`;
};

export default displayWeatherData;
