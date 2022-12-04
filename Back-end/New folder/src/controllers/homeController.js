import db from "../models/index";
import CRUDService from "../services/CRUDServices";

let getHomePage = async (req, res) => {
  try {
    return res.render("homepage.ejs");
  } catch (e) {
    console.log(e);
  }
};

const getCRUD = async (req, res) => {
  try {
    return res.render("crud.ejs");
  } catch (e) {
    console.log(e);
  }
};

const postCRUD = async (req, res) => {
  try {
    await CRUDService.createNewEmployee(req.body);
    return res.redirect("/get-crud");
  } catch (e) {
    console.log(e);
  }
};

const displayCRUD = async (req, res) => {
  try {
    let data = await CRUDService.getAllEmployee();
    return res.render("display-crud.ejs", { data });
  } catch (e) {
    console.log(e);
  }
};

const getEditCRUD = async (req, res) => {
  let employeeId = req.query.id;
  if (employeeId) {
    let employeeData = await CRUDService.getEmployeeInfoById(employeeId);
    return res.render("edit-crud.ejs", { employeeData });
  } else return res.send("Employee not found");
};

const putCRUD = async (req, res) => {
  await CRUDService.updateEmployeeData(req.body);
  return res.redirect("/get-crud");
};

const deleteCRUD = async (req, res) => {
  let employeeId = req.query.id;
  await CRUDService.deleteEmployeeData(employeeId);
  return res.redirect("/get-crud");
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
