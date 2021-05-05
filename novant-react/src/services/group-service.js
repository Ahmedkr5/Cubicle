import axios from "axios";
import jwt_decode from "jwt-decode";
import authService from './auth.service';
const API_URL = "http://localhost:3001/groups/";
const user = authService.getCurrentUser() ;
const userid = user['id'];
class groupservice {
addgroup(groupname,Owner) {
    return axios.post(API_URL + userid +"/newgroup", {
    groupname,
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