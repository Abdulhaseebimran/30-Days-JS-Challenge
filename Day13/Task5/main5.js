import * as weatherToolkit from './weather.js';

const currentWeather = weatherToolkit.weather.CLOUDY;

console.log(`The current weather is ${weatherToolkit.getWeather(currentWeather)}`);
