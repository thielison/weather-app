const apiKey = "fd654da885e9428aaa611606240606";

const processWeatherData = (weatherData) => {
    const currentCondition = weatherData.current.condition.text;
    const cityName = weatherData.location.name;
    const countryName = weatherData.location.country;
    const localDateTime = weatherData.location.localtime;
    const lastUpdateTime = weatherData.current.last_updated;

    return { cityName, countryName, localDateTime, lastUpdateTime, currentCondition };
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
