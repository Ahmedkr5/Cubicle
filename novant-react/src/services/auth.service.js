import axios from "axios";
import jwt_decode from "jwt-decode";
 

const API_URL = "http://localhost:3001/api/auth/";
let firstname =""

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
            var token = response.data.token;
            localStorage.setItem("token", token);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(username, email, password) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const token =localStorage.getItem('token');
    var decoded = jwt_decode(token);
    return decoded ;
  }
  
}

export default new AuthService();