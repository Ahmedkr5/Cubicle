import axios from 'axios';
import jwt_decode from 'jwt-decode';
import authService from './auth.service';

const API_URL = 'https://the-cubicle.herokuapp.com/create';
const API_URL1 = 'https://the-cubicle.herokuapp.com/show/';
const API_URL2 = 'https://the-cubicle.herokuapp.com/';

class ExperienceService {
  add(bodyget, transmitter, receiver) {
    const body = bodyget;
    const deleted_trans = 1;
    const deleted_recived = '1';
    // const  created_at=new Date() ;
    const file = ['Ford', 'Bouzid', 'Fiat'];
    return axios
      .post(API_URL, {
        transmitter,
        receiver,
        body,
        deleted_trans,
        deleted_recived,
        // created_at,
        file,
      })
      .then((response) => {
        return response.data;
      });
  }

  get(userid) {
    var title = {};
    return axios.get(API_URL1 + userid, {}).then(function (response) {
      return response.data;
    });
  }

  getAll() {
    return axios.get(API_URL2, {}).then(function (response) {
      return response.data;
    });
  }
  getUser(userid) {
    return axios
      .get(API_URL2 + '/showUser/' + userid, {})
      .then(function (response) {
        return response.data;
      });
  }
  getAllUsers() {
    return axios.get(API_URL2 + '/allUsers/', {}).then(function (response) {
      return response.data;
    });
  }
}

export default new ExperienceService();
