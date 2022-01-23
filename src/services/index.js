import { Api } from "./Api";
import WeatherService from "./weather-service";

const apiStart = new Api()
const axiosInstance = apiStart.getInstance();

export default class ApiService {
    static weather = new WeatherService(axiosInstance)
}