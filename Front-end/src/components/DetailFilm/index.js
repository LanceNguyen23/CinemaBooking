import styles from "./DetailFilm.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
const DetailFilm = () => {
  let { id } = useParams();
  const imgArray = [
    "https://cdn.galaxycine.vn/media/2022/11/21/300x450_1669022512155.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/14/1200wx1800h_1668416518582.jpg",
    "https://cdn.galaxycine.vn/media/2022/10/12/hpm_1665546188603.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/21/300x450_1668999463552.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/19/nct-dream-4_1668837270471.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/22/sadako_1669108950002.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/10/300x450_1668066486371.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/24/dai-ca-miet-vuon-300x450_1669278994475.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/16/anne-co-gai-muon-mat-2_1668590403245.jpg",
    "https://cdn.galaxycine.vn/media/2022/10/31/1200wx1800h_1667186935778.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/1/1200x1800_1667275197172.jpg",
  ];
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
  const [film, setFilm] = useState({});
  useEffect(() => {
    films.map((f) => {
      if (f.movieId == id) {
        f.img = imgArray[id - 1];
        setFilm(f);
      }
      // console.log(f);
    });
  }, [films]);
  return (
    <div className={cx("container-detailfilm")}>
      <div className={cx("row")}>
        <div className={cx("col-8")}>
          <div className={cx("DetailGener")}>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
            <div className={cx("HeaderDetail")}>
              <li className={cx("HederDetail-Item")}>
                <a href="#">Trang ch???</a>
                <i class="fas fa-chevron-right"></i>
              </li>
              <li className={cx("HederDetail-Item")}>
                <a href="#">?????t v??</a>
                <i class="fas fa-chevron-right"></i>
              </li>
              <span>{film.movieName}</span>
            </div>
            <div className={cx("detailFilm")}>
              <img className={cx("detailFilm-img")} src={film.img}></img>
              <div className={cx("detailFilm-Layout")}>
                <h2>{film.movieName}</h2>
                <h2 className={cx("film-secondName")}>
                  {film.movieSecondName}
                </h2>
                <div className={cx("Layout-Evaluate")}>
                  <div className={cx("Evaluate-star")}>
                    <i class="fas fa-star"></i>
                  </div>
                  <div className={cx("Evaluate-avlue")}>
                    <span>{film.movieRating}</span>
                    <span>/</span>
                    <span>10</span>
                    <div>{film.movieNumberRating}</div>
                  </div>
                  <div className={cx("rating-btn")}>
                    <button>????nh gi??</button>
                  </div>
                </div>
                <div className={cx("Layout-LikeShare")}>
                  <span>C13</span>
                  <div className={cx("LikeShare-Clock")}>
                    <i class="far fa-clock"></i>
                    <span>{film.movieDuration}</span>
                  </div>
                  <div className={cx("LikeShare-Button")}>
                    <button className={cx("LSButton")}>
                      <i class="fas fa-thumbs-up"></i> Th??ch 53
                    </button>
                    <button className={cx("LSButton")}>Share</button>
                  </div>
                </div>
                <div className={cx("Layout-DetailFilm")}>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>Di???n vi??n:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieActor}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>Th??? lo???i:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieContent}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>?????o di???n:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieDirector}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>Qu???c gia:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieCountry}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>
                      Ng??y kh???i chi???u:
                    </span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.moviePremiere}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("ContentFilm")}>
              <h3 className={cx("ContentFilm-Header")}>N???I DUNG PHIM</h3>
              <p className={cx("ContentFilm-Body")}>{film.movieContent}</p>
              <div className={cx("ContentFilm-Footer")}>
                <p>
                  Phim m???i <strong>{film.movieName}</strong> ra m???t t???i c??c r???p
                  chi???u phim t??? {film.moviePremiere}
                </p>
              </div>
            </div>
            <div className={cx("ScheduleFilm")}>
              <h3 className={cx("ScheduleFilm-Header")}>L???CH CHI???U</h3>
              <div className={cx("ScheduleFilm-Body")}>
                <select className={cx("Body-input")}>
                  <option disabled="C??? n?????c" placeholder="C??? n?????c">
                    {" "}
                    C??? n?????c
                  </option>
                  <option>C?? mau</option>
                  <option>Kon Tum</option>
                  <option>Thanh Ho??</option>
                  <option>H?? N???i</option>
                  <option>TP H??? Ch?? Minh</option>
                </select>

                <a className={cx("Body-input")}>
                  <input
                    className={cx("inputBT")}
                    type={"Text"}
                    placeholder={"25/11/2022"}
                  ></input>
                  <span className={cx("inputIcon")}>
                    <i class="far fa-calendar-alt"></i>
                  </span>
                </a>
                <select className={cx("Body-input")}>
                  <option disabled="T???t c??? c??c r???p">T???t c??? c??c r???p</option>
                  <option>Linh Trung</option>
                  <option>Quang Trung</option>
                  <option>Nguy???n Du</option>
                </select>
              </div>
              <div className={cx("Shedule-Footer")}>
                <div className={cx("Footer-Element")}>
                  <div className={cx("Footer-header")}>
                    <h5>Cinema Nguy???n Du</h5>
                  </div>
                  <div className={cx("Footer-body")}>
                    <div className={cx("body-detai")}>
                      <label>2D Ph??? ?????</label>
                      <div className={cx("body-button")}>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx("Footer-Element")}>
                  <div className={cx("Footer-header")}>
                    <h5>Cinema Long Xuy??n</h5>
                  </div>
                  <div className={cx("Footer-body")}>
                    <div className={cx("body-detai")}>
                      <label>2D Ph??? ?????</label>
                      <div className={cx("body-button")}>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx("Footer-Element")}>
                  <div className={cx("Footer-header")}>
                    <h5>Cinema Nguy???n V??n Qu??</h5>
                  </div>
                  <div className={cx("Footer-body")}>
                    <div className={cx("body-detai")}>
                      <label>2D Ph??? ?????</label>
                      <div className={cx("body-button")}>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx("Footer-Element")}>
                  <div className={cx("Footer-header")}>
                    <h5>Cinema Quang Trung</h5>
                  </div>
                  <div className={cx("Footer-body")}>
                    <div className={cx("body-detai")}>
                      <label>2D Ph??? ?????</label>
                      <div className={cx("body-button")}>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                        <button>17:45</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-4")}>
          <div className={cx("get-promotion")}>
            <h3>Nh???n khuy???n m??i</h3>
            <div className={cx("box-promotion")}>
              <input placeholder="Email" type="email"></input>
              <button> ????ng k??</button>
            </div>
          </div>
          <div className={cx("film-sidebar")}>
            <h3>Phim ??ang chi???u</h3>
            <div className={cx("film-group")}>
              <div className={cx("film-item")}>
                <div className={cx("film-articles")}>
                  <img
                    className={cx("film-img")}
                    src={
                      "https://cdn.galaxycine.vn/media/2022/11/21/450x300_1668999445553.jpg"
                    }
                  ></img>
                  <div className={cx("overlay-buy-ticket")}>
                    <div className={cx("film-content")}>
                      <h4>C13</h4>
                      <a className={cx("btn-overlay-buy-ticket")}>Mua v??</a>
                    </div>
                  </div>
                </div>
                <div className={cx("film-name")}>
                  <h4 className={cx("en-film-name")}>One Piece Film Red</h4>
                  <h4 className={cx("vn-film-name")}></h4>
                </div>
              </div>
              <div className={cx("film-item")}>
                <div className={cx("film-articles")}>
                  <img
                    className={cx("film-img")}
                    src={
                      "https://cdn.galaxycine.vn/media/2022/11/10/1350x900_1668066505776.jpg"
                    }
                  ></img>
                  <div className={cx("overlay-buy-ticket")}>
                    <div className={cx("film-content")}>
                      <h4>C13</h4>
                      <a className={cx("btn-overlay-buy-ticket")}>Mua v??</a>
                    </div>
                  </div>
                </div>
                <div className={cx("film-name")}>
                  <h4 className={cx("en-film-name")}>
                    BLACK PANTHER: WAKANDA FOREVER
                  </h4>
                  <h4 className={cx("vn-film-name")}>
                    CHI???N BINH B??O ??EN: WAKANDA B???T DI???T
                  </h4>
                </div>
              </div>
              <div className={cx("film-item")}>
                <div className={cx("film-articles")}>
                  <img
                    className={cx("film-img")}
                    src={
                      "https://cdn.galaxycine.vn/media/2022/10/12/hpm_1665546195092.jpg"
                    }
                  ></img>
                  <div className={cx("overlay-buy-ticket")}>
                    <div className={cx("film-content")}>
                      <h4>C13</h4>
                      <a className={cx("btn-overlay-buy-ticket")}>Mua v??</a>
                    </div>
                  </div>
                </div>
                <div className={cx("film-name")}>
                  <h4 className={cx("en-film-name")}>H???nh ph??c m??u</h4>
                  <h4 className={cx("vn-film-name")}></h4>
                </div>
              </div>
            </div>
            <div className={cx("see-more")}>
              <a>Xem th??m</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFilm;
