import db from "../models/index";

let getAllFilm = async (req, res) => {
  let film = await db.Movie.findAll();
  return res.status(200).json({
    message: "ok",
    data: film,
  });
};

let createFilm = async (req, res) => {
  let {
    movieName,
    movieSecondName,
    movieDuration,
    movieActor,
    movieDirector,
    movieCountry,
    movieProducer,
    moviePremiere,
    movieContent,
  } = req.body;

  console.log(req.body);

  if (
    !movieName ||
    !movieSecondName ||
    !movieDuration ||
    !movieActor ||
    !movieDirector ||
    !movieCountry ||
    !movieContent ||
    !moviePremiere ||
    !movieProducer
  ) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  await db.Movie.create({
    movieName,
    movieSecondName,
    movieRating: 0,
    movieNumberRating: 0,
    movieDuration,
    movieActor,
    movieDirector,
    movieCountry,
    movieProducer,
    moviePremiere,
    movieContent,
  });
  return res.status(200).json({
    message: "ok",
  });
};

let updateFilm = async (req, res) => {
  let {
    movieName,
    movieSecondName,
    movieDuration,
    movieActor,
    movieDirector,
    movieCountry,
    movieProducer,
    moviePremiere,
    movieContent,
  } = req.body;

  let id = req.params.id;
  console.log(id);

  await db.Movie.update(
    {
      movieName,
      movieSecondName,
      movieDuration,
      movieActor,
      movieDirector,
      movieCountry,
      movieProducer,
      moviePremiere,
      movieContent,
    },
    {
      where: { movieId: id },
    }
  );

  return res.status(200).json({
    message: "ok",
  });
};

let deleteFilm = async (req, res) => {
  let id = req.params.id;
  await db.Movie.destroy({
    where: {
      movieId: id,
    },
  });
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllFilm,
  createFilm,
  updateFilm,
  deleteFilm,
};
