import { TravelAdvisor } from "./app/TravelAdvisor";
import { Weather } from "./models/Weather";

import destinationsAPIData from "./data/destinationsData.json";

// Contoh penggunaan
const destinationsData = destinationsAPIData;
const travelAdvisor = new TravelAdvisor(destinationsData.destinations);

const inputWeather: Weather = {
  location: "Jakarta"
};

travelAdvisor
  .recommendDestination(inputWeather)
  .then((data) => {
    console.log(`Destinasi wisata yang direkomendasikan:`);
    data.map((destination) => console.log(`- ${destination.name}`));
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
