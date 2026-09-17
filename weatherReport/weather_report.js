function showweatherDetails(event)
{
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'ab9728277d604becdad715a7f5e4204d';
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

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