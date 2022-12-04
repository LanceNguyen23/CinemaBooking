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
                <option>Thể loại</option>
                <option>Cao bồi</option>
                <option>Chiến tranh</option>
                <option>Gia đình</option>
                <option>Giả tưởng</option>
                <option>Giật gân</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Quốc gia</option>
                <option>Anh</option>
                <option>Mỹ</option>
                <option>Hàn Quốc</option>
                <option>Việt Nam</option>
                <option>Nhật Bản</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Năm</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Đang chiếu / Sắp chiếu</option>
                <option>Đang chiếu</option>
                <option>Sắp chiếu</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Mới nhất</option>
                <option>Xem nhiều nhất</option>
                <option>Đánh giá tốt nhất</option>
              </select>
            </div>
          </div>

          <div className={cx("content-text")}>
            <h3>PHIM ĐIỆN ẢNH</h3>
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
                          <span>Thích 0</span>
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
                  <a className={cx("pagination-item__link")}>«</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>‹</a>
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
                  <a className={cx("pagination-item__link")}>›</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>»</a>
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
              Bạn là một người mê phim, bạn thích khám phá bí mật phía sau hậu
              trường của các bom tấn, bạn thần tượng nhà làm phim nào đấy bởi tư
              duy vượt thời đại, phong cách quay phim đặc biệt và những câu
              chuyện đầy mới lạ, bạn ngưỡng mộ một ngôi sao bởi khả năng diễn
              xuất cực đỉnh… Thậm chí nếu bạn muốn tìm hiểu sâu hơn về điện ảnh,
              các trào lưu chủ nghĩa từng tạo tiếng vang trong lịch sử, sự ra
              đời của các thể loại và bản sắc riêng của từng nền điện ảnh đến từ
              các quốc gia khác nhau.
            </p>
            <p>
              Chào mừng đến chuyên trang điện ảnh, nơi được xem như một thư viện
              với đầy đủ các thông tin về những bộ phim, đạo diễn, diễn viên
              dành cho người yêu phim. Tại đây bạn dễ dàng tìm hiểu được tiểu sử
              của vị đạo diễn yêu thích, có được thông tin bên lề của các bộ
              phim hay đang chiếu tại rạp. Ngoài ra nếu đam mê những tác phẩm
              kinh điển trong quá khứ, vẫn có những bài bình luận với hạng mục
              Phim Kinh Điển
            </p>
            <p>
              Đối với những ai có hứng thú tìm hiểu đời tư của các minh tinh
              hạng A, <span style={{ fontWeight: "600" }}>Galaxy Cinema</span>{" "}
              cũng luôn cập nhật các tin tức nóng hổi từ họ. Bên cạnh đó còn bao
              gồm các bài phân tích mang tính chuyên môn, các chủ đề giúp nâng
              cao kiến thức điện ảnh cũng được giới thiệu qua loạt bài Ký Sự
              Điện Ảnh.
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Galaxy Cinema</span> – rạp
              chiếu được trang bị hệ thống âm thanh và hình ảnh hàng đầu Việt
              Nam, tự hào là Trạm Điện Ảnh sẵn sàng đưa bạn vào thế giới Phim
              Như Sống – Sống Như Phim, cùng những chuyến tàu với trải nghiệm
              thú vị tuyệt vời nhất trên màn ảnh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieType;
