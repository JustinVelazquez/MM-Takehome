import axios from 'axios';

const url = 'https://randomuser.me/api/?results=100';

const API = {
  getUsers: function () {
    return axios.get(url);
  },
};

export default API;
