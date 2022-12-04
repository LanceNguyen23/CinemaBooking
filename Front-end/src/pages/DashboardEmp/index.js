import classNames from "classnames/bind";
import styles from "./DashboardEmp.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChartLine,
  faChevronDown,
  faCircleNotch,
  faCirclePlus,
  faCircleXmark,
  faClapperboard,
  faClipboardUser,
  faFilm,
  faGear,
  faMagnifyingGlass,
  faPenToSquare,
  faTableColumns,
  faTicket,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import {
  editFilmService,
  deleteFilmService,
  createFilmService,
} from "~/services";
import { employeeInfoSelector } from "~/store/selectors";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const PER_PAGE = 4;

const DashboardEmp = () => {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [film, setFilm] = useState({});
  const [movieId, setMovieId] = useState();
  const [movieName, setMovieName] = useState("");
  const [movieSecondName, setMovieSecondName] = useState("");
  const [duration, setDuration] = useState();
  const [actor, setActor] = useState("");
  const [director, setDirector] = useState("");
  const [country, setCountry] = useState("");
  const [producer, setProducer] = useState("");
  const [premiered, setPremiered] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [button, setButton] = useState("");
  const [action, setAction] = useState("");

  const navigate = useNavigate();

  const pageCount = Math.ceil(films.length / PER_PAGE);
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page: ", selectedPage);
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8080/api/v1/films")
          .then((response) => {
            console.log("test2");
            return setFilms(response.data.data);
          });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [film]);

  const info = useSelector(employeeInfoSelector);

  const offset = currentPage * PER_PAGE;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <div className={cx("logo_container")}>
            <FontAwesomeIcon icon={faFilm} className={cx("logo_icon")} />
            <div className={cx("logo_text")}>UIT Manager</div>
          </div>
          <div className={cx("functions")}>
            <Button
              style="solid"
              leftIcon={<FontAwesomeIcon icon={faClapperboard} />}
            >
              Films
            </Button>
            <Button style="text" leftIcon={<FontAwesomeIcon icon={faTicket} />}>
              Tickets
            </Button>
            <Button
              style="text"
              leftIcon={<FontAwesomeIcon icon={faClipboardUser} />}
            >
              Staff
            </Button>
            <Button style="text" leftIcon={<FontAwesomeIcon icon={faUser} />}>
              Customer
            </Button>
            <Button
              style="text"
              leftIcon={<FontAwesomeIcon icon={faChartLine} />}
            >
              Statistics
            </Button>
          </div>
          <div className={cx("settings")}>
            <Button style="text" leftIcon={<FontAwesomeIcon icon={faGear} />}>
              Setting
            </Button>
            <Button
              style="text"
              leftIcon={<FontAwesomeIcon icon={faCircleLeft} />}
              onClick={() => navigate("/employee")}
            >
              Log out
            </Button>
          </div>
        </div>
        <div className={cx("content_container")}>
          <div className={cx("header")}>
            <div className={cx("search")}>
              <input placeholder="Search accounts and videos" />
              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx("loading")} icon={faCircleNotch} />
              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className={cx("info")}>
              {/* <div className={cx("notifications")}>
                <FontAwesomeIcon
                  icon={faBell}
                  className={cx("icon_notification")}
                />
                <span className={cx("number_notification")} />
              </div> */}
              <div className={cx("profile")}>
                <span className={cx("name_profile")}>{info.employeeName}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={cx("icon_profile")}
                />
              </div>
            </div>
          </div>
          <div className={cx("content")}>
            <table className={cx("styled-table")}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Second Name</th>
                  <th>Duration</th>
                  <th>Actor</th>
                  <th>Director</th>
                  <th>Country</th>
                  <th>Producer</th>
                  <th>Premiered</th>
                  <th>Content</th>
                  <th style={{ textAlign: "center" }}>
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      style={{
                        fontSize: "18px",
                        color: "rgb(83, 11, 209)",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setIsOpenModal(true);
                        setTitle("CREATE A MOVIE");
                        setButton("Create movie");
                        setAction("create");
                      }}
                    />
                  </th>
                </tr>
              </thead>

              <tbody>
                {films.slice(offset, offset + PER_PAGE).map((film, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className={cx("row_table")}>{film.movieName}</div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>
                          {film.movieSecondName}
                        </div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>
                          {film.movieDuration}
                        </div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>{film.movieActor}</div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>
                          {film.movieDirector}
                        </div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>
                          {film.movieCountry}
                        </div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>
                          {film.movieProducer}
                        </div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>
                          {film.moviePremiere}
                        </div>
                      </td>
                      <td>
                        <div className={cx("row_table")}>
                          {film.movieContent}
                        </div>
                      </td>
                      <td style={{ display: "flex", flexDirection: "column" }}>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className={cx("actions", "action_edit")}
                          onClick={() => {
                            setIsOpenModal(true);
                            setMovieId(film.movieId);
                            setMovieName(film.movieName);
                            setMovieSecondName(film.movieSecondName);
                            setDuration(film.movieDuration);
                            setActor(film.movieActor);
                            setDirector(film.movieDirector);
                            setCountry(film.movieCountry);
                            setProducer(film.movieProducer);
                            setPremiered(film.moviePremiere);
                            setContent(film.movieContent);
                            setButton("Update movie");
                            setTitle("UPDATE A MOVIE");
                            setAction("update");
                          }}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={cx("actions", "action_delete")}
                          onClick={async () => {
                            const result = window.confirm(
                              `Are you sure you want to delete this movie?`
                            );
                            if (result) await deleteFilmService(film.movieId);
                            setFilm({});
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={cx("pages_container")}>
              <ReactPaginate
                previousLabel={"<- Previous"}
                nextLabel={"Next ->"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={cx("pagination")}
                previousLinkClassName={cx("pagination__link")}
                nextLinkClassName={cx("pagination__link")}
                disabledClassName={cx("pagination__link--disabled")}
                activeClassName={cx("pagination__link--active")}
              />
            </div>
            <Modal
              isOpen={isOpenModal}
              onRequestClose={() => {
                setIsOpenModal(false);
                setMovieId();
                setMovieName("");
                setMovieSecondName("");
                setDuration("");
                setActor("");
                setDirector("");
                setCountry("");
                setProducer("");
                setPremiered("");
                setContent("");
              }}
              className={cx("modal_edit")}
            >
              <div className={cx("titleModal")}>{title}</div>
              <button
                onClick={() => {
                  setIsOpenModal(false);
                  setMovieId();
                  setMovieName("");
                  setMovieSecondName("");
                  setDuration("");
                  setActor("");
                  setDirector("");
                  setCountry("");
                  setProducer("");
                  setPremiered("");
                  setContent("");
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={cx("closeIcon")}
                  backgroundColor={"orange"}
                />
              </button>
              <form
                class="row g-3 m-4"
                onSubmit={async (event) => {
                  event.preventDefault();
                  const filmEdit = {
                    movieId,
                    movieName,
                    movieSecondName,
                    movieDuration: duration,
                    movieActor: actor,
                    movieDirector: director,
                    movieCountry: country,
                    movieProducer: producer,
                    moviePremiere: premiered,
                    movieContent: content,
                  };
                  const newFilm = {
                    movieName,
                    movieSecondName,
                    movieDuration: duration,
                    movieActor: actor,
                    movieDirector: director,
                    movieCountry: country,
                    movieProducer: producer,
                    moviePremiere: premiered,
                    movieContent: content,
                  };
                  if (action == "update") {
                    await editFilmService(filmEdit);
                    setFilm(filmEdit);
                  }
                  if (action == "create") {
                    await createFilmService(newFilm);
                    setFilm(newFilm);
                  }
                  setIsOpenModal(false);
                }}
              >
                <div class="col-md-6">
                  <label
                    for="inputEmail4"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    name="email"
                    onChange={(e) => {
                      setMovieName(e.target.value);
                    }}
                    value={movieName}
                  />
                </div>
                <div class="col-md-6">
                  <label
                    for="inputPassword4"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Second Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    name="password"
                    onChange={(e) => {
                      setMovieSecondName(e.target.value);
                    }}
                    value={movieSecondName}
                  />
                </div>

                <div class="col-md-8">
                  <label
                    for="inputDateOfBirth"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Actor
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputDateOfBirth"
                    name="dateOfBirth"
                    onChange={(e) => {
                      setActor(e.target.value);
                    }}
                    value={actor}
                  />
                </div>
                <div class="col-md-4">
                  <label
                    for="inputCountry"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Country
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCountry"
                    name="inputCountry"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    value={country}
                  />
                </div>
                <div class="col-md-3">
                  <label
                    for="inputPhoneNumber"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Director
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPhoneNumber"
                    name="phoneNumber"
                    onChange={(e) => {
                      setDirector(e.target.value);
                    }}
                    value={director}
                  />
                </div>

                <div class="col-md-3">
                  <label
                    for="inputProducer"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Producer
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputProducer"
                    name="inputProducer"
                    onChange={(e) => {
                      setProducer(e.target.value);
                    }}
                    value={producer}
                  />
                </div>
                <div class="col-md-3">
                  <label
                    for="inputName"
                    class="form-label text-light font-weight-bold"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    name="name"
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                    value={duration}
                  />
                </div>
                <div class="col-md-3">
                  <label
                    for="inputPremiered"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Premiered
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPremiered"
                    name="inputPremiered"
                    onChange={(e) => {
                      setPremiered(e.target.value);
                    }}
                    value={premiered}
                  />
                </div>
                <div class="col-md-12">
                  <label
                    for="inputContent"
                    class="form-label text-light font-weight-bold"
                  >
                    Movie Content
                  </label>
                  <textarea
                    style={{ height: "200px" }}
                    type="text"
                    class="form-control"
                    id="inputContent"
                    name="inputContent"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    value={content}
                  />
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{
                      width: "120px",
                      height: "40px",
                      fontSize: "14px",
                      backgroundColor: "green",
                      border: "none",
                    }}
                  >
                    {button}
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmp;
