
const apiKey = "a7b55d989d46f876c9f77bd2d1ea48fb"; 
let currentUnit = "metric"; 

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?";


let lastCity = "";
let lastCoords = null; 

const searchBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const locBtn = document.querySelector("#loc-btn");
const unitToggle = document.querySelector("#unit-toggle");

const weatherIcon = document.querySelector(".weather-icon");
const errorText = document.querySelector(".error");

const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const flagEl = document.querySelector(".flag");
const forecastContainer = document.querySelector("#forecast");


function unitSymbol() {
  return currentUnit === "metric" ? "°C" : "°F";
}

function speedUnit() {
  return currentUnit === "metric" ? "km/h" : "mph";
}


function getIconPath(main) {
  if (main === "Clouds") return "images/clouds.png";
  if (main === "Clear") return "images/clear.png";
  if (main === "Rain") return "images/rain.png";
  if (main === "Drizzle") return "images/drizzle.png";
  if (main === "Mist" || main === "Fog" || main === "Haze")
    return "images/mist.png";
  if (main === "Snow") return "images/snow.png";
  return "images/clear.png";
}


function setFlag(countryCode) {
  if (!countryCode) {
    flagEl.style.display = "none";
    return;
  }
  
  flagEl.src = `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;
  flagEl.style.display = "block";
}


function getDayName(ts) {
  const date = new Date(ts * 1000);
  return date.toLocaleDateString("en-US", { weekday: "short" }); 
}


function renderForecast(list) {
  forecastContainer.innerHTML = "";

  
  for (let i = 0; i < list.length; i += 8) {
    const item = list[i];
    const day = getDayName(item.dt);
    const main = item.weather[0].main;
    const icon = getIconPath(main);
    const temp = Math.round(item.main.temp) + unitSymbol();

    const div = document.createElement("div");
    div.className = "forecast-item";
    div.innerHTML = `
      <p class="forecast-day">${day}</p>
      <img src="${icon}" alt="${main}">
      <p class="forecast-temp">${temp}</p>
    `;
    forecastContainer.appendChild(div);
  }
}


async function fetchWeatherByCity(city) {
  const url =
    weatherUrl +
    `q=${encodeURIComponent(city)}&units=${currentUnit}&appid=${apiKey}`;

  const res = await fetch(url);
  if (res.status === 404) {
    throw new Error("CITY_NOT_FOUND");
  }
  if (!res.ok) throw new Error("API_ERROR");
  return res.json();
}

async function fetchForecastByCity(city) {
  const url =
    forecastUrl +
    `q=${encodeURIComponent(city)}&units=${currentUnit}&appid=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("API_ERROR");
  return res.json();
}

async function fetchWeatherByCoords(lat, lon) {
  const url =
    weatherUrl +
    `lat=${lat}&lon=${lon}&units=${currentUnit}&appid=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("API_ERROR");
  return res.json();
}

async function fetchForecastByCoords(lat, lon) {
  const url =
    forecastUrl +
    `lat=${lat}&lon=${lon}&units=${currentUnit}&appid=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("API_ERROR");
  return res.json();
}


async function showWeatherForCity(city) {
  const trimmedCity = city.trim();
  if (!trimmedCity) {
    errorText.textContent = "Please enter a city name.";
    return;
  }

  try {
    errorText.textContent = "Loading...";

    const [weatherData, forecastData] = await Promise.all([
      fetchWeatherByCity(trimmedCity),
      fetchForecastByCity(trimmedCity),
    ]);

    lastCity = weatherData.name;
    lastCoords = null;

    updateCurrentWeather(weatherData);
    renderForecast(forecastData.list);

    errorText.textContent = "";
  } catch (err) {
    if (err.message === "CITY_NOT_FOUND") {
      errorText.textContent = "City not found. Try another name.";
    } else {
      errorText.textContent = "Unable to get weather. Try again.";
    }
  }
}

async function showWeatherForCoords(lat, lon) {
  try {
    errorText.textContent = "Loading...";

    const [weatherData, forecastData] = await Promise.all([
      fetchWeatherByCoords(lat, lon),
      fetchForecastByCoords(lat, lon),
    ]);

    lastCity = "";
    lastCoords = { lat, lon };

    updateCurrentWeather(weatherData);
    renderForecast(forecastData.list);

    errorText.textContent = "";
  } catch (err) {
    errorText.textContent = "Unable to get location weather.";
  }
}

function updateCurrentWeather(data) {
  cityEl.textContent = data.name;
  tempEl.textContent = Math.round(data.main.temp) + unitSymbol();
  humidityEl.textContent = data.main.humidity + "%";
  windEl.textContent = data.wind.speed + " " + speedUnit();

  const main = data.weather[0].main;
  weatherIcon.src = getIconPath(main);

  setFlag(data.sys && data.sys.country);
}


searchBtn.addEventListener("click", () => {
  showWeatherForCity(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    showWeatherForCity(searchBox.value);
  }
});

locBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    errorText.textContent = "Geolocation not supported in this browser.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      showWeatherForCoords(latitude, longitude);
    },
    () => {
      errorText.textContent = "Allow location access to use this feature.";
    }
  );
});


unitToggle.addEventListener("click", () => {
  currentUnit = currentUnit === "metric" ? "imperial" : "metric";
  unitToggle.textContent = currentUnit === "metric" ? "°C" : "°F";

  
  if (lastCoords) {
    showWeatherForCoords(lastCoords.lat, lastCoords.lon);
  } else if (lastCity) {
    showWeatherForCity(lastCity);
  } else if (searchBox.value.trim()) {
    showWeatherForCity(searchBox.value);
  }
});
