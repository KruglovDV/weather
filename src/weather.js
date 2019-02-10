import MetaWeather from './weatherSuppliers/metaWeather';
import OpenWeather from './weatherSuppliers/openWeather';

export default class Weather {
  constructor(strategies) {
    this.suppliers = {
      metaWeather: new MetaWeather(),
      openWeather: new OpenWeather(),
      ...strategies,
    };
  }

  getWeather = async (supplierName, city) => {
    const { suppliers } = this;
    const supplier = suppliers[supplierName];
    const data = await supplier.fetchData(city);
    return data;
  }
}
