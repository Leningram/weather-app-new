export const formatWeatherType = (id) => {
    if (id < 300) {
        return "thunder"
    }
    if (id < 400) {
        return "drizzle"
    }
    if (id < 502) {
        return "rain"
    }
    if (id < 600) {
        return "heavy-rain"
    }
    if (id < 602) {
        return "snow"
    }
    if (id < 700) {
        return "heavy-snow"
    }
    if (id < 751) {
        return "fog"
    }
    if (id === 800 ) {
        return "sunny"
    }
    if (id > 800) {
        return "clouds"
    }
}