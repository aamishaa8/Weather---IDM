const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const time1 = document.getElementById("time1");
const temp1 = document.getElementById("temp1");

const time2 = document.getElementById("time2");
const temp2 = document.getElementById("temp2");

const url1 = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m&timezone=auto";

const url2 = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.21&current=temperature_2m&timezone=auto";

// i first conneted my buttons from my html and also 
// then i made two variables as two urls beacuse of 2 cities, and then used fetch to request temp from meteo
// and then assesed the temp from the data from api

function shownewyorkWeather() {
const now = new Date();

time1.textContent = "Time: " + now.toLocaleTimeString("en-IE", {
    timeZone: "America/New_York"
});

fetch(url1)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const temp = data.current.temperature_2m;
        temp1.textContent = "Temperature: " + temp + "°C";
    })

}

  function showDelhiWeather() {
const now = new Date();

time2.textContent = "Time: " + now.toLocaleTimeString("en-IE", {
    timeZone: "Asia/Kolkata"
});

fetch(url2)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const temp = data.current.temperature_2m;
        temp2.textContent = "Temperature: " + temp + "°C";
    })

}
button1.addEventListener("click", shownewyorkWeather);
button2.addEventListener("click", showDelhiWeather);