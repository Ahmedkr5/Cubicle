import axios from "axios";
import jwt_decode from "jwt-decode";
 

const API_URL = "http://localhost:3001/experiences";

class ExperienceService {
  add(title, description,date,userid) {
    return axios
      .post(API_URL, {
        title,
        description,
        date,
        userid
      })
      .then(response => {
        return response.data;
      });
  }

  edit(firstname, lastname,birthday,password,emeail,adresse,phone,description,userid) {
    return axios
      .put("http://localhost:3001/users/"+userid, {
         firstname,
         lastname,
         birthday,
         password,
         emeail,
         adresse,
         phone,
         description,
      })
      .then(response => {
        var token = response.data.token;
            localStorage.setItem("token", token);
        return response.data;
      });
  }

  editprofileimage(profileimage,userid) {
    return axios
      .put("http://localhost:3001/users/profile/"+userid, {
         profileimage,
      })
      .then(response => {
        return response.data;
      });
  }

  editcoverimage(coverimage,userid) {
    return axios
      .put("http://localhost:3001/users/cover/"+userid, {
        coverimage,
      })
      .then(response => {
        return response.data;
      });
  }

   async get(userid) {
    return await axios
      .get(API_URL+"/"+userid, {
      })
      .then(function(response) {
       return response.data
        });
  }
  async get(userid) {
    return await axios
      .get("http://localhost:3001/users/"+userid, {
      })
      .then(function(response) {
       return response.data
        });
  }
}

export default new ExperienceService();