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

  get(userid) {
    var title = {}
    return axios
      .get(API_URL+"/"+userid, {
      })
      .then(function(response) {
       return response.data
        });
  }
}

export default new ExperienceService();