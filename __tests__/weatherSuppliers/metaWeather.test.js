import MetaWeather from '../../src/weatherSuppliers/metaWeather';

const firstRequest = 'https://www.metaweather.com/api/location/search/?query=London';
const secondRequest = 'https://www.metaweather.com/api/location/44418/';

const mockHttp = (request) => {
  if (request === firstRequest) {
    return Promise.resolve({ data: [{ woeid: 44418 }] });
  }
  if (request === secondRequest) {
    return Promise.resolve({ data: { consolidated_weather: [{ the_temp: 8 }] } });
  }
  return null;
};

const metaWeather = new MetaWeather(mockHttp);

test('get data from service', async () => {
  const result = await metaWeather.fetchData('London');
  expect(result).toEqual({ data: { temp: 8 } });
});
