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
                <a href="#">Trang chủ</a>
                <i class="fas fa-chevron-right"></i>
              </li>
              <li className={cx("HederDetail-Item")}>
                <a href="#">Đặt vé</a>
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
                    <button>Đánh giá</button>
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
                      <i class="fas fa-thumbs-up"></i> Thích 53
                    </button>
                    <button className={cx("LSButton")}>Share</button>
                  </div>
                </div>
                <div className={cx("Layout-DetailFilm")}>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>Diễn viên:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieActor}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>Thể loại:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieContent}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>Đạo diễn:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieDirector}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>Quốc gia:</span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.movieCountry}
                    </span>
                  </div>
                  <div className={cx("DetailFilmDT")}>
                    <span className={cx("DetailFilmDT-label")}>
                      Ngày khởi chiếu:
                    </span>
                    <span className={cx("DetailFilmDT-Name")}>
                      {film.moviePremiere}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("ContentFilm")}>
              <h3 className={cx("ContentFilm-Header")}>NỘI DUNG PHIM</h3>
              <p className={cx("ContentFilm-Body")}>{film.movieContent}</p>
              <div className={cx("ContentFilm-Footer")}>
                <p>
                  Phim mới <strong>{film.movieName}</strong> ra mắt tại các rạp
                  chiếu phim từ {film.moviePremiere}
                </p>
              </div>
            </div>
            <div className={cx("ScheduleFilm")}>
              <h3 className={cx("ScheduleFilm-Header")}>LỊCH CHIẾU</h3>
              <div className={cx("ScheduleFilm-Body")}>
                <select className={cx("Body-input")}>
                  <option disabled="Cả nước" placeholder="Cả nước">
                    {" "}
                    Cả nước
                  </option>
                  <option>Cà mau</option>
                  <option>Kon Tum</option>
                  <option>Thanh Hoá</option>
                  <option>Hà Nội</option>
                  <option>TP Hồ Chí Minh</option>
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
                  <option disabled="Tất cả các rạp">Tất cả các rạp</option>
                  <option>Linh Trung</option>
                  <option>Quang Trung</option>
                  <option>Nguyễn Du</option>
                </select>
              </div>
              <div className={cx("Shedule-Footer")}>
                <div className={cx("Footer-Element")}>
                  <div className={cx("Footer-header")}>
                    <h5>Cinema Nguyễn Du</h5>
                  </div>
                  <div className={cx("Footer-body")}>
                    <div className={cx("body-detai")}>
                      <label>2D Phụ đề</label>
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
                    <h5>Cinema Long Xuyên</h5>
                  </div>
                  <div className={cx("Footer-body")}>
                    <div className={cx("body-detai")}>
                      <label>2D Phụ đề</label>
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
                    <h5>Cinema Nguyễn Văn Quá</h5>
                  </div>
                  <div className={cx("Footer-body")}>
                    <div className={cx("body-detai")}>
                      <label>2D Phụ đề</label>
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
                      <label>2D Phụ đề</label>
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
            <h3>Nhận khuyến mãi</h3>
            <div className={cx("box-promotion")}>
              <input placeholder="Email" type="email"></input>
              <button> đăng ký</button>
            </div>
          </div>
          <div className={cx("film-sidebar")}>
            <h3>Phim đang chiếu</h3>
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
                      <a className={cx("btn-overlay-buy-ticket")}>Mua vé</a>
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
                      <a className={cx("btn-overlay-buy-ticket")}>Mua vé</a>
                    </div>
                  </div>
                </div>
                <div className={cx("film-name")}>
                  <h4 className={cx("en-film-name")}>
                    BLACK PANTHER: WAKANDA FOREVER
                  </h4>
                  <h4 className={cx("vn-film-name")}>
                    CHIẾN BINH BÁO ĐEN: WAKANDA BẤT DIỆT
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
                      <a className={cx("btn-overlay-buy-ticket")}>Mua vé</a>
                    </div>
                  </div>
                </div>
                <div className={cx("film-name")}>
                  <h4 className={cx("en-film-name")}>Hạnh phúc máu</h4>
                  <h4 className={cx("vn-film-name")}></h4>
                </div>
              </div>
            </div>
            <div className={cx("see-more")}>
              <a>Xem thêm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFilm;
