
export const mapWeather = (input) => {

    return {
        temperature: Math.round(input.apparentTemperatureHigh + input.apparentTemperatureLow / 2),
        icon: input.icon,
        summary: input.summary,
        probability: Math.round(input.precipProbability * 100)
    };
};

export const mapNews = (input) => {
    return {
        title: input.title,
        url: input.url,
        urlToImage: input.urlToImage,
        name: input.source.name
    }
}

