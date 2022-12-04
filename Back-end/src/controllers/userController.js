import userService from "../services/userService";

const handleLogin = async (req, res) => {
  let email = req.body.userEmail;
  let password = req.body.userPassword;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

const handleSignup = async (req, res) => {
  let userName = req.body.userName;
  let userPhone = req.body.userPhone;
  let userEmail = req.body.userEmail;
  let userPassword = req.body.userPassword;
  const user = { userName, userPhone, userEmail, userPassword };
  if (!userEmail || !userPassword || !userName || !userPhone) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  await userService.handleUserSignup(user);
};

module.exports = {
  handleLogin,
  handleSignup,
};
