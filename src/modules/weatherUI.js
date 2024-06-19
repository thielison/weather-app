import fetchWeatherData from "./weatherAPI";

const para = document.getElementById("weather-info-para");

const showWeatherData = async () => {
    const location = document.getElementById("location").value;

    try {
        const weatherData = await fetchWeatherData(location);
        console.log(weatherData);
        para.textContent = weatherData.current.condition.text;
    } catch (error) {
        console.error("Error displaying weather data: ", error);
    }
};

export default showWeatherData;
