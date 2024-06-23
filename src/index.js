import "./assets/styles/main.css";
import { displayWeatherData, toggleElementsVisibility } from "./modules/weatherUI";
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

const handleWeatherFetch = async (defaultLocation) => {
    const location = defaultLocation || document.getElementById("location").value;

    // For validation failures, the function returns early to avoid unnecessary operations.
    if (!defaultLocation && validateInputField()) {
        return;
    }

    try {
        // Display loading icon (and hides page elements) while fetching data
        toggleElementsVisibility();

        const weatherData = await fetchWeatherData(location);
        displayWeatherData(weatherData);
    } catch (error) {
        alert(error);
    } finally {
        // Hide loading icon (and display page elements) after fetching data
        toggleElementsVisibility();
    }
};

document.getElementById("submit-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    await handleWeatherFetch();
});

// Starts the page with a default location
document.addEventListener("DOMContentLoaded", async () => {
    await handleWeatherFetch("New York");
});
