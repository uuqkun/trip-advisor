"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelAdvisor = void 0;
const WeatherService_1 = require("../services/WeatherService");
const weatherData_json_1 = __importDefault(require("../data/weatherData.json"));
class TravelAdvisor {
    constructor(destination) {
        this.weatherService = new WeatherService_1.WeatherService();
        this.destinations = destination;
    }
    recommendDestination(weather) {
        return __awaiter(this, void 0, void 0, function* () {
            const weatherCondition = yield this.weatherService.getWeather(weather.location);
            const filterByLocation = this.destinations.filter((destination) => destination.location === weather.location);
            const suitableDestinations = filterByLocation.filter((destination) => destination.suitableWeather.includes(this.getWeatherId(weatherCondition)));
            console.info(suitableDestinations);
            if (suitableDestinations.length < 1) {
                throw new Error("Tidak ada destinasi wisata yang sesuai");
            }
            return suitableDestinations;
        });
    }
    getWeatherId(weatherCondition) {
        // Fungsi untuk mendapatkan ID cuaca berdasarkan nama cuaca
        // Implementasi sesuai dengan struktur data cuaca yang Anda miliki
        const weatherData = weatherData_json_1.default;
        const weather = weatherData.weatherConditions.find((condition) => condition.name.toLowerCase() === weatherCondition.toLowerCase());
        return weather ? weather.id : -1; // Mengembalikan -1 jika cuaca tidak ditemukan
    }
}
exports.TravelAdvisor = TravelAdvisor;
