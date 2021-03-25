const USERS_REST_API = "http://localhost:8080/getAllUsers";

class UserServiceFetch {
  getUserWithFetch() {
    return fetch(USERS_REST_API, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
}

export default new UserServiceFetch();
