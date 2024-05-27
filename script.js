function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#tempData");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
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
