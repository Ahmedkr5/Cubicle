import axios from 'axios';
import jwt_decode from 'jwt-decode';
import authService from './auth.service';
const API_URL = 'https://mycubicle.herokuapp.com/groups/';

class groupservice {
  /*
addgroup(groupname,description,Owner) {
  const user = authService.getCurrentUser() ;
const userid = user['id'];
    return axios.post(API_URL + userid +"/newgroup", {
    groupname,description,Owner})
    .then(response => {
      return response;
    });
}*/

  editgroupimage(groupimage, groupid) {
    return axios
      .put(API_URL + 'GroupCover/' + groupid, {
        groupimage,
      })
      .then((response) => {
        return response.data;
      });
  }

  editgroupsong(Song, groupid) {
    return axios
      .put(API_URL + 'GroupSong/' + groupid, {
        Song,
      })
      .then((response) => {
        return response.data;
      });
  }
  getAll() {
    return axios.get(API_URL + '/grouplist', {}).then(function (response) {
      return response.data;
    });
  }
  getGroup(groupid) {
    return axios
      .get(API_URL + '/group/' + groupid, {})
      .then(function (response) {
        return response.data;
      });
  }

  getGroups(userid) {
    return axios
      .get(API_URL + '/grouplist/' + userid, {})
      .then(function (response) {
        return response.data;
      });
  }

  editgrp(groupname, description, groupid) {
    return axios
      .put(API_URL + '/group/' + groupid, {
        groupname,
        description,
      })
      .then((response) => {
        return response.data;
      });
  }
  delete(groupid) {
    return axios
      .get(API_URL + '/delete/' + groupid, {})
      .then(function (response) {
        return response.data;
      });
  }
  edituser(groupRequests, userid) {
    return axios
      .put('https://mycubicle.herokuapp.com/users/grp/' + userid, {
        groupRequests,
      })
      .then((response) => {
        var token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
      });
  }

  editgp(members, groupid) {
    return axios
      .put(API_URL + '/groupmem/' + groupid, {
        members,
      })
      .then((response) => {
        return response.data;
      });
  }
}
export default new groupservice();
