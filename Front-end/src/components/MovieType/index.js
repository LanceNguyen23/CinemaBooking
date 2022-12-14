import styles from "./MovieType.module.scss";
import classNames from "classnames/bind";
import MovieSidebar from "../MovieSidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const cx = classNames.bind(styles);

const MovieType = () => {
  const navigate = useNavigate();
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
  console.log(films);
  const imgArray = [
    "https://cdn.galaxycine.vn/media/2022/11/21/450x30_1669022498111.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/14/1350wx900h_1668416515476.jpg",
    "https://cdn.galaxycine.vn/media/2022/10/12/hpm_1665546195092.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/21/450x300_1668999445553.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/19/nct-dream-5_1668837286104.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/22/sadako-1_1669108944338.jpg",
    "https://toquoc.mediacdn.vn/thumb_w/640/280518851207290880/2022/11/10/black-panther-poster-6044-1668045437449-1668045438068288631343.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/24/dai-ca-miet-vuon-450x300_1669278996256.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/16/anne-co-gai-muon-mat-2_1668590403245.jpg",
    "https://cdn.galaxycine.vn/media/2022/10/31/1200wx1800h_1667186935778.jpg",
    "https://cdn.galaxycine.vn/media/2022/11/1/1200x1800_1667275197172.jpg",
    "https://cdn.galaxycine.vn/media/2022/6/17/300x450_1655470357035.jpg",
    "https://cdn.galaxycine.vn/media/2019/3/4/chi-muoi-ba-poster_1551695370477.png",
  ];
  return (
    <div className={cx("wrapper")}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className={cx("row")}>
        <div className={cx("col-8")}>
          <div className={cx("filter")}>
            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Th??? lo???i</option>
                <option>Cao b???i</option>
                <option>Chi???n tranh</option>
                <option>Gia ????nh</option>
                <option>Gi??? t?????ng</option>
                <option>Gi???t g??n</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Qu???c gia</option>
                <option>Anh</option>
                <option>M???</option>
                <option>H??n Qu???c</option>
                <option>Vi???t Nam</option>
                <option>Nh???t B???n</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>N??m</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>??ang chi???u / S???p chi???u</option>
                <option>??ang chi???u</option>
                <option>S???p chi???u</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>M???i nh???t</option>
                <option>Xem nhi???u nh???t</option>
                <option>????nh gi?? t???t nh???t</option>
              </select>
            </div>
          </div>

          <div className={cx("content-text")}>
            <h3>PHIM ??I???N ???NH</h3>
          </div>

          <div className={cx("list-film")}>
            {films.map((film, index) => {
              if (index < 8) {
                return (
                  <div key={film.movieId} className={cx("film-item")}>
                    <a
                      className={cx("film-img-link")}
                      onClick={() => {
                        navigate("/detailfilm/" + film.movieId);
                      }}
                    >
                      <img
                        className={cx("film-img")}
                        src={imgArray[index]}
                      ></img>
                      <div className={cx("has-overlay")}></div>
                    </a>
                    <div className={cx("film-info")}>
                      <a
                        className={cx("film-name")}
                        onClick={() => {
                          navigate("/detailfilm/" + film.movieId);
                        }}
                      >
                        <h3>{film.movieName}</h3>
                      </a>
                      <div className={cx("film-rate")}>
                        <div className={cx("film-like")}>
                          <i className={cx("fa-solid fa-thumbs-up")}></i>
                          <span>Th??ch 0</span>
                        </div>
                        <div className={cx("film-view")}>
                          <i className={cx("fa-solid fa-eye")}></i>
                          <span>29</span>
                        </div>
                      </div>
                      <div className={cx("film-description")}>
                        {film.movieContent}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div className={cx("row")}>
            <div className={cx("col-12")}>
              <ul className={cx("pagination", "pull-right")}>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>??</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>???</a>
                </li>
                <li className={cx("pagination-item", "active")}>
                  <a className={cx("pagination-item__link")}>1</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>2</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>3</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>4</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>5</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>???</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>??</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("col-4")}>{<MovieSidebar></MovieSidebar>}</div>
      </div>
      <div className={cx("row")}>
        <div className={cx("col-12")}>
          <h3 className={cx("cinema-name")}>Galaxy Cinema</h3>
          <div className={cx("cinema-introduce")}>
            <p>
              B???n l?? m???t ng?????i m?? phim, b???n th??ch kh??m ph?? b?? m???t ph??a sau h???u
              tr?????ng c???a c??c bom t???n, b???n th???n t?????ng nh?? l??m phim n??o ?????y b???i t??
              duy v?????t th???i ?????i, phong c??ch quay phim ?????c bi???t v?? nh???ng c??u
              chuy???n ?????y m???i l???, b???n ng?????ng m??? m???t ng??i sao b???i kh??? n??ng di???n
              xu???t c???c ?????nh??? Th???m ch?? n???u b???n mu???n t??m hi???u s??u h??n v??? ??i???n ???nh,
              c??c tr??o l??u ch??? ngh??a t???ng t???o ti???ng vang trong l???ch s???, s??? ra
              ?????i c???a c??c th??? lo???i v?? b???n s???c ri??ng c???a t???ng n???n ??i???n ???nh ?????n t???
              c??c qu???c gia kh??c nhau.
            </p>
            <p>
              Ch??o m???ng ?????n chuy??n trang ??i???n ???nh, n??i ???????c xem nh?? m???t th?? vi???n
              v???i ?????y ????? c??c th??ng tin v??? nh???ng b??? phim, ?????o di???n, di???n vi??n
              d??nh cho ng?????i y??u phim. T???i ????y b???n d??? d??ng t??m hi???u ???????c ti???u s???
              c???a v??? ?????o di???n y??u th??ch, c?? ???????c th??ng tin b??n l??? c???a c??c b???
              phim hay ??ang chi???u t???i r???p. Ngo??i ra n???u ??am m?? nh???ng t??c ph???m
              kinh ??i???n trong qu?? kh???, v???n c?? nh???ng b??i b??nh lu???n v???i h???ng m???c
              Phim Kinh ??i???n
            </p>
            <p>
              ?????i v???i nh???ng ai c?? h???ng th?? t??m hi???u ?????i t?? c???a c??c minh tinh
              h???ng A, <span style={{ fontWeight: "600" }}>Galaxy Cinema</span>{" "}
              c??ng lu??n c???p nh???t c??c tin t???c n??ng h???i t??? h???. B??n c???nh ???? c??n bao
              g???m c??c b??i ph??n t??ch mang t??nh chuy??n m??n, c??c ch??? ????? gi??p n??ng
              cao ki???n th???c ??i???n ???nh c??ng ???????c gi???i thi???u qua lo???t b??i K?? S???
              ??i???n ???nh.
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Galaxy Cinema</span> ??? r???p
              chi???u ???????c trang b??? h??? th???ng ??m thanh v?? h??nh ???nh h??ng ?????u Vi???t
              Nam, t??? h??o l?? Tr???m ??i???n ???nh s???n s??ng ????a b???n v??o th??? gi???i Phim
              Nh?? S???ng ??? S???ng Nh?? Phim, c??ng nh???ng chuy???n t??u v???i tr???i nghi???m
              th?? v??? tuy???t v???i nh???t tr??n m??n ???nh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieType;
