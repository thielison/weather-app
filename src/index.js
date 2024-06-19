import "./assets/styles/main.css";
import showWeatherData from "./modules/weatherUI";

document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    showWeatherData();
});
