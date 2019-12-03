
const dataMapper = (input) => {

    return {
        temperature: Math.round(input.apparentTemperatureHigh + input.apparentTemperatureLow / 2),
        icon: input.icon,
        summary: input.summary,
        probability: Math.round(input.precipProbability * 100)
    };
};

export default dataMapper;