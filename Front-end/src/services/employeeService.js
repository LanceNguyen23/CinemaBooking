import axios from "../axios";

const employeeService = (email, password) => {
  return axios.post("/api/login", {
    employeeEmail: email,
    employeePassword: password,
  });
};

export default employeeService;
