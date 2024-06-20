import "./assets/styles/main.css";
import getWeatherData from "./modules/weatherUI";

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

document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const isValueMissing = validateInputField();

    if (!isValueMissing) getWeatherData();
});
