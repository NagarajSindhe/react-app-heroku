export const GET_ALL_USERS = () => {
  return "http://localhost:8080/getAllUsers";
};
export const ADD_USERS = () => {
  return "http://localhost:8080/generateQR";
};
export const GET_USER_BY_ID = () => {
  return "http://localhost:8080/getById";
};
export const UPDATE_USERS = () => {
  return `http://localhost:8080/updateUser`;
};
export const DELETE_USERS = () => {
  return "http://localhost:8080/delete/user";
};

class Endpoint {}

export default new Endpoint();
