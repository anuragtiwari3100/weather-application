

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f30e12ed20msh514d2381e73ac7ap1656b6jsn3624464e0218',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  const getWeather = (city) => {
    cityName.innerText = city; // Changed from innerHTML to innerText 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      })
      .catch(err => console.error(err));
  } 
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value); 
  });
  
  getWeather("city");

  
 










  




 























  


