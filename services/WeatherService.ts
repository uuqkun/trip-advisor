import destinations from "../data/destinationsData.json";
import weathers from "../data/weatherData.json";

export class WeatherService {
  async getWeather(city: string): Promise<string> {
    // const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    // const weatherCondition = response.json().current.condition.text;    

    const weatherCondition = 'cerah';
    
    return weatherCondition;
  }
}
