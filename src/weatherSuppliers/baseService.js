import axios from 'axios';

export default class BaseService {
  constructor(http = axios) {
    this.http = http;
  }
}
