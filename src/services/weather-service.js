export default class WeatherService {
    constructor(api) {
        this.api = api;
    }

    async getCurrentWeatehr(data) {
        const openweatherToken = process.env.REACT_APP_WEATHER_TOKEN;
        try {
            const tryGetCurrentWeather = await this.api.get(`https://api.openweathermap.org/data/2.5/weather`, {params: {
                q: data,
                units: "metric",
                appid: openweatherToken
            }
            });
            if (tryGetCurrentWeather.data) {
                return tryGetCurrentWeather.data;
            } else {
                throw new Error(tryGetCurrentWeather.data.errors[0]);
            }
        } catch (error) {
            throw new Error("Не удалось найти");
        }
    }
}
