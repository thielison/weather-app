import "./styles/main.css";

const apiKey = "fd654da885e9428aaa611606240606";
const para = document.getElementById("weather-info-para");

const fetchWeatherData = async (location) => {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
            { mode: "cors" }
        );

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error: ", error);
        throw error;
    }
};

const showWeatherData = async (location) => {
    try {
        const data = await fetchWeatherData(location);
        para.textContent = data.current.condition.text;
    } catch (error) {
        console.error("Error displaying weather data: ", error);
    }
};

document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const location = document.getElementById("location").value;
    showWeatherData(location);
});
