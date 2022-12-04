import express from "express";
import controller from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", controller.getHomePage);
  router.get("/crud", controller.getCRUD);

  router.post("/post-crud", controller.postCRUD);
  router.get("/get-crud", controller.displayCRUD);
  router.get("/edit-crud", controller.getEditCRUD);
  router.post("/put-crud", controller.putCRUD);
  router.get("/delete-crud", controller.deleteCRUD);

  router.post("/api/login", userController.handleLogin);

  return app.use("/", router);
};

module.exports = initWebRoutes;
