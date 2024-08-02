// Activity 3: Importing Entire Module

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

export const weather = {
    SUNNY: "Sunny",
    RAINY: "Rainy",
    CLOUDY: "Cloudy",
    SNOWY: "Snowy",
    WINDY: "Windy",
};

export function getWeather(weatherType) {
    switch (weatherType) {
        case weather.SUNNY:
            return "It's sunny today";
        case weather.RAINY:
            return "It's rainy today";
        case weather.CLOUDY:
            return "It's cloudy today";
        case weather.SNOWY:
            return "It's snowy today";
        case weather.WINDY:
            return "It's windy today";
        default:
            return "Invalid weather type";
    }
}

