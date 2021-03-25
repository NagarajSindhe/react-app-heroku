import axios from "axios";

const GET_ALL_USERS = "http://localhost:8080/getAllUsers";
const ADD_USERS = "http://localhost:8080/generateQR";

class UsersService {
  getUsers() {
    return axios.get(GET_ALL_USERS);
  }
  addUsers(users) {
    return axios.post(ADD_USERS, users);
  }
}

export default new UsersService();
