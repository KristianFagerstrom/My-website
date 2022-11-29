let button = document.querySelector(".nappi");
let inputvalue = document.querySelector(".search-laatikko");
let temp = document.querySelector(".current .temp");
let description = document.querySelector(".current .weather");
let city = document.querySelector(".location .kaupunki");
let date = document.querySelector(".location .päivämäärä");

//nappi funktio
button.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=92e59231142e620888c7b8222e940a6e`
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("Please Enter Correct City Name"));
});

const displayData = (weather) => {
  temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
  description.innerText = `${weather.weather[0].description}`;
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  date.innerText = dateBuilder(now);
};
//päivämäärät dataan
function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
