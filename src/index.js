import "./assets/styles/main.css";
import displayWeatherData from "./modules/weatherUI";
import { fetchWeatherData } from "./modules/weatherAPI";

const validateInputField = () => {
    const input = document.getElementById("location");
    const validityState = input.validity;

    if (validityState.valueMissing) {
        input.setCustomValidity("You need to enter a city name!");
    } else {
        input.setCustomValidity("");
    }

    input.reportValidity();

    return validityState.valueMissing;
};

document.getElementById("submit-btn").addEventListener("click", async (e) => {
    e.preventDefault();

    const isValueMissing = validateInputField();

    if (!isValueMissing) {
        const weatherData = await fetchWeatherData();
        displayWeatherData(weatherData);
    }
});
