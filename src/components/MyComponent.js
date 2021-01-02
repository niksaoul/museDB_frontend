import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const API_KEY = '';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

function MyComponent() {
  const [temperature, setTemperature] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  function refreshData(chosenCity) {
    console.log('refresh temp...');
    const API_URL = `${API_BASE}?q=${city}&appid=${API_KEY}`;
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => setTemperature(data.main.temp));
    console.log(`Refreshed for ${chosenCity}`);
    setCity(chosenCity);
  }

  return (
    <div>
      <Grid container
            justify="center"
            alignItems="center"
            spacing={1}>
        <Grid container justify='center'>
          <h1>The temperature in {city} is {temperature} degrees.</h1>
        </Grid>
        <Grid container spacing={2} direction='row' justify='center'>
          <Grid item spacing={4}>
            <Button variant="contained" color="primary" onClick={ () => {refreshData('London') }}>London</Button>
          </Grid>
          <Grid item spacing={4}>
            <Button variant="contained" color="secondary" onClick={ () => {refreshData('Berlin') }}>Berlin</Button>
          </Grid>
          <Grid item spacing={4}>
           <Button variant="contained" color="primary" onClick={ () => {refreshData('Paris') }}>Paris</Button>
          </Grid>
          <Grid item spacing={4}>
            <Button variant="contained" color="secondary" onClick={ () => {refreshData('Athens') }}>Athens</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
);

}

export default MyComponent;