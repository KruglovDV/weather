import axios from 'axios';
import _ from 'lodash';

export default class MetaWeather {
  constructor(http = axios) {
    this.http = http;
    this.API = 'https://www.metaweather.com/api/location/';
  }

  fetchData = async (city) => {
    const { http, API } = this;
    const searchResponse = await http(`${API}search/?query=${city}`);
    const woeid = _.get(searchResponse, ['data', '0', 'woeid']);
    const result = await http(`${API}${woeid}/`);
    const prepareData = this.prepareData(result);
    return prepareData;
  }

  prepareData = (data) => {
    const temp = _.get(data, ['data', 'consolidated_weather', '0', 'the_temp']);
    return { data: { temp } };
  }
}
