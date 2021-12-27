import axios from 'axios';
import jwt_decode from 'jwt-decode';
import authService from './auth.service';
const API_URL = 'https://mycubicle.herokuapp.com/business';

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

  addbusiness(businessname, Owner, a) {
    return axios.post(API_URL + '/' + a + '/newbusiness', {
      businessname,
      Owner,
    });
  }

  getAll() {
    return axios.get(API_URL, {}).then(function (response) {
      console.log(response.data + 'AAAAAAAAAAAAAAAAAAAAAAAAA');
      return response.data;
    });
  }
  getBusinesses(userid) {
    return axios
      .get(API_URL + '/businesslist/' + userid, {})
      .then(function (response) {
        return response.data;
      });
  }

  getBusiness(businessId) {
    return axios
      .get(API_URL + '/business/' + businessId, {})
      .then(function (response) {
        return response.data;
      });
  }

  edituser(businessRequests, userid) {
    return axios
      .put('https://mycubicle.herokuapp.com/users/businessuser/' + userid, {
        businessRequests,
      })
      .then((response) => {
        var token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
      });
  }
}

export default new businessservice();
