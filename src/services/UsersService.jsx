import axios from "axios";

const GET_ALL_USERS = "http://localhost:8080/getAllUsers";
const ADD_USERS = "http://localhost:8080/generateQR";
const GET_USER_BY_ID = "http://localhost:8080/getById";
const UPDATE_USERS = `http://localhost:8080/updateUser`;
const DELETE_USERS = "http://localhost:8080/delete/user";

class UsersService {
  getUsers() {
    return axios.get(GET_ALL_USERS);
  }
  addUsers(users) {
    return axios.post(ADD_USERS, users);
  }

  getUserById(userId) {
    return axios.get(GET_USER_BY_ID + "/" + userId);
  }

  updateUsers(userId, users) {
    return axios.put(UPDATE_USERS + "/" + userId, users);
  }
  deleteUsers(userId) {
    return axios.delete(DELETE_USERS + "/" + userId);
  }
}

export default new UsersService();
