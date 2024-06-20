import { getDay, format } from "date-fns";
import fetchWeatherData from "./weatherAPI";

const cityCountryElement = document.querySelector(".city-country-names");
const localTimeElement = document.querySelector(".local-time");
const lastUpdateElement = document.querySelector(".last-updated-climate");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const displayWeatherData = (cityName, countryName, localDateTime, lastUpdateTime, currentCondition) => {
    cityCountryElement.textContent = `${cityName}, ${countryName}`;

    const numOfDay = getDay(localDateTime);
    localTimeElement.textContent = `${daysOfWeek[numOfDay]} ${format(localDateTime, "dd MM yyyy | hh:mm")}`;
    lastUpdateElement.textContent = `Last updated: ${format(lastUpdateTime, "dd MM yyyy | hh:mm")}`;
};

const getWeatherData = async () => {
    const location = document.getElementById("location").value;

    try {
        const weatherData = await fetchWeatherData(location);

        const currentCondition = weatherData.current.condition.text;
        const cityName = weatherData.location.name;
        const countryName = weatherData.location.country;
        const localDateTime = weatherData.location.localtime;
        const lastUpdateTime = weatherData.current.last_updated;

        displayWeatherData(cityName, countryName, localDateTime, lastUpdateTime, currentCondition);

        console.log(weatherData);
    } catch (error) {
        console.error("Error displaying weather data: ", error);
    }
};

export default getWeatherData;
