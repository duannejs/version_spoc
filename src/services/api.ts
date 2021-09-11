import axios from 'axios';

export const P5VersionAdminApi = axios.create({
  baseURL: 'https://api.p5station.com.br/p5-app-api/',
});

export const LocalApi = axios.create({
  baseURL: 'http://visualmix.ftccloud.com.br:8081/p5-app-api',
});
