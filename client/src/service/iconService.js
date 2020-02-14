export default function GetIcon(name) {
    const icons = {
        "light rain": "wi-rain",
        "moderate rain": "wi-rain",
        "heavy intensity rain": "wi-day-rain",
        "very heavy rain": "wi-day-rain",
        "extreme rain": "wi-rain",
        "freezing rain": "wi-rain-mix",
        "light intensity shower rain": "wi-showers",
        "heavy intensity shower rain": "wi-showers",
        "ragged shower rain	": "wi-showers",
        "thunderstorm with light rain":"wi-thunderstorm",
        "thunderstorm with rain": "wi-thunderstorm",
        "thunderstorm with heavy rain": "wi-thunderstorm",
        "light thunderstorm": "wi-thunderstorm",
        "heavy thunderstorm": "wi-thunderstorm",
        "ragged thunderstorm": "wi-thunderstorm",
        "thunderstorm with light drizzle": "wi-thunderstorm",
        "thunderstorm with drizzle": "wi-thunderstorm",
        "thunderstorm with heavy drizzle": "wi-thunderstorm",
        "light intensity drizzle": "wi-sprinkle",
        "drizzle": "wi-sprinkle",
        "heavy intensity drizzle": "wi-sprinkle",
        "light intensity drizzle rain": "wi-sprinkle",
        "drizzle rain": "wi-sprinkle",
        "heavy intensity drizzle rain": "wi-sprinkle",
        "shower rain and drizzle": "wi-sprinkle",
        "heavy shower rain and drizzle": "wi-showers",
        "shower drizzle": "wi-showers",
        "light snow": "wi-snow",
        "Snow": "wi-snow",
        "Heavy snow": "wi-snow",
        "Sleet": "wi-snow",
        "Light shower sleet": "wi-snow",
        "Shower sleet": "wi-snow",
        "Light rain and snow": "wi-snow",
        "Rain and snow": "wi-snow",
        "Light shower snow": "wi-snow",
        "Shower snow": "wi-snow",
        "Heavy shower snow": "wi-snow",
        "clear sky": "wi-day-sunny",
        "few clouds: 11-25%	": "wi-day-cloudy",
        "scattered clouds: 25-50%": "wi-day-cloudy",
        "broken clouds: 51-84%": "wi-day-cloudy", 
        "overcast clouds: 85-100%":"wi-day-cloudy",
        "few clouds": "wi-day-cloudy",
        "scattered clouds": "wi-day-cloudy-high",
        "broken clouds":"wi-day-cloudy-high",
        "shower rain":"wi-showers",
        "rain":"wi-rain",
        "thunderstorm": "wi-thunderstorm",
        "snow": "wi-snowflake-cold",
        "mist":"wi-fog",
        "Celsius":"wi-celsius",
        "Fahrenheit": "wi-fahrenheit"
    }
    return icons[name]
}