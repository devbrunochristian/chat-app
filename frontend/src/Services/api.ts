import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.0.199:5005',
  headers:{
    'Accept':'application/json'
  }
});