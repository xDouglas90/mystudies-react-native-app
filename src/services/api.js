import axios from 'axios'; 

const { LOCAL_HOST } = process.env;

const api = axios.create({
  baseURL: `http://${LOCAL_HOST}:1337`,
});

export default {api, LOCAL_HOST};
