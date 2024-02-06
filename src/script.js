async function fetchData() {
    const res=await fetch ("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=afd4b392ce63a6dd3ba7bf1f49cbb72e", );
    const record=await res.json();
    document.getElementById("date").innerHTML=record.coord.lon;
    document.getElementById("weather").innerHTML=record.weather[0].description;
    document.getElementById("humidity").innerHTML=record.main.humidity;
    document.getElementById("windspeed").innerHTML=record.wind.speed;
}
fetchData();