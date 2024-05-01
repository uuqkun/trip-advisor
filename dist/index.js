"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TravelAdvisor_1 = require("./app/TravelAdvisor");
const destinationsData_json_1 = __importDefault(require("./data/destinationsData.json"));
// Contoh penggunaan
const destinationsData = destinationsData_json_1.default;
const travelAdvisor = new TravelAdvisor_1.TravelAdvisor(destinationsData.destinations);
const inputWeather = {
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
