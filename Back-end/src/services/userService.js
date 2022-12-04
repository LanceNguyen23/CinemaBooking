import db from "../models/index";
import bcrypt from "bcryptjs";

const handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: { userEmail: email },
          attributes: [
            "userEmail",
            "userGender",
            "userPassword",
            "userName",
            "userPhone",
            "userDateOfBirth",
          ],
          raw: true,
          //   attributes: {
          //     exclude: ['createdAt', 'updatedAt']
          // },
        });

        // Check again
        if (user) {
          let check = await bcrypt.compareSync(password, user.userPassword);

          if (check) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            delete user.userPassword;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your email isn't exist in your system. Please try other email`;
      }
      resolve(userData);
    } catch (err) {
      reject(err);
    }
  });
};

const checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { userEmail: userEmail },
      });
      if (user) {
        resolve(true);
      } else resolve(false);
    } catch (err) {
      reject(err);
    }
  });
};

const handleUserSignup = (user) => {
  db.User.create({
    userName: user.userName,
    userPassword: user.userPassword,
    userGender: null,
    userEmail: user.userEmail,
    userPhone: user.userPhone,
    userDateOfBirth: null,
  });
};

module.exports = {
  handleUserLogin,
  handleUserSignup,
};
