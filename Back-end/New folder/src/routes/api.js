import express from "express";
import apiController from "../controllers/apiController";

let router = express.Router();

const initApiRoute = (app) => {
  router.get("/films", apiController.getAllFilm);
  router.post("/create-film", apiController.createFilm);
  router.put("/update-film/:id", apiController.updateFilm);
  router.delete("/delete-film/:id", apiController.deleteFilm);

  return app.use("/api/v1", router);
};

export default initApiRoute;
