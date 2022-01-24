import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const API_URL = 'http://localhost:3001/api/auth/';

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + 'login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          var token = response.data.token;
          localStorage.setItem('token', token);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }
  google() {
    return axios.get(API_URL + 'google').then((response) => {
      return response.data;
    });
  }

  register(firstname, lastname, email, password, profileimage, coverimage) {
    return axios.post(API_URL + 'register', {
      firstname,
      lastname,
      email,
      password,
      profileimage,
      coverimage,
    });
  }

  getCurrentUser() {
    try {
      const token = localStorage.getItem('token');
      var decoded = jwt_decode(token);
      return decoded;
    } catch (err) {
      history.push('/auth');
      window.location.reload();
    }
  }
}

export default new AuthService();
