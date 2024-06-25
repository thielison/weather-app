const apiKey = "fd654da885e9428aaa611606240606";

// Object Destructuring
// This function receives the data fetched from the WeatherAPI and processes it.
// location, current, and forecast are properties of the weatherData object.
const processWeatherData = ({ location, current, forecast }) => {
    const { name: cityName, country: countryName, localtime: localDateTime } = location;

    const {
        temp_c: currentTempC,
        temp_f: currentTempF,
        condition: { text: currentCondition },
        feelslike_c: feelsLikeC,
        feelslike_f: feelsLikeF,
        humidity,
        precip_mm: precipitationMm,
        precip_in: precipitationIn,
        wind_kph: windkph,
        wind_mph: windmph,
    } = current;

    const {
        mintemp_c: lowestTempC,
        mintemp_f: lowestTempF,
        maxtemp_c: highestTempC,
        maxtemp_f: highestTempF,
        daily_chance_of_rain: chanceOfRain,
    } = forecast.forecastday[0].day;

    const { sunrise, sunset } = forecast.forecastday[0].astro;

    return {
        cityName,
        countryName,
        localDateTime,
        currentTempC,
        currentTempF,
        currentCondition,
        lowestTempC,
        lowestTempF,
        highestTempC,
        highestTempF,
        feelsLikeC,
        feelsLikeF,
        humidity,
        precipitationMm,
        precipitationIn,
        chanceOfRain,
        windkph,
        windmph,
        sunrise,
        sunset,
    };
};

// Fetch WeatherAPI and returns the already processed data.
const fetchWeatherData = async (location) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`, {
            mode: "cors",
        });

        if (!response.ok) {
            throw new Error(`Network response was not OK. Try again with a different input.`);
        }

        const data = await response.json();

        // Process and return only necessary weather info from the API
        const processedWeatherData = processWeatherData(data);

        return processedWeatherData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export { processWeatherData, fetchWeatherData };
