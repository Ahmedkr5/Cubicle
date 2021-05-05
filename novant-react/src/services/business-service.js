import axios from "axios";
import jwt_decode from "jwt-decode";
import authService from "./auth.service";
const API_URL = "http://localhost:3001/business";
const user = authService.getCurrentUser();
const userid = user["id"];
class businessservice {
  /*addgroup(groupname,Owner) {
    return axios.post(API_URL + userid +"/newgroup", {
    groupname,
    Owner
    });
  }
}*/

  /*
editgroupimage(groupimage,groupid) {
  return axios
    .put(API_URL +"/groupProfile"+, {
       profileimage,
    })
    .then(response => {
      return response.data;
    });
}*/

  addbusiness(businessname, Owner) {
    return axios.post(API_URL + "/" + userid + "/newbusiness", {
      businessname,
      Owner,
    });
  }

  getAll() {
    return axios.get(API_URL, {}).then(function (response) {
      console.log(response.data + "AAAAAAAAAAAAAAAAAAAAAAAAA");
      return response.data;
    });
  }
  getBusinesses(userid) {
    return axios
      .get(API_URL + "/businesslist/" + userid, {})
      .then(function (response) {
        return response.data;
    });
  }
}

export default new businessservice();
