import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeLogin, setActiveLogin] = useState(true);
  const [activeRegister, setActiveRegister] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8080/api/v1/films")
          .then((response) => {
            return setFilms(response.data.data);
          });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleModalOpened = () => {
    setIsOpenModal(true);
  };

  const handleModalClosed = () => {
    setIsOpenModal(false);
  };

  const handleActiveLogin = () => {
    if (!activeLogin) {
      setActiveLogin(!activeLogin);
      setActiveRegister(false);
    }
  };

  const handleActiveRegister = () => {
    if (!activeRegister) {
      setActiveRegister(!activeRegister);
      setActiveLogin(false);
    }
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(films);
    const res = films.filter((film) =>
      film["movieName"].toLowerCase().includes(e.target.value)
    );
    setSearchResult(res);
  };

  return (
    <div className={cx("header")}>
      <div className={cx("wrapper-header")}>
        <a
          className={cx("logo")}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png"></img>
        </a>

        <div className={cx("search")}>
          <input
            type="text"
            className={cx("search-input")}
            placeholder="T??m t??n phim"
            onChange={(e) => {
              handleSearchChange(e);
            }}
          ></input>
          <button className={cx("search-btn")}>
            <i className={cx("fa-solid fa-magnifying-glass")}></i>
          </button>

          <ul className={cx("search-list")}>
            {searchResult.map((film, index) => {
              if (index < 5) {
                return (
                  <li
                    key={index}
                    className={cx("search-item")}
                    onClick={() => {
                      navigate(`/detailfilm/${film["movieId"]}`);
                    }}
                  >
                    <a className={cx("search-item-name")}>
                      {film["movieName"]}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <a className={cx("login-link")} onClick={handleModalOpened}>
          <i className={cx("fa-solid fa-user")}></i>
          ????ng nh???p
        </a>
      </div>
      <div className={cx("modal", { show: isOpenModal })}>
        <div className={cx("modal-overlay")} onClick={handleModalClosed}></div>
        <div className={cx("modal-body")}>
          <div className={cx("login-container")}>
            <span className={cx("close")} onClick={handleModalClosed}>
              <i className="fa-solid fa-xmark"></i>
            </span>
            <ul className={cx("nav-tabs")}>
              <li className={cx({ active: activeLogin })}>
                <a
                  className={cx("tab_title", "tab_login")}
                  href="#"
                  onClick={handleActiveLogin}
                >
                  ????ng nh???p
                </a>
              </li>
              <li>
                <a className={cx("line")}>/</a>
              </li>
              <li className={cx({ active: activeRegister })}>
                <a
                  className={cx("tab_title", "tab_register")}
                  href="#"
                  onClick={handleActiveRegister}
                >
                  ????ng k??
                </a>
              </li>
            </ul>
            <div className={cx("tab-content")}>
              <div className={cx("tab-content-login", { active: activeLogin })}>
                <div className={cx("login-heading")}>
                  <p>
                    Vui l??ng ????ng nh???p tr?????c khi mua v?? ????? t??ch lu??? ??i???m, c?? h???i
                    nh???n th??m nhi???u ??u ????i t??? ch????ng tr??nh th??nh vi??n Galaxy
                    Cinema.
                  </p>
                </div>
                <form className={cx("login-form")}>
                  <input
                    placeholder="Email"
                    type="email"
                    className={cx("login-input")}
                  ></input>
                  <input
                    placeholder="M???t kh???u"
                    type="password"
                    className={cx("login-input")}
                  ></input>
                  <div className={cx("login-remember")}>
                    <a id="forget-password" href="#">
                      Qu??n m???t kh???u?
                    </a>
                  </div>
                  <button className={cx("submit-btn")}>????ng nh???p</button>
                </form>
              </div>
              <div
                className={cx("tab-content-register", {
                  active: activeRegister,
                })}
              >
                <form className={cx("register-form")}>
                  <input
                    placeholder="H??? t??n"
                    type="text"
                    className={cx("register-input")}
                  ></input>
                  <input
                    placeholder="S??? ??i???n tho???i"
                    type="text"
                    maxLength={14}
                    className={cx("register-input")}
                  ></input>
                  <input
                    placeholder="Email"
                    type="email"
                    className={cx("register-input")}
                  ></input>
                  <input
                    placeholder="M???t kh???u"
                    type="password"
                    className={cx("register-input")}
                  ></input>
                  <input
                    placeholder="X??c nh???n m???t kh???u"
                    type="password"
                    className={cx("register-input")}
                  ></input>
                  <button className={cx("submit-btn")}>????ng k??</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
