import axios from "../axios";

const userService = (email, password) => {
  return axios.post("/api/userLogin", {
    userEmail: email,
    userPassword: password,
  });
};

export default userService;
