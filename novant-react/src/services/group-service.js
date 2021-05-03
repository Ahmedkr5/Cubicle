import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "http://localhost:3001/groups/";

class groupservice {
addgroup(groupname,userid) {
    return axios.post(API_URL + "newgroup", {
    groupname,
    userid
    });
  }
}
  export default new groupservice();