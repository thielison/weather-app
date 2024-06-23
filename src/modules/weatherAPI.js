const apiKey = "fd654da885e9428aaa611606240606";

const processWeatherData = (weatherData) => {
    console.log(weatherData);

    const cityName = weatherData.location.name;
    const countryName = weatherData.location.country;
    const localDateTime = weatherData.location.localtime;

    const currentTempC = weatherData.current.temp_c;
    const currentCondition = weatherData.current.condition.text;
    const lowestTempC = weatherData.forecast.forecastday[0].day.mintemp_c;
    const highestTempC = weatherData.forecast.forecastday[0].day.maxtemp_c;
    const feelsLikeC = weatherData.current.feelslike_c;
    const humidity = weatherData.current.humidity;
    const precipitationMm = weatherData.current.precip_mm;
    const chanceOfRain = weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
    const wind = weatherData.current.wind_kph;
    const sunrise = weatherData.forecast.forecastday[0].astro.sunrise;
    const sunset = weatherData.forecast.forecastday[0].astro.sunset;

    return {
        cityName,
        countryName,
        localDateTime,
        currentTempC,
        currentCondition,
        lowestTempC,
        highestTempC,
        feelsLikeC,
        humidity,
        precipitationMm,
        chanceOfRain,
        wind,
        sunrise,
        sunset,
    };
};

const fetchWeatherData = async () => {
    const location = document.getElementById("location").value;

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`, {
            mode: "cors",
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();

        // Process and return only necessary weather info from the API
        const processedWeatherData = processWeatherData(data);
        return processedWeatherData;
    } catch (error) {
        console.error("Fetch error: ", error);
        throw error;
    }
};

export { processWeatherData, fetchWeatherData };
