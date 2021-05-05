import axios from "axios";
import jwt_decode from "jwt-decode";
import authService from './auth.service';
const API_URL = "http://localhost:3001/groups/";

class groupservice {
addgroup(groupname,description,Owner) {
  const user = authService.getCurrentUser() ;
const userid = user['id'];
    return axios.post(API_URL + userid +"/newgroup", {
    groupname,description,
    Owner})
    .then(response => {
      return response;
    });
}

editgroupimage(groupimage,groupid) {
  return axios
    .put(API_URL +"GroupCover/"+groupid, {
       groupimage,
    })
    .then(response => {
      return response.data;
    });
}


}
  export default new groupservice();