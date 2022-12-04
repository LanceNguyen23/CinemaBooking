import styles from "./MovieSidebar.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const MovieSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("quick-buy-ticket")}>
        <div className={cx("text-buy-ticket")}>MUA VÉ NHANH</div>
        <div className={cx("select-ticket")}>
          <select>
            <option>Chọn phim</option>
          </select>
          <select>
            <option>Chọn rạp</option>
          </select>
          <select>
            <option>Chọn ngày</option>
          </select>
          <select>
            <option>Chọn suất</option>
          </select>
          <a className={cx("btn-buy-ticket")}>Mua vé</a>
        </div>
      </div>
      <div className={cx("film-sidebar")}>
        <h3>Phim đang chiếu</h3>
        <div className={cx("film-group")}>
          <div className={cx("film-item")}>
            <div
              className={cx("film-articles")}
              onClick={() => {
                navigate("/detailfilmpage");
              }}
            >
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
            <div
              className={cx("film-articles")}
              onClick={() => {
                navigate("/detailfilmpage");
              }}
            >
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
            <div
              className={cx("film-name")}
              onClick={() => {
                navigate("/detailfilmpage");
              }}
            >
              <h4 className={cx("en-film-name")}>
                BLACK PANTHER: WAKANDA FOREVER
              </h4>
              <h4 className={cx("vn-film-name")}>
                CHIẾN BINH BÁO ĐEN: WAKANDA BẤT DIỆT
              </h4>
            </div>
          </div>
          <div className={cx("film-item")}>
            <div
              className={cx("film-articles")}
              onClick={() => {
                navigate("/detailfilmpage");
              }}
            >
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
  );
};

export default MovieSidebar;
