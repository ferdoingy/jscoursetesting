function showweatherDetails(event)
{
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'ab9728277d604becdad715a7f5e4204d';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiURL).then(response => response.json()).then(data => 
    {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2> Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    }
    )
    
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

function showWeatherCoordinates(event)
{
    event.preventDefault();
    const longitude = document.getElementById('longitude').value;
    const latitude = document.getElementById('latitude').value;
    const apiKey = 'ab9728277d604becdad715a7f5e4204d';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data =>
        {
            console.log(data);
            const weatherInfoLL = document.getElementById('weatherInfoLL');
            weatherInfoLL.innerHTML = `<h2>Weather in ${data.name}</h2>
                                        <p>Temperature: ${data.main.temp}</p>
                                        <p>Weather: ${data.weather[0].description}</p>`;
        }
        )
}

document.getElementById('weatherCoordinates').addEventListener('submit', showWeatherCoordinates);