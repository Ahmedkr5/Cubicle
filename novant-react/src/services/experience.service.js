/* eslint-disable no-dupe-class-members */
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'https://mycubicle.herokuapp.com/experiences';

class ExperienceService {
  add(title, description, date, userid) {
    return axios
      .post(API_URL, {
        title,
        description,
        date,
        userid,
      })
      .then((response) => {
        return response.data;
      });
  }

  edit(
    firstname,
    lastname,
    birthday,
    password,
    emeail,
    adresse,
    phone,
    description,
    userid
  ) {
    return axios
      .put('https://mycubicle.herokuapp.com/users/' + userid, {
        firstname,
        lastname,
        birthday,
        password,
        emeail,
        adresse,
        phone,
        description,
      })
      .then((response) => {
        var token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
      });
  }

  editprofileimage(profileimage, userid) {
    return axios
      .put('https://mycubicle.herokuapp.com/users/profile/' + userid, {
        profileimage,
      })
      .then((response) => {
        var token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
      });
  }

  editcoverimage(coverimage, userid) {
    return axios
      .put('https://mycubicle.herokuapp.com/users/cover/' + userid, {
        coverimage,
      })
      .then((response) => {
        return response.data;
      });
  }

  async get(userid) {
    return await axios
      .get(API_URL + '/' + userid, {})
      .then(function (response) {
        return response.data;
      });
  }
  async get(userid) {
    return await axios
      .get('https://mycubicle.herokuapp.com/users/' + userid, {})
      .then(function (response) {
        return response.data;
      });
  }
}

export default new ExperienceService();
