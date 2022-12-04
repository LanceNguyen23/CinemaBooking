import userService from "../services/userService";

const handleLogin = async (req, res) => {
  let email = req.body.employeeEmail;
  let password = req.body.employeePassword;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  let employeeData = await userService.handleEmployeeLogin(email, password);
  return res.status(200).json({
    errCode: employeeData.errCode,
    message: employeeData.errMessage,
    employee: employeeData.employee ? employeeData.employee : {},
  });
};

module.exports = {
  handleLogin,
};
