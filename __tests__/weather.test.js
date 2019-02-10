import Weather from '../src';

const source1 = {
  fetchData: (city) => {
    if (city === 'London') {
      return { data: { temp: 7 } };
    }
  },
};

const source2 = {
  fetchData: (city) => {
    if (city === 'Moscow') {
      return { data: { temp: 3 } };
    }
  },
};

const sources = {
  source1,
  source2,
};

const weather = new Weather(sources);

test('weather', async () => {
  const res1 = await weather.getWeather('source1', 'London');
  expect(res1).toEqual({ data: { temp: 7 } });

  const res2 = await weather.getWeather('source2', 'Moscow');
  expect(res2).toEqual({ data: { temp: 3 } });
});
