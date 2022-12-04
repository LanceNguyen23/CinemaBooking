import db from "../models/index";
import bcrypt from "bcryptjs";

const handleEmployeeLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let employeeData = {};
      let isExist = await checkEmployeeEmail(email);
      if (isExist) {
        let employee = await db.Employee.findOne({
          where: { employeeEmail: email },
          attributes: ["employeeEmail", "roleId", "employeePassword"],
          raw: true,
          //   attributes: {
          //     exclude: ['createdAt', 'updatedAt']
          // },
        });

        // Check again
        if (employee) {
          let check = await bcrypt.compareSync(
            password,
            employee.employeePassword
          );

          if (check) {
            employeeData.errCode = 0;
            employeeData.errMessage = "OK";
            delete employee.employeePassword;
            employeeData.employee = employee;
          } else {
            employeeData.errCode = 3;
            employeeData.errMessage = "Wrong password";
          }
        } else {
          employeeData.errCode = 2;
          employeeData.errMessage = `Employee's not found`;
        }
      } else {
        employeeData.errCode = 1;
        employeeData.errMessage = `Your email isn't exist in your system. Please try other email`;
      }
      resolve(employeeData);
    } catch (err) {
      reject(err);
    }
  });
};

const checkEmployeeEmail = (employeeEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let employee = await db.Employee.findOne({
        where: { employeeEmail: employeeEmail },
      });
      if (employee) {
        resolve(true);
      } else resolve(false);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  handleEmployeeLogin,
};
