import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const createNewEmployee = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.Employee.create({
        employeeEmail: data.email,
        employeePassword: hashPasswordFromBcrypt,
        employeeName: data.name,
        employeeDateOfBirth: data.dateOfBirth,
        employeePhone: data.phoneNumber,
        employeeGender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (err) {
      reject(err);
    }
  });
};

const getAllEmployee = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let employees = await db.Employee.findAll({
        raw: true,
      });
      resolve(employees);
    } catch (err) {
      reject(err);
    }
  });
};

const getEmployeeInfoById = (employeeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let employee = await db.Employee.findOne({
        where: { employeeId: employeeId },
        raw: true,
      });
      if (employee) resolve(employee);
      else resolve({});
    } catch (err) {
      reject(err);
    }
  });
};

const updateEmployeeData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Employee.update(
        {
          employeeName: data.name,
          employeeDateOfBirth: data.dateOfBirth,
          employeePhone: data.phone,
        },
        { where: { employeeId: data.id } }
      );
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const deleteEmployeeData = (employeeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Employee.destroy({
        where: { employeeId: employeeId },
      });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createNewEmployee,
  getAllEmployee,
  getEmployeeInfoById,
  updateEmployeeData,
  deleteEmployeeData,
};
