import OpenWeather from '../../src/weatherSuppliers/openWeather';

const requestUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22';

const response = {
  data: { main: { temp: 8 } },
};

const mockRequest = (request) => {
  if (request === requestUrl) {
    return response;
  }
};

const openWeather = new OpenWeather(mockRequest);
test('get data from service', async () => {
  const result = await openWeather.fetchData('London');
  expect(result).toEqual({ data: { temp: 8 } });
});
