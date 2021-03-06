import _ from 'lodash';
import BaseService from './baseService';

export default class OpenWeather extends BaseService {
  constructor(http) {
    super(http);
    this.API = 'https://samples.openweathermap.org/data/2.5/weather';
    this.appid = 'b6907d289e10d714a6e88b30761fae22';
  }

  fetchData = async (city) => {
    const { http, API, appid } = this;
    const response = await http(`${API}?q=${city}&appid=${appid}`);
    const preparedData = this.prepareData(response);
    return preparedData;
  }

  prepareData = async (data) => {
    const temp = _.get(data, ['data', 'main', 'temp']);
    return { data: { temp } };
  }
}
