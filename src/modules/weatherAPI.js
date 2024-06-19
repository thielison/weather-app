const apiKey = "fd654da885e9428aaa611606240606";

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

export default fetchWeatherData;
