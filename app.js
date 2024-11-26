const API_KEY = "your_openweathermap_api_key"; // Replace with your API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        weatherResult.classList.remove("hidden");
        cityName.textContent = `Weather in ${data.name}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        condition.textContent = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred. Please try again later.");
    }
});
