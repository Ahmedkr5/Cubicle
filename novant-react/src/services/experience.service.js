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

  edit(firstname, lastname,profileimage,coverimage,birthday,password,emeail,adresse,phone,description,userid) {
    return axios
      .put("http://localhost:3001/users/"+userid, {
         firstname,
         lastname,
         profileimage,
         coverimage,
         birthday,
         password,
         emeail,
         adresse,
         phone,
         description,
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