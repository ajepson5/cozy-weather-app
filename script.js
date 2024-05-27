function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  console.log(searchInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
