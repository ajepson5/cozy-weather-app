function formatDay(date) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  return `${day}`;
}

function formatTime(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#tempData");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidityData");
  let windElement = document.querySelector("#windData");
  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = response.data.temperature.humidity + " %";
  windElement.innerHTML = response.data.wind.speed + " mph";
  let date = new Date(response.data.time * 1000);
  let dayElement = document.querySelector("#day");
  let timeElement = document.querySelector("#time");
  console.log(dayElement);
  dayElement.innerHTML = formatDay(date) + ",";
  timeElement.innerHTML = formatTime(date);
}

function searchCity(city) {
  let apiKey = "f83bab9b2e05c12e02f13t5d42787o13";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(updateWeatherData);
}

function searchSubmission(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  searchCity(searchInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchSubmission);

searchCity("Stanford");
