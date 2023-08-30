
const apiKey = "c0dff8a115ca553b49eaf8805bf73f1d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".degree").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector(".humid").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Media/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Media/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Media/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Media/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Media/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

