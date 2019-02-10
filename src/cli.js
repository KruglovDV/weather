import app from 'commander';
import Weather from './';

const weather = new Weather();

export default () => (
  app
    .version('0.0.1')
    .arguments('<city>')
    .description('Shows weather')
    .option('-s,  --supplier <supplier>', 'Output format', 'openWeather')
    .action(async (city) => {
      const res = await weather.getWeather(app.supplier, city);
      console.log(res.data.temp);
    }));
