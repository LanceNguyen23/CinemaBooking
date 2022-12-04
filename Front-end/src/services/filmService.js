import axios from "axios";

const createFilmService = async (film) => {
  return await axios
    .post(`http://localhost:8080/api/v1/create-film`, film)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

const editFilmService = async (film) => {
  return await axios
    .put(`http://localhost:8080/api/v1/update-film/${film.movieId}`, film)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

const deleteFilmService = async (filmId) => {
  return await axios
    .delete(`http://localhost:8080/api/v1/delete-film/${filmId}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export { editFilmService, deleteFilmService, createFilmService };
