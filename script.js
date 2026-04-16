// Neon Weather App JavaScript Code

// Function to fetch weather data from API
async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

// Function to display weather data
function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `<h2>Weather in ${data.name}</h2>
                                   <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                                   <p>${data.weather[0].description}</p>`;
}

// Event listener for form submission
document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city-input').value;
    const weatherData = await fetchWeather(city);
    displayWeather(weatherData);
});

// Initial call to fetch weather for default city
fetchWeather('London').then(displayWeather);