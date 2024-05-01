import { Destination } from "../models/Destination";
import { Weather } from "../models/Weather";
import { WeatherService } from "../services/WeatherService";
import weathersData from "../data/weatherData.json";

export class TravelAdvisor {
  weatherService: WeatherService;
  destinations: Destination[];

  constructor(destination: Destination[]) {
    this.weatherService = new WeatherService();
    this.destinations = destination;
  }

  async recommendDestination(weather: Weather): Promise<Destination[]> {
    const weatherCondition = await this.weatherService.getWeather(
      weather.location
    );

    const filterByLocation = this.destinations.filter(
      (destination) => destination.location === weather.location
    );

    const suitableDestinations = filterByLocation.filter((destination) =>
      destination.suitableWeather.includes(this.getWeatherId(weatherCondition))
    );

    console.info(suitableDestinations);

    if (suitableDestinations.length < 1) {
      throw new Error("Tidak ada destinasi wisata yang sesuai");
    }

    return suitableDestinations;
  }

  private getWeatherId(weatherCondition: string): number {
    // Fungsi untuk mendapatkan ID cuaca berdasarkan nama cuaca
    // Implementasi sesuai dengan struktur data cuaca yang Anda miliki
    const weatherData = weathersData;

    const weather = weatherData.weatherConditions.find(
      (condition: any) =>
        condition.name.toLowerCase() === weatherCondition.toLowerCase()
    );
    return weather ? weather.id : -1; // Mengembalikan -1 jika cuaca tidak ditemukan
  }
}
